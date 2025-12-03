import { MapPin, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_IMAGES } from '../lib/siteImages';

const workGallery = [
  {
    image: {
      id: 'imagekit-basement-bathroom',
      url: 'https://ik.imagekit.io/6397z4kdz/IMG_2483.heic?updatedAt=1764774580750',
      alt: 'Finished basement bathroom with tiled shower and glass enclosure'
    },
    title: 'Basement Bathroom Finish'
  },
  {
    image: {
      id: 'imagekit-framing-overview',
      url: 'https://ik.imagekit.io/6397z4kdz/IMG_2528.heic?updatedAt=1764774580186',
      alt: 'Basement framing complete with electrical rough-ins'
    },
    title: 'Basement Framing Complete'
  },
  {
    image: {
      id: 'imagekit-laundry-upgrade',
      url: 'https://ik.imagekit.io/6397z4kdz/IMG_2494.heic?updatedAt=1764774580668',
      alt: 'Modern basement laundry nook with upper cabinets and washer dryer'
    },
    title: 'Laundry Nook Upgrade'
  },
  {
    image: {
      id: 'imagekit-custom-railing',
      url: 'https://ik.imagekit.io/6397z4kdz/IMG_2491.heic?updatedAt=1764774580527',
      alt: 'Custom staircase railing with black balusters and oak treads'
    },
    title: 'Custom Staircase Railing'
  },
  {
    image: {
      id: 'imagekit-kitchen-detail',
      url: 'https://ik.imagekit.io/6397z4kdz/IMG_2493.heic?updatedAt=1764774580356',
      alt: 'Renovated kitchen with shaker cabinets and marble backsplash'
    },
    title: 'Kitchen Renovation Detail'
  },
  {
    image: {
      id: 'imagekit-basement-lounge',
      url: 'https://ik.imagekit.io/6397z4kdz/IMG_2527.heic?updatedAt=1764774580442',
      alt: 'Basement living room with sectional sofa and accent lighting'
    },
    title: 'Basement Living Lounge'
  },
  {
    image: {
      id: 'imagekit-finished-living',
      url: 'https://ik.imagekit.io/6397z4kdz/IMG_2484.heic?updatedAt=1764774580260',
      alt: 'Completed living area with recessed lighting and neutral finishes'
    },
    title: 'Finished Living Area'
  }
];

const projects = [
  {
    title: 'Modern Kitchen Transformation',
    location: 'Toronto',
    image: SITE_IMAGES.modernKitchenIsland,
    category: 'Full Home'
  },
  {
    title: 'Basement Family Retreat',
    location: 'Mississauga',
    image: SITE_IMAGES.basementLounge,
    category: 'Basement'
  },
  {
    title: 'Luxury Spa Bathroom',
    location: 'Oakville',
    image: SITE_IMAGES.spaBathroomRetreat,
    category: 'Bathroom'
  },
  {
    title: 'Sunlit Living Refresh',
    location: 'Brampton',
    image: SITE_IMAGES.sunlitSittingRoom,
    category: 'Living Space'
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

        <div className="relative mb-20">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-100 via-gray-100/80 to-transparent pointer-events-none rounded-l-3xl"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-100 via-gray-100/80 to-transparent pointer-events-none rounded-r-3xl"></div>
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-sm shadow-lg">
            <div className="portfolio-marquee gap-6">
              {[...workGallery, ...workGallery].map((item, idx) => (
                <div key={`${item.image.id}-${idx}`} className="w-80 shrink-0">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={item.image.url}
                      alt={item.image.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4">
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                  src={project.image.url}
                  alt={project.image.alt}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    activeProject === idx ? 'scale-110' : 'scale-100'
                  }`}
                  loading="lazy"
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
          <Link
            to="/portfolio"
            className="group px-10 py-5 bg-gray-900 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-gray-900/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
          >
            View Full Portfolio
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
