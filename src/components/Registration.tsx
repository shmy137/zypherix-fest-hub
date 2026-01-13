import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    event: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", college: "", event: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="register" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="cyber-text-gradient">Register Now</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Secure your spot at Zypherix and be part of the biggest tech fest
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-12">
            {isSubmitted ? (
              <div className="text-center py-12 animate-scale-in">
                <CheckCircle className="w-20 h-20 text-secondary mx-auto mb-6" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  Registration Successful!
                </h3>
                <p className="text-muted-foreground">
                  We'll send you a confirmation email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-foreground font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-foreground font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">
                      College/University
                    </label>
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                      placeholder="Your institution"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">
                    Select Event
                  </label>
                  <select
                    name="event"
                    value={formData.event}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground"
                  >
                    <option value="">Choose an event</option>
                    <option value="hackathon">Hackathon</option>
                    <option value="coding">Coding Challenge</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="quiz">Tech Quiz</option>
                    <option value="aiml">AI/ML Workshop</option>
                    <option value="all">All Events</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="glow-button w-full py-4 rounded-xl font-bold text-lg text-primary-foreground flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Submit Registration
                </button>

                <p className="text-muted-foreground text-sm text-center">
                  By registering, you agree to our terms and conditions
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
