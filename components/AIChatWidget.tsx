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
        <div className="mb-6 w-[350px] sm:w-[400px] bg-black rounded-[2rem] shadow-2xl border border-white/10 overflow-hidden flex flex-col h-[600px] transition-all duration-300 transform origin-bottom-right animate-in fade-in slide-in-from-bottom-10">
          
          {/* Header */}
          <div className="bg-[#0a0a0a] p-5 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-sm block">AI Assistant</span>
                <span className="text-[10px] text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Online
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-5 overflow-y-auto bg-black scroll-smooth" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-6 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-sm leading-relaxed tracking-wide ${
                  msg.role === 'user' 
                    ? 'bg-white text-black rounded-2xl rounded-tr-sm font-medium' 
                    : 'bg-[#111] text-gray-300 border border-white/10 rounded-2xl rounded-tl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-[#111] border border-white/10 p-4 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
                  <Sparkles className="w-3 h-3 text-gray-500 animate-spin-slow" />
                  <span className="text-xs text-gray-500">Thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-black border-t border-white/5 flex gap-2">
            <div className="relative flex-1">
                <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={content.placeholder}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-full px-6 py-4 text-sm text-white focus:outline-none focus:border-white/30 placeholder-gray-600 transition-colors pr-12"
                disabled={isLoading}
                />
            </div>
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
            >
              <Send className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white hover:bg-gray-200 text-black w-16 h-16 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all transform hover:scale-105 flex items-center justify-center z-50 group"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default AIChatWidget;