import { ArrowRight, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroQuickForm from './HeroQuickForm';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center"
        aria-hidden="true"
      ></div>

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-slate-950/80"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiMwMGFlZWYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-40 mix-blend-overlay"></div>

      <div
        className="absolute top-20 left-10 w-72 h-72 bg-[#00aeef] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-40 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
        aria-hidden="true"
      ></div>
      <div
        className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div
          className={`grid lg:grid-cols-2 gap-12 xl:gap-16 items-center lg:items-start transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00aeef]/10 border border-[#00aeef]/30 rounded-full mb-8 backdrop-blur-sm">
              <CheckCircle className="w-4 h-4 text-[#00aeef]" />
              <span className="text-sm text-gray-300">
                Licensed • Ontario-Approved • 250+ Projects Completed
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ontario’s Leading{' '}
              <span className="text-[#00aeef] inline-block hover:scale-105 transition-transform duration-300">
                Basement Renovation
              </span>{' '}
              Specialists
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl lg:mx-0 mx-auto">
              Serving the Entire GTA
            </p>

            <p className="text-lg md:text-xl text-gray-300/80 mb-8 max-w-2xl lg:mx-0 mx-auto leading-relaxed">
              GCAD Construction specializes in affordable basement transformations starting under $47K
              and full-scale home renovations designed to elevate comfort, function, and property value.
            </p>

            <p className="text-md text-gray-400 mb-12 italic">
              Built with precision. Delivered on time. Made for real Canadian living.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center items-center">
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-[#00aeef] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#00aeef]/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Renovation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00aeef] to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                to="/portfolio"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                See Our Work
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl lg:max-w-none lg:mx-0 mx-auto">
              {[
                { number: '250+', label: 'Renovations Completed' },
                { number: '10+', label: 'Years of Experience' },
                { number: '100%', label: 'Regulation Compliant' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#00aeef]/50 transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-4xl font-bold text-[#00aeef] mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="self-start w-full">
            <HeroQuickForm />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-[#00aeef] rounded-full mx-auto animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
