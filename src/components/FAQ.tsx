import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly can you respond to emergencies?",
      answer: "We provide 24/7 emergency service with typical response times of 30-60 minutes for urgent calls. Our emergency plumbers are always on standby to help with burst pipes, gas leaks, and other critical issues."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve all of Los Angeles County and Orange County, including Santa Monica, Long Beach, Pasadena, Beverly Hills, Torrance, Irvine, Newport Beach, and surrounding areas. Call us to confirm service in your specific location."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes! We provide free, no-obligation estimates for all non-emergency plumbing work. For emergency calls, we charge a service fee that gets applied toward the repair if you choose to proceed."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. ASAP Plumbing Solutions is fully licensed, bonded, and insured. All our technicians are licensed professionals with extensive training and certifications. We carry comprehensive liability insurance for your protection."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, checks, and all major credit cards including Visa, MasterCard, American Express, and Discover. We also offer financing options for larger projects through approved partners."
    },
    {
      question: "Do you guarantee your work?",
      answer: "Yes! We stand behind all our work with comprehensive warranties. Labor is typically warranted for 1-2 years depending on the job, and we use only high-quality parts with manufacturer warranties. If you're not satisfied, we'll make it right."
    },
    {
      question: "Can you help with water heater installation?",
      answer: "Definitely! We specialize in both tank and tankless water heater installation, repair, and maintenance. We're Bradford White preferred installers and can typically complete same-day installations with up to 20-year warranties."
    },
    {
      question: "What should I do in a plumbing emergency?",
      answer: "First, locate and shut off the main water valve if there's flooding. For gas leaks, evacuate immediately and call the gas company. Then call us at (310) 627-2515 - we're available 24/7 for true emergencies."
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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our plumbing services. Don't see your question? Give us a call!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-muted rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-secondary hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still Have Questions CTA */}
          <div className="bg-primary/10 rounded-2xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our friendly team is here to help. Give us a call and we'll answer any questions about your plumbing needs.
            </p>
            <Button variant="emergency" size="lg" onClick={handleCall}>
              <Phone className="h-5 w-5" />
              Call (310) 627-2515
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;