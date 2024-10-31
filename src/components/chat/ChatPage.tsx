import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Copy, RotateCcw, Send } from 'lucide-react';
import TextareaAutosize from 'react-textarea-autosize';
import { Message } from './Message';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface LocationState {
  initialPrompt?: string;
  selectedTemplate?: {
    id: string;
    title: string;
    icon: string;
  };
}

export function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  useEffect(() => {
    if (state?.initialPrompt) {
      const initialMessage: ChatMessage = {
        role: 'user',
        content: state.initialPrompt
      };
      setMessages([initialMessage]);
      // Only trigger AI response if we have an initial prompt
      handleAIResponse(true);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAIResponse = (isInitial = false) => {
    setIsLoading(true);
    // Simulate AI response - replace with actual API call
    setTimeout(() => {
      const templateInfo = state?.selectedTemplate && isInitial
        ? `Using template: ${state.selectedTemplate.title}\n\n`
        : '';
      
      const aiResponse: ChatMessage = {
        role: 'assistant',
        content: `${templateInfo}I'm analyzing your request and preparing a response. Here's what I can help you with...`,
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
      scrollToBottom();
    }, 1000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const newMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    handleAIResponse(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Header */}
      <div className="flex items-center px-4 py-3 border-b border-white/10 bg-neutral-900/50 backdrop-blur-xl">
        <button
          onClick={() => navigate('/dashboard')}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors mr-4"
        >
          <ArrowLeft className="w-5 h-5 text-white/60" />
        </button>
        <div>
          <h1 className="text-lg font-medium text-white">AI Assistant</h1>
          <p className="text-sm text-white/60">Powered by Nova AI</p>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <RotateCcw className="w-5 h-5 text-white/60" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Copy className="w-5 h-5 text-white/60" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <AnimatePresence initial={false}>
            {messages.map((message, index) => (
              <Message key={index} message={message} />
            ))}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex items-center gap-2 text-white/60"
              >
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce [animation-delay:0.4s]" />
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-white/10 bg-neutral-900/50 backdrop-blur-xl px-4 py-4">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto relative">
          <TextareaAutosize
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message Nova..."
            className="w-full bg-white/10 text-white rounded-xl px-4 py-3 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/50 placeholder-white/40"
            maxRows={5}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className={`absolute right-3 top-3 p-1.5 rounded-lg transition-all ${
              input.trim() && !isLoading
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                : 'bg-white/10 text-white/40'
            }`}
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}