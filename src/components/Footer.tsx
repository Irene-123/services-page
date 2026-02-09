import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-12 bg-foreground text-primary-foreground/60">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-heading font-bold text-primary-foreground text-lg">
        Kirti<span className="text-primary">.</span>dev
      </p>
      <div className="flex items-center gap-4">
        <a href="https://github.com/Irene-123" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          <Github className="h-5 w-5" />
        </a>
        <a href="https://www.linkedin.com/in/kirtidineshpurohit/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href="mailto:kirtipurohit050@gmail.com" className="hover:text-primary transition-colors">
          <Mail className="h-5 w-5" />
        </a>
      </div>
      <p className="text-sm">© {new Date().getFullYear()} Kirti Purohit. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
