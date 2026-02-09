import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Server, 
  Rocket, 
  HardDrive, 
  Palette, 
  MessageSquare,
  GraduationCap,
  Headphones,
  ArrowRight,
  Clock,
  ExternalLink
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    price: "₹1,100",
    unit: "/hr",
    description: "RAG systems, LLM integrations, intelligent automation, and AI-powered solutions.",
    tags: ["LangChain", "RAG", "LLMs", "Embeddings"],
    popular: true,
  },
  {
    icon: Server,
    title: "Backend Development",
    price: "₹1,000",
    unit: "/hr",
    description: "Scalable APIs, microservices, database design, and robust backend architectures.",
    tags: ["Python", "FastAPI", "Node.js", "PostgreSQL"],
  },
  {
    icon: Rocket,
    title: "E2E Production Software",
    price: "₹15,000",
    unit: " onwards",
    description: "From concept to deployment—full-stack applications built for real-world use.",
    tags: ["Full-Stack", "DevOps", "CI/CD", "Cloud"],
    isFixed: true,
  },
  {
    icon: HardDrive,
    title: "Storage & Infrastructure",
    price: "₹1,300",
    unit: "/hr",
    description: "Enterprise storage solutions, firmware optimization, and infrastructure consulting.",
    tags: ["AWS", "GCP", "Firmware", "Networking"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    price: "₹850",
    unit: "/hr",
    description: "Clean, intuitive interfaces that users actually want to use. Design systems that scale.",
    tags: ["Figma", "React", "Tailwind", "Responsive"],
  },
  {
    icon: MessageSquare,
    title: "Software Consulting",
    price: "₹950",
    unit: "/hr",
    description: "Technical audits, architecture reviews, and strategic technology guidance.",
    tags: ["Architecture", "Code Review", "Strategy"],
  },
  {
    icon: GraduationCap,
    title: "Teaching & Mentorship",
    price: "₹800",
    unit: "/hr",
    description: "Personalized, project-driven lessons in Python, ML, AI, backend, and more.",
    tags: ["Python", "ML", "AI", "Backend", "Web Dev"],
    link: "https://www.superprof.co.in/become-skilled-software-engineer-learn-build-web-apps-python-and-get-personalized-and-project-driven-lessons.html",
  },
  {
    icon: Headphones,
    title: "Consultation Call",
    price: "₹600",
    unit: "/hr onwards",
    description: "Not sure what you need? Let's talk through your problem and figure out the best path forward.",
    tags: ["Discovery", "Planning", "Strategy"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-4">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Services
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-foreground">
              What I Can Build For You
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Transparent pricing. No hidden fees. Pick a service and let's get started.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-12">
            <Clock className="h-4 w-4" />
            <span>All hourly rates are per hour of focused work. Bulk discounts available.</span>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={0.05 * index}>
              <div className={`relative rounded-2xl border bg-card p-6 h-full flex flex-col transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 group ${
                service.popular 
                  ? "border-primary shadow-[0_0_24px_-6px_hsl(var(--primary)/0.2)]" 
                  : "border-border/60 hover:border-primary/40"
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                    Popular
                  </div>
                )}

                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>

                <h3 className="font-heading font-bold text-lg text-card-foreground mb-1">
                  {service.title}
                </h3>

                <div className="mb-3">
                  <span className="font-heading text-2xl font-bold text-foreground">{service.price}</span>
                  <span className="text-muted-foreground text-sm">{service.unit}</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {service.link ? (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-heading font-semibold gap-2 transition-colors"
                    >
                      View on Superprof <ExternalLink className="h-3.5 w-3.5" />
                    </Button>
                  </a>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full mt-auto border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-heading font-semibold gap-2 transition-colors"
                    onClick={() =>
                      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Get Started <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
