import { Shield, Clock, Award, HeadphonesIcon, TrendingUp, Heart } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Licensed Experts',
    description:
      'Our consultants are ICCRC certified with extensive experience in immigration law and procedures.',
  },
  {
    icon: TrendingUp,
    title: '98% Success Rate',
    description:
      'Industry-leading approval rates backed by meticulous preparation and expert case management.',
  },
  {
    icon: Clock,
    title: 'Fast Processing',
    description:
      'Streamlined processes and dedicated teams ensure your applications are submitted promptly.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description:
      'Round-the-clock assistance for all your queries, from initial consultation to post-landing.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description:
      'Over 10,000 successful cases across 50+ countries in our 15+ years of operation.',
  },
  {
    icon: Heart,
    title: 'Client-First Approach',
    description:
      'Personalized strategies tailored to your unique profile, goals, and circumstances.',
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-navy">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold tracking-wider uppercase text-sm">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-6">
            The DreamGlobe Advantage
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-primary-foreground/70 text-lg">
            Experience the difference of working with a team that truly cares about your success.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative p-8 rounded-lg border border-gold/20 bg-navy-light/20 hover:border-gold/50 transition-all duration-300 group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg" />
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                <reason.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
