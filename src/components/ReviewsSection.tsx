import { useState, useEffect } from "react";
import { Star, Quote, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ScrollReveal from "./ScrollReveal";

interface Review {
  id: string;
  name: string;
  role: string | null;
  company: string | null;
  content: string;
  rating: number;
  created_at: string;
}

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    content: "",
    rating: 5,
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching reviews:", error);
      return;
    }

    setReviews(data || []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await supabase.functions.invoke("moderate-review", {
        body: formData,
      });

      if (response.error) {
        throw new Error(response.error.message);
      }

      const result = response.data;

      if (!result.success) {
        toast({
          title: "Review not accepted",
          description: result.errors.join(". "),
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Thank you!",
        description: result.message,
      });

      setFormData({ name: "", role: "", company: "", content: "", rating: 5 });
      setIsOpen(false);
      fetchReviews();
    } catch (error) {
      console.error("Error submitting review:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-primary text-primary" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="text-primary font-heading font-semibold mb-3 text-sm tracking-widest uppercase">
                Reviews
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                What people
                <br />
                are saying.
              </h2>
            </div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Leave a Review
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Share Your Experience</DialogTitle>
                  <DialogDescription>
                    Your review will be visible immediately after submission.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="e.g. Acme Inc"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Review *</Label>
                    <Textarea
                      id="content"
                      placeholder="Share your experience working with me..."
                      value={formData.content}
                      onChange={(e) =>
                        setFormData({ ...formData, content: e.target.value })
                      }
                      required
                      className="min-h-[100px]"
                    />
                    <p className="text-xs text-muted-foreground">
                      {formData.content.length}/500 characters
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label>Rating</Label>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, rating: i + 1 })
                          }
                          className="p-1 transition-transform hover:scale-110"
                        >
                          <Star
                            className={`h-6 w-6 ${
                              i < formData.rating
                                ? "fill-primary text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Review"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </ScrollReveal>

        {reviews.length === 0 ? (
          <ScrollReveal>
            <div className="text-center py-16 rounded-xl border border-dashed border-border">
              <Quote className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                No reviews yet
              </h3>
              <p className="text-muted-foreground mb-4">
                Be the first to share your experience!
              </p>
              <Button variant="outline" onClick={() => setIsOpen(true)}>
                Write a Review
              </Button>
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.id} delay={i * 0.1}>
                <div className="relative rounded-xl border border-border bg-card p-6 shadow-card h-full flex flex-col">
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />

                  <div className="flex gap-1 mb-4">{renderStars(review.rating)}</div>

                  <p className="text-card-foreground flex-1 mb-4 leading-relaxed">
                    "{review.content}"
                  </p>

                  <div className="pt-4 border-t border-border">
                    <p className="font-heading font-semibold text-card-foreground">
                      {review.name}
                    </p>
                    {(review.role || review.company) && (
                      <p className="text-sm text-muted-foreground">
                        {[review.role, review.company].filter(Boolean).join(" at ")}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
