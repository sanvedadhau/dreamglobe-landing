import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Users, CheckCircle, ArrowRight } from 'lucide-react';

const PermanentResidence = () => {
  const features = [
    'Points-Based Assessment',
    'Express Entry Applications',
    'Provincial Nominee Programs',
    'Family Sponsorship',
    'Skilled Migration Pathways',
    'Settlement Services',
  ];

  const programs = [
    { country: 'Canada', programs: ['Express Entry', 'PNP', 'Family Class', 'Quebec Immigration'] },
    { country: 'Australia', programs: ['Skilled Independent', 'State Nomination', 'Family Migration', 'Business Innovation'] },
    { country: 'New Zealand', programs: ['Skilled Migrant', 'Work to Residence', 'Family Category', 'Investor Visa'] },
  ];

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
            <div>
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
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="gold" size="lg">
                Check Your Eligibility
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-6">
              {programs.map((item, idx) => (
                <div key={idx} className="card-professional p-6 hover-lift">
                  <h3 className="font-serif text-xl font-bold text-navy mb-4">{item.country}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.programs.map((program) => (
                      <span key={program} className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PermanentResidence;
