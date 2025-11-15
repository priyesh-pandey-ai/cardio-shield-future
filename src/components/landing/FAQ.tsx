import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is CardioShield a medical device?",
    answer:
      "No. CardioShield is a CDSCO-compliant wellness platform focused on prevention and lifestyle insights. It complements your doctor by providing early warnings and continuous monitoring, but it does not replace professional medical diagnosis or treatment.",
  },
  {
    question: "Do I need a smartwatch?",
    answer:
      "A smartwatch is recommended because continuous heart rate, HRV, and sleep data unlock the full experience. However, it is not mandatory - you can still use CardioShield by uploading health reports or using your phone sensors for basic monitoring.",
  },
  {
    question: "Can it replace a doctor?",
    answer:
      "CardioShield works alongside your doctor. We surface early warning signals and actionable logs so you can consult your physician sooner. Always follow medical advice from qualified professionals.",
  },
  {
    question: "How accurate is the AI prediction?",
    answer:
      "Our models are trained on 10M+ Indian datapoints and have shown a 30% reduction in emergency cardiac events in pilot programs. No AI is perfect, so CardioShield provides risk indicators that must be interpreted with a clinician.",
  },
  {
    question: "Is my health data secure?",
    answer:
      "Yes. We use HIPAA-grade encryption, follow ISO 27001 processes, and comply with Indian data protection rules. Your data is encrypted at rest and in transit, and never shared without explicit consent.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about CardioShield
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
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
