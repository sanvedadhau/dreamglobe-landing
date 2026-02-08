import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { MapPin, GraduationCap, Briefcase, Sun, Heart, ArrowRight } from 'lucide-react';

const Australia = () => {
  const highlights = [
    { icon: GraduationCap, title: 'Premier Education', desc: '7 universities in global top 100' },
    { icon: Briefcase, title: 'Skilled Migration', desc: 'Point-based immigration system' },
    { icon: Sun, title: 'Amazing Climate', desc: 'Beautiful beaches and outdoor lifestyle' },
    { icon: Heart, title: 'High Living Standards', desc: 'Excellent healthcare and safety' },
  ];

  const visaOptions = [
    'Skilled Independent (189)',
    'State Nominated (190)',
    'Student Visa (500)',
    'Employer Sponsored (482)',
    'Partner Visa',
    'Business Innovation Visa',
  ];

  const emailUrl = "mailto:info@dreamglobe.co.in?subject=Inquiry%20-%20Australia%20Immigration&body=Hello%20DreamGlobe%20Team%2C%0A%0AI%20am%20interested%20in%20immigrating%20to%20Australia.%20Please%20share%20the%20details.%0A%0AThank%20you.";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader 
        title="Immigrate to Australia"
        subtitle="Experience world-class lifestyle in the land of endless opportunities."
        breadcrumb="Destinations"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-12 animate-fade-in-up">
            <img src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200" alt="Australia Sydney Opera House" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-gold" />
                <span className="text-gold font-semibold">Oceania</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-6">
                Why Choose Australia?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Australia offers an exceptional quality of life with its strong economy, multicultural society, and stunning natural beauty. The country's skilled migration program provides clear pathways to permanent residency for qualified professionals.
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
                  Free Points Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
            <div className="card-professional p-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-serif text-xl font-bold text-navy mb-6">Visa Options for Australia</h3>
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

export default Australia;
