import { Zap, Users, Trophy, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Push boundaries and create solutions that matter",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Network with peers and industry experts",
  },
  {
    icon: Trophy,
    title: "Competition",
    description: "Compete for prizes and recognition",
  },
  {
    icon: Zap,
    title: "Learning",
    description: "Hands-on workshops and tech talks",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="cyber-text-gradient">About Zypherix</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Zypherix is the flagship annual IT fest of Jamia Hamdard, bringing together 
            the brightest minds in technology. From intense coding battles to creative 
            design challenges, we provide a platform for students to showcase their 
            skills, learn from industry leaders, and connect with fellow tech enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
