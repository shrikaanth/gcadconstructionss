import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#00aeef] rounded-xl">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">GCAD</h3>
                <p className="text-sm text-gray-400">Construction</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Building quality homes and lasting relationships across the GTA. Your trusted partner for basement renovations and home transformations.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-3 bg-white/5 rounded-lg hover:bg-[#00aeef] transition-colors duration-300 group"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/5 rounded-lg hover:bg-[#00aeef] transition-colors duration-300 group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/5 rounded-lg hover:bg-[#00aeef] transition-colors duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Basement Package', 'Services', 'Portfolio', 'Testimonials'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#00aeef] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#00aeef] group-hover:w-4 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Basement Renovations',
                'Kitchen Remodeling',
                'Bathroom Upgrades',
                'Full Home Renovations',
                'Flooring Installation',
                'Design Consultation'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#00aeef] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#00aeef] group-hover:w-4 transition-all duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-[#00aeef] transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[#00aeef] group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white font-semibold">(416) 555-GCAD</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-[#00aeef] transition-colors duration-300">
                  <Mail className="w-5 h-5 text-[#00aeef] group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-semibold">info@gcadconstruction.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-[#00aeef] transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-[#00aeef] group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Service Area</p>
                  <p className="text-white font-semibold">Greater Toronto Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {currentYear} GCAD Construction. All rights reserved. Licensed & Insured.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#00aeef] text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00aeef] text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00aeef] text-sm transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
