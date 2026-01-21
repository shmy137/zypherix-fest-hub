import { MapPin, Mail, Phone, Instagram} from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl font-bold cyber-text-gradient mb-4">
              ZYPHERIX
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              The annual IT fest of Jamia Hamdard, bringing together technology 
              enthusiasts for two days of innovation, competition, and learning.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/zypherix.26/"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                target="_blank"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#events" className="text-muted-foreground hover:text-primary transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-muted-foreground hover:text-primary transition-colors">
                  Schedule
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="https://maps.app.goo.gl/x96k66khnTYLX7mC6" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                  Jamia Hamdard, Kannur
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:zypherix2026@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  zypherix2026@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+918590727887" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 85907 27887
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Zypherix. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Organized by <span className="text-primary">Department of Computer Science</span>, Jamia Hamdard
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
