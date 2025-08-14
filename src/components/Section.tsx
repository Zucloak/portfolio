import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <ScrollReveal>
      <section id={id} className={`py-16 md:py-24 ${className}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-wider uppercase">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-text-secondary">{subtitle}</p>}
        </div>
        <div>
          {children}
        </div>
      </section>
    </ScrollReveal>
  );
};
