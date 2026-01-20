import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Users, Trophy, MapPin, CheckCircle, Award, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getEventById, GoogleFormLink } from "@/data/events";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EventDetail = () => {
  const { eventId } = useParams();
  const event = getEventById(eventId || "");

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-orbitron font-bold text-foreground mb-4">Event Not Found</h1>
          <Link to="/">
            <Button className="btn-glow">Go Back Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = event.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r ${event.accentColor} rounded-full blur-3xl opacity-20 animate-pulse`} />
          <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r ${event.accentColor} rounded-full blur-3xl opacity-15 animate-pulse`} style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link to="/#events" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Events
          </Link>

          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Event Icon */}
            <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${event.accentColor} p-1 animate-fade-in`}>
              <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                <IconComponent className="w-16 h-16 text-primary" />
              </div>
            </div>

            {/* Event Info */}
            <div className="flex-1 animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-foreground mb-4">
                {event.title}
              </h1>
              <p className={`text-xl bg-gradient-to-r ${event.accentColor} bg-clip-text text-transparent font-semibold mb-6`}>
                {event.tagline}
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mb-8">
                {event.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                <div className="glass-card p-4 text-center">
                  <Layers className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Rounds</p>
                  <p className="font-semibold text-foreground">{event.details.round}</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Users className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Team Size</p>
                  <p className="font-semibold text-foreground">{event.details.teamSize}</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Trophy className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">First Prize</p>
                  <p className="font-semibold text-foreground">{event.details.firstPrize}</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Award className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Second Prize</p>
                  <p className="font-semibold text-foreground">{event.details.secondPrize}</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Venue</p>
                  <p className="font-semibold text-foreground">{event.details.venue}</p>
                </div>
              </div>

              <Link to={GoogleFormLink} target="_blank">
                <Button size="lg" className="btn-glow text-lg px-8">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Timeline Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Rules */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-orbitron font-bold text-foreground mb-8">
                Rules & <span className="text-primary">Guidelines</span>
              </h2>
              <div className="glass-card p-8">
                <ul className="space-y-4">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{rule}</span>
                    </li>
                  ))} 
                </ul>
              </div>
            </div>

            {/* Timeline */}
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-3xl font-orbitron font-bold text-foreground mb-8">
                Event <span className="text-secondary">Timeline</span>
              </h2>
              <div className="glass-card p-8">
                <div className="space-y-6">
                  {event.timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="relative">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${event.accentColor}`} />
                        {index < event.timeline.length - 1 && (
                          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" />
                        )}
                      </div>
                      <div className="pb-6">
                        <p className="text-sm text-primary font-semibold">{item.time}</p>
                        <p className="text-foreground">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className={`glass-card p-12 text-center bg-gradient-to-r ${event.accentColor} bg-opacity-10`}>
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-foreground mb-4">
              Ready to Compete?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Don't miss your chance to be part of {event.title}. Register now and showcase your skills!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={GoogleFormLink} target="_blank">
                <Button size="lg" className="btn-glow text-lg px-8">
                  Register Now
                </Button>
              </Link>
              <Link to="/#events">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  View All Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventDetail;
