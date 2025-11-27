import { Shield, Clock, DollarSign, Award, CheckCircle, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const benefits = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Full compliance with Ontario building codes and safety standards',
    stat: '100%',
    statLabel: 'Compliant',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Clear, detailed quotes with no hidden fees or surprise charges',
    stat: '0',
    statLabel: 'Hidden Costs',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Realistic timelines we actually stick to, with daily progress updates',
    stat: '95%',
    statLabel: 'On Schedule',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Award,
    title: 'Quality Workmanship',
    description: 'Expert trades, premium materials, and meticulous attention to detail',
    stat: '5★',
    statLabel: 'Average Rating',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Single point of contact throughout your entire renovation journey',
    stat: '1',
    statLabel: 'Project Manager',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: CheckCircle,
    title: 'Clean Work Sites',
    description: 'Respect for your home with daily cleanup and organized workflows',
    stat: '100%',
    statLabel: 'Clean Sites',
    color: 'from-pink-500 to-rose-500'
  }
];

export default function ServiceBenefits() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);
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
            The <span className="text-[#00aeef]">GCAD Advantage</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What sets our renovation services apart from the rest
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className={`group relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
                onMouseEnter={() => setActiveBenefit(idx)}
                onMouseLeave={() => setActiveBenefit(null)}
              >
                <div className={`relative h-full bg-white rounded-3xl border-2 p-8 transition-all duration-500 ${
                  activeBenefit === idx
                    ? 'border-[#00aeef] shadow-2xl shadow-[#00aeef]/20 -translate-y-2'
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <div className="absolute -top-6 left-8">
                    <div className={`p-4 bg-gradient-to-br ${benefit.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="pt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00aeef] transition-colors duration-300">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {benefit.description}
                    </p>

                    <div className={`p-4 bg-gradient-to-br ${benefit.color} rounded-xl text-center`}>
                      <div className="text-3xl font-bold text-white mb-1">
                        {benefit.stat}
                      </div>
                      <div className="text-sm text-white/90">
                        {benefit.statLabel}
                      </div>
                    </div>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${benefit.color} rounded-b-3xl transform origin-left transition-transform duration-500 ${
                    activeBenefit === idx ? 'scale-x-100' : 'scale-x-0'
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
                Experience the Difference
              </h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Join 250+ satisfied homeowners who chose GCAD for their renovation projects
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {['250+ Projects', 'Ontario Licensed', '5-Star Service', 'GTA Trusted'].map((badge, idx) => (
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
