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

        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

            <div className="relative z-10 text-center">
              <div className="inline-block mb-8">
                <div className="px-10 py-5 bg-[#00aeef] text-white font-bold rounded-full text-5xl shadow-2xl shadow-[#00aeef]/50 animate-pulse">
                  Starting Under $47K
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Compare That to $90-120K Most Contractors Charge
              </h3>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Same quality work. Same Ontario compliance. Better price. Faster timeline.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: 'Average Market Price', value: '$90-120K', color: 'bg-red-500/20 border-red-500/30' },
                  { label: 'GCAD Package Price', value: 'Under $47K', color: 'bg-[#00aeef]/20 border-[#00aeef]/30' },
                  { label: 'You Save', value: '$43-73K', color: 'bg-green-500/20 border-green-500/30' }
                ].map((item, idx) => (
                  <div key={idx} className={`p-6 ${item.color} backdrop-blur-sm rounded-xl border-2`}>
                    <p className="text-white/70 text-sm mb-2">{item.label}</p>
                    <p className="text-4xl font-bold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
