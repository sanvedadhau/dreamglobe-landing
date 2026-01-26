import { Quote, Linkedin, Mail } from 'lucide-react';
import founderImage from '@/assets/founder.jpg';

const FounderSection = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={founderImage}
                alt="Rajesh Sharma - Founder of DreamGlobe"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold rounded-lg hidden lg:block" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/10 rounded-lg hidden lg:block" />
          </div>

          {/* Content */}
          <div>
            <span className="text-gold font-semibold tracking-wider uppercase text-sm">
              Meet Our Founder
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-6">
              Rajesh Sharma
            </h2>
            <p className="text-gold font-medium text-lg mb-6">
              Founder & Managing Director
            </p>
            <div className="divider-gold mb-6" />

            <div className="relative mb-8">
              <Quote className="absolute -top-4 -left-4 h-12 w-12 text-gold/20" />
              <p className="text-muted-foreground text-lg leading-relaxed italic pl-8">
                "Every immigration journey is unique, and so should be the approach. At DreamGlobe,
                we don't just process visas—we build pathways to new beginnings. Our commitment is
                to make the dream of global mobility accessible to everyone who dares to dream."
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              With over 20 years of experience in immigration consultancy, Rajesh founded DreamGlobe
              with a vision to transform how immigration services are delivered. A licensed ICCRC
              member and former immigration officer, he brings unparalleled expertise and a deep
              understanding of immigration systems worldwide.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-primary-foreground hover:bg-gold hover:text-navy-dark transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-primary-foreground hover:bg-gold hover:text-navy-dark transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
