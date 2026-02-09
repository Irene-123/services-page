import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, FinTrack",
    content:
      "Transformed our legacy system into a modern, scalable platform in just 3 months. The architecture decisions made early on saved us countless hours down the road.",
    rating: 5,
    project: "FinTrack Pro Dashboard",
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, MediConnect",
    content:
      "Not just a developer — a true technical partner. Helped us navigate HIPAA compliance while building an API that our clients love. Exceeded every expectation.",
    rating: 5,
    project: "MediConnect API Platform",
  },
  {
    name: "Emily Watson",
    role: "VP Engineering, ShopFlow",
    content:
      "The migration to microservices was seamless. Our throughput increased 4x and deployment frequency went from monthly to daily. Incredible work.",
    rating: 5,
    project: "ShopFlow Engine",
  },
  {
    name: "David Kim",
    role: "Lead Data Scientist, Nexus AI",
    content:
      "Built our entire ML pipeline from scratch. What used to take our team 2 weeks to deploy a model now takes less than a day. Game-changer for our velocity.",
    rating: 5,
    project: "DataPipe ML Pipeline",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary/50">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-primary font-heading font-semibold mb-3 text-sm tracking-widest uppercase">
            Client Reviews
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Trusted by teams
            <br />
            that ship fast.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="relative rounded-xl border border-border bg-card p-8 shadow-card"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />

              <p className="text-card-foreground leading-relaxed mb-6">
                "{t.content}"
              </p>

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>

              <div className="border-t border-border pt-4">
                <p className="font-heading font-semibold text-card-foreground">
                  {t.name}
                </p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
                <p className="text-xs text-primary mt-1 font-medium">
                  Project: {t.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
