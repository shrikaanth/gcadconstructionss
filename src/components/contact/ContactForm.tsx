import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  project_type: string;
  message: string;
}

export default function ContactForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    city: '',
    project_type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitStatus('success');
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: '',
      project_type: '',
      message: ''
    });
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00aeef] to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Your <span className="text-[#00aeef]">Free Estimate</span>
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-2xl flex items-start gap-4 animate-fadeIn">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-green-900 mb-1">Message Sent Successfully!</h3>
                  <p className="text-green-700">
                    Thank you for contacting us. Our team will review your request and get back to you within 24 hours.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#00aeef] focus:ring-4 focus:ring-[#00aeef]/20 transition-all duration-300 outline-none"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#00aeef] focus:ring-4 focus:ring-[#00aeef]/20 transition-all duration-300 outline-none"
                    placeholder="+1 (437) 255-8805"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#00aeef] focus:ring-4 focus:ring-[#00aeef]/20 transition-all duration-300 outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-bold text-gray-900 mb-2">
                    City/Location *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#00aeef] focus:ring-4 focus:ring-[#00aeef]/20 transition-all duration-300 outline-none"
                    placeholder="Toronto"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="project_type" className="block text-sm font-bold text-gray-900 mb-2">
                  Type of Project *
                </label>
                <select
                  id="project_type"
                  name="project_type"
                  required
                  value={formData.project_type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#00aeef] focus:ring-4 focus:ring-[#00aeef]/20 transition-all duration-300 outline-none appearance-none bg-white cursor-pointer"
                >
                  <option value="">Select a project type</option>
                  <option value="Basement Under $47K">Basement Under $47K</option>
                  <option value="Home Renovation">Home Renovation</option>
                  <option value="Kitchen Renovation">Kitchen Renovation</option>
                  <option value="Bathroom Renovation">Bathroom Renovation</option>
                  <option value="Full Home Makeover">Full Home Makeover</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#00aeef] focus:ring-4 focus:ring-[#00aeef]/20 transition-all duration-300 outline-none resize-none"
                  placeholder="Tell us about your renovation project, timeline, budget, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full px-10 py-5 bg-[#00aeef] text-white font-bold text-xl rounded-xl hover:shadow-2xl hover:shadow-[#00aeef]/50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    Send Message
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-600">
                By submitting this form, you agree to be contacted by GCAD Construction regarding your project.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
