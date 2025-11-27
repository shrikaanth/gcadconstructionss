import { MessageCircle, Calculator, ArrowRight, Phone, Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function FinalCTA() {
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

  const whatsappUrl = 'https://wa.me/14372558805';

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiMwMGFlZWYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div
        className="absolute top-20 left-10 w-72 h-72 bg-[#00aeef] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
      ></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your Home Upgrade Starts With
            <br />
            <span className="text-[#00aeef]">One Conversation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Share your ideas with us. We'll walk your space, understand your vision, and provide a clear plan—no pressure, no obligations.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block p-8 bg-[#00aeef] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#00aeef]/50 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00aeef] to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <Calculator className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Speak With Our Team</h3>
              <p className="text-white/90 mb-4 max-w-md">Chat instantly on WhatsApp for expert advice</p>
              <div className="flex items-center justify-center gap-2 text-white font-semibold">
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </a>

          {/* Secondary card removed per new flow */}
        </div>

        <div className={`bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex p-4 bg-[#00aeef]/20 rounded-2xl mb-4 group-hover:bg-[#00aeef] transition-colors duration-300 group-hover:scale-110">
                <Phone className="w-8 h-8 text-[#00aeef] group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Call Us</h4>
              <p className="text-gray-400">Mon-Fri: 8AM - 6PM</p>
              <a href="tel:+14372558805" className="text-[#00aeef] font-semibold mt-2 hover:underline">
                +1 (437) 255-8805
              </a>
            </div>

            <div className="text-center group">
              <div className="inline-flex p-4 bg-[#00aeef]/20 rounded-2xl mb-4 group-hover:bg-[#00aeef] transition-colors duration-300 group-hover:scale-110">
                <Mail className="w-8 h-8 text-[#00aeef] group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Email Us</h4>
              <p className="text-gray-400">Response within 24 hours</p>
              <p className="text-[#00aeef] font-semibold mt-2">info@gcadconstruction.com</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex p-4 bg-[#00aeef]/20 rounded-2xl mb-4 group-hover:bg-[#00aeef] transition-colors duration-300 group-hover:scale-110">
                <MessageCircle className="w-8 h-8 text-[#00aeef] group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Visit Us</h4>
              <p className="text-gray-400">Serving the GTA</p>
              <p className="text-[#00aeef] font-semibold mt-2">Book a Consultation</p>
            </div>
          </div>
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <span className="text-gray-400">Trusted by families in:</span>
            {['Toronto', 'Mississauga', 'Brampton', 'Scarborough', 'Oakville', 'Markham'].map((city, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 text-sm hover:bg-white/10 hover:border-[#00aeef]/50 transition-all duration-300 cursor-default"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
