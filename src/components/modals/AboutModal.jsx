import React from 'react';
import Modal from '../Modal';

const AboutModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="About Me">
      <div className="space-y-6 text-zinc-300 leading-relaxed">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center text-4xl font-bold">
            RB
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Richard Bustamante</h3>
            <p className="text-zinc-400">Software Engineer & Cloud Enthusiast</p>
          </div>
        </div>
        
        <p className="text-lg">
          I'm a passionate Software Engineer with over 5 years of experience building modern,
          responsive web applications and microservices. My journey in software engineering started 
          with a curiosity about how computers work, and evolved into a deep love for creating seamless 
          user experiences through my software applications.
        </p>
        
        <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
          <h4 className="text-xl font-semibold text-white mb-4">Technical Skills</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-purple-400 mb-2">Frontend</h5>
              <ul className="space-y-1 text-sm">
                <li>• React & Next.js</li>
                <li>• TypeScript</li>
                <li>• TailwindCSS</li>
                <li>• Redux & Context API</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-indigo-400 mb-2">Backend & Tools</h5>
              <ul className="space-y-1 text-sm">
                <li>• Node.js & Express</li>
                <li>• PostgreSQL & MongoDB</li>
                <li>• Git & GitHub</li>
                <li>• Docker & CI/CD</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-blue-400 mb-2">Programming Languages</h5>
              <ul className="space-y-1 text-sm">
                <li>• Python</li>
                <li>• Java</li>
                <li>• Javascript</li>
                <li>• C/C++</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-violet-400 mb-2">Cloud & DevOps</h5>
              <ul className="space-y-1 text-sm">
                <li>• AWS</li>
                <li>• Kubernetes</li>
                <li>• Docker</li>
                <li>• Terraform</li>
              </ul>
            </div>              
          </div>
        </div>
        
        <p className="text-lg">
          When I'm not coding, you'll find me exploring new design trends, contributing to
          open-source projects, or mentoring junior developers. I believe in writing clean,
          maintainable code and always staying curious about emerging technologies.
        </p>
        
        <div className="pt-4 border-t border-zinc-800">
          <h4 className="text-lg font-semibold text-white mb-3">Philosophy</h4>
          <p className="italic text-zinc-400">
            "Great code is not just functional—it's elegant, maintainable, and built with
            the user's experience at the forefront of every decision."
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default AboutModal;
