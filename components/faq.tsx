import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Are there extra charges for installation or filters?',
    answer: 'No. Our flat monthly rate includes everything: equipment, installation, filters, and ongoing service.',
  },
  {
    question: 'How is the cooler connected?',
    answer: 'We use a discreet adapter under a nearby sink if the water source is within ~200 ft. Installation is clean and professional.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Usually less than 1 hour. Our experienced technicians work efficiently to minimize disruption to your workplace.',
  },
  {
    question: 'How is the water filtered?',
    answer: 'Multi-stage filtration: sediment pre-filter, activated carbon block, UF or RO membranes plus UV/ozone disinfection for the cleanest water.',
  },
  {
    question: 'Can we lease more than one system?',
    answer: 'Yes, with discount. Multiple units for larger offices or multiple locations qualify for special pricing.',
  },
  {
    question: 'Where do you deliver 5-gallon jugs and what does it cost?',
    answer: 'Within ~15 miles of Old Greenwich. $10 per jug (5-jug minimum) plus $10/month dispenser rentals. No contracts or delivery fees.',
  },
];

export default function FAQ() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative wave pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path d="M0,400 Q300,300 600,400 T1200,400 V800 H0 Z" fill="url(#gradient1)" />
          <path d="M0,500 Q400,400 800,500 T1200,500 V800 H0 Z" fill="url(#gradient2)" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(147, 197, 253, 0.1)" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(147, 197, 253, 0.05)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container">
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Common Rental Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Get answers to frequently asked questions about our water solutions
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}