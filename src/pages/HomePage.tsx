import { Link } from 'react-router-dom';
import { profileData } from '../data/profile';

export const HomePage = () => {
  return (
    <div className="flex items-center justify-center text-center min-h-[calc(100vh-14rem)]">
      <div>
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
          {profileData.name}
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary mb-8">
          {profileData.headline}
        </p>
        <div className="space-x-4">
          <Link
            to="/projects"
            className="inline-block bg-primary text-background font-bold py-3 px-8 rounded-md hover:bg-primary-hover transition-colors"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="inline-block bg-transparent border-2 border-primary text-primary font-bold py-3 px-8 rounded-md hover:bg-primary hover:text-background transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};
