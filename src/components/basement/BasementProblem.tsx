import { X, Check, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const problems = [
  'Wasted space gathering dust',
  'Unclear renovation costs',
  '$90-120K contractor quotes',
  'Months-long timelines',
  'Hidden fees and surprises',
  'Low-quality finishes'
];

const solutions = [
  'Maximize every square foot',
  'Clear $47K starting price',
  'Affordable package pricing',
  '4-6 week completion',
  'Transparent, no surprises',
  'Premium materials included'
];

export default function BasementProblem() {
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
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why GTA Basements Stay <span className="text-[#00aeef]">Unfinished</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Basements are often the most wasted space in GTA homes. Here's why—and how we fix it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-10 border-2 border-red-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-red-500 rounded-xl">
                  <X className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">The Problem</h3>
              </div>

              <div className="space-y-4">
                {problems.map((problem, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-white/60 rounded-xl border border-red-200 hover:border-red-400 transition-all duration-300"
                  >
                    <div className="mt-1 p-1 bg-red-100 rounded-full">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-gray-900 font-medium">{problem}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-red-500 rounded-2xl text-center">
                <p className="text-white font-bold text-lg">
                  Result: Your basement sits empty for years
                </p>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-10 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-[#00aeef] rounded-xl">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Solution</h3>
              </div>

              <div className="space-y-4">
                {solutions.map((solution, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-white/60 rounded-xl border border-green-200 hover:border-[#00aeef] transition-all duration-300 hover:scale-105"
                  >
                    <div className="mt-1 p-1 bg-green-100 rounded-full">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-900 font-medium">{solution}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#00aeef] to-cyan-500 rounded-2xl text-center">
                <p className="text-white font-bold text-lg mb-2">
                  Result: Beautiful basement you'll actually use
                </p>
                <div className="flex items-center justify-center gap-2 text-white/90">
                  <TrendingUp className="w-5 h-5" />
                  <span>Increased home value + extra living space</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                The GCAD Difference
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                We've finished 250+ basements across the GTA with this proven package—transparent pricing, quality work, realistic timelines.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { number: '$47K', label: 'Starting Price' },
                  { number: '4-6', label: 'Weeks Average' },
                  { number: '250+', label: 'Basements Done' }
                ].map((stat, idx) => (
                  <div key={idx} className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#00aeef]/50 transition-all duration-300">
                    <div className="text-4xl font-bold text-[#00aeef] mb-2">{stat.number}</div>
                    <div className="text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
