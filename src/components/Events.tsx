import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { events } from "@/data/events";

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
          {events.map((event, index) => {
            const IconComponent = event.icon;
            const isPrimary = index % 2 === 0;
            
            return (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                className="glass-card rounded-2xl p-8 group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 block"
              >
                <div 
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                    isPrimary 
                      ? "bg-primary/20 group-hover:bg-primary/30" 
                      : "bg-secondary/20 group-hover:bg-secondary/30"
                  }`}
                >
                  <IconComponent 
                    className={`w-7 h-7 ${isPrimary ? "text-primary" : "text-secondary"}`} 
                  />
                </div>
                
                <h3 className="font-display text-2xl font-semibold mb-3 text-foreground">
                  {event.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {event.tagline}
                </p>
                
                <span
                  className={`inline-flex items-center font-semibold transition-colors duration-300 ${
                    isPrimary 
                      ? "text-primary hover:text-primary/80" 
                      : "text-secondary hover:text-secondary/80"
                  }`}
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
