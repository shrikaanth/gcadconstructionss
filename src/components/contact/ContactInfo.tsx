import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function ContactInfo() {
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
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch <span className="text-[#00aeef]">Today</span>
          </h2>
          <p className="text-xl text-gray-600">
            Multiple ways to reach our team
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Phone,
              title: 'Call Us',
              primary: '(416) 555-GCAD',
              secondary: 'Mon-Sat: 9AM - 7PM',
              color: 'from-blue-500 to-cyan-500',
              action: 'tel:4165554223'
            },
            {
              icon: MessageCircle,
              title: 'WhatsApp',
              primary: '(416) 555-GCAD',
              secondary: 'Quick responses',
              color: 'from-green-500 to-emerald-500',
              action: 'https://wa.me/14165554223'
            },
            {
              icon: Mail,
              title: 'Email Us',
              primary: 'info@gcad.com',
              secondary: '24hr response time',
              color: 'from-purple-500 to-pink-500',
              action: 'mailto:info@gcad.com'
            },
            {
              icon: Clock,
              title: 'Business Hours',
              primary: 'Monday - Saturday',
              secondary: '9:00 AM - 7:00 PM',
              color: 'from-orange-500 to-red-500'
            }
          ].map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <div
                key={idx}
                className={`group transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <a
                  href={contact.action}
                  className={`block h-full bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-200 hover:border-[#00aeef] hover:shadow-2xl hover:shadow-[#00aeef]/20 transition-all duration-500 hover:-translate-y-2 text-center ${
                    !contact.action ? 'pointer-events-none' : ''
                  }`}
                >
                  <div className={`inline-flex p-5 bg-gradient-to-br ${contact.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00aeef] transition-colors duration-300">
                    {contact.title}
                  </h3>

                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    {contact.primary}
                  </p>

                  <p className="text-sm text-gray-600">
                    {contact.secondary}
                  </p>
                </a>
              </div>
            );
          })}
        </div>

        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What Happens After You Contact Us?
              </h3>

              <div className="grid md:grid-cols-4 gap-6 mt-10">
                {[
                  { step: '01', title: 'Quick Response', desc: 'We reply within 24 hours' },
                  { step: '02', title: 'Free Consultation', desc: 'Discuss your project needs' },
                  { step: '03', title: 'Detailed Quote', desc: 'Clear pricing breakdown' },
                  { step: '04', title: 'Start Building', desc: 'Transform your space' }
                ].map((step, idx) => (
                  <div key={idx} className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#00aeef] text-white font-bold text-xl rounded-full mb-4">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-300">{step.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-xl text-gray-300 mt-10 max-w-3xl mx-auto">
                We're here to make your renovation journey smooth and stress-free from start to finish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
