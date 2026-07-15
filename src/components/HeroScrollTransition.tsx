import { ChevronDown } from 'lucide-react';

const HeroScrollTransition = () => {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
      aria-hidden="true"
    >
      {/* Wave SVG bridging hero to AboutSection surface */}
      <svg
        className="w-full h-14 sm:h-18 md:h-22 lg:h-26"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,64 C240,120 480,0 720,64 C960,128 1200,0 1440,64 L1440,120 L0,120 Z"
          fill="hsl(var(--surface-alt))"
        />
      </svg>

      {/* Animated scroll indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 sm:bottom-4">
        <div className="scroll-indicator flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-background/90 border border-accent/30 shadow-accent/30 shadow-lg backdrop-blur-md">
          <ChevronDown className="w-6 h-6 text-accent" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
};

export default HeroScrollTransition;
