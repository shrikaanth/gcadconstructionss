import { Hammer, Bath, Home, Bed, Grid, ArrowRight, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  { icon: Hammer, name: 'Kitchens', description: 'Modern, functional kitchen renovations', color: 'from-orange-500 to-red-500' },
  { icon: Bath, name: 'Bathrooms', description: 'Spa-like bathroom transformations', color: 'from-blue-500 to-cyan-500' },
  { icon: Home, name: 'Living Spaces', description: 'Open concept living areas', color: 'from-green-500 to-emerald-500' },
  { icon: Bed, name: 'Bedrooms', description: 'Comfortable bedroom upgrades', color: 'from-purple-500 to-pink-500' },
  { icon: Grid, name: 'Flooring Upgrades', description: 'Hardwood, tile, and modern finishes', color: 'from-amber-500 to-yellow-500' },
  { icon: TrendingUp, name: 'Full Home Transformations', description: 'Complete home makeovers', color: 'from-cyan-500 to-blue-500' }
];

const differentiators = [
  'High-quality materials sourced locally',
  'Practical design ideas that increase home value',
  'Respect for timelines and clean site management',
  'Transparent pricing before we begin'
];

export default function HomeRenovation() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
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
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#00aeef]/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Home <span className="text-[#00aeef]">Renovation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From Single-Room Upgrades to Full Home Makeovers—We Build for Long-Term Living
          </p>
          <div className="mt-6 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700">
              Whether your home needs a fresh look or a complete redesign, GCAD helps transform your space with craftsmanship that stands the test of Canadian weather, lifestyle, and family needs.
            </p>
          </div>
        </div>

        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">We Renovate:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative"
                  onMouseEnter={() => setActiveService(idx)}
                  onMouseLeave={() => setActiveService(null)}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className={`relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                    activeService === idx
                      ? 'border-[#00aeef] shadow-2xl shadow-[#00aeef]/20 -translate-y-2'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                    <div className="relative">
                      <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#00aeef] transition-colors duration-300">
                        {service.name}
                      </h4>

                      <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                        {service.description}
                      </p>

                      <div className={`mt-4 flex items-center gap-2 text-[#00aeef] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                        activeService === idx ? 'translate-x-0' : '-translate-x-4'
                      }`}>
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                What Sets Our Home Renovation Apart
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {differentiators.map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#00aeef]/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-2 h-2 bg-[#00aeef] rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <p className="text-white text-lg">{item}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-2xl text-white font-semibold mb-8">
                  GCAD delivers homes that look modern and feel effortless.
                </p>
                <button className="group px-10 py-5 bg-[#00aeef] text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-[#00aeef]/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
                  View Home Renovation Services
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
