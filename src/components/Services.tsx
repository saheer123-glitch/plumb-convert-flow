import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Wrench, 
  Droplets, 
  Flame, 
  Zap, 
  Settings,
  ShowerHead,
  Phone,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Emergency Leak Repair",
      description: "Fast response to water leaks, burst pipes, and flooding emergencies. Available 24/7.",
      features: ["Pipe leak detection", "Burst pipe repair", "Slab leak repair", "Emergency shutoff"]
    },
    {
      icon: ShowerHead,
      title: "Water Heater Service",
      description: "Expert installation, repair and maintenance of tank and tankless water heaters.",
      features: ["Same-day installation", "Tankless specialists", "Bradford White preferred", "20-year warranties"]
    },
    {
      icon: Settings,
      title: "Drain & Sewer Cleaning",
      description: "Professional drain cleaning and sewer line repair using latest technology.",
      features: ["Hydro-jetting", "Camera inspection", "Pipe relining", "Root removal"]
    },
    {
      icon: Flame,
      title: "Gas Line Service",
      description: "Licensed gas pipe installation and repair for safety and code compliance.",
      features: ["Gas leak detection", "Line installation", "Meter unlocking", "Safety inspections"]
    },
    {
      icon: Wrench,
      title: "Fixture Installation",
      description: "Complete bathroom and kitchen plumbing fixture installation and repair.",
      features: ["Toilet installation", "Faucet repair", "Bidet installation", "Garbage disposals"]
    },
    {
      icon: Zap,
      title: "Pipe Replacement",
      description: "Complete repiping services using modern PEX and copper materials.",
      features: ["Whole home repipes", "PEX installation", "Copper replacement", "Trenchless options"]
    }
  ];

  const handleCall = () => {
    window.location.href = "tel:+1-310-627-2515";
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Professional Plumbing Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From emergency repairs to complete installations, our licensed plumbers handle every job with precision and care. All work guaranteed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-primary/20 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Emergency CTA */}
        <div className="bg-gradient-cta rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Need Emergency Plumbing Service?</h3>
          <p className="text-xl mb-6 opacity-90">
            Don't wait - plumbing emergencies get worse over time. Call now for immediate assistance!
          </p>
          <Button variant="emergency" size="xl" onClick={handleCall} className="bg-white text-primary hover:bg-white/90">
            <Phone className="h-5 w-5" />
            EMERGENCY CALL: (310) 627-2515
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;