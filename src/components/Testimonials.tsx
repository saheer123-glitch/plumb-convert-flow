import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Martinez",
      location: "Santa Monica, CA",
      rating: 5,
      text: "Amazing service! They fixed our burst pipe emergency at 2 AM and saved our hardwood floors. Professional, fast, and fair pricing. Highly recommend!",
      service: "Emergency Leak Repair"
    },
    {
      name: "Michael Chen",
      location: "Los Angeles, CA", 
      rating: 5,
      text: "Best plumbers in LA! They installed our new tankless water heater same day and the price was very reasonable. Clean, professional work.",
      service: "Water Heater Installation"
    },
    {
      name: "Lisa Rodriguez",
      location: "Long Beach, CA",
      rating: 5,
      text: "Called ASAP for a clogged drain and they came out within 2 hours. Fixed it quickly and explained everything. Will definitely use them again!",
      service: "Drain Cleaning"
    },
    {
      name: "David Thompson",
      location: "Beverly Hills, CA",
      rating: 5,
      text: "Outstanding service from start to finish. They repiped our entire house with minimal disruption. True professionals who stand behind their work.",
      service: "Whole Home Repipe"
    },
    {
      name: "Maria Gonzalez", 
      location: "Torrance, CA",
      rating: 5,
      text: "Honest pricing, no hidden fees, and excellent work quality. They fixed our toilet and faucet issues in one visit. Very satisfied customer!",
      service: "Fixture Repair"
    },
    {
      name: "Robert Wilson",
      location: "Pasadena, CA", 
      rating: 5,
      text: "Emergency gas line repair was handled expertly and safely. They explained everything and made sure we felt confident in the repair. Top notch!",
      service: "Gas Line Repair"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-accent fill-current" />
            ))}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over 1,000+ satisfied customers across Los Angeles trust us with their plumbing needs. Read what they have to say about our service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-primary/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-current" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-secondary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-primary font-medium">{testimonial.service}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">5.0★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Emergency Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;