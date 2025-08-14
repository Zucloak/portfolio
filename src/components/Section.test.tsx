import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Section } from './Section';

// Mock the ScrollReveal component as we are not testing its functionality here
vi.mock('./ScrollReveal', () => ({
  ScrollReveal: ({ children }) => <div>{children}</div>,
}));

describe('Section', () => {
  it('renders the title and children', () => {
    render(
      <Section title="Test Section">
        <p>Test content</p>
      </Section>
    );
    expect(screen.getByText('Test Section')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders the subtitle when provided', () => {
    render(
      <Section title="Test Section" subtitle="Test Subtitle">
        <p>Test content</p>
      </Section>
    );
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });
});
