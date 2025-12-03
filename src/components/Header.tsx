import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gcadLogo from '../../GCAD Logo.png';

const navLinks = [
  { name: 'Home', href: '/', type: 'route' },
  { name: 'About', href: '/about', type: 'route' },
  { name: 'Services', href: '/services', type: 'route', hasDropdown: true },
  { name: 'Portfolio', href: '/portfolio', type: 'route' },
  { name: 'Contact', href: '/contact', type: 'route' }
];

const serviceLinks = [
  { name: 'Basement Renovation', href: '/basement-renovation' },
  { name: 'Home Renovation', href: '/home-renovation' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50 || location.pathname !== '/');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (href: string, type: string) => {
    setIsMobileMenuOpen(false);
    if (type === 'scroll') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group cursor-pointer">
              <div
                className={`flex items-center justify-center h-12 w-12 rounded-xl transition-all duration-300 overflow-hidden ${
                  isScrolled ? 'bg-white' : 'bg-white/10 backdrop-blur-sm border border-white/20'
                } group-hover:scale-110`}
              >
                <img
                  src={gcadLogo}
                  alt="GCAD Construction logo"
                  className={`h-10 w-auto object-contain transition-all duration-300 ${
                    isScrolled ? '' : 'brightness-110'
                  }`}
                  loading="lazy"
                />
              </div>
              <div>
                <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  GCAD
                </h1>
                <p className={`text-xs transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  Construction
                </p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const baseClasses = `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-[#00aeef] hover:bg-gray-100'
                    : 'text-white hover:text-[#00aeef] hover:bg-white/10'
                }`;

                if (link.type === 'route' && link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <Link
                        to={link.href}
                        className={`${baseClasses} flex items-center gap-2`}
                      >
                        {link.name}
                        <span
                          className={`transition-transform duration-300 ${
                            isServicesOpen ? 'rotate-180' : 'rotate-0'
                          }`}
                        >
                          ▾
                        </span>
                      </Link>
                      {isServicesOpen && (
                        <div
                          className="absolute left-0 top-full pt-3 z-50"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          <div className="w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2">
                            {serviceLinks.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:text-[#00aeef] hover:bg-gray-50 transition-all duration-200"
                              >
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00aeef]"></span>
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.type === 'route') {
                  return (
                    <Link key={link.name} to={link.href} className={baseClasses}>
                      {link.name}
                    </Link>
                  );
                }

                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href, link.type)}
                    className={baseClasses}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            <div className="hidden md:block">
              <a
                href="tel:+14372558805"
                className="px-6 py-3 bg-[#00aeef] text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[#00aeef]/50 transition-all duration-300 hover:scale-105"
              >
                +1 (437) 255-8805
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="absolute top-20 right-4 left-4 bg-white rounded-2xl shadow-2xl p-6 animate-slideIn">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                if (link.type === 'route' && link.hasDropdown) {
                  return (
                    <div key={link.name} className="border border-gray-100 rounded-xl">
                      <button
                        onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                        className="w-full px-4 py-3 text-left text-gray-700 font-medium rounded-xl flex items-center justify-between hover:bg-gray-50 transition-all duration-300"
                      >
                        {link.name}
                        <span
                          className={`transition-transform duration-300 ${
                            isMobileServicesOpen ? 'rotate-180' : 'rotate-0'
                          }`}
                        >
                          ▾
                        </span>
                      </button>
                      {isMobileServicesOpen && (
                        <div className="px-4 pb-3">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                              className="mt-2 block px-4 py-3 rounded-lg bg-gray-50 text-gray-700 hover:text-[#00aeef] hover:bg-gray-100 transition-all duration-300"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.type === 'route') {
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 text-left text-gray-700 font-medium rounded-lg hover:bg-gray-100 hover:text-[#00aeef] transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  );
                }

                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href, link.type)}
                    className="px-4 py-3 text-left text-gray-700 font-medium rounded-lg hover:bg-gray-100 hover:text-[#00aeef] transition-all duration-300"
                  >
                    {link.name}
                  </button>
                );
              })}
              <a
                href="tel:+14372558805"
                className="mt-4 px-4 py-3 bg-[#00aeef] text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[#00aeef]/50 transition-all duration-300 text-center"
              >
                +1 (437) 255-8805
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
