import { Building2, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/', type: 'route' },
  { name: 'About', href: '/about', type: 'route' },
  { name: 'Services', href: '/services', type: 'route' },
  { name: 'Portfolio', href: '#portfolio', type: 'scroll' },
  { name: 'Contact', href: '#contact', type: 'scroll' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              <div className={`p-2 rounded-xl transition-all duration-300 ${
                isScrolled ? 'bg-[#00aeef]' : 'bg-white/10 backdrop-blur-sm'
              } group-hover:scale-110`}>
                <Building2 className={`w-8 h-8 transition-colors duration-300 ${
                  isScrolled ? 'text-white' : 'text-[#00aeef]'
                }`} />
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
              {navLinks.map((link) => (
                link.type === 'route' ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-[#00aeef] hover:bg-gray-100'
                        : 'text-white hover:text-[#00aeef] hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href, link.type)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-[#00aeef] hover:bg-gray-100'
                        : 'text-white hover:text-[#00aeef] hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </button>
                )
              ))}
            </nav>

            <div className="hidden md:block">
              <button className="px-6 py-3 bg-[#00aeef] text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[#00aeef]/50 transition-all duration-300 hover:scale-105">
                Get Free Quote
              </button>
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
              {navLinks.map((link) => (
                link.type === 'route' ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-left text-gray-700 font-medium rounded-lg hover:bg-gray-100 hover:text-[#00aeef] transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href, link.type)}
                    className="px-4 py-3 text-left text-gray-700 font-medium rounded-lg hover:bg-gray-100 hover:text-[#00aeef] transition-all duration-300"
                  >
                    {link.name}
                  </button>
                )
              ))}
              <button className="mt-4 px-4 py-3 bg-[#00aeef] text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[#00aeef]/50 transition-all duration-300">
                Get Free Quote
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
