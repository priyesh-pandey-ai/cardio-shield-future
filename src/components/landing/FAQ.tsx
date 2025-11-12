import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is CardioShield a medical device?",
    answer: "No, CardioShield is a CDSCO-compliant wellness platform focused on prevention and lifestyle insights. It's designed to complement your doctor's care by providing early warnings and continuous monitoring, not to replace professional medical diagnosis or treatment.",
  },
  {
    question: "Do I need a smartwatch?",
    answer: "A smartwatch is recommended for the best experience as it enables continuous heart rate monitoring and real-time data collection. However, it's not mandatory — you can still use CardioShield by uploading health reports or using your smartphone's sensors for basic monitoring.",
  },
  {
    question: "Can it replace a doctor?",
    answer: "Absolutely not. CardioShield is designed to work alongside your doctor, not replace them. We provide early warning signals and continuous monitoring to help you catch potential issues before they become serious. Always consult your doctor for diagnosis and treatment decisions.",
  },
  {
    question: "How accurate is the AI prediction?",
    answer: "Our AI model is trained on 10M+ Indian health datapoints and has shown a 30% reduction in emergency cardiac events in our pilot study. However, no AI is 100% accurate. CardioShield provides risk indicators to help you make informed decisions, always in consultation with healthcare professionals.",
  },
  {
    question: "Is my health data secure?",
    answer: "Yes. We use HIPAA-grade encryption and comply with all Indian data protection regulations. Your health data is stored securely and never shared with third parties without your explicit consent. You have full control over your data.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about CardioShield
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-2xl px-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
