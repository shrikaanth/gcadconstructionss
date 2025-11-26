import { PenTool, Hammer, Sparkles, TrendingUp, Check, DollarSign } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const included = [
  {
    category: 'Design & Planning',
    icon: PenTool,
    items: ['Functional layouts', '2D/3D visualization', 'Lighting & utility planning'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Construction & Finishing',
    icon: Hammer,
    items: ['Framing, insulation & drywall', 'Premium vinyl/laminate flooring', 'Electrical, lighting & fixtures', 'Painting, trim & finishing touches'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    category: 'Optional Enhancements',
    icon: Sparkles,
    items: ['Bathroom', 'Wet bar', 'Custom storage', 'Feature walls'],
    color: 'from-green-500 to-emerald-500'
  }
];

const benefits = [
  { icon: DollarSign, title: 'Transparent pricing', desc: 'Clear costs from day one' },
  { icon: TrendingUp, title: 'Faster timelines', desc: 'Efficient project delivery' },
  { icon: Check, title: 'Durable materials', desc: 'Built to last' },
  { icon: Sparkles, title: 'Ontario-compliant', desc: 'Safety standards met' }
];

export default function BasementRenovation() {
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiMwMGFlZWYiIGZpbGwtb3BhY2l0eT0iMC4wMyIvPjwvZz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <div className="px-8 py-4 bg-[#00aeef] text-white font-bold rounded-full text-4xl shadow-xl shadow-[#00aeef]/30">
              Starting Under $47K
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Basement Renovation <span className="text-[#00aeef]">Package</span>
          </h2>
          <p className="text-2xl text-gray-700 mb-4">
            A complete basement makeover—affordable, smart, and beautifully finished.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Basements are often the most wasted space in GTA homes. Our under-$47K package helps homeowners turn them into warm, functional, modern living areas without overspending.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {included.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div
                key={idx}
                className={`group transition-all duration-1000 delay-${idx * 150} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="relative h-full bg-white rounded-3xl border-2 border-gray-200 p-8 hover:border-[#00aeef] hover:shadow-2xl hover:shadow-[#00aeef]/20 transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute -top-6 left-8">
                    <div className={`p-4 bg-gradient-to-br ${section.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="pt-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-[#00aeef] transition-colors duration-300">
                      {section.category}
                    </h3>

                    <div className="space-y-3">
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-3 group/item">
                          <div className="mt-1 p-1 bg-green-100 rounded-full group-hover/item:bg-green-500 transition-colors duration-300">
                            <Check className="w-4 h-4 text-green-600 group-hover/item:text-white transition-colors duration-300" />
                          </div>
                          <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${section.color} rounded-b-3xl transform origin-left transition-transform duration-500 group-hover:scale-x-100 scale-x-0`}></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl p-10 border-2 border-gray-200 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Homeowners Choose This Package
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#00aeef] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                  >
                    <div className="inline-flex p-3 bg-[#00aeef]/10 rounded-xl mb-4 group-hover:bg-[#00aeef] transition-colors duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-[#00aeef] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-[#00aeef] to-cyan-500 rounded-2xl p-8 text-center">
              <p className="text-white text-lg mb-2">
                Plus: Designs that maximize usable space
              </p>
              <p className="text-white/90 text-sm">
                Every square foot is optimized for comfort and function
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
