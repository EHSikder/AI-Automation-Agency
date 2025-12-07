import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import AIChatWidget from './components/AIChatWidget';
import Background3D from './components/Background3D';
import { CONTENT } from './constants';
import { ArrowRight, Check, Phone, MessageSquare, Workflow, Zap, MapPin, Mail, Sparkles, Box, LayoutGrid, Cpu, Clock, Trophy, BarChart3, Quote, ShieldCheck, Rocket, BrainCircuit, Users, Plus, Minus } from 'lucide-react';

// --- Components ---

const SectionHeader = ({ title, subtitle, align = 'center' }: { title: string, subtitle: string, align?: 'center' | 'left' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-5xl font-bold text-text-light mb-6 tracking-tight leading-tight">{title}</h2>
    <p className="text-text-main text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed opacity-90">{subtitle}</p>
  </div>
);

const TrustStrip = ({ title }: { title: string }) => (
    <div className="py-12 border-y border-border/30 bg-surface/60 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-text-muted mb-8 uppercase">{title}</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Logo Placeholders - In production replace with SVGs */}
                <span className="text-xl font-bold font-sans tracking-tight text-white">STC</span>
                <span className="text-xl font-bold font-sans tracking-tight text-white">ARAMCO</span>
                <span className="text-xl font-bold font-sans tracking-tight text-white">NOON</span>
                <span className="text-xl font-bold font-sans tracking-tight text-white">TALABAT</span>
                <span className="text-xl font-bold font-sans tracking-tight text-white">EMAAR</span>
            </div>
        </div>
    </div>
);

// --- Sections ---

const HeroSection = () => {
  const { language } = useLanguage();
  const c = CONTENT[language].hero;
  const isRTL = language === 'ar';

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cta/30 bg-cta/10 text-cta text-[11px] md:text-xs font-bold uppercase tracking-widest cursor-pointer hover:bg-cta/20 transition-colors">
            <Sparkles className="w-3 h-3" />
            {c.badge}
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1] max-w-5xl mx-auto drop-shadow-xl">
             {c.headline}
          </h1>
          
          <p className="text-lg md:text-2xl text-text-main mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {c.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <a href="#contact" className="w-full sm:w-auto px-10 py-5 rounded-full bg-cta text-white font-bold tracking-wide hover:bg-cta-hover transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-cta/25">
              {c.ctaPrimary}
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-10 py-5 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
              {c.ctaSecondary}
            </a>
          </div>

          {/* Microcopy */}
          <p className="mt-6 text-xs text-text-muted opacity-60">
             Launch in 7-21 days • GDPR Compliant • No Commitments
          </p>
        </div>
      </div>
    </section>
  );
};

const FeaturesStrip = () => {
    const { language } = useLanguage();
    const c = CONTENT[language].featuresStrip;
    const icons = { BrainCircuit, Zap, ShieldCheck };

    return (
        <div className="py-24 bg-surface/40 backdrop-blur-md border-t border-border/50">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {c.items.map((item, idx) => {
                        // @ts-ignore
                        const Icon = icons[item.icon as keyof typeof icons] || Zap;
                        return (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center mb-6 text-cta group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-text-muted leading-relaxed max-w-xs">{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const ServicesSection = () => {
  const { language } = useLanguage();
  const c = CONTENT[language].services;
  
  const icons = { Phone, MessageSquare, Workflow };

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeader title={c.sectionTitle} subtitle={c.sectionSubtitle} align="left" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {c.items.map((item) => {
            // @ts-ignore
            const Icon = icons[item.iconName as keyof typeof icons] || Workflow;
            return (
              <div key={item.id} className="group p-10 rounded-[2rem] bg-surface/80 backdrop-blur-md border border-border hover:border-cta/50 transition-all duration-300 flex flex-col justify-between min-h-[400px] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Icon className="w-32 h-32 text-white" />
                </div>
                
                <div>
                  <div className="w-14 h-14 bg-cta/10 rounded-xl flex items-center justify-center mb-8 text-cta">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-text-main leading-relaxed mb-8">{item.description}</p>
                </div>

                <div className="border-t border-border/50 pt-6">
                    <ul className="space-y-3 mb-6">
                         {item.features.map((f, i) => (
                             <li key={i} className="flex items-center gap-2 text-sm text-text-main">
                                 <Check className="w-4 h-4 text-cta" /> {f}
                             </li>
                         ))}
                    </ul>
                    <div className="text-sm font-bold text-cta">{item.priceStart}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const IndustrySection = () => {
  const { language } = useLanguage();
  const c = CONTENT[language].industries;

  return (
    <section id="industries" className="py-32 bg-surface/40 backdrop-blur-sm border-y border-border/50">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeader title={c.sectionTitle} subtitle={c.sectionSubtitle} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.items.map((item, idx) => (
            <div key={item.id} className="group p-8 rounded-2xl bg-surface/90 backdrop-blur-md border border-border hover:border-cta/50 transition-all cursor-pointer hover:-translate-y-1 shadow-sm hover:shadow-xl">
               <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono text-cta bg-cta/10 px-2 py-1 rounded">
                      {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <ArrowRight className="w-5 h-5 text-border group-hover:text-cta transition-colors" />
               </div>
               
               <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
               <p className="text-sm text-text-main mb-6 leading-relaxed">{item.description}</p>
               
               <div className="space-y-3 bg-background/60 p-4 rounded-xl border border-border/50">
                   <div className="text-xs text-red-300 font-medium opacity-90">{item.problem}</div>
                   <div className="text-xs text-green-400 font-bold">{item.solution}</div>
               </div>
               
               <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-2">
                   <Trophy className="w-4 h-4 text-cta" />
                   {/* Handle potentially undefined kpi/kpis */}
                   <span className="text-xs font-bold text-white">{item.kpi || (item.kpis && item.kpis[0]) || ''}</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const { language } = useLanguage();
  const c = CONTENT[language].pricing;

  return (
    <section id="pricing" className="py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeader title={c.sectionTitle} subtitle={c.sectionSubtitle} />
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {c.plans.map((plan, idx) => (
            <div key={idx} className={`rounded-[2rem] p-10 relative flex flex-col transition-transform hover:-translate-y-2 duration-300 ${
              plan.isPopular 
                ? 'bg-surface border-2 border-cta shadow-2xl shadow-cta/10' 
                : 'bg-surface/80 backdrop-blur-md border border-border'
            }`}>
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cta text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-lg font-medium text-white mb-2">{plan.name}</h3>
                {/* Replaced specific price with Tagline */}
                <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-white">{plan.tagline}</span>
                </div>
                <p className="text-sm text-text-muted mt-4">{plan.description}</p>
              </div>

              {plan.roi && (
                  <div className="p-4 bg-background/50 rounded-xl mb-8 border border-border/50">
                      <div className="text-xs text-text-muted uppercase mb-1">Impact</div>
                      <div className="text-sm font-bold text-green-400 flex items-center gap-2">
                          <BarChart3 className="w-4 h-4" />
                          {plan.roi}
                      </div>
                  </div>
              )}

              <div className="flex-grow mb-10">
                <ul className="space-y-4">
                    {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-text-main">
                        <Check className="w-4 h-4 text-cta flex-shrink-0" />
                        {feat}
                    </li>
                    ))}
                </ul>
              </div>

              <button className={`w-full py-4 rounded-full font-bold text-sm tracking-wide transition-all ${
                plan.isPopular 
                  ? 'bg-cta text-white hover:bg-cta-hover shadow-lg' 
                  : 'bg-white text-background hover:bg-gray-200'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
    const { language } = useLanguage();
    const c = CONTENT[language].portfolio;

    return (
        <section id="portfolio" className="py-32 bg-surface/20">
             <div className="max-w-[1400px] mx-auto px-6">
                <SectionHeader title={c.sectionTitle} subtitle={c.sectionSubtitle} align="left" />
                
                <div className="grid md:grid-cols-2 gap-8">
                    {c.items.map((item, idx) => (
                        <div key={item.id} className="bg-surface/90 backdrop-blur-md border border-border p-10 rounded-[2rem] hover:border-cta/30 transition-all shadow-xl">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <div className="text-cta text-xs font-bold uppercase tracking-wider mb-2">{item.industry}</div>
                                    <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
                                    <div className="text-text-muted text-sm">{item.client}</div>
                                </div>
                                <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center text-cta shadow-inner">
                                    <Quote className="w-6 h-6" />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {item.stats.map((stat, sIdx) => (
                                    <div key={sIdx} className="bg-background/60 p-5 rounded-2xl border border-border/50">
                                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                        <div className="text-xs text-text-muted uppercase tracking-wide">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                            
                            <p className="text-white text-lg font-light leading-relaxed mb-8">"{item.content}"</p>
                            <p className="text-sm text-text-muted italic border-l-2 border-cta pl-4">{item.quote}</p>
                        </div>
                    ))}
                </div>
             </div>
        </section>
    );
};

const FaqSection = () => {
  const { language } = useLanguage();
  const c = CONTENT[language].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-surface/30 backdrop-blur-sm border-t border-border/50">
      <div className="max-w-[1000px] mx-auto px-6">
        <SectionHeader title={c.sectionTitle} subtitle={c.sectionSubtitle} />
        
        <div className="space-y-4">
          {c.items.map((item, idx) => (
            <div key={idx} className="bg-surface/80 border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-cta/30">
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-medium text-white">{item.question}</span>
                <span className={`p-2 rounded-full bg-background/50 text-cta transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-text-main leading-relaxed border-t border-border/30 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const { language } = useLanguage();
  const c = CONTENT[language].contact;

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <div className="bg-surface/95 backdrop-blur-xl border border-border rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cta/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{c.title}</h2>
                <p className="text-xl text-text-muted">{c.subtitle}</p>
            </div>

            <form className="max-w-xl mx-auto space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder={c.form.name} className="w-full bg-background border border-border rounded-xl px-6 py-4 text-white focus:border-cta focus:outline-none transition-colors" />
                <input type="email" placeholder={c.form.email} className="w-full bg-background border border-border rounded-xl px-6 py-4 text-white focus:border-cta focus:outline-none transition-colors" />
              </div>
              <input type="tel" placeholder={c.form.phone} className="w-full bg-background border border-border rounded-xl px-6 py-4 text-white focus:border-cta focus:outline-none transition-colors" />
              <button className="w-full bg-cta text-white font-bold text-lg py-5 rounded-xl hover:bg-cta-hover transition-all shadow-lg hover:shadow-cta/25 transform hover:-translate-y-1">
                {c.form.submit}
              </button>
              <p className="text-center text-xs text-text-muted">{c.disclaimer}</p>
            </form>
        </div>
      </div>
    </section>
  );
};

// --- Sub-Component for Main Content (Fixes Context Error) ---

const MainContent = () => {
  const { language } = useLanguage();
  const c = CONTENT[language].hero;

  return (
    <Layout>
      <Background3D />
      <HeroSection />
      <TrustStrip title={c.trustTitle} />
      <FeaturesStrip />
      <ServicesSection />
      <IndustrySection />
      <PortfolioSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <AIChatWidget />
    </Layout>
  );
};

// --- Main App ---

function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;