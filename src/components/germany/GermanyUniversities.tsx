import { useState } from 'react';
import { MapPin, BookOpen, ExternalLink, ChevronDown, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const universities = [
  {
    name: 'Technical University of Munich',
    location: 'Munich, Bavaria',
    ranking: '#1 in Germany',
    programs: '180+ Programs',
    image: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=600&h=400&fit=crop',
    description: "TUM is Germany's top university for engineering and technology, known for innovation and strong industry ties.",
    topPrograms: ['Mechanical Engineering', 'Computer Science', 'Electrical Engineering', 'Physics', 'Data Engineering', 'Aerospace Engineering'],
  },
  {
    name: 'Ludwig Maximilian University',
    location: 'Munich, Bavaria',
    ranking: '#2 in Germany',
    programs: '200+ Programs',
    image: 'https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=600&h=400&fit=crop',
    description: 'LMU is a leading research university with a rich tradition in humanities, natural sciences, and medicine.',
    topPrograms: ['Medicine', 'Law', 'Business Administration', 'Psychology', 'Biology', 'Economics'],
  },
  {
    name: 'Heidelberg University',
    location: 'Heidelberg, BW',
    ranking: '#3 in Germany',
    programs: '160+ Programs',
    image: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=600&h=400&fit=crop',
    description: "Germany's oldest university, renowned for its excellence in research and diverse academic programs.",
    topPrograms: ['Molecular Biotechnology', 'Physics', 'Mathematics', 'German Literature', 'Medicine', 'Philosophy'],
  },
  {
    name: 'Humboldt University of Berlin',
    location: 'Berlin',
    ranking: '#4 in Germany',
    programs: '170+ Programs',
    image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&h=400&fit=crop',
    description: 'A historic institution in the heart of Berlin, famous for its contributions to science and philosophy.',
    topPrograms: ['Social Sciences', 'Cultural Studies', 'Mathematics', 'Computer Science', 'Arts & Humanities', 'Political Science'],
  },
  {
    name: 'RWTH Aachen University',
    location: 'Aachen, NRW',
    ranking: '#5 in Germany',
    programs: '150+ Programs',
    image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=600&h=400&fit=crop',
    description: "One of Europe's leading universities of science and technology with strong engineering programs.",
    topPrograms: ['Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Computer Science', 'Business & Economics', 'Chemistry'],
  },
  {
    name: 'Freie Universität Berlin',
    location: 'Berlin',
    ranking: '#6 in Germany',
    programs: '150+ Programs',
    image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&h=400&fit=crop',
    description: 'A prestigious research university known for its humanities, social sciences, and natural sciences.',
    topPrograms: ['Political Science', 'History', 'Earth Sciences', 'Veterinary Medicine', 'Pharmacy', 'Film Studies'],
  },
];

interface GermanyUniversitiesProps {
  whatsappUrl: string;
}

const GermanyUniversities = ({ whatsappUrl }: GermanyUniversitiesProps) => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* German flag background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-2 flex">
          <div className="flex-1 bg-black/[0.06]" />
          <div className="flex-1 bg-[#DD0000]/[0.06]" />
          <div className="flex-1 bg-[#FFCC00]/[0.08]" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 flex">
          <div className="flex-1 bg-black/[0.06]" />
          <div className="flex-1 bg-[#DD0000]/[0.06]" />
          <div className="flex-1 bg-[#FFCC00]/[0.08]" />
        </div>
        {/* Large faded flag circle */}
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full overflow-hidden opacity-[0.04]">
          <div className="w-full h-1/3 bg-black" />
          <div className="w-full h-1/3 bg-[#DD0000]" />
          <div className="w-full h-1/3 bg-[#FFCC00]" />
        </div>
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
            Top German Universities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Germany's elite universities consistently rank among the world's best. Click a university to see top programs offered.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((uni, idx) => {
            const isExpanded = expandedIdx === idx;
            return (
              <div
                key={idx}
                className={`card-professional overflow-hidden hover-lift group animate-fade-in-up cursor-pointer transition-all duration-500 ${
                  isExpanded ? 'ring-2 ring-[#FFCC00] shadow-xl shadow-[#FFCC00]/10' : ''
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
              >
                {/* Fixed aspect ratio for consistent sizing */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isExpanded ? 'scale-110' : 'group-hover:scale-105'}`}
                    loading="lazy"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Ranking badge */}
                  <div className="absolute top-3 right-3 bg-[#FFCC00] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {uni.ranking}
                  </div>
                  {/* German flag mini stripe */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 flex">
                    <div className="flex-1 bg-black" />
                    <div className="flex-1 bg-[#DD0000]" />
                    <div className="flex-1 bg-[#FFCC00]" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-navy mb-2 group-hover:text-[#DD0000] transition-colors">{uni.name}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#DD0000]" />
                    <span>{uni.location}</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <BookOpen className="h-3.5 w-3.5 text-[#FFCC00]" />
                      <span>{uni.programs}</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 text-[#FFCC00] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </div>

                  {/* Expandable top programs section */}
                  <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="border-t border-border pt-3 mb-3">
                      <div className="flex items-center gap-1.5 mb-3">
                        <GraduationCap className="h-4 w-4 text-[#FFCC00]" />
                        <span className="text-sm font-bold text-navy">Top Programs Offered</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {uni.topPrograms.map((program, pIdx) => (
                          <span
                            key={pIdx}
                            className="inline-flex items-center text-xs px-2.5 py-1 rounded-full bg-[#FFCC00]/10 text-[#996600] border border-[#FFCC00]/20 font-medium"
                          >
                            {program}
                          </span>
                        ))}
                      </div>
                      <p className="text-muted-foreground text-xs mb-3 leading-relaxed">{uni.description}</p>
                    </div>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      <Button size="sm" className="w-full bg-[#FFCC00] text-black hover:bg-[#e6b800] transition-all duration-300 font-semibold shadow-md">
                        Inquire About This University
                        <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                      </Button>
                    </a>
                  </div>

                  {/* Collapsed state hint */}
                  {!isExpanded && (
                    <p className="text-xs text-[#FFCC00]/70 text-center font-medium">Click to see top programs →</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GermanyUniversities;
