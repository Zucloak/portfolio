import { experienceData } from '../data/experience';
import { Section } from '../components/Section';

export const ExperiencePage = () => {
  return (
    <Section title="Career Journey" subtitle="My professional experience over the years.">
      <div className="max-w-3xl mx-auto">
        {experienceData.map((item, index) => (
          <div key={item.id} className="relative pl-8 sm:pl-12 py-6 group">
            <div className="flex items-center mb-1">
              <div className="bg-primary rounded-full h-4 w-4 z-10"></div>
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                <p className="text-text-secondary">{item.company} | {item.date}</p>
              </div>
            </div>
            <div className="ml-4 mt-2">
              <p className="text-text-secondary">{item.description}</p>
            </div>
            {index < experienceData.length - 1 && (
              <div className="absolute top-0 left-2 sm:left-5 h-full w-0.5 bg-border"></div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};
