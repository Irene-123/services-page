import ScrollReveal from "./ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do you typically start a new project?",
    answer:
      "I start with a discovery call to understand your problem, goals, and constraints. From there, I put together a clear scope, timeline, and proposal. No fluff—just a straightforward plan we both agree on before any work begins.",
  },
  {
    question: "What's your communication style during a project?",
    answer:
      "I believe in regular, transparent communication. You'll get weekly updates, demos of work-in-progress, and I'm always available for quick questions. I use whatever tools you're comfortable with—Slack, email, or calls.",
  },
  {
    question: "Do you work with startups or only enterprise clients?",
    answer:
      "Both! I've worked at enterprise companies like HPE and Quantum, but I also love helping startups and small businesses. The principles of good software are the same—I just scale the approach to fit your budget and timeline.",
  },
  {
    question: "Can you help if I don't know exactly what I need?",
    answer:
      "Absolutely. Many clients come to me with a problem, not a solution. Part of what I do is help you figure out the right approach before building anything. Sometimes the best solution isn't the most obvious one.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Python, LangChain, FastAPI, React, and cloud platforms (AWS, GCP). For AI work, I focus on RAG architectures, LLM integrations, and intelligent automation. But I'm pragmatic—I use whatever technology best solves your problem.",
  },
  {
    question: "How do you handle project pricing?",
    answer:
      "It depends on the project. For well-defined scopes, I offer fixed-price quotes. For ongoing work or exploratory projects, I work on a weekly or monthly retainer. Either way, there are no surprises—you'll know the costs upfront.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              FAQ
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-foreground">
              Common Questions
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Here are some questions I get asked frequently. Don't see yours? Feel free to reach out!
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
