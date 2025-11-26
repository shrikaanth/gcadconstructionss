import { Ear, PenTool, Hammer, MessageSquare } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    icon: Ear,
    title: 'We Listen First',
    description: 'Every project starts with understanding how your family lives and what you want your space to feel like.',
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500'
  },
  {
    number: '02',
    icon: PenTool,
    title: 'We Design with Purpose',
    description: 'We create layouts that maximize comfort, functionality, and long-term use.',
    color: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500'
  },
  {
    number: '03',
    icon: Hammer,
    title: 'We Build With Precision',
    description: 'Ontario-compliant methods, licensed trades, and clean work sites—always.',
    color: 'from-green-500 to-emerald-500',
    borderColor: 'border-green-500'
  },
  {
    number: '04',
    icon: MessageSquare,
    title: 'We Communicate Throughout',
    description: 'Daily updates. Weekly milestones. No surprises.',
    color: 'from-orange-500 to-red-500',
    borderColor: 'border-orange-500'
  }
];

export default function OurApproach() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
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
            Our <span className="text-[#00aeef]">Approach</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven process that turns your vision into reality, step by step
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className={`relative p-8 bg-white rounded-3xl border-2 transition-all duration-500 ${
                  activeStep === idx
                    ? `${step.borderColor} shadow-2xl -translate-y-2`
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <div className="absolute -top-6 -left-6">
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <span className="text-white font-bold text-xl">{step.number}</span>
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500`}></div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-4 bg-gradient-to-br ${step.color} rounded-xl group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#00aeef] transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className={`h-1 bg-gradient-to-r ${step.color} rounded-full transform origin-left transition-transform duration-500 ${
                      activeStep === idx ? 'scale-x-100' : 'scale-x-0'
                    }`}></div>
                  </div>
                </div>

                {idx < steps.length - 1 && idx % 2 === 0 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-[#00aeef] rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className={`mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-[#00aeef] to-cyan-500 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Experience the GCAD Difference
              </h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                A process built around you—transparent, efficient, and stress-free from start to finish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
