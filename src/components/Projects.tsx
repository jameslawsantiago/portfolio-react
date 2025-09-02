import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      company: "TechCorp Solutions",
      website: "https://example-ecommerce.com",
      features: [
        "Built custom PHP/Laravel backend with advanced inventory management",
        "Integrated Stripe payment processing and shipping calculations", 
        "Implemented responsive React frontend with real-time cart updates",
        "Achieved 99.9% uptime with optimized database queries and caching"
      ]
    },
    {
      title: "Digital Marketing Dashboard",
      company: "Marketing Pro Agency",
      website: "https://example-dashboard.com",
      features: [
        "Developed comprehensive analytics dashboard using React and D3.js",
        "Connected multiple APIs (Google Analytics, Facebook, Instagram)",
        "Built automated SEO reporting with keyword tracking and suggestions",
        "Increased client engagement by 150% through intuitive data visualization"
      ]
    },
    {
      title: "Healthcare Management System",
      company: "MedTech Innovations",
      website: "https://example-healthcare.com", 
      features: [
        "Created HIPAA-compliant patient management system with PHP/MySQL",
        "Implemented secure authentication and role-based access control",
        "Built appointment scheduling with SMS/email notifications",
        "Reduced administrative overhead by 60% through process automation"
      ]
    },
    {
      title: "Real Estate CRM Platform",
      company: "PropertyMax Realty",
      website: "https://example-crm.com",
      features: [
        "Developed full-stack CRM using React, Node.js, and PostgreSQL",
        "Integrated MLS data feeds with automated property import/sync",
        "Built lead management system with email marketing automation",
        "Increased sales conversion rates by 45% through enhanced lead tracking"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-charcoal mb-4 tracking-tight">
            <span className="text-accent">FEATURED</span> PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-red-muted mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] border border-border hover:border-accent/20"
            >
              {/* Project Header */}
              <div className="mb-6">
                <h3 className="font-heading font-bold text-2xl text-charcoal mb-2">
                  {project.title}
                </h3>
                <p className="font-body text-muted-foreground text-lg mb-4">
                  {project.company}
                </p>
                <Button 
                  variant="outline"
                  className="font-body border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-[var(--transition-smooth)]"
                  asChild
                >
                  <a 
                    href={project.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    Visit Webpage
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>

              {/* Project Features */}
              <div className="space-y-3">
                {project.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="font-body text-foreground leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;