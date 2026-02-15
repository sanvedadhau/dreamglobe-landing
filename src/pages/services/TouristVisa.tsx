import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Plane, CheckCircle } from 'lucide-react';

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
    { region: 'Europe', countries: 'Schengen, UK, Ireland, Russia', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400' },
    { region: 'Americas', countries: 'USA, Canada, Brazil, Mexico', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f04?w=400' },
    { region: 'Asia Pacific', countries: 'Australia, New Zealand, Japan, Singapore', image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400' },
    { region: 'Middle East', countries: 'UAE, Saudi Arabia, Qatar, Turkey', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400' },
  ];

  const emailUrl = "mailto:info@dreamglobe.co.in?subject=Inquiry%20-%20Tourist%20Visa%20Services&body=Hello%20DreamGlobe%20Team%2C%0A%0AI%20am%20interested%20in%20your%20Tourist%20Visa%20services.%20Please%20share%20the%20details.%0A%0AThank%20you.";

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
            <div className="animate-fade-in-up">
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
                  <li key={idx} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={emailUrl}>
                <Button variant="gold" size="lg">
                  Apply Now
                </Button>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {destinations.map((item, idx) => (
                <div key={idx} className="card-professional overflow-hidden hover-lift group animate-fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                  <div className="aspect-video overflow-hidden">
                    <img src={item.image} alt={item.region} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-serif text-lg font-bold text-navy mb-1">{item.region}</h3>
                    <p className="text-muted-foreground text-sm">{item.countries}</p>
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

export default TouristVisa;
