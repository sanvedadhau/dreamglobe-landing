import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Users, CheckCircle } from 'lucide-react';
import { useCanonical } from '@/hooks/useCanonical';

const PermanentResidence = () => {
  useCanonical();
  const features = [
    'Points-Based Assessment',
    'Express Entry Applications',
    'Provincial Nominee Programs',
    'Family Sponsorship',
    'Skilled Migration Pathways',
    'Settlement Services',
  ];

  const programs = [
    { country: 'Canada', programs: ['Express Entry', 'PNP', 'Family Class', 'Quebec Immigration'], image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400' },
    { country: 'Australia', programs: ['Skilled Independent', 'State Nomination', 'Family Migration', 'Business Innovation'], image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400' },
    { country: 'New Zealand', programs: ['Skilled Migrant', 'Work to Residence', 'Family Category', 'Investor Visa'], image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400' },
  ];

  const emailUrl = "mailto:info@dreamglobe.co.in?subject=Inquiry%20-%20Permanent%20Residence%20Services&body=Hello%20DreamGlobe%20Team%2C%0A%0AI%20am%20interested%20in%20your%20Permanent%20Residence%20services.%20Please%20share%20the%20details.%0A%0AThank%20you.";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader 
        title="Permanent Residence"
        subtitle="Make your dream of settling abroad a reality with our comprehensive PR visa services."
        breadcrumb="Services"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-gold" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-6">
                Your Path to Permanent Residency
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Permanent residency opens the door to a new life abroad - access to healthcare, education, work rights, and eventually citizenship. Our experts guide you through every step of the complex PR application process.
              </p>
              <ul className="space-y-3 mb-8">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={emailUrl}>
                <Button variant="gold" size="lg">
                  Check Your Eligibility
                </Button>
              </a>
            </div>
            <div className="space-y-6">
              {programs.map((item, idx) => (
                <div key={idx} className="card-professional overflow-hidden hover-lift animate-fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                  <div className="flex gap-4">
                    <div className="w-32 h-auto flex-shrink-0 overflow-hidden">
                      <img src={item.image} alt={item.country} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-xl font-bold text-navy mb-3">{item.country}</h3>
                      <div className="flex flex-wrap gap-2">
                        {item.programs.map((program) => (
                          <span key={program} className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm">
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PermanentResidence;
