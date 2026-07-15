import { ChevronDown } from 'lucide-react';

const HeroScrollTransition = () => {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
      aria-hidden="true"
    >
      {/* Wave SVG bridging hero to AboutSection surface */}
      <svg
        className="w-full h-16 sm:h-20 md:h-24 lg:h-28"
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
      <div className="absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-3">
        <div className="scroll-indicator flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-background/80 border border-border/60 shadow-lg backdrop-blur-md">
          <ChevronDown className="w-5 h-5 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default HeroScrollTransition;
