import { GraduationCap, Briefcase, Plane, Building, Users, FileCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: GraduationCap,
    title: 'Student Visa',
    description:
      'Complete guidance for international education including university selection, admission, and student visa processing.',
    features: ['University Counseling', 'SOP & Documentation', 'Visa Interview Prep'],
  },
  {
    icon: Briefcase,
    title: 'Work Visa',
    description:
      'Navigate work permit applications for various countries with expert assistance at every step.',
    features: ['Job Search Support', 'Permit Processing', 'Employer Liaison'],
  },
  {
    icon: Users,
    title: 'Permanent Residence',
    description:
      'Comprehensive PR visa services for Canada, Australia, New Zealand, and other immigration-friendly nations.',
    features: ['Points Assessment', 'Express Entry', 'Family Sponsorship'],
  },
  {
    icon: Plane,
    title: 'Tourist Visa',
    description:
      'Hassle-free tourist and visitor visa applications for business trips, holidays, or family visits.',
    features: ['Quick Processing', 'Document Checklist', 'Interview Training'],
  },
  {
    icon: Building,
    title: 'Business Immigration',
    description:
      'Start-up visas, investor programs, and business immigration pathways for entrepreneurs.',
    features: ['Investment Options', 'Business Plans', 'Compliance Support'],
  },
  {
    icon: FileCheck,
    title: 'Document Services',
    description:
      'Attestation, translation, and verification services for all your immigration documents.',
    features: ['Apostille Services', 'Document Translation', 'Background Checks'],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold tracking-wider uppercase text-sm">
            Our Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-6">
            Comprehensive Immigration Solutions
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted-foreground text-lg">
            From student visas to permanent residency, we offer end-to-end immigration services
            tailored to your unique journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-professional p-8 hover-lift group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                <service.icon className="h-7 w-7 text-gold group-hover:text-navy-dark transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center text-gold font-semibold text-sm group-hover:text-navy-dark transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="gold" size="lg">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
