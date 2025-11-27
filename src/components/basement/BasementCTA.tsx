import { Calendar, Phone, Mail, ArrowRight, Home } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BasementCTA() {
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
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiMwMGFlZWYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

            <div className="absolute top-20 left-10 w-96 h-96 bg-[#00aeef] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="relative z-10 p-12 md:p-20">
              <div className="text-center mb-12">
                <div className="inline-block mb-8">
                  <div className="px-10 py-5 bg-[#00aeef] text-white font-bold rounded-full text-4xl shadow-2xl shadow-[#00aeef]/50 animate-pulse">
                    Starting Under $47K
                  </div>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Stop Letting Your Basement
                  <br />
                  <span className="text-[#00aeef]">Sit Empty</span>
                </h2>

                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
                  Turn wasted space into your dream basement in just 4-6 weeks
                </p>

                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                  Book a free assessment and we'll walk your space, discuss your vision, and provide a clear, honest quote—no pressure, no obligations.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                  <Link
                    to="/basement-renovation"
                    className="group px-12 py-6 bg-[#00aeef] text-white font-bold text-2xl rounded-xl hover:shadow-2xl hover:shadow-[#00aeef]/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                  >
                    <Home className="w-8 h-8" />
                    Book Free Basement Assessment
                    <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>

                  <a
                    href="tel:+14165554223"
                    className="group px-12 py-6 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold text-2xl rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                  >
                    <Phone className="w-8 h-8" />
                    Call Now
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#00aeef]/50 transition-all duration-300 hover:scale-105 text-center">
                  <div className="inline-flex p-4 bg-[#00aeef]/20 rounded-xl mb-4 group-hover:bg-[#00aeef] transition-colors duration-300 group-hover:scale-110">
                    <Phone className="w-8 h-8 text-[#00aeef] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-white/70 text-sm mb-2">Call Us</p>
                  <p className="text-white font-bold text-xl">(416) 555-GCAD</p>
                  <p className="text-white/60 text-sm mt-2">Mon-Fri: 8AM - 6PM</p>
                </div>

                <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#00aeef]/50 transition-all duration-300 hover:scale-105 text-center">
                  <div className="inline-flex p-4 bg-[#00aeef]/20 rounded-xl mb-4 group-hover:bg-[#00aeef] transition-colors duration-300 group-hover:scale-110">
                    <Mail className="w-8 h-8 text-[#00aeef] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-white/70 text-sm mb-2">Email Us</p>
                  <p className="text-white font-bold text-lg">info@gcad.com</p>
                  <p className="text-white/60 text-sm mt-2">24hr response time</p>
                </div>

                <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#00aeef]/50 transition-all duration-300 hover:scale-105 text-center">
                  <div className="inline-flex p-4 bg-[#00aeef]/20 rounded-xl mb-4 group-hover:bg-[#00aeef] transition-colors duration-300 group-hover:scale-110">
                    <Calendar className="w-8 h-8 text-[#00aeef] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-white/70 text-sm mb-2">Free Assessment</p>
                  <p className="text-white font-bold text-lg">No Obligation</p>
                  <p className="text-white/60 text-sm mt-2">Clear, honest quote</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-400 mb-4">What Happens Next?</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {['1. Free Assessment', '2. Get Clear Quote', '3. Approve Design', '4. Start Building'].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium">
                        {step}
                      </span>
                      {idx < 3 && <ArrowRight className="w-4 h-4 text-[#00aeef]" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-12 text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-wrap items-center justify-center gap-3">
            {['✓ 250+ Basements Built', '✓ Ontario Licensed', '✓ 4-6 Week Timeline', '✓ Clear $47K Pricing', '✓ No Hidden Fees'].map((badge, idx) => (
              <span
                key={idx}
                className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold hover:bg-[#00aeef] hover:text-white transition-all duration-300"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
