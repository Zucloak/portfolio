import { profileData } from '../data/profile';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const socialIcons = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
};

export const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-text-secondary">
          &copy; {new Date().getFullYear()} {profileData.name}. All Rights Reserved.
        </div>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          {profileData.socials.map((social) => {
            const Icon = socialIcons[social.name];
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors duration-300"
              >
                {Icon && <Icon size={24} />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
