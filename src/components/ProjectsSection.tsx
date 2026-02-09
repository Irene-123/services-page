import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    title: "FinTrack Pro",
    description:
      "Real-time financial analytics dashboard for a Series B fintech startup. Built with React, Node.js, and PostgreSQL handling 2M+ daily transactions.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    stars: 128,
    link: "#",
    github: "#",
  },
  {
    title: "MediConnect API",
    description:
      "HIPAA-compliant healthcare API platform enabling seamless EHR integrations. Serving 50+ clinics with 99.99% uptime.",
    tags: ["TypeScript", "Express", "MongoDB", "Docker"],
    stars: 89,
    link: "#",
    github: "#",
  },
  {
    title: "ShopFlow Engine",
    description:
      "Headless e-commerce engine powering $12M+ annual GMV. Microservices architecture with real-time inventory sync.",
    tags: ["Go", "gRPC", "Redis", "Kubernetes"],
    stars: 215,
    link: "#",
    github: "#",
  },
  {
    title: "DataPipe ML",
    description:
      "End-to-end ML pipeline orchestrator reducing model deployment time by 70%. Used by 3 enterprise clients.",
    tags: ["Python", "FastAPI", "TensorFlow", "Airflow"],
    stars: 342,
    link: "#",
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-primary font-heading font-semibold mb-3 text-sm tracking-widest uppercase">
            Selected Work
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Projects that
            <br />
            made an impact.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group relative rounded-xl border border-border bg-card p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-xl font-bold text-card-foreground">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={project.link}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                  {project.stars}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
