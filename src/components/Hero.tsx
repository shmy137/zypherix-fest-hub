import { useEffect, useState } from "react";

const Hero = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ==== Ultra Futuristic Cyber Background ==== */}
    <div className="absolute inset-0 bg-background" />

    {/* Moving Gradient Flow */}
    <div className="absolute inset-0 pointer-events-none opacity-40 animate-gradient-move bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.25),transparent_55%),radial-gradient(circle_at_bottom,hsl(var(--secondary)/0.22),transparent_60%)]" />

    {/* Neon Hex Grid */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.12]"
      style={{
        backgroundImage: `
          linear-gradient(120deg, rgba(0,255,255,0.15) 1px, transparent 1px),
          linear-gradient(60deg, rgba(255,0,170,0.10) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        maskImage:
          "radial-gradient(circle at center, black 40%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, black 40%, transparent 75%)",
      }}
    />

    {/* Circuit Lines */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.10] circuit-lines" />

    {/* Hologram Light Beams */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.18] holo-beams" />

    {/* Radar Pulse Rings */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 animate-radar" />
      <div className="absolute top-1/2 left-1/2 w-[520px] h-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/15 animate-radar delay-700" />
    </div>

    {/* Strong Neon Orbs */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-primary/25 rounded-full blur-[160px] animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-secondary/25 rounded-full blur-[150px] animate-float"
        style={{ animationDelay: "-2.8s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-cyber-pink/10 rounded-full blur-[220px]" />
    </div>

    {/* Mouse Glow Spotlight (stronger cyber glow) */}
    <div
      className="absolute inset-0 opacity-60 pointer-events-none transition-opacity duration-300"
      style={{
        background: `radial-gradient(750px circle at ${mouse.x}px ${mouse.y}px,
          hsl(var(--cyber-pink) / 0.22),
          transparent 60%)`,
      }}
    />

    {/* Scanlines + Noise */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.12] scanlines" />
    <div className="absolute inset-0 pointer-events-none opacity-[0.06] noise" />

    {/* Cyber Particles */}
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 28 }).map((_, i) => (
        <span
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full bg-white/60 animate-particles-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 8}s`,
          }}
        />
      ))}
    </div>


      {/* ==== Content ==== */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div
          className="animate-fade-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/40 text-primary text-sm font-medium mb-8 backdrop-blur-md bg-white/5 shadow-lg shadow-primary/20">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Annual IT Fest of Jamia Hamdard
          </span>
        </div>

        {/* Glitch Title */}
        <h1
          className="relative font-display text-6xl md:text-8xl lg:text-9xl font-black mb-6 animate-fade-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <span className="relative inline-block cyber-text-gradient glitch">
            ZYPHERIX
          </span>

          {/* subtle glow */}
          <span className="absolute inset-0 blur-3xl opacity-40 cyber-text-gradient select-none pointer-events-none">
            ZYPHERIX
          </span>
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
          Where innovation meets excellence. Join hundreds of tech enthusiasts
          for three days of hacking, learning, and competing.
        </p>

        {/* Futuristic Button */}
        <div className="animate-fade-up" style={{ animationDelay: "1s", opacity: 0 }}>
          <a
            href="#events"
            className="
              group relative inline-flex items-center justify-center
              px-12 py-4 rounded-full font-bold text-lg text-white
              bg-gradient-to-r from-primary to-secondary
              shadow-lg shadow-primary/40
              transition-all duration-300
              hover:scale-[1.06] hover:shadow-xl hover:shadow-primary/60
              active:scale-[0.98]
              overflow-hidden
            "
          >
            {/* neon border */}
            <span className="absolute inset-0 rounded-full ring-2 ring-white/10 group-hover:ring-white/25 transition-all duration-300" />

            {/* animated pulse outline */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 ring-2 ring-secondary/40 animate-pulse transition-opacity duration-300" />

            {/* shine sweep */}
            <span
              className="
                absolute -left-1/2 top-0 h-full w-1/2
                bg-white/30 blur-md skew-x-[-20deg]
                translate-x-[-120%]
                group-hover:translate-x-[260%]
                transition-transform duration-700
              "
            />

            {/* text */}
            <span className="relative z-10 tracking-wide">
              Explore Events
            </span>
          </a>
        </div>
      </div>

      {/* ==== Custom CSS (Tailwind Friendly) ==== */}
      <style>{`
        .scanlines {
          background: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.10) 0px,
            rgba(255, 255, 255, 0.10) 1px,
            transparent 3px,
            transparent 7px
          );
          mix-blend-mode: overlay;
        }

        .noise {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E");
          mix-blend-mode: overlay;
        }

        .glitch {
          position: relative;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          content: "ZYPHERIX";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          overflow: hidden;
          opacity: 0.55;
        }
        .glitch::before {
          transform: translate(2px, -1px);
          color: rgba(255, 0, 170, 0.6);
          animation: glitch 2.2s infinite linear alternate-reverse;
        }
        .glitch::after {
          transform: translate(-2px, 1px);
          color: rgba(0, 255, 255, 0.5);
          animation: glitch 2.8s infinite linear alternate-reverse;
        }

        @keyframes glitch {
          0% { clip-path: inset(0 0 90% 0); }
          10% { clip-path: inset(10% 0 70% 0); }
          20% { clip-path: inset(30% 0 50% 0); }
          30% { clip-path: inset(50% 0 30% 0); }
          40% { clip-path: inset(70% 0 10% 0); }
          50% { clip-path: inset(30% 0 50% 0); }
          60% { clip-path: inset(10% 0 70% 0); }
          70% { clip-path: inset(0 0 90% 0); }
          80% { clip-path: inset(40% 0 40% 0); }
          90% { clip-path: inset(60% 0 20% 0); }
          100% { clip-path: inset(20% 0 60% 0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 18s linear infinite;
        }

        .animate-spin-slower {
          animation: spin 28s linear infinite reverse;
        }

        @keyframes particles {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          20% { opacity: 0.7; }
          100% { transform: translateY(-80px) scale(1.2); opacity: 0; }
        }

        .animate-particles {
          animation-name: particles;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
