import React, { useState } from 'react';
import { Send, Copy, RotateCcw, Maximize2, Wand2 } from 'lucide-react';

export function Generator() {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setOutput("Experience the future of content creation. This is where your AI-generated content would appear, crafted with precision and creativity.");
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 -mt-20">
      <div className="bg-neutral-800/90 rounded-2xl shadow-xl border border-white/[0.06] overflow-hidden backdrop-blur-lg">
        <div className="p-8 border-b border-white/[0.06]">
          <div className="flex items-center gap-3 mb-6">
            <Wand2 className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-semibold text-white">Content Generator</h2>
          </div>
          <div className="relative">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe what you'd like to create..."
              className="w-full h-32 p-4 pr-12 text-white bg-neutral-900/50 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-neutral-900/80 transition-all placeholder-neutral-400"
            />
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt}
              className={`absolute right-4 bottom-4 px-4 py-2 rounded-lg flex items-center gap-2 ${
                isGenerating || !prompt
                  ? 'bg-neutral-700/50 text-neutral-400'
                  : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg hover:shadow-indigo-500/20'
              } transition-all`}
            >
              <Send className="w-4 h-4" />
              <span>{isGenerating ? 'Generating...' : 'Generate'}</span>
            </button>
          </div>
        </div>

        <div className="p-8 bg-neutral-900/30">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-white">Output</h2>
            <div className="flex gap-2">
              <button className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800/50 rounded-lg transition-colors">
                <Copy className="w-5 h-5" />
              </button>
              <button className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800/50 rounded-lg transition-colors">
                <RotateCcw className="w-5 h-5" />
              </button>
              <button className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800/50 rounded-lg transition-colors">
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className={`min-h-[200px] p-6 bg-neutral-900/50 rounded-xl border border-white/[0.06] ${
            isGenerating ? 'animate-pulse' : ''
          }`}>
            <p className="text-white">{output || 'Your generated content will appear here...'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}