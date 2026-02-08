import { useState, useEffect, useCallback } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, Euro, Briefcase, Heart, ArrowRight, MapPin, 
  ChevronLeft, ChevronRight, CheckCircle, Globe, BookOpen, Award, Users, Building
} from 'lucide-react';
import heroGermany1 from '@/assets/germany-hero-1.jpg';
import heroGermany2 from '@/assets/germany-hero-2.jpg';
import heroGermany3 from '@/assets/germany-hero-3.jpg';

const slides = [
  {
    id: 1,
    image: heroGermany1,
    title: 'Study in Germany for Free',
    subtitle: 'Tuition-Free Public Universities',
    description: 'Access world-class education at prestigious German public universities with zero tuition fees. Your academic dreams start here.',
  },
  {
    id: 2,
    image: heroGermany2,
    title: 'World-Class German Education',
    subtitle: 'Top-Ranked Universities',
    description: 'Join thousands of international students at Germany\'s leading universities, offering cutting-edge research and globally recognized degrees.',
  },
  {
    id: 3,
    image: heroGermany3,
    title: 'Live & Work in Germany',
    subtitle: 'Post-Study Work Opportunities',
    description: 'Germany offers an 18-month post-study work visa, letting you launch your career in Europe\'s strongest economy.',
  },
];

const universities = [
  { name: 'Technical University of Munich', location: 'Munich, Bavaria', ranking: '#1 in Germany', programs: '180+ Programs', image: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=400' },
  { name: 'Ludwig Maximilian University', location: 'Munich, Bavaria', ranking: '#2 in Germany', programs: '200+ Programs', image: 'https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=400' },
  { name: 'Heidelberg University', location: 'Heidelberg, BW', ranking: '#3 in Germany', programs: '160+ Programs', image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400' },
  { name: 'Humboldt University of Berlin', location: 'Berlin', ranking: '#4 in Germany', programs: '170+ Programs', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400' },
  { name: 'RWTH Aachen University', location: 'Aachen, NRW', ranking: '#5 in Germany', programs: '150+ Programs', image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=400' },
  { name: 'Freie Universität Berlin', location: 'Berlin', ranking: '#6 in Germany', programs: '150+ Programs', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400' },
];

const whyGermany = [
  { icon: Euro, title: 'Zero Tuition Fees', desc: 'Public universities charge only a small semester fee (~€300/semester)' },
  { icon: GraduationCap, title: 'Top-Ranked Universities', desc: '50+ universities in global top 500 rankings' },
  { icon: Briefcase, title: '18-Month Post-Study Visa', desc: 'Stay and find work after completing your degree' },
  { icon: Heart, title: 'Affordable Living', desc: '€850-1000/month average student living costs' },
  { icon: Globe, title: 'English Programs', desc: '1,800+ English-taught master\'s programs available' },
  { icon: Users, title: 'Multicultural Environment', desc: '400,000+ international students from 190+ countries' },
];

const process = [
  { step: '01', title: 'Free Consultation', desc: 'We assess your profile, academic goals, and recommend universities' },
  { step: '02', title: 'University Application', desc: 'Complete application support including SOP, LOR, and documents' },
  { step: '03', title: 'Admission & Blocked Account', desc: 'Secure admission letter and set up your blocked account (€11,208)' },
  { step: '04', title: 'Visa Processing', desc: 'Student visa application with interview preparation' },
  { step: '05', title: 'Pre-Departure Support', desc: 'Housing, travel, insurance, and settling-in guidance' },
];

const whatsappUrl = `https://wa.me/919112220244?text=${encodeURIComponent('Hello DreamGlobe Team,\n\nI would like to know more about Study in Germany programs. Please share the details about tuition-free universities and the application process.\n\nThank you.')}`;
const emailUrl = `mailto:info@dreamglobe.co.in?subject=${encodeURIComponent('Inquiry - Study in Germany Program')}&body=${encodeURIComponent('Hello DreamGlobe Team,\n\nI am interested in the Study in Germany program. Please share detailed information about:\n- University options\n- Eligibility requirements\n- Application process\n- Visa guidance\n\nThank you.')}`;

const Germany = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Carousel with German Flag Accent */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* German Flag Top Bar */}
        <div className="absolute top-0 left-0 right-0 z-30 flex h-1.5">
          <div className="flex-1 bg-black" />
          <div className="flex-1 bg-[#DD0000]" />
          <div className="flex-1 bg-[#FFCC00]" />
        </div>

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[8000ms]"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              {/* German Flag Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="flex gap-0.5">
                  <div className="w-5 h-3 bg-black rounded-l-sm" />
                  <div className="w-5 h-3 bg-[#DD0000]" />
                  <div className="w-5 h-3 bg-[#FFCC00] rounded-r-sm" />
                </div>
                <span className="text-white text-sm font-medium">Study in Germany</span>
              </div>

              <span
                key={`subtitle-${currentSlide}`}
                className="inline-block text-[#FFCC00] font-semibold tracking-wider uppercase text-sm mb-4 animate-fade-in-up"
              >
                {slides[currentSlide].subtitle}
              </span>
              <h1
                key={`title-${currentSlide}`}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                {slides[currentSlide].title}
              </h1>
              <p
                key={`desc-${currentSlide}`}
                className="text-white/80 text-lg sm:text-xl mb-8 max-w-xl animate-fade-in-up"
                style={{ animationDelay: '0.4s' }}
              >
                {slides[currentSlide].description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#FFCC00] text-black font-bold hover:bg-[#e6b800] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all h-14 rounded-lg px-10 text-base">
                    WhatsApp Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href={emailUrl}>
                  <Button className="border-2 border-[#FFCC00]/80 text-[#FFCC00] font-semibold text-base hover:bg-[#FFCC00]/10 hover:border-[#FFCC00] backdrop-blur-sm bg-transparent h-14 rounded-lg px-10">
                    Send Inquiry
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <button onClick={prevSlide} className="hidden md:block absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-[#FFCC00] hover:text-black hover:border-[#FFCC00] transition-all duration-300" aria-label="Previous slide">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button onClick={nextSlide} className="hidden md:block absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-[#FFCC00] hover:text-black hover:border-[#FFCC00] transition-all duration-300" aria-label="Next slide">
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-[#FFCC00]' : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/70 backdrop-blur-md border-t border-[#FFCC00]/30">
          <div className="container-custom px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex items-center justify-between md:justify-around gap-4 sm:gap-6">
              {[
                { value: '0€', label: 'Tuition Fees' },
                { value: '400+', label: 'Universities' },
                { value: '1800+', label: 'English Programs' },
                { value: '400K+', label: 'Intl Students' },
              ].map((stat) => (
                <div key={stat.label} className="text-center flex-1">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFCC00]" style={{ fontFamily: "'Comfortaa', sans-serif" }}>{stat.value}</div>
                  <div className="text-white/70 text-xs sm:text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Germany */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                <div className="w-8 h-2 bg-black rounded-l" />
                <div className="w-8 h-2 bg-[#DD0000]" />
                <div className="w-8 h-2 bg-[#FFCC00] rounded-r" />
              </div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
              Why Study in Germany?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Germany is the #1 non-English speaking destination for international students, offering unmatched value in education.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyGermany.map((item, idx) => (
              <div key={idx} className="card-professional p-6 hover-lift group animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-12 h-12 rounded-xl bg-[#FFCC00]/10 flex items-center justify-center mb-4 group-hover:bg-[#FFCC00]/20 transition-colors">
                  <item.icon className="h-6 w-6 text-[#FFCC00]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top German Universities */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
              Top German Universities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Germany's elite universities consistently rank among the world's best. Apply with DreamGlobe's expert guidance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((uni, idx) => (
              <div key={idx} className="card-professional overflow-hidden hover-lift group animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={uni.image} 
                    alt={uni.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-4 w-4 text-[#FFCC00]" />
                    <span className="text-[#FFCC00] text-sm font-semibold">{uni.ranking}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-navy mb-1">{uni.name}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                    <MapPin className="h-3 w-3" />
                    <span>{uni.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <BookOpen className="h-3 w-3" />
                    <span>{uni.programs}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
              Your Journey to Germany
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our step-by-step process makes studying in Germany simple and stress-free.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {process.map((item, idx) => (
              <div key={idx} className="relative card-professional p-6 text-center hover-lift animate-fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                <span className="text-4xl font-bold text-[#FFCC00]/20">{item.step}</span>
                <h3 className="font-serif text-base font-bold text-navy mt-2 mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                {idx < process.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFCC00] z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Eligibility Requirements
              </h2>
              <p className="text-primary-foreground/70 mb-8">
                Check if you qualify for admission to German public universities.
              </p>
              <div className="space-y-4">
                {[
                  'Completed 12th grade / Higher Secondary Education',
                  'Valid English proficiency (IELTS 6.0+ / TOEFL 80+)',
                  'German language skills (for German-taught programs)',
                  'APS Certificate (for Indian students)',
                  'Blocked account with €11,208 minimum balance',
                  'Health insurance coverage for Germany',
                ].map((req, idx) => (
                  <div key={idx} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <CheckCircle className="h-5 w-5 text-[#FFCC00] flex-shrink-0" />
                    <span className="text-primary-foreground/90">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-professional p-8 bg-white/5 border-[#FFCC00]/20">
              <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-6">Cost Breakdown</h3>
              <div className="space-y-4">
                {[
                  { label: 'Tuition Fees', value: '€0 / semester', note: 'Public universities' },
                  { label: 'Semester Fee', value: '€150-350', note: 'Transport & admin' },
                  { label: 'Living Costs', value: '€850-1000/mo', note: 'Rent, food, transport' },
                  { label: 'Health Insurance', value: '€110/mo', note: 'Mandatory coverage' },
                  { label: 'Blocked Account', value: '€11,208', note: 'Proof of funds' },
                ].map((cost, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                    <div>
                      <span className="text-primary-foreground font-medium">{cost.label}</span>
                      <span className="block text-primary-foreground/50 text-xs">{cost.note}</span>
                    </div>
                    <span className="text-[#FFCC00] font-bold">{cost.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-black via-[#DD0000] to-[#FFCC00] p-[2px]">
            <div className="bg-background rounded-2xl p-8 sm:p-12 text-center">
              <div className="flex justify-center gap-0.5 mb-6">
                <div className="w-10 h-3 bg-black rounded-l" />
                <div className="w-10 h-3 bg-[#DD0000]" />
                <div className="w-10 h-3 bg-[#FFCC00] rounded-r" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
                Start Your German Education Journey Today
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a free consultation with our Germany education experts. We'll assess your profile and guide you to the right university.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={emailUrl}>
                  <Button variant="gold" size="xl">
                    Send Inquiry Email
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all h-14 rounded-lg px-10 text-base">
                    Chat on WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
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

export default Germany;
