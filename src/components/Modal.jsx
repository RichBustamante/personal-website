import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      style={{
        animation: 'fadeIn 0.3s ease-out'
      }}
    >
      <div 
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div 
        className="relative bg-zinc-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden border border-zinc-800"
        style={{
          animation: 'slideUp 0.4s ease-out'
        }}
      >
        <div className="sticky top-0 z-10 bg-zinc-900 border-b border-zinc-800 px-8 py-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white tracking-tight">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-zinc-400" />
          </button>
        </div>
        <div className="px-8 py-6 overflow-y-auto max-h-[calc(85vh-88px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
