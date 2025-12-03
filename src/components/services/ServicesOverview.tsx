import { Home, Wrench, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { SITE_IMAGES } from '../../lib/siteImages';

const services = [
  {
    icon: Home,
    title: 'Basement Renovation',
    subtitle: 'Starting Under $47K',
    description: 'A fully finished basement at a budget-friendly price—designed to maximize usable space without compromising quality.',
    includes: [
      '2D/3D designs',
      'Framing & insulation',
      'Drywall & flooring',
      'Electrical & lighting',
      'Paint, trims & doors',
      'Ontario-compliant construction'
    ],
    idealFor: ['Family room', 'Office', 'Guest suite', 'Play area', 'Gym'],
    upgrades: ['Bathroom', 'Wet bar', 'Storage', 'Accent walls'],
    color: 'from-blue-500 to-cyan-500',
    image: SITE_IMAGES.basementLounge,
    route: '/basement-renovation'
  },
  {
    icon: Wrench,
    title: 'Home Renovation & Interior Upgrades',
    subtitle: 'Full Home Transformation',
    description: 'Turn outdated rooms into fresh, functional spaces with thoughtful design and clean workmanship.',
    includes: [
      'Kitchens',
      'Bathrooms',
      'Bedrooms',
      'Living rooms',
      'Flooring',
      'Full interior transformations'
    ],
    idealFor: ['Modern kitchens', 'Spa bathrooms', 'Open concept', 'Hardwood floors'],
    upgrades: ['Custom cabinetry', 'Smart home', 'Lighting design', 'Premium finishes'],
    color: 'from-purple-500 to-pink-500',
    image: SITE_IMAGES.modernKitchenIsland,
    route: '/home-renovation'
  }
];

const whyItWorks = [
  'Adds long-term property value',
  'Uses durable, locally sourced materials',
  'Designed around your lifestyle'
];

export default function ServicesOverview() {
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
        <div className="space-y-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                id={idx === 0 ? 'basement' : 'home-renovation'}
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }}
                onMouseEnter={() => setActiveService(idx)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className={`relative bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 overflow-hidden transition-all duration-500 ${
                  activeService === idx
                    ? 'border-[#00aeef] shadow-2xl shadow-[#00aeef]/20'
                    : 'border-gray-200'
                }`}>
                  <div className={`grid lg:grid-cols-2 gap-0 ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    <div className={`relative h-96 lg:h-auto overflow-hidden ${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <Link to={service.route} className="group/hero block h-full">
                        <img
                          src={service.image.url}
                          alt={service.image.alt}
                          className={`w-full h-full object-cover transition-transform duration-700 ${
                            activeService === idx ? 'scale-110' : 'scale-100'
                          }`}
                          loading="lazy"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 transition-opacity duration-500 ${
                          activeService === idx ? 'opacity-30' : 'opacity-20'
                        }`}></div>
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-6 left-6">
                          <div className="px-6 py-3 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                            <span className="text-[#00aeef] font-bold text-lg">{service.subtitle}</span>
                          </div>
                        </div>
                        <div className="absolute bottom-6 right-6 flex items-center gap-2 text-white font-semibold opacity-0 group-hover/hero:opacity-100 transition-all duration-300">
                          View {service.title}
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </Link>
                    </div>

                    <div className="p-10 lg:p-12">
                      <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>

                      <Link to={service.route} className="inline-flex">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-[#00aeef] transition-colors duration-300">
                          {service.title}
                        </h3>
                      </Link>

                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <div className={`w-1 h-6 bg-gradient-to-b ${service.color} rounded-full`}></div>
                          Includes:
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {service.includes.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-center gap-2 group/item">
                              <Check className="w-5 h-5 text-green-500 group-hover/item:scale-125 transition-transform duration-300" />
                              <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">Ideal For:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.idealFor.map((item, itemIdx) => (
                              <span
                                key={itemIdx}
                                className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-[#00aeef] hover:text-white transition-all duration-300 cursor-default"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">Upgrades Available:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.upgrades.map((item, itemIdx) => (
                              <span
                                key={itemIdx}
                                className={`px-3 py-1.5 bg-gradient-to-r ${service.color} text-white text-sm rounded-lg hover:scale-110 transition-transform duration-300 cursor-default shadow-md`}
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Why It Works</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {whyItWorks.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#00aeef]/50 transition-all duration-300 hover:scale-105 text-center"
                  >
                    <Check className="w-8 h-8 text-[#00aeef] mx-auto mb-3" />
                    <p className="text-white font-medium">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/basement-renovation"
                  className="group px-10 py-5 bg-[#00aeef] text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-[#00aeef]/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                >
                  Basement Packages
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <Link
                  to="/home-renovation"
                  className="group px-10 py-5 bg-white/10 text-white font-bold text-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                >
                  Home Renovation Plans
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
