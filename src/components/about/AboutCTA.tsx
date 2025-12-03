import { Calendar } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import HeroQuickForm from '../HeroQuickForm';

export default function AboutCTA() {
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
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-br from-[#00aeef] to-cyan-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

            <div className="relative z-10 p-12 md:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-white">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                      <Calendar className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-white/90 font-semibold uppercase tracking-wide">
                      Start The Conversation
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    Ready to Start Your Project?
                  </h2>

                  <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                    Let's discuss your vision and create a plan that brings it to life. Book a free consultation and discover the GCAD difference.
                  </p>

                  <div className="h-1 w-20 bg-white/40 rounded-full"></div>
                </div>

                <div className="rounded-2xl shadow-xl overflow-hidden">
                  <HeroQuickForm className="bg-slate-950/95 border border-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional process steps removed per updated layout */}
      </div>
    </section>
  );
}
