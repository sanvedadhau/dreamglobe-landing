import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

const WorkVisa = () => {
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
            <div>
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
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="gold" size="lg">
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-4">
              {visaTypes.map((item, idx) => (
                <div key={idx} className="card-professional p-6 hover-lift">
                  <h3 className="font-serif text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
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

export default WorkVisa;
