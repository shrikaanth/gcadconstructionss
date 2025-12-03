import { CheckCircle, Shield, Clock, Sparkles, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: CheckCircle,
    title: 'Clarity from Day One',
    description: 'Realistic costs, detailed breakdowns, zero surprises.'
  },
  {
    icon: Sparkles,
    title: 'Designs That Reflect Your Lifestyle',
    description: 'Family rooms, gyms, offices, rental suites.'
  },
  {
    icon: Shield,
    title: 'End-to-End Project Handling',
    description: 'Permits, materials, construction, finishing.'
  },
  {
    icon: Users,
    title: 'A Team That Respects Your Home',
    description: 'Clean work, clear communication, consistent progress.'
  }
];

export default function WhyChoose() {
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
    <section ref={sectionRef} className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00aeef] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Homeowners Choose <span className="text-[#00aeef]">GCAD</span>
          </h2>
          <p className="text-2xl text-gray-600 mb-4">Renovation, without the renovation stress.</p>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-4">
              Most homeowners hesitate because renovations feel overwhelming—unclear pricing, unclear timelines, too many decisions.
            </p>
            <p className="text-lg text-gray-900 font-semibold">GCAD was built to fix that.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 md:mb-14">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#00aeef] transition-all duration-500 hover:shadow-xl hover:shadow-[#00aeef]/10 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 2) * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#00aeef]/10 rounded-xl group-hover:bg-[#00aeef] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#00aeef] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#00aeef] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-gradient-to-r from-[#00aeef] to-cyan-500 rounded-3xl p-10 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
            <div className="relative z-10">
              <p className="text-3xl md:text-4xl font-bold text-white mb-4">
                GCAD is not the "Renovation Guy."
              </p>
              <p className="text-3xl md:text-4xl font-bold text-white">
                GCAD is a <span className="text-[#FCD34D]">Renovation Partner</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
