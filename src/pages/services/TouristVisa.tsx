import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Plane, CheckCircle, ArrowRight } from 'lucide-react';

const TouristVisa = () => {
  const features = [
    'Quick Processing Time',
    'Complete Document Checklist',
    'Interview Preparation',
    'Travel Itinerary Planning',
    'Hotel & Flight Booking Assistance',
    'Travel Insurance Guidance',
  ];

  const destinations = [
    { region: 'Europe', countries: 'Schengen, UK, Ireland, Russia' },
    { region: 'Americas', countries: 'USA, Canada, Brazil, Mexico' },
    { region: 'Asia Pacific', countries: 'Australia, New Zealand, Japan, Singapore' },
    { region: 'Middle East', countries: 'UAE, Saudi Arabia, Qatar, Turkey' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader 
        title="Tourist Visa Services"
        subtitle="Hassle-free tourist visa applications for your dream vacation or business trip."
        breadcrumb="Services"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Plane className="h-8 w-8 text-gold" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-6">
                Explore the World Hassle-Free
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether it's a family vacation, business trip, or visiting loved ones abroad, we make tourist visa applications simple and stress-free with our expert guidance.
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
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {destinations.map((item, idx) => (
                <div key={idx} className="card-professional p-6 hover-lift text-center">
                  <h3 className="font-serif text-lg font-bold text-navy mb-2">{item.region}</h3>
                  <p className="text-muted-foreground text-sm">{item.countries}</p>
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

export default TouristVisa;
