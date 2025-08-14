import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`inline-block px-3 py-1 text-sm font-medium text-primary bg-surface border border-primary/50 rounded-full ${className}`}
    >
      {children}
    </div>
  );
};
