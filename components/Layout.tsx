
import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { CONTENT, COMPANY_INFO } from '../constants';
import { Menu, X, Globe, Info, Clock } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  
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
    <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-background text-text-main font-sans selection:bg-cta selection:text-white">
      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-300">
          <div 
            className="bg-surface border border-border rounded-[2.5rem] p-8 md:p-12 max-w-md w-full shadow-2xl relative overflow-hidden text-center transform animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-cta rounded-full opacity-50"></div>
            <div className="w-20 h-20 bg-cta/10 rounded-full flex items-center justify-center mx-auto mb-6 text-cta">
              <Clock className="w-10 h-10" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {language === 'en' ? 'Coming Soon' : 'قريباً جداً'}
            </h3>
            <p className="text-text-main mb-8 leading-relaxed">
              {language === 'en' 
                ? "We're putting the finishing touches on our company story. Stay tuned for a deeper look into the RIWA vision."
                : "نحن نضع اللمسات الأخيرة على قصة شركتنا. تابعونا للحصول على نظرة أعمق لرؤية ريوا."}
            </p>
            <button 
              onClick={() => setShowComingSoon(false)}
              className="w-full bg-cta text-white py-4 rounded-full font-bold hover:bg-cta-hover transition-all"
            >
              {language === 'en' ? 'Close' : 'إغلاق'}
            </button>
          </div>
          <div className="absolute inset-0 -z-10" onClick={() => setShowComingSoon(false)}></div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 pointer-events-none ${scrolled ? 'py-2' : 'py-6'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-full border border-border/40 backdrop-blur-xl bg-background/80 px-6 transition-all duration-300 pointer-events-auto ${scrolled ? 'shadow-lg py-2' : 'py-3'}`}>
            <div className="flex justify-between items-center h-10 md:h-12">
              {/* Brand Name (Logo Removed) */}
              <div className="flex-shrink-0 flex items-center cursor-pointer gap-3 group" onClick={() => window.scrollTo(0,0)}>
                <span className="font-bold text-2xl tracking-wide text-white group-hover:text-white/90 transition-colors font-sans uppercase">RIWA AI</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
                {content.nav.map((item) => (
                  <a 
                    key={item.id} 
                    href={item.href} 
                    className="px-4 py-2 text-sm text-text-muted hover:text-white font-medium transition-colors hover:bg-white/5 rounded-full"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Actions */}
              <div className="hidden md:flex items-center gap-4">
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-border text-xs text-text-muted hover:text-white hover:border-primary/50 transition-all"
                >
                  <Globe className="w-3 h-3" />
                  <span>{language === 'en' ? 'العربية' : 'English'}</span>
                </button>
                <a 
                  href="#contact" 
                  className="bg-cta text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-cta-hover transition-all shadow-[0_0_20px_rgba(0,194,184,0.3)] hover:shadow-[0_0_25px_rgba(0,194,184,0.5)] transform hover:translate-y-[-1px]"
                >
                  {content.hero.ctaPrimary}
                </a>
              </div>

              {/* Mobile Button */}
              <div className="md:hidden flex items-center gap-4">
                <button onClick={toggleLanguage} className="text-white text-sm hover:text-primary">
                    <span className="font-bold">{language === 'en' ? 'ع' : 'En'}</span>
                </button>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-primary">
                  {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-24 left-4 right-4 bg-surface border border-border rounded-2xl p-6 shadow-2xl z-50 backdrop-blur-xl pointer-events-auto">
            <div className="flex flex-col space-y-4">
              {content.nav.map((item) => (
                <a 
                  key={item.id} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white border-b border-border pb-2 hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-cta text-white text-center py-3 rounded-full font-bold mt-4"
              >
                {content.hero.ctaPrimary}
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-surface/50 backdrop-blur-lg text-text-muted py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-white tracking-wide uppercase">RIWA AI</span>
              </div>
              <p className="text-sm leading-relaxed mb-6 opacity-80">
                {language === 'en' 
                  ? "Architecting the future of Gulf enterprise through intelligent automation layers."
                  : "هندسة مستقبل المؤسسات الخليجية من خلال طبقات الأتمتة الذكية."}
              </p>
              <div className="flex space-x-4 rtl:space-x-reverse opacity-60">
                 {/* Social Placeholders */}
                 <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer"></div>
                 <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer"></div>
                 <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer"></div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">{language === 'en' ? 'Legal' : 'قانوني'}</h4>
              <ul className="space-y-3 text-sm font-light">
                <li><a href="https://www.termsfeed.com/live/a5dd6369-d02b-4f54-b69d-c2c735c6a26d" target="_blank" rel="noopener noreferrer" className="hover:text-cta transition-colors">Privacy Policy</a></li>
                <li><a href="https://www.termsfeed.com/live/8e77f935-0ce6-445b-bae9-cf13759f90a0" target="_blank" rel="noopener noreferrer" className="hover:text-cta transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">{language === 'en' ? 'Company' : 'الشركة'}</h4>
              <ul className="space-y-3 text-sm font-light">
                <li>
                  <button 
                    onClick={() => setShowComingSoon(true)} 
                    className="hover:text-cta transition-colors flex items-center gap-1.5"
                  >
                    {language === 'en' ? 'About Us' : 'من نحن'}
                  </button>
                </li>
                <li><a href="#contact" className="hover:text-cta transition-colors">{language === 'en' ? 'Contact' : 'تواصل معنا'}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">{language === 'en' ? 'Connect' : 'تواصل'}</h4>
              <ul className="space-y-3 text-sm font-light">
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-cta rounded-full"></div> {COMPANY_INFO.email}</li>
                <li style={{direction: 'ltr'}} className={`flex items-center gap-2 ${isRTL ? 'justify-end' : ''}`}><div className="w-2 h-2 bg-cta rounded-full"></div> {COMPANY_INFO.phone}</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-cta rounded-full"></div> {COMPANY_INFO.hq}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
            <p>&copy; {new Date().getFullYear()} RIWA AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
