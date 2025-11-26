import { Star, Quote } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Sandeep K.',
    location: 'Mississauga',
    text: 'We interviewed four contractors. GCAD was the only one who gave us a realistic cost and timeline for our basement. Our basement looks better than our upstairs now. Worth every penny of the $47K.',
    rating: 5,
    project: 'Full Basement Renovation'
  },
  {
    name: 'Luis & Maria',
    location: 'Brampton',
    text: 'The $47K package made it possible for us to finish the basement without breaking our budget. Clean work, professional team, excellent finish. They completed it in 5 weeks as promised.',
    rating: 5,
    project: 'Basement Package'
  },
  {
    name: 'Jennifer S.',
    location: 'Scarborough',
    text: 'Our basement was just storage for 8 years. GCAD turned it into a beautiful guest suite and home office. The 3D visualization helped us see exactly what we were getting. Highly recommend!',
    rating: 5,
    project: 'Basement Conversion'
  }
];

export default function BasementTestimonials() {
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
            What <span className="text-[#00aeef]">Homeowners</span> Say
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from GTA families who chose our basement package
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="relative h-full bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-200 hover:border-[#00aeef] hover:shadow-2xl hover:shadow-[#00aeef]/20 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute -top-4 left-8">
                  <div className="p-3 bg-[#00aeef] rounded-xl shadow-lg">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 leading-relaxed mb-6">
                    "{testimonial.text}"
                  </blockquote>

                  <div className="pt-6 border-t border-gray-200">
                    <p className="font-bold text-gray-900 mb-1">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-sm text-[#00aeef] font-semibold mt-2">{testimonial.project}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
