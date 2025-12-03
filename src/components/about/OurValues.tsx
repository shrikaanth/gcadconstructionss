import { Shield, Sparkles, Eye, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'If we say it, we do it. No hidden fees. No shifting commitments.',
    details: 'Our word is our bond. Every promise made is a promise kept, every timeline honored, every quote transparent.',
    color: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-500'
  },
  {
    icon: Sparkles,
    title: 'Craftsmanship',
    description: 'Every detail matters—from flooring alignment to paint finish.',
    details: 'We take pride in precision. Each cut, each finish, each detail reflects our commitment to excellence.',
    color: 'from-purple-500 to-pink-500',
    iconBg: 'bg-purple-500'
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Clear breakdowns, written agreements, predictable schedules.',
    details: 'No surprises, no hidden costs. You know exactly what to expect at every stage of your project.',
    color: 'from-green-500 to-emerald-500',
    iconBg: 'bg-green-500'
  },
  {
    icon: Heart,
    title: 'Respect',
    description: 'For your home, your time, and your trust in us.',
    details: 'We treat every home as if it were our own, every client as family, every project as a reflection of our values.',
    color: 'from-orange-500 to-red-500',
    iconBg: 'bg-orange-500'
  }
];

export default function OurValues() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState<number | null>(null);
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
            Our <span className="text-[#00aeef]">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide every decision, every project, every interaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={idx}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
                onMouseEnter={() => setActiveValue(idx)}
                onMouseLeave={() => setActiveValue(null)}
              >
                <div className={`relative h-full bg-white rounded-3xl border-2 p-8 transition-all duration-500 ${
                  activeValue === idx
                    ? 'border-[#00aeef] shadow-2xl shadow-[#00aeef]/20 -translate-y-2'
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <div className="absolute -top-6 left-8">
                    <div className={`p-4 bg-gradient-to-br ${value.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="pt-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#00aeef] transition-colors duration-300">
                      {value.title}
                    </h3>

                    <p className="text-lg text-gray-700 mb-4 leading-relaxed font-medium">
                      {value.description}
                    </p>

                    <div className={`overflow-hidden transition-all duration-500 ${
                      activeValue === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-gray-600 leading-relaxed italic">
                          {value.details}
                        </p>
                      </div>
                    </div>

                    <div className={`mt-6 h-1 bg-gradient-to-r ${value.color} rounded-full transform origin-left transition-transform duration-500 ${
                      activeValue === idx ? 'scale-x-100' : 'scale-x-0'
                    }`}></div>
                  </div>

                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Removed closing values highlight block per request */}
      </div>
    </section>
  );
}
