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
              primary: '+1 (437) 269-8805',
              secondary: 'Mon-Sat: 9AM - 7PM',
              color: 'from-blue-500 to-cyan-500',
              action: 'tel:+14372698805'
            },
            {
              icon: MessageCircle,
              title: 'Chat on WhatsApp',
              primary: '+1 (437) 269-8805',
              secondary: 'Instant answers from our team',
              color: 'from-green-500 to-emerald-500',
              action: 'https://wa.me/14372698805'
            },
            {
              icon: Mail,
              title: 'Email Us',
              primary: 'gcadconstruction1@gmail.com',
              secondary: '24hr response time',
              color: 'from-purple-500 to-pink-500',
              action: 'mailto:gcadconstruction1@gmail.com'
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
      </div>
    </section>
  );
}
