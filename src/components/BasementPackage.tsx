import { Check, ArrowRight, Home, Lightbulb, Dumbbell, Archive } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const includedFeatures = [
  {
    category: 'Design & Planning',
    items: [
      'Functional layouts',
      '2D/3D design previews',
      'Utility, lighting & layout optimization'
    ]
  },
  {
    category: 'Full Construction & Finishing',
    items: [
      'Framing, insulation & drywall',
      'Flooring options (vinyl/laminate/engineered)',
      'Modern lighting & electrical',
      'Doors, trims, painting & final finishing'
    ]
  }
];

const upgrades = [
  { icon: Dumbbell, name: 'Home Gym', color: 'from-blue-500 to-cyan-500' },
  { icon: Home, name: 'Wet Bar', color: 'from-purple-500 to-pink-500' },
  { icon: Archive, name: 'Storage Solutions', color: 'from-orange-500 to-red-500' },
  { icon: Lightbulb, name: 'Closet Systems', color: 'from-green-500 to-emerald-500' }
];

const benefits = [
  'Faster timelines',
  'Cleaner finish',
  'Clear cost',
  'Flexible layout ideas'
];

export default function BasementPackage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredUpgrade, setHoveredUpgrade] = useState<number | null>(null);
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
          <div className="inline-block mb-4">
            <div className="px-6 py-3 bg-[#00aeef] text-white font-bold rounded-full text-5xl shadow-lg shadow-[#00aeef]/30 animate-pulse">
              Under $47K
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A Smart, Beautiful Basement
          </h2>
          <p className="text-2xl text-gray-700 mb-4">
            —at a Price That Finally Makes Sense
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Most basements in the GTA stay unused or outdated for years. Our under-$47K package was created for families who want more living space—without spending $90–120K that most contractors quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 h-full">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-3 h-12 bg-[#00aeef] rounded-full"></div>
                What You Get
              </h3>

              {includedFeatures.map((section, idx) => (
                <div key={idx} className="mb-8 last:mb-0">
                  <h4 className="text-xl font-bold text-[#00aeef] mb-4">{section.category}</h4>
                  <div className="space-y-3">
                    {section.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-start gap-3 group"
                      >
                        <div className="mt-1 p-1 bg-green-100 rounded-full group-hover:bg-green-500 transition-colors duration-300">
                          <Check className="w-4 h-4 text-green-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-8 p-4 bg-gradient-to-r from-[#00aeef]/10 to-cyan-500/10 rounded-xl border border-[#00aeef]/20">
                <p className="text-sm text-gray-700 font-medium">
                  ✓ All work is Ontario-compliant, following GTA building and safety standards
                </p>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-3 h-12 bg-purple-500 rounded-full"></div>
                Optional Upgrades
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {upgrades.map((upgrade, idx) => {
                  const Icon = upgrade.icon;
                  return (
                    <div
                      key={idx}
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setHoveredUpgrade(idx)}
                      onMouseLeave={() => setHoveredUpgrade(null)}
                    >
                      <div className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                        hoveredUpgrade === idx
                          ? 'border-transparent shadow-xl scale-105'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${upgrade.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                        <div className={`relative p-3 bg-gradient-to-br ${upgrade.color} rounded-xl inline-block mb-3 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="relative font-semibold text-gray-900">{upgrade.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-6">Why This Package Works for GTA Families</h3>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="group p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#00aeef] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="font-medium">{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            to="/basement-renovation"
            className="group px-10 py-5 bg-[#00aeef] text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-[#00aeef]/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
          >
            Explore the Under-$47K Basement Package
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
