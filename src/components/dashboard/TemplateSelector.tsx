import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, Clock, ThumbsUp } from 'lucide-react';

interface Template {
  id: string;
  title: string;
  category: string;
  description: string;
  prompt: string;
  rating: number;
  uses: string;
  time: string;
}

interface TemplateSelectorProps {
  onSelect: (template: Template) => void;
}

export function TemplateSelector({ onSelect }: TemplateSelectorProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const templates: Template[] = [
    {
      id: '1',
      title: 'Blog Post Introduction',
      category: 'Blog',
      description: 'Create an engaging blog post introduction',
      prompt: 'Write an engaging introduction for a blog post about [topic]. The tone should be [professional/casual] and the target audience is [audience].',
      rating: 4.9,
      uses: '2.3k',
      time: '5 min'
    },
    {
      id: '2',
      title: 'Product Description',
      category: 'E-commerce',
      description: 'Generate compelling product descriptions',
      prompt: 'Write a compelling product description for [product name]. Highlight its key features, benefits, and unique selling points.',
      rating: 4.8,
      uses: '1.8k',
      time: '3 min'
    },
    {
      id: '3',
      title: 'Social Media Post',
      category: 'Social',
      description: 'Create engaging social media content',
      prompt: 'Create an engaging social media post about [topic] for [platform]. Include relevant hashtags and call-to-action.',
      rating: 4.7,
      uses: '3.1k',
      time: '2 min'
    }
  ];

  const filteredTemplates = templates.filter(template =>
    template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-2xl overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="p-4 border-b border-white/10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 bg-white/5 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-white/10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>

      <div className="max-h-[400px] overflow-y-auto">
        {filteredTemplates.map((template, index) => (
          <motion.button
            key={template.id}
            onClick={() => onSelect(template)}
            className="w-full p-4 hover:bg-white/5 transition-colors border-b border-white/10 text-left group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-white group-hover:text-indigo-400 transition-colors">
                  {template.title}
                </h3>
                <span className="px-2 py-1 text-xs bg-white/10 rounded-full">
                  {template.category}
                </span>
              </div>
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm">{template.rating}</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mb-2">{template.description}</p>
            
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <ThumbsUp className="w-3 h-3" />
                <span>{template.uses} uses</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{template.time}</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}