import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import heroImmigration from '@/assets/hero-immigration.jpg';
import heroStudyAbroad from '@/assets/hero-study-abroad.jpg';
import heroGermanUniversity from '@/assets/hero-german-university.jpg';

const slides = [
  {
    id: 1,
    image: heroImmigration,
    title: 'Your Immigration Journey Starts Here',
    subtitle: 'Expert Visa Services',
    description:
      'Navigate the complex world of immigration with confidence. Our experienced consultants guide you every step of the way.',
    cta: 'Start Your Journey',
  },
  {
    id: 2,
    image: heroStudyAbroad,
    title: 'Study Abroad Dreams Come True',
    subtitle: 'International Education',
    description:
      'Unlock world-class education opportunities at top universities worldwide. Your future begins with the right guidance.',
    cta: 'Explore Programs',
  },
  {
    id: 3,
    image: heroGermanUniversity,
    title: 'Study in Germany for Free',
    subtitle: 'German Public Universities',
    description:
      'Access tuition-free education at prestigious German public universities. Quality education without the financial burden.',
    cta: 'Learn More',
  },
];

const HeroCarousel = () => {
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
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[8000ms]"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)',
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/70 to-navy-dark/40" />

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container-custom px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <span
                  className={`inline-block text-gold font-semibold tracking-wider uppercase text-sm mb-4 ${
                    index === currentSlide ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: '0.2s' }}
                >
                  {slide.subtitle}
                </span>
                <h1
                  className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 ${
                    index === currentSlide ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: '0.4s' }}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-primary-foreground/80 text-lg sm:text-xl mb-8 max-w-xl ${
                    index === currentSlide ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: '0.6s' }}
                >
                  {slide.description}
                </p>
                <div
                  className={`flex flex-wrap gap-4 ${
                    index === currentSlide ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: '0.8s' }}
                >
                  <Button variant="hero" size="xl">
                    {slide.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="heroOutline" size="xl">
                    Watch Our Story
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-gold hover:text-navy-dark hover:border-gold transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-gold hover:text-navy-dark hover:border-gold transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-gold'
                : 'w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-navy-dark/80 backdrop-blur-md border-t border-gold/20">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-gold">15+</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-gold">10,000+</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Successful Visas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-gold">98%</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-gold">50+</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Countries Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
