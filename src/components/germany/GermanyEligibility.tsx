import { useState } from 'react';
import { CheckCircle, ChevronDown } from 'lucide-react';

const requirements = [
  { text: 'Completed 12th grade / Higher Secondary Education', detail: 'Minimum 60% aggregate or equivalent GPA required for most programs.' },
  { text: 'Valid English proficiency (IELTS 6.0+ / TOEFL 80+)', detail: 'Some universities accept Duolingo or PTE scores as alternatives.' },
  { text: 'German language skills (for German-taught programs)', detail: 'TestDaF TDN 4 or DSH-2 level required. Many prep courses available.' },
  { text: 'APS Certificate (for Indian students)', detail: 'Akademische Prüfstelle certificate verifies your academic credentials.' },
  { text: 'Blocked account with €11,208 minimum balance', detail: 'Required as proof of financial means. You can withdraw €934/month.' },
  { text: 'Health insurance coverage for Germany', detail: 'Public health insurance costs ~€110/month for students under 30.' },
];

const costs = [
  { label: 'Tuition Fees', value: '€0 / semester', note: 'Public universities' },
  { label: 'Semester Fee', value: '€150-350', note: 'Transport & admin' },
  { label: 'Living Costs', value: '€850-1000/mo', note: 'Rent, food, transport' },
  { label: 'Health Insurance', value: '€110/mo', note: 'Mandatory coverage' },
  { label: 'Blocked Account', value: '€11,208', note: 'Proof of funds' },
];

const GermanyEligibility = () => {
  const [expandedReq, setExpandedReq] = useState<number | null>(null);
  const [hoveredCost, setHoveredCost] = useState<number | null>(null);

  return (
    <section className="section-padding bg-navy">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                <div className="w-6 h-1.5 bg-white rounded-l" />
                <div className="w-6 h-1.5 bg-[#DD0000]" />
                <div className="w-6 h-1.5 bg-[#FFCC00] rounded-r" />
              </div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Eligibility Requirements
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              Check if you qualify for admission to German public universities. Click each requirement for more details.
            </p>
            <div className="space-y-3">
              {requirements.map((req, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg transition-all duration-500 cursor-pointer animate-fade-in-up ${
                    expandedReq === idx
                      ? 'bg-white/10 ring-1 ring-[#FFCC00]/30'
                      : 'hover:bg-white/5'
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                  onClick={() => setExpandedReq(expandedReq === idx ? null : idx)}
                >
                  <div className="flex items-center gap-3 p-3">
                    <CheckCircle className={`h-5 w-5 flex-shrink-0 transition-colors duration-300 ${
                      expandedReq === idx ? 'text-[#FFCC00]' : 'text-[#FFCC00]/70'
                    }`} />
                    <span className="text-primary-foreground/90 flex-1">{req.text}</span>
                    <ChevronDown className={`h-4 w-4 text-[#FFCC00]/50 transition-transform duration-300 ${
                      expandedReq === idx ? 'rotate-180' : ''
                    }`} />
                  </div>
                  <div className={`overflow-hidden transition-all duration-500 ${
                    expandedReq === idx ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-primary-foreground/60 text-sm px-3 pb-3 pl-11">{req.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card-professional p-8 bg-white/5 border-[#FFCC00]/20">
            <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-6">Cost Breakdown</h3>
            <div className="space-y-1">
              {costs.map((cost, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                    hoveredCost === idx ? 'bg-[#FFCC00]/10 scale-[1.01]' : 'hover:bg-white/5'
                  }`}
                  onMouseEnter={() => setHoveredCost(idx)}
                  onMouseLeave={() => setHoveredCost(null)}
                >
                  <div>
                    <span className="text-primary-foreground font-medium">{cost.label}</span>
                    <span className="block text-primary-foreground/50 text-xs">{cost.note}</span>
                  </div>
                  <span className={`font-bold transition-all duration-300 ${
                    hoveredCost === idx ? 'text-[#FFCC00] scale-110' : 'text-[#FFCC00]/80'
                  }`}>{cost.value}</span>
                </div>
              ))}
            </div>
            {/* Total estimate */}
            <div className="mt-6 pt-4 border-t border-[#FFCC00]/20">
              <div className="flex justify-between items-center">
                <span className="text-primary-foreground font-bold">Total First Year Estimate</span>
                <span className="text-[#FFCC00] font-bold text-xl">~€22,000</span>
              </div>
              <p className="text-primary-foreground/40 text-xs mt-1">Including blocked account, insurance & living costs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GermanyEligibility;
