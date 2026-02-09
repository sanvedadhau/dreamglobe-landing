import { useState } from 'react';
import { Euro, GraduationCap, Briefcase, Heart, Globe, Users } from 'lucide-react';

const whyGermany = [
  { icon: Euro, title: 'Zero Tuition Fees', desc: 'Public universities charge only a small semester fee (~€300/semester)', color: '#FFCC00' },
  { icon: GraduationCap, title: 'Top-Ranked Universities', desc: '50+ universities in global top 500 rankings', color: '#DD0000' },
  { icon: Briefcase, title: '18-Month Post-Study Visa', desc: 'Stay and find work after completing your degree', color: '#FFCC00' },
  { icon: Heart, title: 'Affordable Living', desc: '€850-1000/month average student living costs', color: '#DD0000' },
  { icon: Globe, title: 'English Programs', desc: "1,800+ English-taught master's programs available", color: '#FFCC00' },
  { icon: Users, title: 'Multicultural Environment', desc: '400,000+ international students from 190+ countries', color: '#DD0000' },
];

const WhyGermany = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* German flag vertical accent on right */}
      <div className="absolute right-0 top-0 bottom-0 w-1.5 flex flex-col pointer-events-none" aria-hidden="true">
        <div className="flex-1 bg-black/10" />
        <div className="flex-1 bg-[#DD0000]/15" />
        <div className="flex-1 bg-[#FFCC00]/20" />
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
            Why Study in Germany?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Germany is the #1 non-English speaking destination for international students, offering unmatched value in education.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyGermany.map((item, idx) => (
            <div
              key={idx}
              className={`card-professional p-6 hover-lift group animate-fade-in-up cursor-pointer transition-all duration-500 relative overflow-hidden ${
                activeIdx === idx ? 'ring-2 ring-[#FFCC00] scale-[1.02]' : ''
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
            >
              {/* Card-level flag accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 flex pointer-events-none">
                <div className="flex-1 bg-black/20" />
                <div className="flex-1 bg-[#DD0000]/25" />
                <div className="flex-1 bg-[#FFCC00]/30" />
              </div>
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.icon className="h-7 w-7" style={{ color: item.color }} />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy mb-2 group-hover:text-[#DD0000] transition-colors">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              <div className={`mt-3 h-0.5 bg-gradient-to-r from-[#FFCC00] to-[#DD0000] rounded transition-all duration-500 ${activeIdx === idx ? 'w-full' : 'w-0 group-hover:w-1/2'}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGermany;
