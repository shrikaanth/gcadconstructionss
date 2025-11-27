import { Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const renovationTypes = [
  {
    title: 'Kitchen Transformations',
    description: 'The heart of your home deserves expert attention',
    icon: '🍳',
    features: ['Cabinets', 'Countertops', 'Backsplashes', 'Flooring', 'Lighting'],
    color: 'from-orange-500 to-red-500',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Bathroom Upgrades',
    description: 'Spa-like comfort and modern functionality',
    icon: '🛁',
    features: ['Tiles', 'Vanities', 'Fixtures', 'Walk-in showers', 'Heated floors'],
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Living & Bedroom Spaces',
    description: 'Comfortable, stylish rooms for daily living',
    icon: '🛋️',
    features: ['Walls', 'Flooring', 'Trims', 'Doors', 'Feature elements'],
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Full Home Makeovers',
    description: 'Complete interior transformation with cohesive design',
    icon: '🏠',
    features: ['Open concept', 'Consistent flow', 'Premium finishes', 'Smart layouts', 'Modern touches'],
    color: 'from-green-500 to-emerald-500',
    image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function RenovationTypes() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeType, setActiveType] = useState<number | null>(null);
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
            We <span className="text-[#00aeef]">Renovate</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert renovation services for every room in your home
          </p>
        </div>

        <div className="space-y-8">
          {renovationTypes.map((type, idx) => (
            <div
              key={idx}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
              onMouseEnter={() => setActiveType(idx)}
              onMouseLeave={() => setActiveType(null)}
            >
              <div className={`relative bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 overflow-hidden transition-all duration-500 ${
                activeType === idx
                  ? 'border-[#00aeef] shadow-2xl shadow-[#00aeef]/20'
                  : 'border-gray-200'
              }`}>
                <div className={`grid lg:grid-cols-2 gap-0 ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`relative h-80 lg:h-auto overflow-hidden ${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={type.image}
                      alt={type.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        activeType === idx ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-20 transition-opacity duration-500 ${
                      activeType === idx ? 'opacity-30' : 'opacity-20'
                    }`}></div>

                    <div className="absolute top-6 left-6">
                      <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                        {type.icon}
                      </div>
                    </div>
                  </div>

                  <div className="p-10 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-[#00aeef] transition-colors duration-300">
                      {type.title}
                    </h3>

                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      {type.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <div className={`w-1 h-6 bg-gradient-to-b ${type.color} rounded-full`}></div>
                        Includes:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {type.features.map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-center gap-2 group/item">
                            <div className="p-1 bg-green-100 rounded-full group-hover/item:bg-green-500 transition-colors duration-300">
                              <Check className="w-4 h-4 text-green-600 group-hover/item:text-white transition-colors duration-300" />
                            </div>
                            <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <button className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00aeef] to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#00aeef]/50 transition-all duration-300 hover:scale-105">
                        Learn More
                        <span className="group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${type.color} transform origin-left transition-transform duration-700 ${
                  activeType === idx ? 'scale-x-100' : 'scale-x-0'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
