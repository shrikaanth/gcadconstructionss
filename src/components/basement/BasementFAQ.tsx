import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const faqs = [
  {
    question: 'What exactly is included in the $47K package?',
    answer: 'The package includes complete design & planning (layouts, 3D visualization), full construction (framing, insulation, drywall), premium flooring, electrical work, lighting, painting, trims, and all finishing touches. Everything you need for a fully finished basement—no hidden costs.'
  },
  {
    question: 'How long does a basement renovation take?',
    answer: 'Most basement projects are completed in 4-6 weeks from start to finish. The exact timeline depends on the size of your basement and any optional upgrades. We provide a detailed schedule before we begin and stick to it.'
  },
  {
    question: 'Do you handle permits and inspections?',
    answer: 'Yes! We handle all permits, building code compliance, and inspections. Every basement we build meets Ontario building standards and GTA safety requirements. You don\'t need to worry about any of the paperwork.'
  },
  {
    question: 'Can I customize the layout?',
    answer: 'Absolutely. We work with you to create a layout that fits your lifestyle—whether it\'s a home office, guest suite, gym, play area, or entertainment space. The 2D/3D visualization helps you see exactly what you\'re getting before construction starts.'
  },
  {
    question: 'What if I want to add a bathroom or wet bar?',
    answer: 'No problem! Bathrooms, wet bars, custom storage, and feature walls are available as optional upgrades. We\'ll provide clear pricing for any additions you want to include.'
  },
  {
    question: 'Is the $47K price guaranteed?',
    answer: 'Yes. The price we quote is the price you pay—no hidden fees or surprise charges. The only additional costs would be optional upgrades you choose to add, which we\'ll discuss upfront with transparent pricing.'
  },
  {
    question: 'Do you provide a warranty?',
    answer: 'Yes, all our work comes with a warranty. We use quality materials and experienced trades, so you can trust that your basement is built to last.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve the entire Greater Toronto Area including Toronto, Mississauga, Brampton, Scarborough, Oakville, Markham, Vaughan, and Richmond Hill.'
  }
];

export default function BasementFAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiMwMGFlZWYiIGZpbGwtb3BhY2l0eT0iMC4wMyIvPjwvZz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-[#00aeef]">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our basement renovation package
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#00aeef] transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-[#00aeef] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === idx ? 'max-h-96 mt-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed pt-4 border-t border-gray-200">
                    {faq.answer}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
