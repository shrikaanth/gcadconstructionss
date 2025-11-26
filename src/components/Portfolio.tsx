import { MapPin, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: 'Finished Basement',
    location: 'Mississauga',
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Basement'
  },
  {
    title: 'Legal Suite Conversion',
    location: 'Brampton',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Basement'
  },
  {
    title: 'Home Renovation',
    location: 'Oakville',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Full Home'
  },
  {
    title: 'Full Basement Makeover',
    location: 'Scarborough',
    image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Basement'
  }
];

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
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
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiMwMGFlZWYiIGZpbGwtb3BhY2l0eT0iMC4wMyIvPjwvZz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#00aeef]">Work</span>
          </h2>
          <p className="text-xl text-gray-600">
            Real Projects. Real GTA Homes. Real Results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
              onMouseEnter={() => setActiveProject(idx)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    activeProject === idx ? 'scale-110' : 'scale-100'
                  }`}
                />

                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
                  activeProject === idx ? 'opacity-100' : 'opacity-70'
                }`}></div>

                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-[#00aeef] text-white text-sm font-semibold rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>

                <div className={`absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 ${
                  activeProject === idx ? 'translate-y-0' : 'translate-y-4'
                }`}>
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#00aeef] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 text-white/90 mb-4">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg">{project.location}</span>
                  </div>

                  <div className={`flex items-center gap-2 text-[#00aeef] font-semibold transition-all duration-500 ${
                    activeProject === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}>
                    <span>View Project Details</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                <div className={`absolute inset-0 border-4 border-[#00aeef] rounded-3xl transition-opacity duration-500 ${
                  activeProject === idx ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-gray-600 mb-8">
            These are just a few examples of our recent work across the GTA.
            <br />
            Each project is tailored to the homeowner's vision and lifestyle.
          </p>
          <button className="group px-10 py-5 bg-gray-900 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-gray-900/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
            View Full Portfolio
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
