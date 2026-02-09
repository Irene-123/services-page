import { ExternalLink, Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "AI-Powered Code Review System",
    description:
      "Built an AI-powered PR review system using RAG + DeepSeek LLM, automating repository indexing and commit analysis. Reduced manual review effort by 40%.",
    tags: ["Python", "LangChain", "Milvus", "RAG"],
    link: "https://www.linkedin.com/in/kirtidineshpurohit/",
    github: "https://github.com/Irene-123",
    company: "Quantum Corporation",
  },
  {
    title: "Code RAG Pipeline",
    description:
      "Implemented advanced RAG architecture with custom fine-tuned embeddings using sentence transformers for Git Repo Vector Indexing System. Correlates git revision history with code changes.",
    tags: ["Sentence Transformers", "VectorDB", "Git", "Python"],
    link: "https://www.linkedin.com/in/kirtidineshpurohit/",
    github: "https://github.com/Irene-123",
    company: "Quantum Corporation",
  },
  {
    title: "Incident Ticketing System",
    description:
      "Automated incident ticketing tool that improved SLA from 60 to 85. Optimized APIs with DynamoDB, achieving scalability to handle 500,000+ units in 10 minutes.",
    tags: ["DynamoDB", "Kafka", "Python", "AWS"],
    link: "https://www.linkedin.com/in/kirtidineshpurohit/",
    github: "https://github.com/Irene-123",
    company: "HPE",
  },
  {
    title: "My MCP Server: Talk to Your PC",
    description:
      "Conversational agent using LangChain, Azure AI, and speech recognition. Responds to user input about PC settings, diagnoses errors, and executes commands.",
    tags: ["Python", "LangChain", "Azure AI", "MCP"],
    link: "https://medium.com/@kirtipurohit025",
    github: "https://github.com/Irene-123",
    company: "Open Source",
  },
  {
    title: "ChatGPT Desktop Integration",
    description:
      "Contributed to the open-source ChatGPT desktop application. Integrated Dall-E2 model for image generation within ChatGPT wrapper.",
    tags: ["Rust", "Tauri", "OpenAI", "System Integration"],
    link: "https://medium.com/@kirtipurohit025",
    github: "https://github.com/Irene-123",
    company: "Open Source",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container">
        <ScrollReveal>
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
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <div className="group relative rounded-xl border border-border bg-card p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full">
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
                  <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-primary/10 text-primary">
                    {project.company}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
