import React from 'react';
import { Zap, Layers, Globe, Clock, Shield, Palette } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: 'Lightning Fast',
      description: 'Generate content in seconds with our optimized AI engine'
    },
    {
      icon: <Layers className="w-6 h-6 text-indigo-500" />,
      title: 'Multiple Formats',
      description: 'Create content for any medium or platform effortlessly'
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-500" />,
      title: 'Multi-language',
      description: 'Support for over 50 languages and regional variations'
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: 'Real-time Updates',
      description: 'Watch your content take shape as you type'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and data protection'
    },
    {
      icon: <Palette className="w-6 h-6 text-rose-500" />,
      title: 'Style Control',
      description: 'Fine-tune the tone and style of your content'
    }
  ];

  return (
    <div className="py-24 bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Powerful Features for Modern Content Creation
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Everything you need to create exceptional content at scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-neutral-800/50 rounded-xl border border-white/[0.06] hover:shadow-lg transition-shadow group"
            >
              <div className="p-3 bg-neutral-900/50 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}