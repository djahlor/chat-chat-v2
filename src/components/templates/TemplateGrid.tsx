import React from 'react';
import { Star, ThumbsUp, Clock } from 'lucide-react';

export function TemplateGrid() {
  const templates = [
    {
      title: 'Blog Post Generator',
      description: 'Create engaging blog posts with AI-powered content suggestions',
      category: 'Blog',
      rating: 4.9,
      uses: '2.3k',
      time: '5 min',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Email Newsletter',
      description: 'Design professional email newsletters that convert',
      category: 'Email',
      rating: 4.8,
      uses: '1.8k',
      time: '3 min',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      title: 'Social Media Pack',
      description: 'Generate a week\'s worth of social media content in minutes',
      category: 'Social',
      rating: 4.7,
      uses: '3.1k',
      time: '10 min',
      gradient: 'from-rose-500 to-pink-500'
    },
    {
      title: 'Product Description',
      description: 'Create compelling product descriptions that sell',
      category: 'E-commerce',
      rating: 4.9,
      uses: '2.5k',
      time: '4 min',
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      title: 'Ad Copy Generator',
      description: 'Write high-converting ad copy for any platform',
      category: 'Marketing',
      rating: 4.8,
      uses: '1.9k',
      time: '3 min',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Landing Page Copy',
      description: 'Generate optimized landing page content that converts',
      category: 'Marketing',
      rating: 4.7,
      uses: '1.6k',
      time: '8 min',
      gradient: 'from-cyan-500 to-teal-500'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template, index) => (
          <div
            key={index}
            className="group relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 shine"
          >
            <div className={`h-32 bg-gradient-to-r ${template.gradient} group-hover:scale-105 transition-transform duration-300`} />
            
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">
                  {template.category}
                </span>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm">{template.rating}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
              <p className="text-gray-400 mb-6">{template.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{template.uses} uses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{template.time}</span>
                </div>
              </div>

              <button className="w-full mt-6 px-4 py-3 bg-white/10 rounded-xl font-medium hover:bg-white/20 transition-colors">
                Use Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}