import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'David & Rachel T.', location: 'Toronto', text: 'Our kitchen was outdated and cramped. GCAD completely transformed it into an open, modern space we absolutely love. The attention to detail and quality of work exceeded our expectations.', project: 'Kitchen Renovation' },
  { name: 'Amanda L.', location: 'Oakville', text: 'From the first consultation to final walkthrough, GCAD was professional, communicative, and respectful of our home. Our master bathroom is now a spa-like retreat. Highly recommend!', project: 'Bathroom Upgrade' },
  { name: 'Michael P.', location: 'Vaughan', text: 'We hired GCAD for a full main floor renovation. They knocked down walls, refinished floors, updated lighting—the transformation is incredible. Worth every dollar.', project: 'Full Main Floor' }
];

export default function HomeRenovationTestimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What <span className="text-[#00aeef]">Homeowners</span> Say
          </h2>
          <p className="text-xl text-gray-600">Real feedback from families who transformed their homes with GCAD</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="group relative h-full bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-200 hover:border-[#00aeef] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute -top-4 left-8">
                <div className="p-3 bg-[#00aeef] rounded-xl shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-6">"{testimonial.text}"</blockquote>
                <div className="pt-6 border-t border-gray-200">
                  <p className="font-bold text-gray-900 mb-1">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-sm text-[#00aeef] font-semibold mt-2">{testimonial.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
