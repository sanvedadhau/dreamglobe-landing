import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { FileCheck, CheckCircle, Clock } from 'lucide-react';
import { useCanonical } from '@/hooks/useCanonical';

const DocumentServices = () => {
  useCanonical();
  const features = [
    'Document Attestation',
    'Apostille Services',
    'Translation Services',
    'Background Verification',
    'Notarization',
    'Embassy Legalization',
  ];

  const services = [
    { title: 'Apostille', desc: 'International document authentication for Hague Convention countries', time: '3-5 Days' },
    { title: 'Translation', desc: 'Certified translation in multiple languages by sworn translators', time: '2-3 Days' },
    { title: 'Attestation', desc: 'Document attestation from MEA, Home Dept, and embassies', time: '5-10 Days' },
    { title: 'PCC & Verification', desc: 'Police clearance certificates and background checks', time: '7-15 Days' },
  ];

  const emailUrl = "mailto:info@dreamglobe.co.in?subject=Inquiry%20-%20Document%20Services&body=Hello%20DreamGlobe%20Team%2C%0A%0AI%20am%20interested%20in%20your%20Document%20Services.%20Please%20share%20the%20details%20and%20a%20quote.%0A%0AThank%20you.";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader 
        title="Document Services"
        subtitle="Complete document solutions for all your immigration and travel needs."
        breadcrumb="Services"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <FileCheck className="h-8 w-8 text-gold" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-6">
                Complete Document Solutions
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Proper documentation is the foundation of any successful visa application. We provide comprehensive document services including attestation, apostille, translation, and verification to ensure your documents meet international standards.
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
                  Get Quote
                </Button>
              </a>
            </div>
            <div>
              <div className="aspect-video rounded-xl overflow-hidden mb-6 animate-fade-in-up">
                <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600" alt="Document processing" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {services.map((item, idx) => (
                  <div key={idx} className="card-professional p-6 hover-lift animate-fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                    <h3 className="font-serif text-lg font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{item.desc}</p>
                    <div className="flex items-center gap-1 text-gold text-sm font-medium">
                      <Clock className="h-3 w-3" />
                      <span>{item.time}</span>
                    </div>
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

export default DocumentServices;
