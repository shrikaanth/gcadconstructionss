import { PenTool, Home, Droplet, Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const included = [
  {
    category: 'Bedroom Suites',
    icon: PenTool,
    color: 'from-blue-500 to-cyan-500',
    items: [
      { name: 'Two full bedrooms', desc: 'Built-in closets, egress windows, and sound-insulated walls' },
      { name: 'Smart layout planning', desc: 'Comfortable spacing for sleeping, storage, or flex use' }
    ]
  },
  {
    category: '10 FT Kitchenette',
    icon: Home,
    color: 'from-purple-500 to-pink-500',
    items: [
      { name: '10-foot linear kitchen', desc: 'Premium cabinetry, quartz counters, backsplash, and lighting' },
      { name: 'Appliance-ready hookups', desc: 'Electrical, plumbing, and ventilation prepared for your appliances' }
    ]
  },
  {
    category: 'Luxury Bathroom',
    icon: Droplet,
    color: 'from-green-500 to-emerald-500',
    items: [
      { name: 'Full bathroom build', desc: 'Custom shower or tub, vanity, lighting, and tile finishes' },
      { name: 'Under 700 sq ft package', desc: 'Optimized footprint with fixtures, storage, and ventilation' }
    ]
  }
];

export default function BasementIncludes() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What's <span className="text-[#00aeef]">Included</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for a complete basement transformation—design to final finish
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {included.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div
                key={idx}
                className={`group transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
                onMouseEnter={() => setActiveCategory(idx)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className={`relative h-full bg-white rounded-3xl border-2 p-8 transition-all duration-500 ${
                  activeCategory === idx
                    ? 'border-[#00aeef] shadow-2xl shadow-[#00aeef]/20 -translate-y-2'
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <div className="absolute -top-6 left-8">
                    <div className={`p-4 bg-gradient-to-br ${section.color} rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="pt-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-[#00aeef] transition-colors duration-300">
                      {section.category}
                    </h3>

                    <div className="space-y-4">
                      {section.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="group/item p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-[#00aeef]/30 transition-all duration-300 hover:scale-105"
                        >
                          <div className="flex items-start gap-3 mb-2">
                            <div className="mt-1 p-1 bg-green-100 rounded-full group-hover/item:bg-green-500 transition-colors duration-300">
                              <Check className="w-4 h-4 text-green-600 group-hover/item:text-white transition-colors duration-300" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 group-hover/item:text-[#00aeef] transition-colors duration-300">
                                {item.name}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${section.color} rounded-b-3xl transform origin-left transition-transform duration-500 ${
                    activeCategory === idx ? 'scale-x-100' : 'scale-x-0'
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-gradient-to-r from-[#00aeef] to-cyan-500 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All Work is Ontario-Compliant
              </h3>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Every basement we build follows GTA building codes and safety standards. Licensed trades, proper permits, inspections—we handle it all.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {['Licensed Contractors', 'Building Permits', 'Safety Inspections', 'Code Compliance'].map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
