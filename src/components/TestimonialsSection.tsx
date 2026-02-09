import { Award, Trophy, Code } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const achievements = [
  {
    icon: Trophy,
    title: "WorldQuant Bronze Medal",
    description: "55th global ranker for trading strategy formula development",
    year: "2023",
  },
  {
    icon: Code,
    title: "GATE AIR 3343",
    description: "Top 3.4% among 100,000+ candidates in Graduate Aptitude Test",
    year: "2022",
  },
  {
    icon: Award,
    title: "EthIndia Hackathon",
    description: "Represented university competing against 20+ teams nationally",
    year: "2022",
  },
  {
    icon: Code,
    title: "CodeChef Rating 1887",
    description: "Global ranks of 678 and 245 in competitive programming",
    year: "2020-22",
  },
];

const experience = [
  {
    company: "Quantum Corporation",
    role: "Software Developer",
    period: "Dec 2024 - Present",
    highlights: [
      "Advanced RAG architecture with custom embeddings",
      "MCP Server & N8N integrations for automated workflows",
      "Reduced manual code review effort by 40%",
    ],
  },
  {
    company: "Hewlett Packard Enterprise",
    role: "Software Engineer",
    period: "July 2023 - Jan 2025",
    highlights: [
      "Improved SLA from 60 to 85 with automated ticketing",
      "Scaled APIs to handle 500K+ units in 10 minutes",
      "Cut triage time by 70% with intelligent routing",
    ],
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary/50">
      <div className="container">
        {/* Experience Section */}
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <p className="text-primary font-heading font-semibold mb-3 text-sm tracking-widest uppercase">
              Experience
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Where I've
              <br />
              made impact.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {experience.map((exp, i) => (
            <ScrollReveal key={exp.company} delay={i * 0.15}>
              <div className="relative rounded-xl border border-border bg-card p-8 shadow-card h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-card-foreground">
                      {exp.company}
                    </h3>
                    <p className="text-primary font-medium">{exp.role}</p>
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, j) => (
                    <li
                      key={j}
                      className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Achievements Section */}
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <p className="text-primary font-heading font-semibold mb-3 text-sm tracking-widest uppercase">
              Achievements
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Recognition &
              <br />
              milestones.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, i) => (
            <ScrollReveal key={achievement.title} delay={i * 0.1}>
              <div className="relative rounded-xl border border-border bg-card p-6 shadow-card text-center h-full">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                  <achievement.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-card-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {achievement.description}
                </p>
                <span className="text-xs font-medium text-primary">
                  {achievement.year}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
