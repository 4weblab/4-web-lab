import { ChevronDown } from 'lucide-react';

const HeroScrollTransition = () => {
  return (
    <div
      className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
      aria-hidden="true"
    >
      {/* Animated scroll indicator */}
      <div className="scroll-indicator flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-background/90 border border-accent/30 shadow-accent/30 shadow-lg backdrop-blur-md">
        <ChevronDown className="w-6 h-6 text-accent" strokeWidth={2.5} />
      </div>
    </div>
  );
};

export default HeroScrollTransition;
