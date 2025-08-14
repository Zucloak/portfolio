export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'AI Chat Website',
    description: 'AI chat interface with Gemini API, styled like a LoL fan page.',
    longDescription: 'A fully functional AI-powered chat interface integrated with Google\'s Gemini API and styled like a League of Legends fan page. The project focuses on creating an immersive user experience with a custom design system.',
    imageUrl: '/images/projects/ai-chat.webp',
    tags: ['React', 'TypeScript', 'Gemini API', 'Tailwind CSS', 'Vite'],
    repoUrl: 'https://github.com/Zucloak/ai-chat',
  },
  {
    id: 2,
    title: 'This Portfolio Site',
    description: 'The site you are currently on, built with React and TypeScript.',
    longDescription: 'This portfolio was built from scratch using React, TypeScript, and Tailwind CSS, focusing on performance, accessibility, and a modern design. It features aggressive preloading for near-instant navigation.',
    imageUrl: '/images/projects/portfolio.webp',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    repoUrl: 'https://github.com/Zucloak/portfolio-react',
  },
  {
    id: 3,
    title: 'E-commerce Landing Page',
    description: 'Responsive landing page built with React.js and TailwindCSS.',
    longDescription: 'A responsive e-commerce landing page built with React.js and TailwindCSS, fully optimized for performance on both mobile and desktop devices. It includes a modern design and a seamless user experience.',
    imageUrl: '/images/projects/ecommerce.webp',
    tags: ['React', 'Tailwind CSS', 'Responsive Design'],
    liveUrl: 'https://example.com',
  },
];
