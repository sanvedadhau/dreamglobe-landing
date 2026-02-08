import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { GraduationCap, Briefcase, Users, Plane, Building, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    icon: GraduationCap,
    title: 'Study Abroad Programs',
    desc: 'Pursue your education at top universities worldwide with comprehensive support from admission to visa.',
    link: '/services/student-visa',
    countries: ['USA', 'UK', 'Canada', 'Australia', 'Germany'],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?w=400',
  },
  {
    icon: Briefcase,
    title: 'Work Abroad Programs',
    desc: 'Find international career opportunities with work visa support and employer connections.',
    link: '/services/work-visa',
    countries: ['Canada', 'Germany', 'Australia', 'UK', 'UAE'],
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400',
  },
  {
    icon: Users,
    title: 'PR & Settlement Programs',
    desc: 'Start a new life abroad with permanent residency pathways and family sponsorship options.',
    link: '/services/permanent-residence',
    countries: ['Canada', 'Australia', 'New Zealand'],
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400',
  },
  {
    icon: Plane,
    title: 'Visit & Travel Programs',
    desc: 'Explore the world with hassle-free tourist visa processing for leisure or business travel.',
    link: '/services/tourist-visa',
    countries: ['Schengen', 'USA', 'UK', 'Australia'],
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400',
  },
  {
    icon: Building,
    title: 'Business & Investor Programs',
    desc: 'Expand your business globally with start-up visas and investor immigration pathways.',
    link: '/services/business-immigration',
    countries: ['Canada', 'UK', 'USA', 'Australia'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
  },
  {
    icon: Globe,
    title: 'German Public University Program',
    desc: 'Study at German public universities with zero tuition fees and post-study work options.',
    link: '/destinations/germany',
    countries: ['Germany'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400',
  },
];

const emailUrl = "mailto:info@dreamglobe.co.in?subject=Free%20Consultation%20Request&body=Hello%20DreamGlobe%20Team%2C%0A%0AI%20would%20like%20to%20book%20a%20free%20consultation%20to%20discuss%20the%20best%20immigration%20pathway%20for%20me.%0A%0AThank%20you.";

const ExplorePrograms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader 
        title="Explore Our Programs"
        subtitle="Discover the right immigration pathway for your goals and aspirations."
        breadcrumb="Programs"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <div 
                key={idx} 
                className={`card-professional overflow-hidden hover-lift group animate-fade-in-up ${program.featured ? 'ring-2 ring-gold' : ''}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    loading="lazy" 
                  />
                </div>
                <div className="p-8">
                  {program.featured && (
                    <span className="inline-block px-3 py-1 bg-gold text-navy text-xs font-bold rounded-full mb-4">
                      FEATURED
                    </span>
                  )}
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                    <program.icon className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.countries.map((country) => (
                      <span key={country} className="px-2 py-1 bg-cream text-navy text-xs rounded-full">
                        {country}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={program.link}
                    className="inline-flex items-center text-gold font-semibold text-sm hover:text-gold-dark transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-4">
            Not Sure Which Program Fits You?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free consultation with our experts and we'll help you find the perfect immigration pathway based on your profile and goals.
          </p>
          <a href={emailUrl}>
            <Button variant="gold" size="lg">
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ExplorePrograms;
