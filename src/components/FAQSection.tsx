import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long does the immigration process typically take?',
    answer:
      'Processing times vary depending on the visa type and destination country. Student visas typically take 4-12 weeks, work permits 2-6 months, and permanent residency applications can range from 6 months to 2 years. We provide accurate timelines during your consultation based on your specific case.',
  },
  {
    question: 'What documents are required for a visa application?',
    answer:
      'Common requirements include a valid passport, educational credentials, work experience letters, language test results, financial statements, and photographs. Specific requirements vary by visa category. Our consultants provide a comprehensive checklist tailored to your application.',
  },
  {
    question: 'Do you offer services for all countries?',
    answer:
      'We specialize in immigration to Canada, Australia, New Zealand, UK, Germany, and other major destinations. Our expertise covers student visas, work permits, permanent residency, and tourist visas for over 50 countries worldwide.',
  },
  {
    question: 'What is your success rate?',
    answer:
      'We maintain a 98% success rate across all visa categories. Our thorough case assessment, meticulous documentation, and expert guidance ensure that applications are processed correctly the first time, minimizing rejections.',
  },
  {
    question: 'How much does your consultation cost?',
    answer:
      'We offer a free initial consultation to assess your eligibility and discuss options. Our service fees vary based on the complexity of your case and the services required. We believe in transparent pricing with no hidden costs.',
  },
  {
    question: 'Can I track my application status?',
    answer:
      'Yes, we provide real-time application tracking through our client portal. You will receive regular updates via email and SMS at every stage of your application. Our team is also available 24/7 to answer any questions.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <span className="text-gold font-semibold tracking-wider uppercase text-sm">
              FAQ
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="divider-gold mb-6" />
            <p className="text-muted-foreground text-lg mb-8">
              Find answers to common questions about our immigration services. Can't find what
              you're looking for? Our team is always ready to help.
            </p>
            <div className="card-professional p-6 bg-navy text-primary-foreground">
              <h3 className="font-serif text-xl font-bold mb-3">Still have questions?</h3>
              <p className="text-primary-foreground/80 mb-4">
                Book a free consultation with our experts and get personalized answers.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-gold font-semibold hover:underline"
              >
                Contact Us Today →
              </a>
            </div>
          </div>

          {/* Right Content - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="card-professional px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-serif text-lg font-semibold text-navy hover:text-gold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
