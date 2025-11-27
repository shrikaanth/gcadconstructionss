import { DollarSign, Check, TrendingUp, Clock, Shield } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const reasons = [
  { icon: DollarSign, title: 'Transparent pricing', desc: 'Know exactly what you\'re paying for' },
  { icon: Clock, title: 'Faster timelines', desc: '4-6 weeks vs. 3-4 months typical' },
  { icon: Shield, title: 'Durable materials', desc: 'Quality that lasts for years' },
  { icon: Check, title: 'Ontario-compliant', desc: 'All codes and safety standards met' },
  { icon: TrendingUp, title: 'Maximize space', desc: 'Every square foot optimized' },
  { icon: Check, title: 'No surprises', desc: 'What we quote is what you pay' }
];

export default function BasementPricing() {
  const [isVisible, setIsVisible] = useState(false);
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
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00aeef] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Homeowners Choose <span className="text-[#00aeef]">This Package</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The smartest way to finish your basement in the GTA
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className={`group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 hover:border-[#00aeef] hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="inline-flex p-4 bg-[#00aeef]/10 rounded-xl mb-4 group-hover:bg-[#00aeef] transition-colors duration-300 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-[#00aeef] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#00aeef] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
