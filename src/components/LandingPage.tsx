import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { Generator } from './Generator';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black">
      <Hero />
      <Generator />
      <Features />
    </div>
  );
}