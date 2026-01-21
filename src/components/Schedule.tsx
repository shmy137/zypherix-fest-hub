import { Calendar, Clock } from "lucide-react";

const scheduleData = [
  {
    day: "Day 1",
    date: "January 27, 2026",
    events: [
      { time: "09:00 AM", title: "Registration", description: "" },
      { time: "10:00 AM", title: "Inauguration", description: "" },
      { time: "12:00 AM", title: "Priliminary Rounds for All Events", description: "" },
      { time: "12:00 PM", title: "coding", description: "" },
      { time: "12:00 PM", title: "Prompting", description: "" },
      { time: "12:00 PM", title: "Quiz", description: "" },
      { time: "12:00 PM", title: "Tecnical Manager", description: "" },
      { time: "1:30 PM", title: "Reel Making", description: "" },
      { time: "2:30 PM", title: "Blind Typing", description: "" },
      { time: "2:45 PM", title: "Gaming", description: "" },
    ],
  },
  {
    day: "Day 2",
    date: "January 28, 2026",
    events: [
      { time: "10:00 AM", title: "Prompting Final", description: "" },
      { time: "10:15 AM", title: "Technical Manager Final", description: "" },
      { time: "02:00 PM", title: "Prize Distribution", description: "" },
      { time: "02:30 PM", title: "Cultural Events", description: "" },
    ],
  },
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="cyber-text-gradient">Schedule</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Two days packed with innovation, competition, and learning opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {scheduleData.map((day, dayIndex) => (
            <div
              key={day.day}
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold cyber-text-gradient">
                    {day.day}
                  </h3>
                  <p className="text-muted-foreground text-sm">{day.date}</p>
                </div>
              </div>

              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={event.title}
                    className="flex gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2 text-secondary min-w-[90px]">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{event.time}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{event.title}</h4>
                      <p className="text-muted-foreground text-sm">{event.description}</p>
                    </div>
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

export default Schedule;
