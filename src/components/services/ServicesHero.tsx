import { Wrench, Home, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ServicesHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiMwMGFlZWYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00aeef] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="p-4 bg-[#00aeef]/20 backdrop-blur-sm rounded-2xl border border-[#00aeef]/30">
              <Wrench className="w-12 h-12 text-[#00aeef]" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our <span className="text-[#00aeef] inline-block hover:scale-105 transition-transform duration-300">Services</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-4xl mx-auto">
            Renovation solutions designed for real GTA living.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            GCAD Construction specializes in two core services that significantly improve your home's comfort, functionality, and market value.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#basement" className="group px-8 py-4 bg-[#00aeef] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#00aeef]/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
              <Home className="w-6 h-6" />
              Basement Renovation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>

            <a href="#home-renovation" className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
              <Wrench className="w-6 h-6" />
              Home Renovation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Basement Renovation', subtitle: 'Starting Under $47K', icon: Home },
              { title: 'Home Renovation', subtitle: 'Full Interior Upgrades', icon: Wrench }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#00aeef]/50 transition-all duration-500 hover:scale-105 hover:bg-white/10"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Icon className="w-12 h-12 text-[#00aeef] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
