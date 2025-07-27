import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

const Contact = ({ id }: { id?: string }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleCall = () => {
    window.location.href = "tel:+1-310-627-2515";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    alert('Thank you! We will contact you within 30 minutes.');
  };

  const serviceAreas = [
    "Los Angeles", "San Pedro", "Santa Monica", "Long Beach", "Malibu",
    "Pasadena", "Compton", "Inglewood", "Torrance", "Whittier",
    "Manhattan Beach", "Redondo Beach", "Hermosa Beach", "Marina Del Rey",
    "Carson", "Beverly Hills", "Newport Beach", "Huntington Beach",
    "Costa Mesa", "Irvine", "Orange County"
  ];

  return (
    <section id={id} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Emergency Call-to-Action */}
        <div className="bg-accent rounded-2xl p-8 text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
            Emergency Plumbing? Call Now!
          </h2>
          <p className="text-xl text-secondary/80 mb-6">
            Don't wait for a small problem to become a big disaster. Our emergency plumbers are standing by 24/7.
          </p>
          <Button variant="emergency" size="xl" onClick={handleCall} className="bg-secondary text-white hover:bg-secondary/90">
            <Phone className="h-6 w-6" />
            CALL NOW: (310) 627-2515
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-secondary">Get Your Free Estimate</CardTitle>
              <p className="text-muted-foreground">Fill out the form below and we'll contact you within 30 minutes to schedule your service.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="(310) 555-0123"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Type of Service Needed</Label>
                  <Input 
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    placeholder="e.g. Emergency leak repair, water heater installation"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Describe Your Plumbing Issue</Label>
                  <Textarea 
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Please describe your plumbing problem in detail..."
                  />
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Get My Free Estimate
                </Button>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  We'll contact you within 30 minutes during business hours
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Service Areas */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-secondary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">24/7 Emergency Line</p>
                    <p className="text-lg font-bold text-primary">(310) 627-2515</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Service Area</p>
                    <p className="text-muted-foreground">Los Angeles & Orange County</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-muted-foreground">24/7 Emergency Service</p>
                    <p className="text-sm text-muted-foreground">Regular hours: Mon-Fri 7AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@asapplumbingsolutions.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-secondary">Areas We Serve</CardTitle>
                <p className="text-muted-foreground">Professional plumbing services throughout Los Angeles and Orange County</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area, index) => (
                    <span 
                      key={index}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;