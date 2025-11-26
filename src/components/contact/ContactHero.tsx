import { MessageSquare, Home, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ContactHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiMwMGFlZWYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="absolute top-20 left-10 w-96 h-96 bg-[#00aeef] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#00aeef]/20 border border-[#00aeef]/30 rounded-full mb-8 backdrop-blur-sm">
            <MessageSquare className="w-5 h-5 text-[#00aeef]" />
            <span className="text-[#00aeef] font-semibold">Get In Touch</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Contact <span className="text-[#00aeef] inline-block hover:scale-105 transition-transform duration-300">GCAD Construction</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-4xl mx-auto">
            Let's Create a Space You'll Love Living In
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Share your renovation details, and our team will get back to you with a clear plan, timeline, and estimate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { icon: MessageSquare, title: 'Quick Response', desc: 'Within 24 hours' },
              { icon: Home, title: 'Free Consultation', desc: 'No obligations' }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#00aeef]/50 transition-all duration-500 hover:scale-105 hover:bg-white/10"
                >
                  <div className="inline-flex p-3 bg-[#00aeef]/20 rounded-xl mb-3 group-hover:bg-[#00aeef] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#00aeef] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-[#00aeef]" />
      </div>
    </section>
  );
}
