import catWork1 from "@/assets/catwork1.gif";
import catWork2 from "@/assets/catwork2.gif";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Code2, Zap } from "lucide-react";

const CodingVibesSection = () => {
  return (
    <section className="py-20 bg-foreground relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Zap className="h-3.5 w-3.5" />
              Real talk
            </div>
            <h2
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: "hsl(0 0% 95%)" }}
            >
              Less tutorial hell.
              <br />
              <span className="text-gradient">More shipping code.</span>
            </h2>
            <p
              className="mt-4 max-w-2xl mx-auto text-base sm:text-lg font-mono"
              style={{ color: "hsl(0 0% 65%)" }}
            >
              // I don't just watch courses — I build things that actually work in production
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          {/* Left meme */}
          <ScrollReveal delay={0.1}>
            <motion.div
              className="rounded-2xl overflow-hidden border border-primary/20 bg-card/10 backdrop-blur-sm"
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src={catWork1}
                alt="Cat exhausted from coding"
                className="w-full aspect-video object-cover"
              />
              <div className="px-5 py-4 border-t border-primary/10">
                <div className="flex items-center gap-2 mb-1.5">
                  <Code2 className="h-4 w-4 text-primary" />
                  <span className="text-xs font-mono text-primary">me_irl.js</span>
                </div>
                <p
                  className="text-sm font-medium"
                  style={{ color: "hsl(0 0% 85%)" }}
                >
                  Me after debugging a race condition at 3 AM
                </p>
                <p
                  className="text-xs font-mono mt-1"
                  style={{ color: "hsl(0 0% 50%)" }}
                >
                  // but it shipped. and it works. and that's what matters.
                </p>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Right meme */}
          <ScrollReveal delay={0.2}>
            <motion.div
              className="rounded-2xl overflow-hidden border border-primary/20 bg-card/10 backdrop-blur-sm"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src={catWork2}
                alt="Cat typing furiously"
                className="w-full aspect-video object-cover"
              />
              <div className="px-5 py-4 border-t border-primary/10">
                <div className="flex items-center gap-2 mb-1.5">
                  <Code2 className="h-4 w-4 text-primary" />
                  <span className="text-xs font-mono text-primary">grind.py</span>
                </div>
                <p
                  className="text-sm font-medium"
                  style={{ color: "hsl(0 0% 85%)" }}
                >
                  POV: client said "small change" and I'm rewriting the whole thing
                </p>
                <p
                  className="text-xs font-mono mt-1"
                  style={{ color: "hsl(0 0% 50%)" }}
                >
                  // perfectionist? maybe. does it slap? absolutely.
                </p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Bottom tagline */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <p
              className="font-mono text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "hsl(0 0% 55%)" }}
            >
              {">"} <span className="text-primary">const vibe</span> = "I ship production code, not just prototypes.
              Every project I touch goes live. Every bug I squash stays dead." 💀
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CodingVibesSection;
