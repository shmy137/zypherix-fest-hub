const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/30 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-pink/10 rounded-full blur-[150px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--cyber-purple) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--cyber-purple) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <span className="inline-block px-4 py-2 rounded-full border border-primary/50 text-primary text-sm font-medium mb-8 backdrop-blur-sm">
            Annual IT Fest of Jamia Hamdard
          </span>
        </div>

        <h1 
          className="font-display text-6xl md:text-8xl lg:text-9xl font-black mb-6 animate-fade-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <span className="cyber-text-gradient">ZYPHERIX</span>
        </h1>

        <p 
          className="text-xl md:text-2xl lg:text-3xl font-display text-foreground/80 mb-4 tracking-wider animate-fade-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          <span className="text-primary">Innovate</span>
          <span className="mx-3 text-secondary">•</span>
          <span className="text-secondary">Code</span>
          <span className="mx-3 text-primary">•</span>
          <span className="text-primary">Dominate</span>
        </p>

        <p 
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          Where innovation meets excellence. Join hundreds of tech enthusiasts for three days of hacking, learning, and competing.
        </p>

        <div 
          className="animate-fade-up"
          style={{ animationDelay: "1s", opacity: 0 }}
        >
          <a
            href="#events"
            className="
              group relative inline-flex items-center justify-center
              px-10 py-4 rounded-full font-bold text-lg
              text-white overflow-hidden
              bg-gradient-to-r from-primary to-secondary
              shadow-lg shadow-primary/30
              transition-all duration-300
              hover:scale-[1.05] hover:shadow-xl hover:shadow-primary/50
              active:scale-[0.98]
            "
          >
            {/* glowing border */}
            <span
              className="
                absolute inset-0 rounded-full
                ring-2 ring-white/10
                group-hover:ring-white/20
                transition-all duration-300
              "
            />

            {/* shine sweep effect */}
            <span
              className="
                absolute -left-1/2 top-0 h-full w-1/2
                bg-white/30 blur-md
                skew-x-[-20deg]
                translate-x-[-120%]
                group-hover:translate-x-[260%]
                transition-transform duration-700
              "
            />

            {/* inner glow */}
            <span
              className="
                absolute inset-0 rounded-full opacity-0
                bg-white/10
                group-hover:opacity-100
                transition-opacity duration-300
              "
            />

            {/* text */}
            <span className="relative z-10 tracking-wide">
              Explore Events
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
