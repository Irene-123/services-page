import heroBg from "@/assets/hero-bg.jpg";
import kirtiImg from "@/assets/kirti-profile.jpg";
import { ArrowRight, Github, Linkedin, Mail, Terminal, Cpu, Code2, Braces } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const techTags = ["Python", "React", "LangChain", "FastAPI", "AWS", "RAG", "Node.js", "ML"];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Terminal className="absolute top-[15%] right-[10%] h-8 w-8 text-primary/15 animate-pulse" />
        <Cpu className="absolute top-[35%] right-[25%] h-6 w-6 text-primary/10 animate-pulse" style={{ animationDelay: "1s" }} />
        <Code2 className="absolute bottom-[30%] right-[15%] h-10 w-10 text-primary/10 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <Braces className="absolute top-[60%] right-[35%] h-7 w-7 text-primary/10 animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container relative z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary animate-fade-in">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for new projects
            </div>

            <div className="space-y-3">
              <p
                className="font-mono text-sm text-primary opacity-0 animate-fade-up tracking-wider"
                style={{ animationDelay: "0.05s" }}
              >
                {">"} console.log("Hello, World! 👋")
              </p>

              <h1
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight opacity-0 animate-fade-up leading-[1.1]"
                style={{ animationDelay: "0.1s", color: "hsl(0 0% 98%)" }}
              >
                I use AI to build AI.
                <br />
                <span className="text-gradient text-3xl sm:text-4xl lg:text-5xl">
                  Before AI takes my job too.
                </span>
              </h1>

              <p
                className="font-mono text-xs text-muted-foreground opacity-0 animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                // seriously though, hire me before the robots do it for free
              </p>
            </div>

            <p
              className="text-base sm:text-lg max-w-xl leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "0.25s", color: "hsl(0 0% 85%)" }}
            >
              Software engineer who builds AI/ML systems, full-stack apps, and 
              everything in between. From storage firmware to LangChain agents—if 
              it runs on code, I probably ship it.
            </p>

            {/* Tech tags */}
            <div
              className="flex flex-wrap gap-2 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-mono border border-primary/20 text-primary/80 bg-primary/5"
                >
                  {tag}
                </span>
              ))}
            </div>

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
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Browse Services
              </Button>
            </div>

            <div
              className="flex items-center gap-4 pt-2 opacity-0 animate-fade-up"
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

          {/* Right - Profile photo */}
          <div
            className="relative opacity-0 animate-fade-up flex-shrink-0"
            style={{ animationDelay: "0.3s" }}
          >
            <motion.div
              className="relative w-80 h-80 sm:w-[22rem] sm:h-[22rem] lg:w-[28rem] lg:h-[28rem]"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Animated spinning glow ring */}
              <motion.div
                className="absolute -inset-3 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, hsl(160 84% 39%), hsl(36 100% 50%), hsl(160 84% 39%), transparent)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute -inset-3 rounded-full bg-foreground/60 backdrop-blur-sm" />
              <motion.div
                className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-md"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <img
                src={kirtiImg}
                alt="Kirti - Software Engineer"
                className="relative w-full h-full rounded-full object-cover object-top border-2 border-primary/30 z-10"
              />
              {/* Terminal badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-4 py-1.5 flex items-center gap-2 shadow-card z-20">
                <Terminal className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-mono text-card-foreground whitespace-nowrap">
                  kirti.dev
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
