import { Calendar, Phone, Mail, ArrowRight, Home } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ServicesCTA() {
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

            <div className="absolute top-20 left-10 w-72 h-72 bg-[#00aeef] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="relative z-10 p-12 md:p-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Space?
                </h2>

                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                  Whether it's a basement renovation or a full home makeover, we're here to make it happen. Let's start with a free assessment.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Link
                    to="/basement-renovation"
                    className="group px-10 py-5 bg-[#00aeef] text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-[#00aeef]/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                  >
                    <Home className="w-6 h-6" />
                    Book a Free Basement Assessment
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>

                  <Link
                    to="/contact"
                    className="group px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                  >
                    <Calendar className="w-6 h-6" />
                    Schedule Consultation
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#00aeef]/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#00aeef]/20 rounded-xl group-hover:bg-[#00aeef] transition-colors duration-300 group-hover:scale-110">
                      <Phone className="w-6 h-6 text-[#00aeef] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-left">
                      <p className="text-white/70 text-sm">Call Us Now</p>
                      <p className="text-white font-bold">(416) 555-GCAD</p>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#00aeef]/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#00aeef]/20 rounded-xl group-hover:bg-[#00aeef] transition-colors duration-300 group-hover:scale-110">
                      <Mail className="w-6 h-6 text-[#00aeef] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-left">
                      <p className="text-white/70 text-sm">Email Us</p>
                      <p className="text-white font-bold text-sm">info@gcad.com</p>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#00aeef]/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#00aeef]/20 rounded-xl group-hover:bg-[#00aeef] transition-colors duration-300 group-hover:scale-110">
                      <Calendar className="w-6 h-6 text-[#00aeef] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-left">
                      <p className="text-white/70 text-sm">Hours</p>
                      <p className="text-white font-bold">Mon-Fri 8AM-6PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-400 mb-6">Our Process is Simple:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {['Contact Us', 'Site Assessment', 'Get Your Quote', 'Start Building'].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#00aeef] rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {idx + 1}
                      </div>
                      <span className="text-white font-medium">{step}</span>
                      {idx < 3 && <ArrowRight className="w-4 h-4 text-[#00aeef] ml-2" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-gray-600 font-medium">Proudly serving:</span>
            {['Toronto', 'Mississauga', 'Brampton', 'Scarborough', 'Oakville', 'Markham', 'Vaughan', 'Richmond Hill'].map((city, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-[#00aeef] hover:text-white transition-all duration-300 cursor-default text-sm font-medium"
              >
                {city}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Licensed, insured, and Ontario-compliant renovation services across the Greater Toronto Area
          </p>
        </div>
      </div>
    </section>
  );
}
