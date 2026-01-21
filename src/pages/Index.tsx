import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Schedule />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;
