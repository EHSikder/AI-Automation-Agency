import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { CONTENT, COMPANY_INFO } from '../constants';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const content = CONTENT[language];
  const isRTL = language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-background text-white font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-full border border-white/5 backdrop-blur-md bg-black/40 px-6 transition-all duration-500 ${scrolled ? 'bg-black/80 border-white/10 shadow-[0_0_20px_-10px_rgba(255,255,255,0.1)]' : ''}`}>
            <div className="flex justify-between items-center h-14">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center cursor-pointer gap-2 group" onClick={() => window.scrollTo(0,0)}>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold group-hover:scale-90 transition-transform duration-300">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <span className="font-bold text-lg tracking-tight text-white group-hover:opacity-80 transition-opacity">GulfAutomate</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
                {content.nav.map((item) => (
                  <a 
                    key={item.id} 
                    href={item.href} 
                    className="px-5 py-2 text-sm text-gray-400 hover:text-white font-medium transition-colors hover:bg-white/5 rounded-full"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Actions */}
              <div className="hidden md:flex items-center gap-4">
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/10 text-xs text-gray-400 hover:text-white hover:border-white/30 transition-all"
                >
                  <Globe className="w-3 h-3" />
                  <span>{language === 'en' ? 'العربية' : 'English'}</span>
                </button>
                <a 
                  href="#contact" 
                  className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-gray-200 transition-all flex items-center gap-2 tracking-wide uppercase"
                >
                  {content.hero.ctaPrimary}
                </a>
              </div>

              {/* Mobile Button */}
              <div className="md:hidden flex items-center gap-4">
                <button onClick={toggleLanguage} className="text-white text-sm">
                    <span className="font-bold">{language === 'en' ? 'ع' : 'En'}</span>
                </button>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
                  {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-24 left-4 right-4 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl z-50 backdrop-blur-xl">
            <div className="flex flex-col space-y-4">
              {content.nav.map((item) => (
                <a 
                  key={item.id} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white border-b border-white/5 pb-2"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-white text-black text-center py-3 rounded-full font-bold mt-4"
              >
                {content.hero.ctaPrimary}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-zinc-500 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <span className="text-xl font-bold text-white block mb-6 tracking-tight">GulfAutomate</span>
              <p className="text-sm leading-relaxed mb-6 opacity-60">
                {language === 'en' 
                  ? "Architecting the future of Gulf enterprise through intelligent automation layers."
                  : "هندسة مستقبل المؤسسات الخليجية من خلال طبقات الأتمتة الذكية."}
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">{language === 'en' ? 'Solutions' : 'الحلول'}</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><a href="#" className="hover:text-white transition-colors">Voice Agents</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WhatsApp API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CleanCloud Sync</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">{language === 'en' ? 'Company' : 'الشركة'}</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">{language === 'en' ? 'Connect' : 'تواصل'}</h4>
              <ul className="space-y-4 text-sm font-light">
                <li>{COMPANY_INFO.email}</li>
                <li style={{direction: 'ltr'}} className={isRTL ? 'text-right' : ''}>{COMPANY_INFO.phone}</li>
                <li>{COMPANY_INFO.hq}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-40">
            <p>&copy; {new Date().getFullYear()} GulfAutomate AI.</p>
            <div className="flex space-x-6 mt-4 md:mt-0 rtl:space-x-reverse">
               <a href="#" className="hover:text-white transition-colors">LN</a>
               <a href="#" className="hover:text-white transition-colors">X</a>
               <a href="#" className="hover:text-white transition-colors">IG</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};