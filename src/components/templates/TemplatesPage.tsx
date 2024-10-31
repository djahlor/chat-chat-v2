import React from 'react';
import { TemplatesHero } from './TemplatesHero';
import { TemplateGrid } from './TemplateGrid';
import { TemplateCategories } from './TemplateCategories';

export function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <TemplatesHero />
      <TemplateCategories />
      <TemplateGrid />
    </div>
  );
}