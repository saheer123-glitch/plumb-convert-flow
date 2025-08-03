import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+1-310-627-2515";
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-accent text-secondary py-2 text-center">
        <p className="text-sm font-medium">
          🚨 EMERGENCY PLUMBING? CALL NOW: (310) 627-2515 - 24/7 SERVICE
        </p>
      </div>

      {/* Main Navigation */}
      <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/6ec92ccd-9d1e-459f-8991-2a1b10dfc508.png" 
                alt="ASAP Plumbing Solutions Logo" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-secondary">ASAP Plumbing</h1>
                <p className="text-xs text-muted-foreground">Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-secondary hover:text-primary transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-secondary hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-secondary hover:text-primary transition-colors"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-secondary hover:text-primary transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              <div className="text-right hidden lg:block">
                <p className="text-sm text-muted-foreground">24/7 Emergency</p>
                <p className="text-lg font-bold text-primary">(310) 627-2515</p>
              </div>
              <Button variant="emergency" onClick={handleCall} size="sm" className="md:size-default">
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">Call Now</span>
                <span className="lg:hidden">Call</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t bg-white py-4">
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left text-secondary hover:text-primary transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left text-secondary hover:text-primary transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-left text-secondary hover:text-primary transition-colors"
                >
                  Reviews
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-secondary hover:text-primary transition-colors"
                >
                  Contact
                </button>
                <div className="pt-4 border-t">
                  <Button variant="emergency" onClick={handleCall} className="w-full text-sm">
                    <Phone className="h-4 w-4" />
                    Call (310) 627-2515
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;