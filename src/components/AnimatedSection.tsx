import {
  type ReactNode,
  type CSSProperties,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

/*
 * Animazioni leggere senza framer-motion:
 * IntersectionObserver + transizioni CSS native.
 * Mantiene la stessa API (AnimatedSection / StaggerContainer / StaggerItem)
 * così tutte le pagine continuano a funzionare senza modifiche.
 * I contenuti restano sempre nel DOM/HTML (SEO-safe: solo opacity/transform).
 */

const EASE = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
const VIEWPORT_MARGIN = '-60px';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const getHiddenTransform = (direction: Direction, distance: number): string => {
  switch (direction) {
    case 'up':
      return `translateY(${distance}px)`;
    case 'down':
      return `translateY(-${distance}px)`;
    case 'left':
      return `translateX(${distance}px)`;
    case 'right':
      return `translateX(-${distance}px)`;
    default:
      return 'none';
  }
};

const useInViewOnce = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: `0px 0px ${VIEWPORT_MARGIN} 0px` }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView]);

  return { ref, inView };
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  duration?: number;
}

export const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
}: AnimatedSectionProps) => {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const reduced = prefersReducedMotion();

  const style: CSSProperties =
    reduced || inView
      ? {
          opacity: 1,
          transform: 'none',
          transition: reduced
            ? 'none'
            : `opacity ${duration}s ${EASE} ${delay}s, transform ${duration}s ${EASE} ${delay}s`,
        }
      : {
          opacity: 0,
          transform: getHiddenTransform(direction, 40),
          // Nessuna transizione nello stato iniziale: evita flash al primo paint
          transition: 'none',
        };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};

interface StaggerContextValue {
  inView: boolean;
  staggerDelay: number;
  baseDelay: number;
  register: () => number;
}

const StaggerContext = createContext<StaggerContextValue | null>(null);

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
}

export const StaggerContainer = ({
  children,
  className = '',
  staggerDelay = 0.1,
  delay = 0,
}: StaggerContainerProps) => {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const counterRef = useRef(0);

  const value: StaggerContextValue = {
    inView,
    staggerDelay,
    baseDelay: delay,
    register: () => counterRef.current++,
  };

  return (
    <StaggerContext.Provider value={value}>
      <div ref={ref} className={className}>
        {children}
      </div>
    </StaggerContext.Provider>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
}

export const StaggerItem = ({
  children,
  className = '',
  direction = 'up',
}: StaggerItemProps) => {
  const ctx = useContext(StaggerContext);
  // Indice stabile per item: assegnato una sola volta al primo render
  const indexRef = useRef<number | null>(null);
  if (indexRef.current === null) {
    indexRef.current = ctx ? ctx.register() : 0;
  }

  const inView = ctx ? ctx.inView : true;
  const delay = ctx ? ctx.baseDelay + ctx.staggerDelay * indexRef.current : 0;
  const reduced = prefersReducedMotion();

  const duration = 0.5;
  const style: CSSProperties =
    reduced || inView
      ? {
          opacity: 1,
          transform: 'none',
          transition: reduced
            ? 'none'
            : `opacity ${duration}s ${EASE} ${delay}s, transform ${duration}s ${EASE} ${delay}s`,
        }
      : {
          opacity: 0,
          transform: getHiddenTransform(direction, 30),
          transition: 'none',
        };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};
