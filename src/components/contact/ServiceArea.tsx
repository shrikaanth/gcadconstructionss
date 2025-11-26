import { MapPin, Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const cities = [
  'Brampton',
  'Mississauga',
  'Toronto',
  'Scarborough',
  'Etobicoke',
  'Oakville',
  'Vaughan',
  'Milton',
  'Richmond Hill',
  'Markham',
  'Ajax',
  'Pickering',
  'Whitby',
  'Oshawa',
  'Burlington'
];

export default function ServiceArea() {
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiMwMGFlZWYiIGZpbGwtb3BhY2l0eT0iMC4wMyIvPjwvZz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#00aeef]/20 rounded-full mb-6">
            <MapPin className="w-5 h-5 text-[#00aeef]" />
            <span className="text-[#00aeef] font-bold">Service Area</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proudly Serving the <span className="text-[#00aeef]">Greater Toronto Area</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional renovation services across the GTA and surrounding communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-[#00aeef]" />
                Cities We Serve
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {cities.map((city, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-3 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-[#00aeef] hover:shadow-md transition-all duration-300"
                  >
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">{city}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-gray-600 text-center">
                & more GTA communities
              </p>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">
                  Not Sure If We Serve Your Area?
                </h3>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  We travel throughout the Greater Toronto Area and beyond. Contact us to confirm service availability in your location.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <Check className="w-6 h-6 text-[#00aeef] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Fast Response Times</p>
                      <p className="text-sm text-gray-300">Local teams ready to serve you</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <Check className="w-6 h-6 text-[#00aeef] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Free On-Site Consultations</p>
                      <p className="text-sm text-gray-300">We come to you for accurate estimates</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <Check className="w-6 h-6 text-[#00aeef] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">GTA-Wide Expertise</p>
                      <p className="text-sm text-gray-300">Familiar with all local building codes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
