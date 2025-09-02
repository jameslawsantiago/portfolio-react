import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-charcoal mb-4 tracking-tight">
            LET'S <span className="text-primary">CONNECT</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-teal-light mx-auto rounded-full mb-6"></div>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-soft)] border border-border hover:border-primary/20 transition-[var(--transition-smooth)]">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-teal-light rounded-lg flex items-center justify-center text-primary-foreground mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-primary mb-2">Email</h3>
            <p className="font-body text-foreground">john.developer@email.com</p>
          </div>

          {/* Phone */}
          <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-soft)] border border-border hover:border-primary/20 transition-[var(--transition-smooth)]">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-teal-light rounded-lg flex items-center justify-center text-primary-foreground mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-primary mb-2">Phone</h3>
            <p className="font-body text-foreground">+1 (555) 123-4567</p>
          </div>

          {/* Location */}
          <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-soft)] border border-border hover:border-primary/20 transition-[var(--transition-smooth)]">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-teal-light rounded-lg flex items-center justify-center text-primary-foreground mx-auto mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-primary mb-2">Location</h3>
            <p className="font-body text-foreground">San Francisco, CA</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-[var(--transition-smooth)]"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-[var(--transition-smooth)]"
            asChild
          >
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-[var(--transition-smooth)]"
            asChild
          >
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 mr-2" />
              Twitter
            </a>
          </Button>
        </div>

        {/* CTA Button */}
        <Button 
          size="lg"
          className="font-body font-semibold bg-gradient-to-r from-primary to-teal-light hover:from-teal-light hover:to-primary text-primary-foreground px-8 py-4 text-lg rounded-xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-[var(--transition-bounce)]"
        >
          Start a Project Together
        </Button>
      </div>
    </section>
  );
};

export default Contact;