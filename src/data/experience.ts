export interface Experience {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string;
}

export const experienceData: Experience[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Innovate Inc.',
    date: '2022 - Present',
    description: 'Leading the development of high-performance web applications using React and TypeScript. Focusing on building scalable UI component libraries and improving developer experience.',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    company: 'Creative Solutions',
    date: '2020 - 2022',
    description: 'Designed and prototyped user-centric interfaces for various clients. Conducted user research and usability testing to deliver intuitive and engaging digital products.',
  },
];
