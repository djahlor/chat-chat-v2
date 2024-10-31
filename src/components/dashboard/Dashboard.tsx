import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion';
import { 
  ChevronDown, 
  X, 
  Search, 
  Users, 
  FileText,
  PenTool,
  Mail,
  Megaphone,
  ShoppingBag,
  Send,
  Paperclip,
  CheckCircle2
} from 'lucide-react';

export function Dashboard() {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');
  const [isTemplateSelectorOpen, setIsTemplateSelectorOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<null | { id: string; title: string; icon: string }>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isTemplateSelectorOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isTemplateSelectorOpen]);

  const handleClose = () => {
    setIsTemplateSelectorOpen(false);
    setSearchQuery('');
  };

  const handleTemplateSelect = (template: { id: string; title: string; icon: string }) => {
    if (selectedTemplate?.id === template.id) {
      setSelectedTemplate(null);
    } else {
      setSelectedTemplate(template);
    }
    handleClose();
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleTemplateButtonClick = () => {
    setIsTemplateSelectorOpen(!isTemplateSelectorOpen);
  };

  const handleSend = () => {
    if (prompt.trim()) {
      navigate('/chat', { 
        state: { 
          initialPrompt: prompt,
          selectedTemplate: selectedTemplate 
        } 
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const getTemplateIcon = (iconName: string) => {
    const icons: Record<string, React.ComponentType> = {
      'file': FileText,
      'pen': PenTool,
      'mail': Mail,
      'megaphone': Megaphone,
      'shop': ShoppingBag,
    };
    const Icon = icons[iconName] || FileText;
    return <Icon className="w-4 h-4" />;
  };

  const templates = [
    {
      id: '1',
      title: 'Blog Post Introduction',
      icon: 'file'
    },
    {
      id: '2',
      title: 'Product Description',
      icon: 'shop'
    },
    {
      id: '3',
      title: 'Social Media Post',
      icon: 'megaphone'
    },
    {
      id: '4',
      title: 'Email Newsletter',
      icon: 'mail'
    },
    {
      id: '5',
      title: 'Landing Page Copy',
      icon: 'pen'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-neutral-900/60 to-black text-white">
      <div className="max-w-2xl mx-auto px-4 py-20">
        <LayoutGroup>
          {/* Welcome Message */}
          <motion.div
            layout="position"
            className="text-center mb-10"
            initial={{ opacity: 1 }}
            animate={{ opacity: isTemplateSelectorOpen ? 0.8 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-medium text-white/90 mb-2">
              Hello! How can I help you today?
            </h1>
            <p className="text-lg text-white/60">
              Choose a template or start typing to begin
            </p>
          </motion.div>

          {/* Main Container */}
          <div className="relative">
            {/* Chat Window */}
            <motion.div
              layout
              className="bg-neutral-800/90 rounded-2xl overflow-hidden shadow-xl border border-white/10 relative z-20"
            >
              <div className="p-6 relative">
                <textarea
                  ref={textareaRef}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Describe what you'd like to create..."
                  className="w-full h-24 bg-transparent text-lg text-white placeholder-white/40 resize-none focus:outline-none pr-14"
                />
                <AnimatePresence>
                  {prompt.length > 0 && (
                    <motion.button 
                      onClick={handleSend}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute top-6 right-6 p-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30"
                    >
                      <Send className="w-4 h-4 text-white" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Template Selector Container */}
            <motion.div
              layout
              className="relative -mt-3 mx-6 bg-neutral-900 overflow-hidden border border-white/10 z-10"
              style={{
                borderTopLeftRadius: '0',
                borderTopRightRadius: '0',
                borderBottomLeftRadius: '12px',
                borderBottomRightRadius: '12px',
                marginTop: '0px'
              }}
              animate={{
                height: isTemplateSelectorOpen ? 'auto' : '60px',
              }}
              transition={{
                height: { type: "spring", bounce: 0.2, duration: 0.3 }
              }}
            >
              {/* Template Selector Header */}
              <div className="px-4 h-14 flex items-center justify-between bg-neutral-900">
                <motion.div
                  layout="position"
                  className="flex items-center flex-grow"
                >
                  {isTemplateSelectorOpen ? (
                    <div className="flex items-center gap-2 w-full pl-3">
                      <Search className="w-4 h-4 text-white/40" />
                      <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search templates..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent text-base text-white placeholder-white/40 focus:outline-none"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 h-9 pl-3">
                      <Paperclip className="w-4 h-4 text-white/40" />
                      <span className="text-sm text-white/40">Add content</span>
                    </div>
                  )}
                </motion.div>
                <motion.div layout="position" className="flex items-center gap-2">
                  <button
                    onClick={handleTemplateButtonClick}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all border ${
                      isTemplateSelectorOpen
                        ? 'bg-neutral-950/20 border-white/[0.06]'
                        : selectedTemplate
                        ? 'bg-neutral-900 hover:bg-neutral-950/[0.06] border-white/[0.06]'
                        : 'bg-neutral-900 hover:bg-neutral-950/40 border-white/[0.06]'
                    }`}
                  >
                    {selectedTemplate ? (
                      <>
                        <span className="text-indigo-400">
                          {getTemplateIcon(selectedTemplate.icon)}
                        </span>
                        <span className="text-indigo-400">{selectedTemplate.title}</span>
                      </>
                    ) : (
                      <>
                        <Users className="w-4 h-4 text-white/60" />
                        <span className="text-white/60">Use template</span>
                      </>
                    )}
                    <ChevronDown 
                      className={`w-4 h-4 ${selectedTemplate ? 'text-indigo-400' : 'text-white/60'}`}
                      style={{ 
                        transform: isTemplateSelectorOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.1s ease'
                      }}
                    />
                  </button>
                  {isTemplateSelectorOpen && (
                    <button
                      onClick={handleClose}
                      className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4 text-white/60" />
                    </button>
                  )}
                </motion.div>
              </div>

              {/* Template List */}
              <AnimatePresence>
                {isTemplateSelectorOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="max-h-[400px] overflow-y-auto py-2"
                  >
                    {templates
                      .filter(template => 
                        template.title.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                      .map((template, index) => (
                        <motion.button
                          key={template.id}
                          onClick={() => handleTemplateSelect(template)}
                          className="w-full px-4 py-1.5 group"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.03 }}
                        >
                          <div className={`flex items-center justify-between pl-3 pr-3 py-2 rounded-lg transition-all ${
                            selectedTemplate?.id === template.id 
                              ? 'bg-indigo-500/20 border border-indigo-500/30 hover:border-indigo-500/50' 
                              : 'hover:bg-neutral-950/25'
                          }`}>
                            <div className="flex items-center gap-2">
                              {selectedTemplate?.id === template.id ? (
                                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                              ) : (
                                <span className="text-white/60">
                                  {getTemplateIcon(template.icon)}
                                </span>
                              )}
                              <span className={`transition-colors text-sm ${
                                selectedTemplate?.id === template.id 
                                  ? 'text-indigo-400' 
                                  : 'text-white/90'
                              }`}>
                                {template.title}
                              </span>
                              {selectedTemplate?.id === template.id && (
                                <span className="text-xs font-medium text-indigo-400 ml-2">
                                  Unselect
                                </span>
                              )}
                            </div>
                          </div>
                        </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </LayoutGroup>
      </div>
    </div>
  );
}

export default Dashboard;