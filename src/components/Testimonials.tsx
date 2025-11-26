import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Sandeep',
    location: 'Mississauga',
    text: 'We interviewed four contractors. GCAD was the only one who gave us a realistic cost and timeline. Our basement looks better than our upstairs now.',
    rating: 5
  },
  {
    name: 'Luis & Maria',
    location: 'Brampton',
    text: 'The $47K package made it possible for us to finish the basement without breaking our budget. Clean work, professional team, excellent finish.',
    rating: 5
  },
  {
    name: 'Navneet',
    location: 'Scarborough',
    text: 'They transformed our old home into a modern, bright space. The project manager kept us updated daily. Very trustworthy team.',
    rating: 5
  }
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
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

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00aeef] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What <span className="text-[#00aeef]">Homeowners</span> Say
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from real GTA families
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-2xl border border-gray-200">
              <div className="absolute -top-6 left-12">
                <div className="p-4 bg-[#00aeef] rounded-2xl shadow-xl">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <div className="mb-6 flex justify-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-6 h-6 text-yellow-400 fill-yellow-400"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    />
                  ))}
                </div>

                <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 text-center font-medium">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setCurrentIndex(idx);
                        setTimeout(() => setIsAnimating(false), 500);
                      }
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? 'w-12 bg-[#00aeef]'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 bg-white rounded-full shadow-xl border border-gray-200 hover:bg-[#00aeef] hover:text-white transition-all duration-300 hover:scale-110 group"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 bg-white rounded-full shadow-xl border border-gray-200 hover:bg-[#00aeef] hover:text-white transition-all duration-300 hover:scale-110 group"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className={`mt-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                What Makes GCAD a Safe Choice
              </h3>
              <p className="text-gray-300 text-lg mb-10">
                Renovation is a big decision. Here's why families trust us with their homes:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Accurate Estimates', desc: 'No inflated numbers' },
                  { title: 'Licensed & Insured', desc: 'Ontario building standards' },
                  { title: '100+ Projects', desc: 'Proven results' },
                  { title: 'Project Manager', desc: 'One point of contact' },
                  { title: 'Clean Workflow', desc: 'Daily updates' },
                  { title: 'Transparent Pricing', desc: 'No hidden costs' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#00aeef]/50 transition-all duration-300 hover:scale-105"
                  >
                    <h4 className="text-xl font-bold text-[#00aeef] mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                {['WSIB Covered', 'Ontario-Approved', 'Licensed & Insured', 'Transparent Pricing'].map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-6 py-3 bg-[#00aeef]/20 border border-[#00aeef]/50 text-[#00aeef] font-semibold rounded-full backdrop-blur-sm hover:bg-[#00aeef]/30 transition-all duration-300"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
