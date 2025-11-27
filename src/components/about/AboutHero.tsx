import { Building2, Award, Users, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AboutHero() {
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
            <div className="p-4 bg-[#00aeef] rounded-2xl shadow-xl shadow-[#00aeef]/50">
              <Building2 className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            About <span className="text-[#00aeef] inline-block hover:scale-105 transition-transform duration-300">GCAD Construction</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Ontario’s Trusted Choice for Basement Transformations
          </p>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-400 leading-relaxed">
              GCAD Construction was founded with a simple promise: deliver high-quality home and basement renovations without the stress, hidden charges, or confusing processes homeowners often face.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Award, label: 'Licensed & Insured', color: 'from-blue-500 to-cyan-500' },
              { icon: Users, label: '250+ Happy Clients', color: 'from-purple-500 to-pink-500' },
              { icon: TrendingUp, label: 'GTA Trusted', color: 'from-green-500 to-emerald-500' },
              { icon: Building2, label: 'Quality First', color: 'from-orange-500 to-red-500' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#00aeef]/50 transition-all duration-500 hover:scale-105 hover:bg-white/10"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`inline-flex p-3 bg-gradient-to-br ${item.color} rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
