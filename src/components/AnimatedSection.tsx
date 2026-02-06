import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

const getVariants = (direction: string, distance = 40): Variants => {
  const initial: Record<string, number> = { opacity: 0 };
  if (direction === 'up') initial.y = distance;
  if (direction === 'down') initial.y = -distance;
  if (direction === 'left') initial.x = distance;
  if (direction === 'right') initial.x = -distance;

  return {
    hidden: initial,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
};

export const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
}: AnimatedSectionProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={getVariants(direction)}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

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
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ staggerChildren: staggerDelay, delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const StaggerItem = ({
  children,
  className = '',
  direction = 'up',
}: StaggerItemProps) => {
  return (
    <motion.div
      className={className}
      variants={getVariants(direction, 30)}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
};
