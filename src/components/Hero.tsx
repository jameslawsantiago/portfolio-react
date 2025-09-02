import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional portfolio background" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-teal-light/10"></div>
      </div>

      {/* Teal Sidebar Accent */}
      <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-primary to-teal-light z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Portfolio Title */}
        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-charcoal mb-6 tracking-tight">
          PORTFOLIO
        </h1>

        {/* Full Name */}
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl text-charcoal mb-8 tracking-wider">
          JOHN DEVELOPER
        </h2>

        {/* Tagline with Multiple Roles */}
        <div className="space-y-3 mb-12">
          <p className="font-body text-lg md:text-xl text-primary font-semibold">
            Full Stack Web Developer
          </p>
          <p className="font-body text-lg md:text-xl text-primary font-semibold">
            IT Consultant
          </p>
          <p className="font-body text-lg md:text-xl text-primary font-semibold">
            PHP Programmer
          </p>
          <p className="font-body text-lg md:text-xl text-primary font-semibold">
            SEO / Social Media Manager
          </p>
        </div>

        {/* Clean Divider Line */}
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-teal-light mx-auto rounded-full shadow-sm"></div>
      </div>
    </section>
  );
};

export default Hero;