import { Code, Palette, Brain, HelpCircle, Cpu, Rocket } from "lucide-react";

const events = [
  {
    icon: Rocket,
    title: "Hackathon",
    description: "48-hour coding marathon to build innovative solutions",
    color: "primary",
  },
  {
    icon: Code,
    title: "Coding Challenge",
    description: "Competitive programming to test your algorithmic skills",
    color: "secondary",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Design stunning interfaces that solve real problems",
    color: "primary",
  },
  {
    icon: HelpCircle,
    title: "Tech Quiz",
    description: "Test your knowledge across domains of technology",
    color: "secondary",
  },
  {
    icon: Brain,
    title: "AI/ML Workshop",
    description: "Hands-on session on artificial intelligence and machine learning",
    color: "primary",
  },
  {
    icon: Cpu,
    title: "Tech Talks",
    description: "Industry experts share insights on emerging technologies",
    color: "secondary",
  },
];

const Events = () => {
  return (
    <section id="events" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="cyber-text-gradient">Events</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dive into a world of exciting competitions and workshops designed to challenge and inspire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="glass-card rounded-2xl p-8 group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div 
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                  event.color === "primary" 
                    ? "bg-primary/20 group-hover:bg-primary/30" 
                    : "bg-secondary/20 group-hover:bg-secondary/30"
                }`}
              >
                <event.icon 
                  className={`w-7 h-7 ${
                    event.color === "primary" ? "text-primary" : "text-secondary"
                  }`} 
                />
              </div>
              
              <h3 className="font-display text-2xl font-semibold mb-3 text-foreground">
                {event.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {event.description}
              </p>
              
              <a
                href="#register"
                className={`inline-flex items-center font-semibold transition-colors duration-300 ${
                  event.color === "primary" 
                    ? "text-primary hover:text-primary/80" 
                    : "text-secondary hover:text-secondary/80"
                }`}
              >
                Register for this event
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
