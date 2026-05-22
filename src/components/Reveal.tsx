import { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'right' | 'left';
  delay?: number;
}

/** Calculé une fois : si l'utilisateur veut moins d'animations, on révèle direct. */
const reducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export function Reveal({ children, className = '', direction = 'up', delay = 0 }: RevealProps) {
  // Visible d'emblée si IntersectionObserver est indisponible ou si l'utilisateur
  // a demandé moins d'animations — jamais de contenu bloqué invisible.
  const [isVisible, setIsVisible] = useState(
    reducedMotion || typeof IntersectionObserver === 'undefined'
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) return;
    const el = ref.current;
    if (!el) return;

    // Filet de sécurité (GitHub Pages lent, deep-link, scroll restauré, ou scroll
    // pendant le chargement du bundle) : si l'élément est déjà dans le viewport
    // OU déjà dépassé, on révèle sans attendre un nouvel évènement de scroll.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      // threshold 0 : déclenché dès le 1er pixel visible. Indispensable en
      // mobile-first — avec 0.15, un bloc plus haut que ~viewport/0.15 n'atteint
      // jamais le seuil et resterait invisible.
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible]);

  let directionClass = '';
  if (direction === 'right') directionClass = 'reveal--right';
  if (direction === 'left') directionClass = '-translate-x-8'; // Custom tailwind

  return (
    <div
      ref={ref}
      className={`reveal ${directionClass} ${isVisible ? 'visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : {}}
    >
      {children}
    </div>
  );
}
