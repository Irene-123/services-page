import ScrollReveal from "./ScrollReveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Server, 
  Rocket, 
  HardDrive, 
  Palette, 
  MessageSquare,
  GraduationCap,
  ExternalLink
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "RAG systems, LLM integrations, intelligent automation, and AI-powered solutions tailored to your business needs.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Scalable APIs, microservices, database design, and robust backend architectures that grow with your business.",
  },
  {
    icon: Rocket,
    title: "End-to-End Production Software",
    description: "From concept to deployment—full-stack applications built for real-world use, not just demos.",
  },
  {
    icon: HardDrive,
    title: "Storage & Infrastructure",
    description: "Enterprise storage solutions, firmware optimization, and infrastructure consulting from my HPE & Quantum experience.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Clean, intuitive interfaces that users actually want to use. Design systems that scale.",
  },
  {
    icon: MessageSquare,
    title: "Software Consulting",
    description: "Technical audits, architecture reviews, and strategic guidance to help you make the right technology decisions.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              What I Offer
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-foreground">
              Services & Expertise
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Whether you need a complete solution or just someone to help you figure out the right approach, 
              I've got you covered.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={0.1 * index}>
              <Card className="h-full border-border/50 bg-card hover:border-primary/30 transition-colors group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Teaching CTA */}
        <ScrollReveal delay={0.5}>
          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 p-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-foreground">
                    I Also Teach
                  </h3>
                  <p className="text-muted-foreground">
                    Personalized, project-driven lessons in Python, web development, and test automation.
                  </p>
                </div>
              </div>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold gap-2"
              >
                <a
                  href="https://www.superprof.co.in/become-skilled-software-engineer-learn-build-web-apps-python-and-get-personalized-and-project-driven-lessons.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Superprof <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
