import { Button } from '@/components/ui/button';

interface GermanyCTAProps {
  whatsappUrl: string;
  emailUrl: string;
}

const GermanyCTA = ({ whatsappUrl, emailUrl }: GermanyCTAProps) => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background flag accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -left-20 -bottom-20 w-[400px] h-[400px] rounded-full overflow-hidden opacity-[0.03]">
          <div className="w-full h-1/3 bg-black" />
          <div className="w-full h-1/3 bg-[#DD0000]" />
          <div className="w-full h-1/3 bg-[#FFCC00]" />
        </div>
      </div>

      <div className="container-custom relative">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-black via-[#DD0000] to-[#FFCC00] p-[2px]">
          <div className="bg-background rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Inner flag glow */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/[0.02] via-[#DD0000]/[0.02] to-[#FFCC00]/[0.04]" />
            </div>
            <div className="relative">
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
                  </Button>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all h-14 rounded-full px-10 text-base">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GermanyCTA;
