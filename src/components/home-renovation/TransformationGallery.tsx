import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const transformations = [
  {
    title: 'Modern Kitchen Renovation',
    location: 'Toronto',
    before: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=400',
    after: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete kitchen transformation with custom cabinets and quartz countertops'
  },
  {
    title: 'Luxury Bathroom Update',
    location: 'Mississauga',
    before: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=400',
    after: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Spa-inspired bathroom with walk-in shower and heated floors'
  },
  {
    title: 'Open Concept Living',
    location: 'Brampton',
    before: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=400',
    after: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Wall removal creating bright, open living and dining space'
  }
];

export default function TransformationGallery() {
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Before & After <span className="text-[#00aeef]">Transformations</span>
          </h2>
          <p className="text-xl text-gray-600">
            See the dramatic difference quality renovation makes
          </p>
        </div>

        <div className="space-y-12">
          {transformations.map((project, idx) => (
            <div
              key={idx}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-[#00aeef] hover:shadow-2xl transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div className="relative group">
                    <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-red-500 text-white font-bold rounded-lg shadow-lg">
                      BEFORE
                    </div>
                    <img
                      src={project.before}
                      alt={`${project.title} before`}
                      className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="relative group">
                    <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-green-500 text-white font-bold rounded-lg shadow-lg">
                      AFTER
                    </div>
                    <img
                      src={project.after}
                      alt={`${project.title} after`}
                      className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-[#00aeef] font-semibold mb-3">{project.location}</p>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Link to="/portfolio" className="group px-10 py-5 bg-[#00aeef] text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-[#00aeef]/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
            View Full Portfolio
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
