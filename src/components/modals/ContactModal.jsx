import React from 'react';
import { Mail, Github, Linkedin, Sparkles } from 'lucide-react';
import Modal from '../Modal';

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Get In Touch">
      <div className="space-y-6">
        <p className="text-lg text-zinc-300 leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be
          part of your vision. Feel free to reach out through any of the channels below.
        </p>
        
        <div className="grid gap-4 mt-8">
          <a
            href="mailto:rich.j.bustamante@gmail.com"
            className="flex items-center gap-4 p-6 bg-zinc-800 rounded-xl hover:bg-zinc-750 transition-colors border border-zinc-700 hover:border-zinc-600"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Email</h4>
              <p className="text-zinc-400">rich.j.bustamante@gmail.com</p>
            </div>
          </a>
          
          <a
            href="https://github.com/RichBustamante"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-zinc-800 rounded-xl hover:bg-zinc-750 transition-colors border border-zinc-700 hover:border-zinc-600"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">GitHub</h4>
              <p className="text-zinc-400">@RichBustamante</p>
            </div>
          </a>
          
          <a
            href="https://linkedin.com/in/richard-bustamante-50b687153"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-zinc-800 rounded-xl hover:bg-zinc-750 transition-colors border border-zinc-700 hover:border-zinc-600"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Linkedin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">LinkedIn</h4>
              <p className="text-zinc-400">linkedin.com/in/RichardBustamante</p>
            </div>
          </a>
        </div>
        
        <div className="mt-8 p-6 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-xl border border-purple-700">
          <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Quick Response
          </h4>
          <p className="text-purple-200 text-sm">
            I typically respond to emails within 24-48 hours. For urgent inquiries, feel free
            to connect with me on LinkedIn for a faster response.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;
