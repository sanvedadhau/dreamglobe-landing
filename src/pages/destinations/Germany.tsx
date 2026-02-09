import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import GermanyHero from '@/components/germany/GermanyHero';
import WhyGermany from '@/components/germany/WhyGermany';
import GermanyUniversities from '@/components/germany/GermanyUniversities';
import GermanyProcess from '@/components/germany/GermanyProcess';
import GermanyEligibility from '@/components/germany/GermanyEligibility';
import GermanyCTA from '@/components/germany/GermanyCTA';

const whatsappUrl = `https://wa.me/919112220244?text=${encodeURIComponent('Hello DreamGlobe Team,\n\nI would like to know more about Study in Germany programs. Please share the details about tuition-free universities and the application process.\n\nThank you.')}`;
const emailUrl = `mailto:info@dreamglobe.co.in?subject=${encodeURIComponent('Inquiry - Study in Germany Program')}&body=${encodeURIComponent('Hello DreamGlobe Team,\n\nI am interested in the Study in Germany program. Please share detailed information about:\n- University options\n- Eligibility requirements\n- Application process\n- Visa guidance\n\nThank you.')}`;

const Germany = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <GermanyHero whatsappUrl={whatsappUrl} emailUrl={emailUrl} />
      <WhyGermany />
      <GermanyUniversities whatsappUrl={whatsappUrl} />
      <GermanyProcess />
      <GermanyEligibility />
      <GermanyCTA whatsappUrl={whatsappUrl} emailUrl={emailUrl} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Germany;
