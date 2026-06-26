import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { JourneyState, JOURNEY_STEPS } from './types';
import { GraduationCap, Code2, Briefcase, Building2 } from 'lucide-react';

interface JourneyMobileProps {
  activeNode: JourneyState;
  onNodeChange: (node: JourneyState) => void;
  isPaused: boolean;
}


export const JourneyMobile: React.FC<JourneyMobileProps> = ({ activeNode, onNodeChange, isPaused }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap() as JourneyState;
    if (index !== activeNode) {
      onNodeChange(index);
    }
  }, [emblaApi, activeNode, onNodeChange]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || isPaused) return;
    
    // Auto advance every 4.55s
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4550);

    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

  useEffect(() => {
    if (emblaApi && activeNode !== emblaApi.selectedScrollSnap()) {
      emblaApi.scrollTo(activeNode);
    }
  }, [activeNode, emblaApi]);

  return (
    <div className="w-full pb-8">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {JOURNEY_STEPS.map((step, index) => {
            const isActive = activeNode === step.id;
            const IconComponent = step.icon;

            return (
              <div 
                key={step.id} 
                className="flex-[0_0_80%] min-w-0 pl-4 relative"
              >
                <div 
                  className={`
                    flex flex-col items-center justify-center p-6 rounded-card border backdrop-blur-md transition-all duration-500
                    ${isActive ? 'bg-white/10' : 'bg-white/5 opacity-50 scale-95'}
                  `}
                  style={{
                    borderColor: isActive ? step.color : 'rgba(255, 255, 255, 0.1)',
                    boxShadow: isActive ? `0 0 30px ${step.color}33` : 'none'
                  }}
                  onClick={() => onNodeChange(step.id as JourneyState)}
                >
                  <IconComponent 
                    className="w-12 h-12 mb-4 transition-colors duration-300"
                    style={{ color: isActive ? step.color : 'rgba(255,255,255,0.5)' }}
                  />
                  <span className="text-white font-heading font-bold text-lg mb-1">{step.label}</span>
                  <span className="text-blue-200/80 text-sm font-medium">Step 0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {JOURNEY_STEPS.map((step) => (
          <div
            key={step.id}
            className={`h-2 rounded-full transition-all duration-300 ${activeNode === step.id ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
};
