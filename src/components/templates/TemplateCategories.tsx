import React from 'react';
import { FileText, Mail, Megaphone, PenTool, ShoppingBag, Users } from 'lucide-react';

export function TemplateCategories() {
  const categories = [
    { icon: <FileText className="w-5 h-5" />, name: 'Blog Posts' },
    { icon: <Mail className="w-5 h-5" />, name: 'Emails' },
    { icon: <Megaphone className="w-5 h-5" />, name: 'Marketing' },
    { icon: <ShoppingBag className="w-5 h-5" />, name: 'E-commerce' },
    { icon: <Users className="w-5 h-5" />, name: 'Social Media' },
    { icon: <PenTool className="w-5 h-5" />, name: 'Creative' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 mb-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all group shine"
          >
            <div className="p-2 bg-white/10 rounded-lg group-hover:scale-110 transition-transform">
              {category.icon}
            </div>
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}