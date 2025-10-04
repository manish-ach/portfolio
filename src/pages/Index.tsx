import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Calendar, ExternalLink } from "lucide-react";
import avatar from "@/assets/profile.png";

const Index = () => {
  const interests = [
    "Systems Programming",
    "Backend Development",
    "Web Infrastructure",
    "Network Programming",
    "High-Performance Computing",
    "WebAssembly",
    "CLI Tools",
    "Open Source",
    "Rust Development",
    "Image Processing",
    "Containerization"
  ];

  const experience = [
    {
      role: "Team Leader",
      organization: "Team Modulens - Innosphere 1.0",
      location: "PU Tech Club, Pokhara",
      period: "June 2025",
      description: [
        "Led technical team developing image-converter project at Innosphere 1.0 tech competition",
        "Coordinated Rust-PHP FFI integration for high-performance image processing",
        "Achieved 85% performance improvement over traditional methods",
        "Secured 3rd place finish, demonstrating strong leadership and technical execution"
      ]
    },
    {
      role: "Team Member",
      organization: "Team Nascent - DeerHack 2025",
      location: "DWIT Software Club, Kathmandu",
      period: "July 11-13, 2025",
      description: [
        "Developed SyncBridge, a seamless mobile-web interaction platform",
        "Focused on frontend-backend integration with real-time sync",
        "Won Interactive Technology category in 48-hour hackathon"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Software Engineering",
      institution: "Pokhara University",
      location: "Pokhara, Kaski",
      period: "Dec 2023 - Jan 2027"
    },
    {
      degree: "High School",
      field: "Science, Computer Science",
      institution: "SOS Hermann Gmeiner School",
      location: "Pokhara, Kaski",
      period: "July 2021 - May 2023"
    }
  ];

  const projects = [
    {
      name: "rust-server",
      description: "Production-ready web server built in Rust using Axum framework. Handles HTTP requests with async runtime, featuring routing, middleware, and request handling.",
      tech: ["Rust", "Axum", "Web Server", "Async"],
      github: "https://github.com/manish-ach/rust-server"
    },
    {
      name: "network-programming",
      description: "Collection of network programming implementations covering TCP/IP, UDP protocols, socket programming, and client-server architectures for learning.",
      tech: ["Java", "Network Programming", "TCP/IP"],
      github: "https://github.com/manish-ach/network-programming"
    },
    {
      name: "todo-dockerized",
      description: "Containerized full-stack todo application with Prisma ORM, PostgreSQL database, Express.js backend, and JWT authentication.",
      tech: ["Docker", "Node.js", "PostgreSQL", "Prisma", "JWT"],
      github: "https://github.com/manish-ach/todo-dockerized"
    },
    {
      name: "image-converter",
      description: "High-performance image format converter using Rust backend integrated with PHP through FFI. Supports JPG, PNG, and WEBP with 85% performance improvement.",
      tech: ["Rust", "PHP", "FFI", "Makefile"],
      github: "https://github.com/manish-ach/image-converter"
    },
    {
      name: "filedrop",
      description: "Real-time file transfer web application enabling secure peer-to-peer file sharing through browser-based WebRTC connections.",
      tech: ["Rust", "WebRTC", "File Transfer"],
      github: "https://github.com/manish-ach/filedrop"
    },
    {
      name: "photo-rs",
      description: "Image processing library in Rust compiled to WebAssembly, providing browser-based image manipulation with high performance.",
      tech: ["Rust", "WASM", "Image Processing"],
      github: "https://github.com/manish-ach/photo-rs"
    },
    {
      name: "m-osh",
      description: "Custom Unix shell implementation from scratch using Rust, featuring command parsing, process management, and built-in commands.",
      tech: ["Rust", "Systems Programming"],
      github: "https://github.com/manish-ach/m-osh"
    },
    {
      name: "toucher",
      description: "Remote cursor input control system demonstrating network-based input handling and real-time device synchronization.",
      tech: ["Rust", "Networking", "Input Control"],
      github: "https://github.com/manish-ach/toucher"
    }
  ];

  const skills = {
    languages: ["Rust", "PHP", "C/C++", "Java", "Python", "JavaScript", "TypeScript", "SQL", "Shell"],
    frameworks: ["Axum", "React", "Node.js", "Express", "Prisma", "Flask", "FastAPI"],
    tools: ["Git", "Docker", "VS Code", "Cargo", "Makefile", "GCC/Clang", "PostgreSQL"],
    technologies: ["WebAssembly", "Unix/Linux", "Network Programming", "Web Infrastructure", "Backend Development", "Containerization", "JWT Auth"]
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6 animate-fade-in">
        {/* Profile Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border transition-all duration-300 hover:shadow-glow hover:scale-[1.02]">
            <div className="flex flex-col items-center text-center space-y-4">
              <img 
                src={avatar} 
                alt="Manish Acharya" 
                className="w-32 h-32 rounded-full border-4 border-primary shadow-glow"
              />
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-1">Manish Acharya</h1>
                <p className="text-muted-foreground">Software Engineering Student</p>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Passionate about systems programming, backend development, and building high-performance applications with Rust. 
                Focused on network programming, web infrastructure, and creating efficient, scalable solutions.
              </p>
            </div>
          </Card>

          <Card className="md:col-span-2 p-6 bg-card border-border">
            <h2 className="text-lg font-semibold mb-4 text-foreground">Interests</h2>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, idx) => (
                <Badge 
                  key={idx} 
                  variant="secondary" 
                  className="bg-secondary/50 hover:bg-secondary text-foreground border border-border"
                >
                  {interest}
                </Badge>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Pokhara, Nepal</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@manishacharya.name.np" className="hover:text-primary transition-colors">
                  contact@manishacharya.name.np
                </a>
              </div>
              <div className="flex gap-3 mt-4">
                <Button variant="outline" size="sm" asChild className="border-border hover:border-primary transition-all duration-300 hover:shadow-glow">
                  <a href="https://github.com/manish-ach" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="border-border hover:border-primary transition-all duration-300 hover:shadow-glow">
                  <a href="https://www.linkedin.com/in/manish-acharya-08345a260" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-foreground">Experience</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {experience.map((exp, idx) => (
              <Card key={idx} className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-sm text-primary font-medium">{exp.organization}</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-foreground">Education</h2>
          <div className="space-y-3">
            {education.map((edu, idx) => (
              <Card key={idx} className="p-5 bg-card border-border transition-all duration-300 hover:border-primary hover:shadow-glow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-sm text-primary">{edu.field}</p>
                    <p className="text-sm text-muted-foreground">{edu.institution} • {edu.location}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{edu.period}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-card border-border transition-all duration-300 hover:border-primary hover:shadow-glow">
            <h3 className="font-semibold mb-3 text-foreground">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((lang, idx) => (
                <Badge key={idx} className="bg-primary/20 text-primary border border-primary/30 transition-all duration-200 hover:scale-105 hover:bg-primary/30 cursor-default">
                  {lang}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-card border-border transition-all duration-300 hover:border-accent hover:shadow-glow">
            <h3 className="font-semibold mb-3 text-foreground">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((fw, idx) => (
                <Badge key={idx} className="bg-accent/20 text-accent border border-accent/30 transition-all duration-200 hover:scale-105 hover:bg-accent/30 cursor-default">
                  {fw}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-card border-border transition-all duration-300 hover:border-primary hover:shadow-glow">
            <h3 className="font-semibold mb-3 text-foreground">Developer Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((tool, idx) => (
                <Badge key={idx} className="bg-secondary text-foreground border border-border transition-all duration-200 hover:scale-105 hover:border-primary cursor-default">
                  {tool}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-card border-border transition-all duration-300 hover:border-accent hover:shadow-glow">
            <h3 className="font-semibold mb-3 text-foreground">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.technologies.map((tech, idx) => (
                <Badge key={idx} className="bg-secondary text-foreground border border-border transition-all duration-200 hover:scale-105 hover:border-accent cursor-default">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-foreground">Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, idx) => (
              <Card key={idx} className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow hover:-translate-y-1 group">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      asChild
                      className="text-muted-foreground hover:text-primary"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs border-border text-muted-foreground transition-all duration-200 hover:border-primary hover:text-primary cursor-default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer */}
        <Card className="p-6 bg-card border-border text-center">
          <p className="text-sm text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Index;
