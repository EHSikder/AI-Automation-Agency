import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { CONTENT, COMPANY_INFO } from '../constants';
import { Menu, X, Globe } from 'lucide-react';

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
    <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-background text-text-main font-sans selection:bg-cta selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 pointer-events-none ${scrolled ? 'py-2' : 'py-6'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-full border border-border/40 backdrop-blur-xl bg-background/80 px-6 transition-all duration-300 pointer-events-auto ${scrolled ? 'shadow-lg py-2' : 'py-3'}`}>
            <div className="flex justify-between items-center h-10 md:h-12">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center cursor-pointer gap-2 group" onClick={() => window.scrollTo(0,0)}>
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                </div>
                <span className="font-bold text-xl tracking-tight text-white">Riwa AI</span>
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
              <span className="text-xl font-bold text-white block mb-4 tracking-tight">Riwa AI</span>
              <p className="text-sm leading-relaxed mb-6 opacity-80">
                {language === 'en' 
                  ? "Architecting the future of Gulf enterprise through intelligent automation layers."
                  : "هندسة مستقبل المؤسسات الخليجية من خلال طبقات الأتمتة الذكية."}
              </p>
              <div className="flex space-x-4 rtl:space-x-reverse opacity-60">
                 {/* Social Placeholders */}
                 <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                 <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                 <div className="w-8 h-8 bg-white/10 rounded-full"></div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">{language === 'en' ? 'Legal' : 'قانوني'}</h4>
              <ul className="space-y-3 text-sm font-light">
                <li><a href="#" className="hover:text-cta transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cta transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-cta transition-colors">Data Processing (DPA)</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">{language === 'en' ? 'Company' : 'الشركة'}</h4>
              <ul className="space-y-3 text-sm font-light">
                <li><a href="#" className="hover:text-cta transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-cta transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-cta transition-colors">Contact</a></li>
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
            <p>&copy; {new Date().getFullYear()} Riwa AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};