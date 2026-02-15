import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Building, CheckCircle } from 'lucide-react';

const BusinessImmigration = () => {
  const features = [
    'Start-up Visa Programs',
    'Investor Immigration',
    'Business Plan Development',
    'Market Research & Analysis',
    'Regulatory Compliance',
    'Post-Landing Business Setup',
  ];

  const programs = [
    { title: 'Start-up Visa', desc: 'For innovative entrepreneurs with backing from designated organizations', investment: 'Varies' },
    { title: 'Investor Program', desc: 'For high-net-worth individuals looking to invest in foreign economies', investment: '$200K+' },
    { title: 'Self-Employed Visa', desc: 'For professionals with relevant experience in cultural or athletic activities', investment: 'Varies' },
    { title: 'Entrepreneur Visa', desc: 'For business owners looking to establish or expand operations abroad', investment: '$100K+' },
  ];

  const emailUrl = "mailto:info@dreamglobe.co.in?subject=Inquiry%20-%20Business%20Immigration%20Services&body=Hello%20DreamGlobe%20Team%2C%0A%0AI%20am%20interested%20in%20your%20Business%20Immigration%20services.%20Please%20share%20the%20details.%0A%0AThank%20you.";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader 
        title="Business Immigration"
        subtitle="Expand your business horizons with our specialized business and investor immigration services."
        breadcrumb="Services"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-gold" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-6">
                Grow Your Business Globally
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Take your entrepreneurial vision across borders. Our business immigration experts help you navigate investor visas, start-up programs, and business establishment in your target country.
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
                  Schedule Consultation
                </Button>
              </a>
            </div>
            <div>
              <div className="aspect-video rounded-xl overflow-hidden mb-6 animate-fade-in-up">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600" alt="Business buildings" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="space-y-4">
                {programs.map((item, idx) => (
                  <div key={idx} className="card-professional p-6 hover-lift animate-fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-lg font-bold text-navy">{item.title}</h3>
                      <span className="text-gold font-semibold text-sm">{item.investment}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
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

export default BusinessImmigration;
