import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../data/projects';
import { Badge } from './Badge';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: { y: '0', opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  exit: { y: '100vh', opacity: 0 },
};

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="bg-surface rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 border border-primary relative"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-text-secondary hover:text-primary transition-colors"
            >
              <FaTimes size={24} />
            </button>
            <h2 className="text-3xl font-bold text-primary mb-4">{project.title}</h2>
            <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-md mb-6" />
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <p className="text-text-secondary mb-6">{project.longDescription}</p>
            <div className="flex space-x-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary hover:text-primary-hover">
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary hover:text-primary-hover">
                  <FaGithub />
                  <span>GitHub Repo</span>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
