import { Target, Eye, Compass } from 'lucide-react';

const VisionMissionSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold tracking-wider uppercase text-sm">
            Our Purpose
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-6">
            Vision, Mission & Values
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="card-professional p-8 text-center hover-lift">
            <div className="w-16 h-16 rounded-full bg-navy mx-auto flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-gold" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-navy mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the world's most trusted immigration partner, making global mobility accessible
              and achievable for everyone who aspires to build a better future abroad.
            </p>
          </div>

          {/* Mission */}
          <div className="card-professional p-8 text-center hover-lift bg-navy text-primary-foreground">
            <div className="w-16 h-16 rounded-full bg-gold mx-auto flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-navy-dark" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              To provide ethical, transparent, and personalized immigration services that empower
              individuals and families to achieve their dreams of studying, working, or settling abroad.
            </p>
          </div>

          {/* Values */}
          <div className="card-professional p-8 text-center hover-lift">
            <div className="w-16 h-16 rounded-full bg-navy mx-auto flex items-center justify-center mb-6">
              <Compass className="h-8 w-8 text-gold" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-navy mb-4">Our Values</h3>
            <p className="text-muted-foreground leading-relaxed">
              Integrity in every interaction, excellence in service delivery, empathy in understanding
              client needs, and innovation in solving complex immigration challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
