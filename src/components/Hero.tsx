import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield, Star } from "lucide-react";
import heroImage from "@/assets/hero-plumber.jpg";

const Hero = () => {
  const handleCall = () => {
    window.location.href = "tel:+1-310-627-2515";
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Emergency Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
              <span className="text-xs sm:text-sm font-medium">24/7 Emergency Service</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2 sm:space-y-4">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Fast <span className="text-primary">Emergency</span> Plumbing in Los Angeles
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-lg">
                Licensed & bonded plumbers with 20+ years experience. Same-day service guaranteed or you don't pay.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm">
              <div className="flex items-center gap-1 sm:gap-2">
                <Star className="h-3 w-3 sm:h-5 sm:w-5 text-accent fill-current" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Shield className="h-3 w-3 sm:h-5 sm:w-5 text-accent" />
                <span>Licensed & Bonded</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Clock className="h-3 w-3 sm:h-5 sm:w-5 text-accent" />
                <span>Same Day Service</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button 
                variant="emergency" 
                onClick={handleCall}
                className="group w-full sm:w-auto text-xs sm:text-sm lg:text-lg px-3 py-2 sm:px-4 sm:py-2 lg:px-8 lg:py-3"
              >
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:animate-bounce" />
                <span className="hidden sm:inline">CALL NOW: (310) 627-2515</span>
                <span className="sm:hidden">CALL: (310) 627-2515</span>
              </Button>
              <Button variant="cta" className="w-full sm:w-auto text-xs sm:text-sm lg:text-lg px-3 py-2 sm:px-4 sm:py-2 lg:px-8 lg:py-3">
                Get Free Estimate
              </Button>
            </div>

            {/* Guarantee */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-4">
              <p className="text-xs sm:text-sm font-medium">
                <span className="text-accent">100% Satisfaction Guarantee</span> - If we can't fix it, you don't pay!
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative lg:block hidden">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional ASAP Plumbing technician ready for emergency service"
                className="rounded-2xl shadow-2xl animate-float"
              />
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-card">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-card">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Emergency Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;