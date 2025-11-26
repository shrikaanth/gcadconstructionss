import { Home, Lightbulb, Users, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const renovationTypes = [
  { name: 'Kitchens', icon: '🍳', color: 'from-orange-500 to-red-500' },
  { name: 'Bathrooms', icon: '🛁', color: 'from-blue-500 to-cyan-500' },
  { name: 'Bedrooms', icon: '🛏️', color: 'from-purple-500 to-pink-500' },
  { name: 'Living Rooms', icon: '🛋️', color: 'from-green-500 to-emerald-500' },
  { name: 'Flooring', icon: '📐', color: 'from-amber-500 to-yellow-500' },
  { name: 'Full Interior', icon: '🏠', color: 'from-cyan-500 to-blue-500' }
];

export default function HomeRenovationService() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredType, setHoveredType] = useState<number | null>(null);
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
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full mb-6">
            <Home className="w-5 h-5 text-purple-500" />
            <span className="text-purple-600 font-semibold">Complete Home Solutions</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Full Home <span className="text-[#00aeef]">Renovations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform any room or your entire home with expert craftsmanship and thoughtful design
          </p>
        </div>

        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">We Renovate:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renovationTypes.map((type, idx) => (
              <div
                key={idx}
                className="group relative"
                onMouseEnter={() => setHoveredType(idx)}
                onMouseLeave={() => setHoveredType(null)}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className={`relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                  hoveredType === idx
                    ? 'border-[#00aeef] shadow-2xl shadow-[#00aeef]/20 -translate-y-2'
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="relative">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">
                      {type.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#00aeef] transition-colors duration-300">
                      {type.name}
                    </h4>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${type.color} rounded-b-2xl transform origin-left transition-transform duration-500 ${
                    hoveredType === idx ? 'scale-x-100' : 'scale-x-0'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

            <div className="relative z-10 p-12">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Why Choose GCAD for Home Renovations
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: TrendingUp,
                    title: 'Adds Property Value',
                    desc: 'Smart renovations that increase your home\'s market worth',
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    icon: Lightbulb,
                    title: 'Quality Materials',
                    desc: 'Durable, locally sourced materials built to last',
                    color: 'from-yellow-500 to-orange-500'
                  },
                  {
                    icon: Users,
                    title: 'Lifestyle Design',
                    desc: 'Spaces designed around how your family actually lives',
                    color: 'from-blue-500 to-cyan-500'
                  }
                ].map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={idx}
                      className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#00aeef]/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className={`inline-flex p-4 bg-gradient-to-br ${benefit.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                      <p className="text-gray-300">{benefit.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 p-8 bg-gradient-to-r from-[#00aeef] to-cyan-500 rounded-2xl text-center">
                <p className="text-2xl font-bold text-white mb-2">
                  Every Project is Custom-Tailored
                </p>
                <p className="text-white/90">
                  We work with your vision, your budget, and your timeline to create the home you've always wanted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
