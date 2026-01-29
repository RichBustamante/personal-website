import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Modal from '../Modal';
import { projects } from '../../data/projects';

const ProjectsModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Featured Projects">
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="project-card bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-zinc-600"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-zinc-400 mb-4">{project.description}</p>
              </div>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors"
                  title="View Live Project"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span 
                  key={i}
                  className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 rounded-full text-sm font-medium border border-zinc-700`}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-zinc-700 flex gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors font-medium flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ProjectsModal;
