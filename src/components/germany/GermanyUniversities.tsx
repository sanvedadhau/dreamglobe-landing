import { useState } from 'react';
import { Award, MapPin, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const universities = [
  { name: 'Technical University of Munich', location: 'Munich, Bavaria', ranking: '#1 in Germany', programs: '180+ Programs', image: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=600&h=400&fit=crop', description: 'TUM is Germany\'s top university for engineering and technology, known for innovation and strong industry ties.' },
  { name: 'Ludwig Maximilian University', location: 'Munich, Bavaria', ranking: '#2 in Germany', programs: '200+ Programs', image: 'https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=600&h=400&fit=crop', description: 'LMU is a leading research university with a rich tradition in humanities, natural sciences, and medicine.' },
  { name: 'Heidelberg University', location: 'Heidelberg, BW', ranking: '#3 in Germany', programs: '160+ Programs', image: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=600&h=400&fit=crop', description: 'Germany\'s oldest university, renowned for its excellence in research and diverse academic programs.' },
  { name: 'Humboldt University of Berlin', location: 'Berlin', ranking: '#4 in Germany', programs: '170+ Programs', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&h=400&fit=crop', description: 'A historic institution in the heart of Berlin, famous for its contributions to science and philosophy.' },
  { name: 'RWTH Aachen University', location: 'Aachen, NRW', ranking: '#5 in Germany', programs: '150+ Programs', image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=600&h=400&fit=crop', description: 'One of Europe\'s leading universities of science and technology with strong engineering programs.' },
  { name: 'Freie Universität Berlin', location: 'Berlin', ranking: '#6 in Germany', programs: '150+ Programs', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&h=400&fit=crop', description: 'A prestigious research university known for its humanities, social sciences, and natural sciences.' },
];

interface GermanyUniversitiesProps {
  whatsappUrl: string;
}

const GermanyUniversities = ({ whatsappUrl }: GermanyUniversitiesProps) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
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
            Germany's elite universities consistently rank among the world's best. Apply with DreamGlobe's expert guidance.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((uni, idx) => (
            <div
              key={idx}
              className="card-professional overflow-hidden hover-lift group animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Fixed aspect ratio for consistent sizing */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={uni.image}
                  alt={uni.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Hover overlay with description */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-end p-4 transition-opacity duration-300 ${hoveredIdx === idx ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-white text-sm leading-relaxed">{uni.description}</p>
                </div>
                {/* Ranking badge */}
                <div className="absolute top-3 right-3 bg-[#FFCC00] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {uni.ranking}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-navy mb-2 group-hover:text-[#DD0000] transition-colors">{uni.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#DD0000]" />
                  <span>{uni.location}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                  <BookOpen className="h-3.5 w-3.5 text-[#FFCC00]" />
                  <span>{uni.programs}</span>
                </div>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="w-full bg-[#FFCC00]/10 text-[#CC9900] hover:bg-[#FFCC00] hover:text-black border border-[#FFCC00]/30 transition-all duration-300 font-semibold">
                    Inquire Now
                    <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GermanyUniversities;
