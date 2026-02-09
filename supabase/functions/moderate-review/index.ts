import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Common bad words and abuse patterns (expandable list)
const badWordsPatterns = [
  /\b(fuck|shit|ass|damn|bitch|bastard|crap|dick|cock|pussy|cunt|whore|slut)\b/gi,
  /\b(idiot|stupid|dumb|retard|moron|loser)\b/gi,
  /\b(hate|kill|die|murder|threat)\b/gi,
  /\b(spam|scam|fake|fraud)\b/gi,
  // Leetspeak variations
  /\b(f+u+c+k+|sh+[i1]+t+|b+[i1]+t+ch+)\b/gi,
];

function containsBadWords(text: string): { hasBadWords: boolean; flaggedWords: string[] } {
  const flaggedWords: string[] = [];
  const lowerText = text.toLowerCase();

  for (const pattern of badWordsPatterns) {
    const matches = lowerText.match(pattern);
    if (matches) {
      flaggedWords.push(...matches);
    }
  }

  return {
    hasBadWords: flaggedWords.length > 0,
    flaggedWords: [...new Set(flaggedWords)],
  };
}

function validateReview(review: {
  name: string;
  content: string;
  role?: string;
  company?: string;
  rating?: number;
}): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Name validation
  if (!review.name || review.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters");
  }
  if (review.name && review.name.length > 100) {
    errors.push("Name must be less than 100 characters");
  }

  // Content validation
  if (!review.content || review.content.trim().length < 10) {
    errors.push("Review must be at least 10 characters");
  }
  if (review.content && review.content.length > 500) {
    errors.push("Review must be less than 500 characters");
  }

  // Rating validation
  if (review.rating !== undefined && (review.rating < 1 || review.rating > 5)) {
    errors.push("Rating must be between 1 and 5");
  }

  // Check for bad words in all text fields
  const textsToCheck = [review.name, review.content, review.role, review.company].filter(Boolean);
  for (const text of textsToCheck) {
    const { hasBadWords, flaggedWords } = containsBadWords(text || "");
    if (hasBadWords) {
      errors.push(`Inappropriate language detected. Please keep your review professional.`);
      console.log("Flagged words:", flaggedWords);
      break;
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const body = await req.json();
    const { name, content, role, company, rating } = body;

    console.log("Received review submission:", { name, content: content?.substring(0, 50), role, company, rating });

    // Validate the review
    const validation = validateReview({ name, content, role, company, rating });

    if (!validation.isValid) {
      console.log("Validation failed:", validation.errors);
      return new Response(
        JSON.stringify({
          success: false,
          errors: validation.errors,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Insert the review - auto-approve if it passes moderation
    const { data, error } = await supabase.from("reviews").insert({
      name: name.trim(),
      content: content.trim(),
      role: role?.trim() || null,
      company: company?.trim() || null,
      rating: rating || 5,
      is_approved: true, // Auto-approve since it passed moderation
    }).select().single();

    if (error) {
      console.error("Database error:", error);
      throw error;
    }

    console.log("Review inserted successfully:", data.id);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your review! It's now live.",
        review: data,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing review:", error);
    return new Response(
      JSON.stringify({
        success: false,
        errors: ["Something went wrong. Please try again."],
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
