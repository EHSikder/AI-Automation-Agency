
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, MailCheck } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { CONTENT } from '../constants';
import { generateResponse } from '../services/geminiService';

const AIChatWidget: React.FC = () => {
  const { language } = useLanguage();
  const content = CONTENT[language].aiChat;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string; isSystem?: boolean }[]>([
    { role: 'bot', text: content.welcome }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Maintain actual chat history for the API
  const [history, setHistory] = useState<{ role: 'user' | 'model'; parts: { text: string }[] }[]>([]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  useEffect(() => {
    setMessages([{ role: 'bot', text: content.welcome }]);
    setHistory([]);
  }, [language, content.welcome]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const result = await generateResponse(userMsg, language, history);
    
    if (result.functionCalls && result.functionCalls.length > 0) {
      // Model decided to escalate
      const fallbackText = language === 'en' 
        ? "I am connecting your message with our team." 
        : "أقوم الآن بتوصيل رسالتك بفريقنا.";
        
      setMessages(prev => [
        ...prev, 
        { role: 'bot', text: fallbackText },
        { 
          role: 'bot', 
          text: language === 'en' 
            ? "Transcript sent to ekramhosain0091@gmail.com. We'll get back to you soon." 
            : "تم إرسال المحادثة إلى ekramhosain0091@gmail.com. سنرد عليك قريباً.",
          isSystem: true 
        }
      ]);
    } else if (result.text) {
      setMessages(prev => [...prev, { role: 'bot', text: result.text! }]);
      // Update history for next turn
      setHistory(prev => [
        ...prev,
        { role: 'user', parts: [{ text: userMsg }] },
        { role: 'model', parts: [{ text: result.text! }] }
      ]);
    }

    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-6 w-[350px] sm:w-[400px] bg-surface rounded-[2rem] shadow-2xl border border-border overflow-hidden flex flex-col h-[600px] transition-all duration-300 transform origin-bottom-right animate-in fade-in slide-in-from-bottom-10">
          
          {/* Header */}
          <div className="bg-surface-highlight p-5 flex justify-between items-center border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cta/20 flex items-center justify-center border border-cta/20">
                <Bot className="w-5 h-5 text-cta" />
              </div>
              <div>
                <span className="font-bold text-white text-sm block">RIWA Assistant</span>
                <span className="text-[10px] text-cta flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-cta rounded-full animate-pulse shadow-[0_0_5px_#00C2B8]"></span>
                    Live Context
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
                {msg.isSystem ? (
                  <div className="w-full flex justify-center my-2">
                    <div className="bg-cta/10 border border-cta/20 rounded-xl px-4 py-2 flex items-center gap-2">
                      <MailCheck className="w-4 h-4 text-cta" />
                      <span className="text-[10px] md:text-xs text-text-main font-medium">{msg.text}</span>
                    </div>
                  </div>
                ) : (
                  <div className={`max-w-[85%] p-4 text-sm leading-relaxed tracking-wide ${
                    msg.role === 'user' 
                      ? 'bg-cta text-white rounded-2xl rounded-tr-sm font-medium shadow-[0_0_15px_rgba(0,194,184,0.2)]' 
                      : 'bg-surface-highlight text-gray-300 border border-border rounded-2xl rounded-tl-sm'
                  }`}>
                    {msg.text}
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-surface-highlight border border-border p-4 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
                  <Sparkles className="w-3 h-3 text-cta animate-spin-slow" />
                  <span className="text-xs text-text-muted">Analyzing request...</span>
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
                className="w-full bg-background border border-border rounded-full px-6 py-4 text-sm text-white focus:outline-none focus:border-cta placeholder-text-muted transition-colors pr-12"
                disabled={isLoading}
                />
            </div>
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-cta text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-cta-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 shadow-lg shadow-cta/20"
            >
              <Send className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-cta hover:bg-cta-hover text-white w-16 h-16 rounded-full shadow-[0_0_30px_rgba(0,194,184,0.4)] transition-all transform hover:scale-105 flex items-center justify-center z-50 group border border-white/10"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default AIChatWidget;
