import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
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
    description: "Join thousands of international students at Germany's leading universities, offering cutting-edge research and globally recognized degrees.",
  },
  {
    id: 3,
    image: heroGermany3,
    title: 'Live & Work in Germany',
    subtitle: 'Post-Study Work Opportunities',
    description: "Germany offers an 18-month post-study work visa, letting you launch your career in Europe's strongest economy.",
  },
];

interface GermanyHeroProps {
  whatsappUrl: string;
  emailUrl: string;
}

const GermanyHero = ({ whatsappUrl, emailUrl }: GermanyHeroProps) => {
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

      {/* Navigation - hidden on mobile */}
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
  );
};

export default GermanyHero;
