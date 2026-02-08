import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';

const StudentVisa = () => {
  const features = [
    'University Selection & Counseling',
    'Application Processing',
    'Statement of Purpose Drafting',
    'Document Preparation',
    'Visa Interview Preparation',
    'Pre-Departure Briefing',
  ];

  const process = [
    { step: '01', title: 'Initial Consultation', desc: 'Free assessment of your profile and study abroad goals' },
    { step: '02', title: 'University Selection', desc: 'Shortlisting universities based on your preferences and eligibility' },
    { step: '03', title: 'Application Filing', desc: 'Complete application support including SOP and LOR' },
    { step: '04', title: 'Visa Processing', desc: 'Documentation and interview preparation for visa approval' },
  ];

  const emailUrl = "mailto:info@dreamglobe.co.in?subject=Inquiry%20-%20Student%20Visa%20Services&body=Hello%20DreamGlobe%20Team%2C%0A%0AI%20am%20interested%20in%20your%20Student%20Visa%20services.%20Please%20share%20the%20details.%0A%0AThank%20you.";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader 
        title="Student Visa Services"
        subtitle="Your gateway to world-class education abroad. We guide you through every step of your academic journey."
        breadcrumb="Services"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-gold" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-6">
                Transform Your Academic Dreams Into Reality
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Studying abroad opens doors to global opportunities, cultural experiences, and world-renowned education. Our expert counselors have helped thousands of students secure admissions in top universities across the globe.
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
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
            <div className="space-y-4">
              <div className="aspect-video rounded-xl overflow-hidden mb-6 animate-fade-in-up">
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600" alt="Students studying abroad" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {process.map((item, idx) => (
                  <div key={idx} className="card-professional p-6 hover-lift animate-fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                    <span className="text-4xl font-bold text-gold/20">{item.step}</span>
                    <h3 className="font-serif text-lg font-bold text-navy mt-2 mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-4">
            Popular Study Destinations
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We assist with student visa applications for leading educational destinations worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['USA', 'UK', 'Canada', 'Australia', 'Germany', 'Ireland', 'New Zealand'].map((country) => (
              <span key={country} className="px-6 py-3 bg-white rounded-full text-navy font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default StudentVisa;
