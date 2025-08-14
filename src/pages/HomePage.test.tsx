import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('renders the main heading and call-to-action buttons', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /Ken Mosquera/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View My Work/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Get In Touch/i })).toBeInTheDocument();
  });
});
