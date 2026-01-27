import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Services', 
      href: '#services',
      dropdown: [
        { name: 'Student Visa', href: '/services/student-visa' },
        { name: 'Work Visa', href: '/services/work-visa' },
        { name: 'Permanent Residence', href: '/services/permanent-residence' },
        { name: 'Tourist Visa', href: '/services/tourist-visa' },
        { name: 'Business Immigration', href: '/services/business-immigration' },
        { name: 'Document Services', href: '/services/document-services' },
      ]
    },
    { 
      name: 'Destinations', 
      href: '#destinations',
      dropdown: [
        { name: 'Canada', href: '/destinations/canada' },
        { name: 'Australia', href: '/destinations/australia' },
        { name: 'Germany', href: '/destinations/germany' },
        { name: 'United Kingdom', href: '/destinations/united-kingdom' },
        { name: 'New Zealand', href: '/destinations/new-zealand' },
        { name: 'United States', href: '/destinations/united-states' },
      ]
    },
    { name: 'Explore Programs', href: '/explore-programs' },
    { name: 'Blog', href: '/blogs' },
    { name: 'About Us', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-white/90 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="DreamGlobe - Where Your Dreams Meet the World" className="h-10 md:h-12 rounded-lg" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    className="flex items-center gap-1 text-navy hover:text-gold-dark transition-colors duration-200 text-sm font-medium py-2"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="text-navy hover:text-gold-dark transition-colors duration-200 text-sm font-medium py-2"
                  >
                    {item.name}
                  </Link>
                )}
                
                {item.dropdown && (
                  <div 
                    className={`absolute top-full left-0 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 transition-all duration-200 ${
                      openDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-navy hover:bg-cream hover:text-gold-dark transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Contact */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:9112220244"
              className="flex items-center gap-2 text-navy hover:text-gold-dark transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+91 9112220244</span>
            </a>
            <Button variant="gold" size="default">
              Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-navy p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-t border-gray-200 animate-fade-in-up max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col p-6 gap-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full text-navy hover:text-gold-dark transition-colors duration-200 text-base font-medium py-3"
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.name && (
                        <div className="pl-4 space-y-1 pb-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block py-2 text-sm text-muted-foreground hover:text-gold-dark"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-navy hover:text-gold-dark transition-colors duration-200 text-base font-medium py-3 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button variant="gold" className="mt-4">
                Free Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
