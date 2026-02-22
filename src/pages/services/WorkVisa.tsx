import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Briefcase, CheckCircle } from 'lucide-react';
import { useCanonical } from '@/hooks/useCanonical';

const WorkVisa = () => {
  useCanonical();
  const features = [
    'Job Search Assistance',
    'Work Permit Processing',
    'Employer Liaison Services',
    'Skill Assessment Support',
    'Labor Market Impact Assessment',
    'Post-Approval Settlement Guidance',
  ];

  const visaTypes = [
    { title: 'Skilled Worker Visa', desc: 'For professionals with specialized skills and job offers' },
    { title: 'Intra-Company Transfer', desc: 'For employees transferring within multinational companies' },
    { title: 'Temporary Work Permit', desc: 'Short-term work authorization for specific projects' },
    { title: 'Self-Employed Visa', desc: 'For entrepreneurs and freelance professionals' },
  ];

  const emailUrl = "mailto:info@dreamglobe.co.in?subject=Inquiry%20-%20Work%20Visa%20Services&body=Hello%20DreamGlobe%20Team%2C%0A%0AI%20am%20interested%20in%20your%20Work%20Visa%20services.%20Please%20share%20the%20details.%0A%0AThank%20you.";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader 
        title="Work Visa Services"
        subtitle="Unlock international career opportunities with expert work visa guidance and support."
        breadcrumb="Services"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-gold" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-6">
                Build Your Global Career
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Working abroad offers unparalleled professional growth, better earning potential, and life-changing experiences. Our team specializes in navigating complex work visa requirements across multiple countries.
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
                  Start Your Application
                </Button>
              </a>
            </div>
            <div>
              <div className="aspect-video rounded-xl overflow-hidden mb-6 animate-fade-in-up">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600" alt="Professional team working" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="space-y-4">
                {visaTypes.map((item, idx) => (
                  <div key={idx} className="card-professional p-6 hover-lift animate-fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                    <h3 className="font-serif text-lg font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
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

export default WorkVisa;
