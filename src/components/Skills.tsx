import { Code2, Database, Server, Smartphone, Globe, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["React", "TypeScript", "Tailwind CSS", "Vue.js", "HTML5/CSS3"]
    },
    {
      title: "Backend Development", 
      icon: <Server className="w-6 h-6" />,
      skills: ["PHP", "Node.js", "Laravel", "Express", "RESTful APIs"]
    },
    {
      title: "Database Management",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Supabase"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["React Native", "Progressive Web Apps", "Responsive Design"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: ["WordPress", "E-commerce", "CMS Development", "Web Security"]
    },
    {
      title: "Digital Marketing",
      icon: <Search className="w-6 h-6" />,
      skills: ["SEO Optimization", "Social Media Marketing", "Google Analytics", "Content Strategy"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-charcoal mb-4 tracking-tight">
            SKILLS & EXPERTISE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-teal-light mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] border border-border hover:border-primary/20"
            >
              {/* Category Header */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-teal-light rounded-lg flex items-center justify-center text-primary-foreground mr-4">
                  {category.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-primary">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="font-body text-sm mr-2 mb-2 hover:bg-primary/10 transition-[var(--transition-smooth)]"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;