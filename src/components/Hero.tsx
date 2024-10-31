import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/0 via-neutral-900/50 to-neutral-900"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/50 rounded-full shadow-md mb-8">
          <span className="text-sm font-medium text-indigo-400">New Feature</span>
          <span className="text-sm text-neutral-300">Multi-language Support</span>
          <ArrowRight className="w-4 h-4 text-neutral-400" />
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
          Next Generation AI Content Creation
        </h1>
        
        <p className="text-xl text-neutral-300 mb-9 max-w-2xl mx-auto">
          Experience the future of content generation with our advanced AI technology,
          refined through countless iterations for unparalleled quality.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/40 transition-all font-medium shine">
            Start Creating Now
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-neutral-800/50 text-white rounded-xl shadow-md hover:bg-neutral-800/80 transition-all font-medium">
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
}