import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Available for new projects
          </div>

          <h1
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary-foreground opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Hi, I'm Kirti
            <br />
            <span className="text-gradient">AI & Backend Engineer</span>
          </h1>

          <p
            className="text-lg sm:text-xl text-primary-foreground/70 max-w-xl leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            Software Engineer specializing in AI-driven systems, RAG architectures, 
            and scalable backend services. 3+ years building production systems at HPE and Quantum.
          </p>

          <div
            className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold gap-2"
              onClick={() =>
                document
                  .getElementById("booking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book a Call <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-heading"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Work
            </Button>
          </div>

          <div
            className="flex items-center gap-4 pt-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <a
              href="https://github.com/Irene-123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kirtidineshpurohit/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:kirtipurohit050@gmail.com"
              className="text-primary-foreground/50 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
