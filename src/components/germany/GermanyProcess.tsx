import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const process = [
  { step: '01', title: 'Free Consultation', desc: 'We assess your profile, academic goals, and recommend universities', icon: '🎯' },
  { step: '02', title: 'University Application', desc: 'Complete application support including SOP, LOR, and documents', icon: '📝' },
  { step: '03', title: 'Admission & Blocked Account', desc: 'Secure admission letter and set up your blocked account (€11,208)', icon: '🏦' },
  { step: '04', title: 'Visa Processing', desc: 'Student visa application with interview preparation', icon: '✈️' },
  { step: '05', title: 'Pre-Departure Support', desc: 'Housing, travel, insurance, and settling-in guidance', icon: '🏠' },
];

const GermanyProcess = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* German flag background - large faded horizontal stripes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-0 right-0 top-0 h-1/3 bg-black/[0.015]" />
        <div className="absolute left-0 right-0 top-1/3 h-1/3 bg-[#DD0000]/[0.02]" />
        <div className="absolute left-0 right-0 top-2/3 h-1/3 bg-[#FFCC00]/[0.03]" />
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="flex gap-0.5">
              <div className="w-8 h-2 bg-black rounded-l" />
              <div className="w-8 h-2 bg-[#DD0000]" />
              <div className="w-8 h-2 bg-[#FFCC00] rounded-r" />
            </div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
            Your Journey to Germany
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our step-by-step process makes studying in Germany simple and stress-free.
          </p>
        </div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative mb-8">
            <div className="absolute top-6 left-[10%] right-[10%] h-1 bg-gradient-to-r from-black via-[#DD0000] to-[#FFCC00] rounded-full" />
            <div className="grid grid-cols-5 gap-4 relative">
              {process.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => setActiveStep(activeStep === idx ? null : idx)}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 transition-all duration-500 ${
                    activeStep === idx
                      ? 'bg-[#FFCC00] scale-125 shadow-lg shadow-[#FFCC00]/30'
                      : 'bg-white border-2 border-[#FFCC00]/50 group-hover:border-[#FFCC00] group-hover:scale-110'
                  }`}>
                    {activeStep === idx ? <CheckCircle className="h-6 w-6 text-black" /> : <span>{item.icon}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4">
            {process.map((item, idx) => (
              <div
                key={idx}
                className={`card-professional p-5 text-center transition-all duration-500 cursor-pointer relative overflow-hidden ${
                  activeStep === idx
                    ? 'ring-2 ring-[#FFCC00] bg-[#FFCC00]/5 scale-[1.03]'
                    : 'hover:shadow-lg'
                }`}
                onClick={() => setActiveStep(activeStep === idx ? null : idx)}
              >
                {/* Card flag accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 flex pointer-events-none">
                  <div className="flex-1 bg-black/20" />
                  <div className="flex-1 bg-[#DD0000]/25" />
                  <div className="flex-1 bg-[#FFCC00]/30" />
                </div>
                <span className="text-3xl font-bold text-[#FFCC00]/20">{item.step}</span>
                <h3 className="font-serif text-sm font-bold text-navy mt-2 mb-2">{item.title}</h3>
                <p className={`text-muted-foreground text-xs leading-relaxed transition-all duration-500 ${
                  activeStep === idx ? 'max-h-40 opacity-100' : 'max-h-10 opacity-70'
                }`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden space-y-4">
          {process.map((item, idx) => (
            <div
              key={idx}
              className={`card-professional p-5 flex items-start gap-4 transition-all duration-500 cursor-pointer animate-fade-in-up relative overflow-hidden ${
                activeStep === idx ? 'ring-2 ring-[#FFCC00] bg-[#FFCC00]/5' : ''
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setActiveStep(activeStep === idx ? null : idx)}
            >
              {/* Left flag stripe */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 flex flex-col pointer-events-none">
                <div className="flex-1 bg-black/20" />
                <div className="flex-1 bg-[#DD0000]/25" />
                <div className="flex-1 bg-[#FFCC00]/30" />
              </div>
              <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-xl transition-all duration-500 ${
                activeStep === idx ? 'bg-[#FFCC00] scale-110' : 'bg-[#FFCC00]/10'
              }`}>
                {item.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#FFCC00] text-xs font-bold">STEP {item.step}</span>
                  {idx < process.length - 1 && <ArrowRight className="h-3 w-3 text-[#FFCC00]/50" />}
                </div>
                <h3 className="font-serif text-base font-bold text-navy mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GermanyProcess;
