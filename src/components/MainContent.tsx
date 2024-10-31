import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export function MainContent() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-neutral-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/50 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-neutral-300">AI-Powered Content Generation</span>
          </div>
          
          <h1 className="text4xl sm:text-6xl font-bold text-white mb-6">
            Create amazing 
            content
    
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
              in seconds
            </span>
          </h1>
          
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
            Transform your ideas into polished content with our AI-powered platform.
            From blog posts to social media, create engaging content faster than ever.
          </p>
          
          <button
            onClick={() => navigate('/dashboard')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/40 transition-all shine"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}