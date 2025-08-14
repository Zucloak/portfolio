import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ProjectCard } from './ProjectCard';
import { Project } from '../data/projects';

const mockProject: Project = {
  id: 1,
  title: 'Test Project',
  description: 'Test description',
  imageUrl: '/test.webp',
  tags: ['React', 'TypeScript'],
};

describe('ProjectCard', () => {
  it('renders project details correctly', () => {
    render(<ProjectCard project={mockProject} onClick={() => {}} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<ProjectCard project={mockProject} onClick={handleClick} />);
    screen.getByText('Test Project').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
