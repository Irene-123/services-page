import ScrollReveal from "./ScrollReveal";
import { MapPin, Briefcase, Heart, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              My Journey
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-foreground">
              The Story Behind the Code
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    Where It All Began
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I started in Mumbai, my hometown, where I studied and did internships 
                    building data extraction and mobile tracking systems for government 
                    cybercrime units—helping investigators track persons of interest. It was 
                    intense, meaningful work that taught me how technology can solve real problems.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    Enterprise Experience
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    After college, I moved to Bangalore and spent years in enterprise software 
                    at companies like Quantum and HPE. I built storage firmware, worked on AI 
                    systems, and dove deep into complex technical challenges. Along the way, I 
                    also started teaching test automation—because I genuinely enjoy breaking down 
                    complex concepts into things people can actually understand and use.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    The Wake-Up Call
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    But here's what really stuck with me: everywhere I looked, I saw people 
                    struggling—small business owners buried in manual work, hotel chains unable 
                    to manage employees across branches, people losing money because they didn't 
                    understand their own insurance policies. The problem wasn't that solutions 
                    don't exist; it's that most tech is either too expensive, too complicated, 
                    or just doesn't fit the actual problem.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    Why I Do What I Do
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    So I decided to do something about it. Today, I help people work smarter, 
                    cut out the redundant stuff, and build solutions that actually make sense 
                    for their situation—not because it's trendy, but because{" "}
                    <span className="text-primary font-medium">work shouldn't be this hard.</span>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
