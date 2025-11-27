import { Calendar, ArrowRight, Phone, Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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

            <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 p-12 md:p-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                    <Calendar className="w-10 h-10 text-white" />
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Start Your Project?
                </h2>

                <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
                  Let's discuss your vision and create a plan that brings it to life. Book a free consultation and discover the GCAD difference.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Link
                    to="/contact"
                    className="group px-10 py-5 bg-white text-[#00aeef] font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                  >
                    <Calendar className="w-6 h-6" />
                    Book a Consultation
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>

                  <Link
                    to="/portfolio"
                    className="group px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                  >
                    View Our Work
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-white/70 text-sm">Call Us</p>
                      <p className="text-white font-bold">(416) 555-GCAD</p>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">Mon-Fri: 8AM - 6PM</p>
                </div>

                <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-white/70 text-sm">Email Us</p>
                      <p className="text-white font-bold text-sm">info@gcad.com</p>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">24hr response time</p>
                </div>

                <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-white/70 text-sm">Schedule</p>
                      <p className="text-white font-bold">Free Consult</p>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">No obligation quote</p>
                </div>
              </div>

              <div className="mt-10 text-center">
                <p className="text-white/80 text-sm">
                  Join 250+ satisfied homeowners across the GTA who trusted GCAD with their renovation dreams
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border border-gray-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What Happens Next?
              </h3>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                {[
                  { step: '1', title: 'Contact Us', desc: 'Reach out via phone, email, or form' },
                  { step: '2', title: 'Site Visit', desc: 'We assess your space and needs' },
                  { step: '3', title: 'Get Quote', desc: 'Receive detailed, transparent pricing' },
                  { step: '4', title: 'Start Building', desc: 'Begin your transformation' }
                ].map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-[#00aeef] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="inline-flex w-12 h-12 bg-[#00aeef] text-white rounded-full items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {item.step}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                    {idx < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-[#00aeef]" />
                      </div>
                    )}
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
