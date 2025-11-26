import { Home, Wrench, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: Home,
    title: 'Basement Renovation Under $47K',
    description: 'Transform your unused basement into a beautiful, functional living space with our all-inclusive package.',
    features: [
      'Complete design & planning',
      'Full construction & finishing',
      'Ontario-compliant workmanship',
      'Optional upgrades available'
    ],
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Wrench,
    title: 'Full Home Renovation & Interior Remodeling',
    description: 'Complete home transformations from single rooms to entire properties, designed for modern living.',
    features: [
      'Kitchen & bathroom remodeling',
      'Open concept living spaces',
      'Flooring & finishing upgrades',
      'Custom interior design'
    ],
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function CoreServices() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
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
            Our Core <span className="text-[#00aeef]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized renovation solutions designed to meet your needs and exceed your expectations
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className={`group transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }}
                onMouseEnter={() => setActiveService(idx)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className={`relative bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 overflow-hidden transition-all duration-500 ${
                  activeService === idx
                    ? 'border-[#00aeef] shadow-2xl shadow-[#00aeef]/20'
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-80 lg:h-auto overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          activeService === idx ? 'scale-110' : 'scale-100'
                        }`}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 transition-opacity duration-500 ${
                        activeService === idx ? 'opacity-30' : 'opacity-20'
                      }`}></div>
                      <div className="absolute top-6 left-6">
                        <div className={`p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                          <Icon className="w-10 h-10 text-[#00aeef]" />
                        </div>
                      </div>
                    </div>

                    <div className="p-10 lg:p-12 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#00aeef] transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, featureIdx) => (
                          <div
                            key={featureIdx}
                            className="flex items-center gap-3 group/item"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} group-hover/item:scale-150 transition-transform duration-300`}></div>
                            <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div>
                        <button className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00aeef] to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#00aeef]/50 transition-all duration-300 hover:scale-105">
                          Learn More
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${service.color} transform origin-left transition-transform duration-700 ${
                    activeService === idx ? 'scale-x-100' : 'scale-x-0'
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
