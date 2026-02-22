import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { MapPin, GraduationCap, Briefcase, Mountain, Heart } from 'lucide-react';
import { useCanonical } from '@/hooks/useCanonical';

const NewZealand = () => {
  useCanonical();
  const highlights = [
    { icon: GraduationCap, title: 'Quality Education', desc: 'Globally recognized qualifications' },
    { icon: Briefcase, title: 'Skills Shortage', desc: 'High demand for skilled workers' },
    { icon: Mountain, title: 'Natural Beauty', desc: 'Stunning landscapes and outdoor life' },
    { icon: Heart, title: 'Safety & Peace', desc: 'One of safest countries globally' },
  ];

  const visaOptions = [
    'Skilled Migrant Category',
    'Work to Residence',
    'Student Visa',
    'Essential Skills Visa',
    'Partner Visa',
    'Investor Visa',
  ];

  const emailUrl = "mailto:info@dreamglobe.co.in?subject=Inquiry%20-%20New%20Zealand%20Immigration&body=Hello%20DreamGlobe%20Team%2C%0A%0AI%20am%20interested%20in%20immigrating%20to%20New%20Zealand.%20Please%20share%20the%20details.%0A%0AThank%20you.";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader 
        title="Immigrate to New Zealand"
        subtitle="Discover a balanced lifestyle in one of the world's most beautiful countries."
        breadcrumb="Destinations"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-12 animate-fade-in-up">
            <img src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1200" alt="New Zealand mountains" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-gold" />
                <span className="text-gold font-semibold">Oceania</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-6">
                Why Choose New Zealand?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                New Zealand offers an unmatched work-life balance with its stunning natural environment, friendly people, and strong economy. The country actively seeks skilled migrants to fill workforce gaps across various industries.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
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
              <a href={emailUrl}>
                <Button variant="gold" size="lg">
                  Explore NZ Opportunities
                </Button>
              </a>
            </div>
            <div className="card-professional p-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-serif text-xl font-bold text-navy mb-6">Visa Options for New Zealand</h3>
              <div className="space-y-3">
                {visaOptions.map((option, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-cream rounded-lg hover:shadow-md transition-shadow">
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
      <WhatsAppButton />
    </div>
  );
};

export default NewZealand;
