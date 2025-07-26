import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Clock, 
  DollarSign, 
  Users, 
  Award, 
  Truck,
  CheckCircle,
  Star
} from "lucide-react";
import emergencyService from "@/assets/emergency-service.jpg";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Same-Day Service",
      description: "Most jobs completed in one day or less. We understand urgency.",
      highlight: "24/7 Available"
    },
    {
      icon: Shield,
      title: "Licensed & Bonded",
      description: "Fully licensed, bonded, and insured for your protection and peace of mind.",
      highlight: "Fully Insured"
    },
    {
      icon: DollarSign,
      title: "Upfront Pricing",
      description: "No hidden fees. Free estimates with transparent, fair pricing always.",
      highlight: "No Hidden Fees"
    },
    {
      icon: Award,
      title: "20+ Years Experience",
      description: "Two decades of residential and commercial plumbing expertise.",
      highlight: "Proven Track Record"
    },
    {
      icon: Star,
      title: "5-Star Service",
      description: "Consistently rated 5 stars by customers across Los Angeles County.",
      highlight: "Top Rated"
    },
    {
      icon: Truck,
      title: "Fully Equipped",
      description: "Mobile workshops with all tools and parts to complete jobs efficiently.",
      highlight: "Always Prepared"
    }
  ];

  const guarantees = [
    "100% Satisfaction Guarantee",
    "If we can't fix it, you don't pay",
    "Clean, professional technicians",
    "Same-day emergency response",
    "Top warranties in the industry",
    "Free estimates on all work"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4">Why ASAP Plumbing Solutions</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
                Los Angeles' Most Trusted Plumbers
              </h2>
              <p className="text-xl text-muted-foreground">
                Family-owned and operated with a commitment to excellence. We've built our reputation on quality work, honest pricing, and exceptional customer service.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{benefit.description}</p>
                      <Badge variant="secondary" className="text-xs">{benefit.highlight}</Badge>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Guarantees */}
            <Card className="bg-muted/50 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">Our Guarantees</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {guarantees.map((guarantee, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm">{guarantee}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src={emergencyService} 
              alt="ASAP Plumbing emergency service vehicle ready for dispatch"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            {/* Overlay Stats */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-xs opacity-90">Jobs Completed</div>
                </div>
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">5.0★</div>
                  <div className="text-xs opacity-90">Average Rating</div>
                </div>
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-xs opacity-90">Service Hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;