import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { MapPin, GraduationCap, Briefcase, Crown, Heart, ArrowRight } from 'lucide-react';

const UnitedKingdom = () => {
  const highlights = [
    { icon: GraduationCap, title: 'Prestigious Education', desc: 'Oxford, Cambridge, and more' },
    { icon: Briefcase, title: 'Global Hub', desc: 'International business center' },
    { icon: Crown, title: 'Rich Culture', desc: 'Historic landmarks and diversity' },
    { icon: Heart, title: 'NHS Healthcare', desc: 'Free public healthcare system' },
  ];

  const visaOptions = [
    'Student Visa',
    'Skilled Worker Visa',
    'Graduate Route',
    'Global Talent Visa',
    'Family Visa',
    'Innovator Founder Visa',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader 
        title="Immigrate to United Kingdom"
        subtitle="Experience world-renowned education and career opportunities in the UK."
        breadcrumb="Destinations"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-gold" />
                <span className="text-gold font-semibold">Europe</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-6">
                Why Choose the UK?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                The United Kingdom offers prestigious universities, a dynamic job market, and rich cultural experiences. With the Graduate Route allowing students to stay and work after graduation, the UK is an excellent choice for ambitious individuals.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="gold" size="lg">
                Start Your UK Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="card-professional p-8">
              <h3 className="font-serif text-xl font-bold text-navy mb-6">Visa Options for UK</h3>
              <div className="space-y-3">
                {visaOptions.map((option, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-cream rounded-lg">
                    <span className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">
                      {idx + 1}
                    </span>
                    <span className="text-foreground font-medium">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UnitedKingdom;
