import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyUsSection from '@/components/WhyUsSection';
import FounderSection from '@/components/FounderSection';
import VisionMissionSection from '@/components/VisionMissionSection';
import BlogSection from '@/components/BlogSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <FounderSection />
        <VisionMissionSection />
        <BlogSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
