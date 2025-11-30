import React from 'react';
import { Layout } from './components/Layout';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import AIChatWidget from './components/AIChatWidget';
import Background3D from './components/Background3D';
import { CONTENT } from './constants';
import { ArrowRight, Check, Phone, MessageSquare, Workflow, Zap, MapPin, Mail, Sparkles, Box, LayoutGrid, Cpu, Clock, Trophy, BarChart3, Quote } from 'lucide-react';
import { RechartsWrapper } from './components/Charts';

// --- Shared Components ---

const SectionHeader = ({ title, subtitle, align = 'center' }: { title: string, subtitle: string, align?: 'center' | 'left' }) => (
  <div className={`mb-20 ${align === 'center' ? 'text-center' : 'text-left'} pointer-events-auto`}>
    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">{title}</h2>
    <p className="text-text-muted text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed opacity-80">{subtitle}</p>
  </div>
);

// --- Sections ---

const HeroSection = () => {
  const { language } = useLanguage();
  const c = CONTENT[language].hero;
  const isRTL = language === 'ar';

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden pointer-events-none">
      {/* Spotlight Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary opacity-[0.05] blur-[150px] rounded-full pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-black/40 backdrop-blur-md text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary/10 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.1)] pointer-events-auto cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#D4AF37]"></span>
            {c.badge}
          </div>

          {/* Headline - pointer-events-auto allows text selection */}
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-text-light mb-8 tracking-tighter leading-[0.9] max-w-4xl mx-auto drop-shadow-2xl pointer-events-auto">
             {c.headline}
          </h1>
          
          <p className="text-lg md:text-2xl text-accent mb-12 max-w-2xl mx-auto leading-relaxed font-light tracking-wide opacity-90 pointer-events-auto">
            {c.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full sm:w-auto pointer-events-auto">
            <a href="#contact" className="w-full sm:w-auto px-10 py-5 rounded-full bg-primary text-black font-bold tracking-wide hover:bg-secondary transition-all hover:scale-105 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              {c.ctaPrimary}
              <ArrowRight className={`w-4 h-4 text-black transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </a>
            <a href="#services" className="w-full sm:w-auto px-10 py-5 rounded-full font-bold text-white border border-border hover:border-primary/50 hover:bg-surface-highlight/50 transition-all flex items-center justify-center gap-2 backdrop-blur-sm tracking-wide bg-black/30">
              {c.ctaSecondary}
            </a>
          </div>

          {/* Tech Scroll Indicator */}
          <div className="mt-24 flex flex-col items-center gap-4 opacity-30 pointer-events-auto">
             <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
             <span className="text-[10px] uppercase tracking-widest text-primary">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const { language } = useLanguage();
  const c = CONTENT[language].services;
  
  const icons = {
    Phone: Phone,
    MessageSquare: MessageSquare,
    Workflow: LayoutGrid
  };

  return (
    <section id="services" className="py-40 relative pointer-events-none">
      <div className="absolute inset-0 bg-background/95 -z-10"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={c.sectionTitle} subtitle={c.sectionSubtitle} align="left" />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.items.map((item, idx) => {
            const Icon = icons[item.iconName as keyof typeof icons] || Workflow;
            return (
              <div key={item.id} className={`group relative p-10 rounded-[2rem] border border-border bg-surface/80 backdrop-blur-sm hover:bg-surface-highlight/90 transition-all duration-500 flex flex-col justify-between h-[400px] overflow-hidden pointer-events-auto ${idx === 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div>
                  <div className="w-14 h-14 bg-surface-highlight rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 border border-border group-hover:border-transparent">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed font-light group-hover:text-accent transition-colors">{item.description}</p>
                </div>

                <div className="border-t border-border pt-6 flex justify-between items-end">
                    <div className="flex flex-col gap-2">
                         {item.features.slice(0, 2).map((f, i) => (
                             <span key={i} className="text-xs text-text-muted uppercase tracking-wider group-hover:text-primary transition-colors">• {f}</span>
                         ))}
                    </div>
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                        <ArrowRight className={`w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 ${language === 'ar' ? 'rotate-[225deg] group-hover:rotate-180' : ''}`} />
                    </div>
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
    <section id="industries" className="py-40 relative border-t border-border/50 pointer-events-none">
      <div className="absolute inset-0 bg-background/95 -z-10"></div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={c.sectionTitle} subtitle={c.sectionSubtitle} />
        
        {/* Text-Only Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.items.map((item, idx) => (
            <div key={item.id} className="group p-8 rounded-[1.5rem] border border-border bg-surface/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 flex flex-col justify-between h-[300px] pointer-events-auto">
               <div>
                  <div className="mb-6 flex justify-between items-center">
                    <span className="text-xs font-mono text-text-muted group-hover:text-primary transition-colors">
                        0{idx + 1}
                    </span>
                    <Box className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-text-muted font-light leading-relaxed group-hover:text-text-light">{item.description}</p>
               </div>
               
               <div className="mt-6 pt-6 border-t border-border group-hover:border-border/50">
                 <div className="flex flex-wrap gap-2">
                     {item.kpis.map((kpi, kIdx) => (
                         <span key={kIdx} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm bg-surface-highlight text-text-muted group-hover:text-black group-hover:bg-primary transition-colors">
                             {kpi}
                         </span>
                     ))}
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
    const { language } = useLanguage();
    const c = CONTENT[language].howItWorks;
    const isRTL = language === 'ar';

    return (
        <section id="how-it-works" className="py-40 relative border-t border-border/50 pointer-events-none">
            <div className="absolute inset-0 bg-background/95 -z-10"></div>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title={c.sectionTitle} subtitle={c.sectionSubtitle} align="center" />
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {c.steps.map((step, idx) => (
                        <div key={idx} className="group p-8 rounded-[2rem] bg-surface/80 backdrop-blur-md border border-border hover:border-primary/40 hover:bg-surface-highlight/90 transition-all duration-300 flex flex-col h-full relative overflow-hidden pointer-events-auto">
                            {/* Number BG */}
                            <span className="absolute -right-4 -top-4 text-9xl font-bold text-white/[0.02] select-none group-hover:text-primary/[0.05] transition-colors">{step.number}</span>
                            
                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className="px-3 py-1 rounded-full border border-border text-xs font-mono text-primary bg-primary/5">
                                    {step.timeline}
                                </div>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
                            <p className="text-text-muted font-light leading-relaxed mb-8 flex-grow relative z-10">{step.description}</p>
                            
                            <div className="pt-6 border-t border-border space-y-4 relative z-10">
                                <div>
                                    <span className="text-xs uppercase tracking-wider text-text-muted block mb-1">Deliverables</span>
                                    <span className="text-sm text-text-light font-medium">{step.deliverables}</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-primary font-bold uppercase tracking-wide cursor-pointer hover:underline opacity-80 hover:opacity-100 transition-opacity">
                                    {step.microCta}
                                    <ArrowRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
                                </div>
                            </div>
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
        <section id="portfolio" className="py-40 relative border-t border-border/50 pointer-events-none">
            <div className="absolute inset-0 bg-background/95 -z-10"></div>
             <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title={c.sectionTitle} subtitle={c.sectionSubtitle} align="left" />
                
                <div className="flex flex-col gap-20">
                    {c.items.map((item, idx) => (
                        <div key={item.id} className="grid lg:grid-cols-12 gap-12 items-start border-b border-border/30 pb-20 last:border-0 last:pb-0 pointer-events-auto">
                            {/* Content Side */}
                            <div className={`lg:col-span-5 flex flex-col gap-8 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-sm">{item.industry}</span>
                                        <span className="text-text-muted text-sm">{item.client}</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{item.title}</h3>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-surface/60 backdrop-blur-sm p-6 rounded-2xl border border-border">
                                        <h4 className="text-sm text-text-muted uppercase tracking-wide mb-2">The Challenge</h4>
                                        <p className="text-text-light font-light leading-relaxed">{item.problem}</p>
                                    </div>
                                    <div className="bg-surface/60 backdrop-blur-sm p-6 rounded-2xl border border-border">
                                        <h4 className="text-sm text-text-muted uppercase tracking-wide mb-2">The Solution</h4>
                                        <p className="text-text-light font-light leading-relaxed">{item.solution}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 py-4">
                                    <Trophy className="w-8 h-8 text-primary" />
                                    <div>
                                        <div className="text-xl font-bold text-white">{item.outcome}</div>
                                        <div className="text-xs text-text-muted uppercase">Key Result</div>
                                    </div>
                                </div>

                                <blockquote className="relative pl-6 italic text-text-muted border-l-2 border-primary/50">
                                    "{item.testimonial}"
                                </blockquote>
                            </div>

                            {/* Image Side */}
                            <div className={`lg:col-span-7 h-full min-h-[400px] relative rounded-[2rem] overflow-hidden border border-border group ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-105 opacity-60 group-hover:opacity-100" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center pointer-events-auto">
                    <a href="#contact" className="px-12 py-6 bg-primary text-black font-bold rounded-full hover:bg-secondary transition-all hover:scale-105 uppercase tracking-wider text-sm border border-transparent shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                        {c.cta}
                    </a>
                </div>
             </div>
        </section>
    );
};

const PricingSection = () => {
  const { language } = useLanguage();
  const c = CONTENT[language].pricing;

  return (
    <section id="pricing" className="py-40 relative border-t border-border/50 pointer-events-none">
      <div className="absolute inset-0 bg-background/95 -z-10"></div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={c.sectionTitle} subtitle={c.sectionSubtitle} />
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {c.plans.map((plan, idx) => (
            <div key={idx} className={`rounded-[2rem] p-10 relative flex flex-col transition-transform hover:-translate-y-2 duration-500 pointer-events-auto ${
              plan.isPopular 
                ? 'bg-surface/90 border border-primary shadow-[0_0_40px_-10px_rgba(212,175,55,0.2)] backdrop-blur-md' 
                : 'bg-surface/60 border border-border text-white hover:border-border/80 backdrop-blur-md'
            }`}>
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-6 py-2 rounded-bl-2xl rounded-tr-[2rem] uppercase tracking-wider">
                  Selected
                </div>
              )}
              
              <div className="mb-10">
                <h3 className={`text-lg font-medium mb-4 ${plan.isPopular ? 'text-white' : 'text-text-muted'}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                    <span className={`text-6xl font-bold tracking-tighter ${plan.isPopular ? 'text-primary' : 'text-white'}`}>{plan.price}</span>
                </div>
                <span className={`text-sm ${plan.isPopular ? 'text-text-muted' : 'text-text-muted'}`}>{plan.period}</span>
              </div>

              <div className="flex-grow mb-10">
                <p className={`text-sm mb-8 leading-relaxed font-light ${plan.isPopular ? 'text-text-light' : 'text-text-muted'}`}>{plan.description}</p>
                <ul className="space-y-4">
                    {plan.features.map((feat, i) => (
                    <li key={i} className={`flex items-center gap-3 text-sm ${plan.isPopular ? 'text-text-light' : 'text-text-muted'}`}>
                        <Check className={`w-4 h-4 ${plan.isPopular ? 'text-primary' : 'text-secondary'}`} />
                        {feat}
                    </li>
                    ))}
                </ul>
              </div>

              <button className={`w-full py-5 rounded-full font-bold text-sm tracking-wide transition-all ${
                plan.isPopular 
                  ? 'bg-primary text-black hover:bg-secondary shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                  : 'bg-white text-black hover:bg-gray-200'
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

const ContactSection = () => {
  const { language } = useLanguage();
  const c = CONTENT[language].contact;
  const isRTL = language === 'ar';

  return (
    <section id="contact" className="py-40 border-t border-border relative pointer-events-none">
       {/* Darker background for form readability */}
      <div className="absolute inset-0 bg-background/98 -z-10"></div>
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="pointer-events-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-none">{c.title}</h2>
            <p className="text-xl text-text-muted mb-16 font-light max-w-md">{c.subtitle}</p>
            
            <div className="space-y-12">
              <div className="group flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center border border-border group-hover:border-primary transition-colors group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    <MapPin className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-2">{language === 'en' ? 'Headquarters' : 'المقر الرئيسي'}</h4>
                  <p className="text-text-muted font-light leading-relaxed">Business Bay, Dubai, UAE<br/>Sharq, Kuwait City, Kuwait</p>
                </div>
              </div>
              <div className="group flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center border border-border group-hover:border-primary transition-colors group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    <Mail className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-2">{language === 'en' ? 'Email Us' : 'راسلنا'}</h4>
                  <p className="text-text-muted font-light text-lg">hello@gulfautomate.ai</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface/90 backdrop-blur-md p-12 rounded-[3rem] border border-border shadow-2xl pointer-events-auto">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                    <input type="text" placeholder=" " className="peer w-full bg-transparent border-b border-border py-4 text-white focus:outline-none focus:border-primary transition-colors" />
                    <label className="absolute left-0 top-4 text-text-muted text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary pointer-events-none">{c.nameLabel}</label>
                </div>
                <div className="relative group">
                    <input type="email" placeholder=" " className="peer w-full bg-transparent border-b border-border py-4 text-white focus:outline-none focus:border-primary transition-colors" />
                    <label className="absolute left-0 top-4 text-text-muted text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary pointer-events-none">{c.emailLabel}</label>
                </div>
              </div>
              <div className="relative group">
                <input type="tel" placeholder=" " className="peer w-full bg-transparent border-b border-border py-4 text-white focus:outline-none focus:border-primary transition-colors" />
                <label className="absolute left-0 top-4 text-text-muted text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary pointer-events-none">{c.phoneLabel}</label>
              </div>
              <div className="relative group">
                <textarea rows={4} placeholder=" " className="peer w-full bg-transparent border-b border-border py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                <label className="absolute left-0 top-4 text-text-muted text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary pointer-events-none">{c.messageLabel}</label>
              </div>
              <button type="submit" className="w-full bg-primary text-black font-bold py-5 rounded-full hover:bg-secondary transition-all hover:scale-[1.02] mt-8 text-lg tracking-wide shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                {c.submitBtn}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


// --- Main App ---

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <Background3D /> {/* Placed at top of layout stack, behind content via CSS z-index */}
        <HeroSection />
        <ServicesSection />
        <IndustrySection />
        <HowItWorksSection />
        <PortfolioSection />
        <PricingSection />
        <ContactSection />
        <AIChatWidget />
      </Layout>
    </LanguageProvider>
  );
}

export default App;