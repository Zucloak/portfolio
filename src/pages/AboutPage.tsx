import { profileData } from '../data/profile';
import { Section } from '../components/Section';

export const AboutPage = () => {
  return (
    <Section title="About Me">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <img
            src="/images/me/profile.webp"
            alt={profileData.name}
            className="w-48 h-48 rounded-full object-cover border-4 border-primary shadow-lg"
          />
        </div>
        <div className="text-lg text-text-secondary text-center md:text-left">
          <p>{profileData.bio}</p>
        </div>
      </div>
    </Section>
  );
};
