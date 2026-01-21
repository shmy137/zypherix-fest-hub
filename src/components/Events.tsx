import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => {            
            return (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 block"
              >
                {/* Image */}
                <div className="w-full">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold mb-2 text-foreground">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.tagline}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
