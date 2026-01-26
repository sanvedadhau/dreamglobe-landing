import { CheckCircle, Award, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const highlights = [
    'ICCRC Licensed Consultants',
    'Personalized Immigration Strategy',
    'Transparent Process & Pricing',
    'Post-Landing Support Services',
  ];

  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-gold font-semibold tracking-wider uppercase text-sm">
              About Dreamglobe
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-6">
              Your Trusted Partner in Global Immigration
            </h2>
            <div className="divider-gold mb-6" />
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded with a vision to make global mobility accessible to everyone, DreamGlobe has
              been transforming immigration dreams into reality for over 15 years. Our team of
              certified immigration consultants brings unparalleled expertise and a client-first
              approach to every case.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We understand that immigration is not just about paperwork—it's about building a new
              life. That's why we provide comprehensive support from initial consultation to
              successful settlement.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="navy" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="card-professional p-6 hover-lift">
              <Award className="h-10 w-10 text-gold mb-4" />
              <h3 className="font-serif text-3xl font-bold text-navy">15+</h3>
              <p className="text-muted-foreground mt-2">Years of Excellence</p>
            </div>
            <div className="card-professional p-6 hover-lift mt-8">
              <Users className="h-10 w-10 text-gold mb-4" />
              <h3 className="font-serif text-3xl font-bold text-navy">10,000+</h3>
              <p className="text-muted-foreground mt-2">Happy Clients</p>
            </div>
            <div className="card-professional p-6 hover-lift">
              <Globe className="h-10 w-10 text-gold mb-4" />
              <h3 className="font-serif text-3xl font-bold text-navy">50+</h3>
              <p className="text-muted-foreground mt-2">Countries Served</p>
            </div>
            <div className="card-professional p-6 hover-lift mt-8">
              <CheckCircle className="h-10 w-10 text-gold mb-4" />
              <h3 className="font-serif text-3xl font-bold text-navy">98%</h3>
              <p className="text-muted-foreground mt-2">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
