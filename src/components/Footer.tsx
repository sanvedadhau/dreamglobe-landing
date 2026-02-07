import { Globe, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    { name: 'Student Visa', href: '/services/student-visa' },
    { name: 'Work Visa', href: '/services/work-visa' },
    { name: 'Permanent Residence', href: '/services/permanent-residence' },
    { name: 'Tourist Visa', href: '/services/tourist-visa' },
    { name: 'Business Immigration', href: '/services/business-immigration' },
    { name: 'Document Services', href: '/services/document-services' },
  ];

  const destinations = [
    { name: 'Canada', href: '/destinations/canada' },
    { name: 'Australia', href: '/destinations/australia' },
    { name: 'Germany', href: '/destinations/germany' },
    { name: 'United Kingdom', href: '/destinations/united-kingdom' },
    { name: 'New Zealand', href: '/destinations/new-zealand' },
    { name: 'United States', href: '/destinations/united-states' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/#about' },
    { name: 'Explore Programs', href: '/explore-programs' },
    { name: 'Blog', href: '/blogs' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <footer id="contact" className="bg-navy-dark">
      {/* CTA Section */}
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-16">
        <div className="card-professional bg-gradient-to-r from-gold to-gold-dark p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy-dark mb-2">
              Ready to Start Your Immigration Journey?
            </h3>
            <p className="text-navy-dark/80">
              Book a free consultation with our experts today.
            </p>
          </div>
          <Button variant="navy" size="xl" className="whitespace-nowrap">
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-gold/10">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <Globe className="h-8 w-8 text-gold" />
                <span className="font-serif text-2xl font-bold text-primary-foreground">
                  Dream<span className="text-gold">Globe</span>
                </span>
              </Link>
              <p className="text-primary-foreground/70 mb-6 max-w-sm">
                Your trusted partner in global immigration. We transform dreams into reality with
                expert guidance and personalized solutions.
              </p>
              <div className="space-y-3">
                <a
                  href="https://maps.google.com/?q=Dreamglobe+immigration+Lalwani+Icon+3rd+floor+Viman+nagar+Pune+411014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-gold transition-colors group"
                >
                  <MapPin className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-primary-foreground/70 text-sm group-hover:text-gold transition-colors">
                    Dreamglobe Immigration, Lalwani Icon 3rd floor, Viman Nagar, 
                    Pune - 411014
                  </span>
                </a>
                <a
                  href="tel:+919112220244"
                  className="flex items-center gap-3 hover:text-gold transition-colors group"
                >
                  <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-primary-foreground/70 text-sm group-hover:text-gold transition-colors">+91 9112220244</span>
                </a>
                <a
                  href="mailto:info@dreamglobe.co.in?subject=Inquiry%20about%20Immigration%20Services&body=Hello%20DreamGlobe%20Team%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20immigration%20services.%20Please%20get%20in%20touch%20with%20me%20at%20your%20earliest%20convenience.%0A%0AThank%20you."
                  className="flex items-center gap-3 hover:text-gold transition-colors group"
                >
                  <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-primary-foreground/70 text-sm group-hover:text-gold transition-colors">info@dreamglobe.co.in</span>
                </a>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-primary-foreground/70 text-sm">Mon - Sat: 9AM - 7PM</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-serif text-lg font-bold text-primary-foreground mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h4 className="font-serif text-lg font-bold text-primary-foreground mb-6">
                Destinations
              </h4>
              <ul className="space-y-3">
                {destinations.map((destination) => (
                  <li key={destination.name}>
                    <Link
                      to={destination.href}
                      className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                    >
                      {destination.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-bold text-primary-foreground mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm text-center md:text-left">
              © 2024 DreamGlobe Immigration Services. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary-foreground/5 flex items-center justify-center text-primary-foreground/60 hover:bg-gold hover:text-navy-dark transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy-policy" className="text-primary-foreground/50 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-primary-foreground/50 hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
