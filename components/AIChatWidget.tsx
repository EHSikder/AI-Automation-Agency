import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { CONTENT } from '../constants';
import { generateResponse } from '../services/geminiService';

const AIChatWidget: React.FC = () => {
  const { language } = useLanguage();
  const content = CONTENT[language].aiChat;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: content.welcome }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    setMessages([{ role: 'bot', text: content.welcome }]);
  }, [language, content.welcome]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const response = await generateResponse(userMsg, language);
    
    setMessages(prev => [...prev, { role: 'bot', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-6 w-[350px] sm:w-[400px] bg-surface rounded-[2rem] shadow-2xl border border-border overflow-hidden flex flex-col h-[600px] transition-all duration-300 transform origin-bottom-right animate-in fade-in slide-in-from-bottom-10">
          
          {/* Header */}
          <div className="bg-surface-highlight p-5 flex justify-between items-center border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/20">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="font-bold text-white text-sm block">AI Assistant</span>
                <span className="text-[10px] text-secondary flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse shadow-[0_0_5px_#30C6FF]"></span>
                    Online
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full text-text-muted hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-5 overflow-y-auto bg-background scroll-smooth" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-6 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-sm leading-relaxed tracking-wide ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-2xl rounded-tr-sm font-medium shadow-[0_0_10px_rgba(108,99,255,0.2)]' 
                    : 'bg-surface-highlight text-gray-300 border border-border rounded-2xl rounded-tl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-surface-highlight border border-border p-4 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
                  <Sparkles className="w-3 h-3 text-secondary animate-spin-slow" />
                  <span className="text-xs text-text-muted">Thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-surface border-t border-border flex gap-2">
            <div className="relative flex-1">
                <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={content.placeholder}
                className="w-full bg-background border border-border rounded-full px-6 py-4 text-sm text-white focus:outline-none focus:border-primary placeholder-text-muted transition-colors pr-12"
                disabled={isLoading}
                />
            </div>
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
            >
              <Send className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary hover:bg-secondary text-white w-16 h-16 rounded-full shadow-[0_0_30px_rgba(108,99,255,0.4)] transition-all transform hover:scale-105 flex items-center justify-center z-50 group border border-white/10"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default AIChatWidget;