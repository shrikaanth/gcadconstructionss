import { ArrowRight, Home, Sparkles, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HomeRenovationHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiMwMGFlZWYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#00aeef] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Home Renovation &
            <br />
            <span className="text-[#00aeef]">Interior Remodeling</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12">
            Transform your home into a modern, comfortable, beautifully finished space.
          </p>
          <button className="group px-10 py-5 bg-[#00aeef] text-white font-bold text-xl rounded-xl hover:shadow-2xl hover:shadow-[#00aeef]/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
            Start Your Home Upgrade
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
