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

const GermanFlagBg = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {/* Diagonal flag stripes */}
    <div className="absolute -top-20 -right-20 w-[600px] h-[200px] bg-black/[0.03] rotate-[-15deg]" />
    <div className="absolute -top-10 -right-10 w-[600px] h-[200px] bg-[#DD0000]/[0.04] rotate-[-15deg] translate-y-[180px]" />
    <div className="absolute top-0 right-0 w-[600px] h-[200px] bg-[#FFCC00]/[0.05] rotate-[-15deg] translate-y-[360px]" />
    {/* Bottom corner accent */}
    <div className="absolute -bottom-10 -left-10 w-[400px] h-[150px] bg-black/[0.02] rotate-[15deg]" />
    <div className="absolute -bottom-5 -left-5 w-[400px] h-[150px] bg-[#DD0000]/[0.03] rotate-[15deg] translate-y-[-140px]" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[150px] bg-[#FFCC00]/[0.04] rotate-[15deg] translate-y-[-280px]" />
  </div>
);

const Germany = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Subtle vertical flag stripe on left edge */}
      <div className="fixed left-0 top-0 bottom-0 w-1 z-40 flex flex-col pointer-events-none">
        <div className="flex-1 bg-black/20" />
        <div className="flex-1 bg-[#DD0000]/25" />
        <div className="flex-1 bg-[#FFCC00]/30" />
      </div>

      <Header />
      <GermanyHero whatsappUrl={whatsappUrl} emailUrl={emailUrl} />
      
      <div className="relative">
        <GermanFlagBg />
        <WhyGermany />
      </div>
      
      <GermanyUniversities whatsappUrl={whatsappUrl} />
      
      <div className="relative">
        <GermanFlagBg />
        <GermanyProcess />
      </div>
      
      <GermanyEligibility />
      <GermanyCTA whatsappUrl={whatsappUrl} emailUrl={emailUrl} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Germany;
