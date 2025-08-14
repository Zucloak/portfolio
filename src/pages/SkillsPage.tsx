import { skillsData } from '../data/skills';
import { Section } from '../components/Section';
import { Badge } from '../components/Badge';

export const SkillsPage = () => {
  return (
    <Section title="Technical Skills" subtitle="My toolbox of technologies and skills.">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-4">
          {skillsData.map((skill) => (
            <Badge key={skill} className="text-lg px-4 py-2">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </Section>
  );
};
