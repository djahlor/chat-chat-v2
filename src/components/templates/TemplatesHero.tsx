import React from 'react';
import { Search, Sparkles } from 'lucide-react';

export function TemplatesHero() {
  return (
    <div className="pt-32 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-lg mb-8 shine">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">200+ Professional Templates</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-300 to-white animate-gradient">
            AI-Powered Content Templates
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Start with professionally crafted templates designed for every use case
          </p>

          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search templates..."
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white placeholder-gray-400 pr-12"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}