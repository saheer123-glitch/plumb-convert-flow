import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail,
  Shield,
  Award,
  Star
} from "lucide-react";

const Footer = () => {
  const handleCall = () => {
    window.location.href = "tel:+1-310-627-2515";
  };

  const services = [
    "Emergency Leak Repair",
    "Water Heater Service", 
    "Drain & Sewer Cleaning",
    "Gas Line Service",
    "Fixture Installation",
    "Pipe Replacement",
    "Bathroom Remodeling",
    "Kitchen Plumbing"
  ];

  const serviceAreas = [
    "Los Angeles", "Santa Monica", "Long Beach", "Beverly Hills",
    "Pasadena", "Torrance", "Manhattan Beach", "Redondo Beach",
    "Compton", "Inglewood", "Marina Del Rey", "Culver City"
  ];

  return (
    <footer className="bg-secondary text-white">
      {/* Emergency Banner */}
      <div className="bg-accent py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-secondary font-bold text-lg">
            🚨 PLUMBING EMERGENCY? CALL NOW: (310) 627-2515 - 24/7 SERVICE
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">ASAP Plumbing</h3>
                <p className="text-sm text-white/80">Solutions</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Licensed, bonded, and insured plumbing professionals serving Los Angeles and Orange County with 20+ years of experience.
            </p>

            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" />
                <span className="text-sm">Licensed & Bonded</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-accent" />
                <span className="text-sm">20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-accent" />
                <span className="text-sm">5-Star Rated Service</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xl font-bold mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {serviceAreas.map((area, index) => (
                <li key={index} className="text-white/80 text-sm">
                  {area}
                </li>
              ))}
            </ul>
            <p className="text-accent text-sm mt-4 font-medium">
              + More LA & OC Areas
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">24/7 Emergency Line</p>
                  <p className="text-xl font-bold text-accent">(310) 627-2515</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">Service Area</p>
                  <p className="text-white/80 text-sm">Los Angeles & Orange County</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">Hours</p>
                  <p className="text-white/80 text-sm">24/7 Emergency Service</p>
                  <p className="text-white/80 text-sm">Regular: Mon-Fri 7AM-6PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-white/80 text-sm">info@asapplumbingsolutions.com</p>
                </div>
              </div>
            </div>

            <Button 
              variant="emergency" 
              size="lg" 
              onClick={handleCall}
              className="w-full mt-6 bg-accent text-secondary hover:bg-accent/90"
            >
              <Phone className="h-5 w-5" />
              Call Now for Emergency
            </Button>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-white/80 text-sm">
              © 2024 ASAP Plumbing Solutions. All rights reserved.
            </p>
            <p className="text-white/60 text-xs mt-1">
              Licensed, Bonded & Insured • License #123456789
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-white/80">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;