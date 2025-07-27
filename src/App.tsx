import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services id="services" />
      <WhyChooseUs id="about" />
      <Testimonials />
      <FAQ />
      <Contact id="contact" />
      <Footer />
    </main>
  </TooltipProvider>
);

export default App;
