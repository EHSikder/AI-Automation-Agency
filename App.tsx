import React from 'react';
import { Layout } from './components/Layout';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import AIChatWidget from './components/AIChatWidget';
import { CONTENT } from './constants';
import { ArrowRight, Check, Phone, MessageSquare, Workflow, Zap, MapPin, Mail, Sparkles, Box, LayoutGrid, Cpu, Clock, Trophy, BarChart3, Quote } from 'lucide-react';

// --- Shared Components ---

const SectionHeader = ({ title, subtitle, align = 'center' }: { title: string, subtitle: string, align?: 'center' | 'left' }) => (
  <div className={`mb-20 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">{title}</h2>
    <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed opacity-80">{subtitle}</p>
  </div>
);

// --- Sections ---

const HeroSection = () => {
  const { language } = useLanguage();
  const c = CONTENT[language].hero;
  const isRTL = language === 'ar';

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.05] z-0 pointer-events-none"></div>
      
      {/* Spotlight Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-[0.03] blur-[150px] rounded-full pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-gray-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-colors cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_10px_white]"></span>
            {c.badge}
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tighter leading-[0.9] max-w-5xl mx-auto">
             {c.headline}
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            {c.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full sm:w-auto">
            <a href="#contact" className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-black font-bold tracking-wide hover:bg-gray-200 transition-all hover:scale-105 flex items-center justify-center gap-2 group">
              {c.ctaPrimary}
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </a>
            <a href="#services" className="w-full sm:w-auto px-10 py-5 rounded-full font-bold text-white border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2 backdrop-blur-sm tracking-wide">
              {c.ctaSecondary}
            </a>
          </div>

          {/* Tech Scroll Indicator */}
          <div className="mt-24 flex flex-col items-center gap-4 opacity-30">
             <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
             <span className="text-[10px] uppercase tracking-widest">Scroll</span>
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
    <section id="services" className="py-40 bg-black relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={c.sectionTitle} subtitle={c.sectionSubtitle} align="left" />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.items.map((item, idx) => {
            const Icon = icons[item.iconName as keyof typeof icons] || Workflow;
            return (
              <div key={item.id} className={`group relative p-10 rounded-[2rem] border border-white/10 bg-[#080808] hover:bg-[#0c0c0c] transition-all duration-500 flex flex-col justify-between h-[400px] overflow-hidden ${idx === 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div>
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:bg-white group-hover:text-black transition-all duration-500 border border-white/5 group-hover:border-transparent">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-light">{item.description}</p>
                </div>

                <div className="border-t border-white/5 pt-6 flex justify-between items-end">
                    <div className="flex flex-col gap-2">
                         {item.features.slice(0, 2).map((f, i) => (
                             <span key={i} className="text-xs text-gray-500 uppercase tracking-wider">• {f}</span>
                         ))}
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
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
    <section id="industries" className="py-40 bg-black relative border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={c.sectionTitle} subtitle={c.sectionSubtitle} />
        
        {/* Text-Only Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.items.map((item, idx) => (
            <div key={item.id} className="group p-8 rounded-[1.5rem] border border-white/10 bg-[#080808] hover:border-white/40 transition-all duration-300 flex flex-col justify-between h-[300px]">
               <div>
                  <div className="mb-6 flex justify-between items-center">
                    <span className="text-xs font-mono text-gray-500 group-hover:text-white transition-colors">
                        0{idx + 1}
                    </span>
                    <Box className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">{item.title}</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{item.description}</p>
               </div>
               
               <div className="mt-6 pt-6 border-t border-white/5">
                 <div className="flex flex-wrap gap-2">
                     {item.kpis.map((kpi, kIdx) => (
                         <span key={kIdx} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm bg-white/5 text-gray-400 group-hover:text-white transition-colors">
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
        <section id="how-it-works" className="py-40 bg-black relative border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title={c.sectionTitle} subtitle={c.sectionSubtitle} align="center" />
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {c.steps.map((step, idx) => (
                        <div key={idx} className="group p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/10 hover:border-white/30 hover:bg-[#111] transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                            {/* Number BG */}
                            <span className="absolute -right-4 -top-4 text-9xl font-bold text-white/[0.03] select-none group-hover:text-white/[0.05] transition-colors">{step.number}</span>
                            
                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className="px-3 py-1 rounded-full border border-white/20 text-xs font-mono text-white/80 bg-white/5">
                                    {step.timeline}
                                </div>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
                            <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow relative z-10">{step.description}</p>
                            
                            <div className="pt-6 border-t border-white/5 space-y-4 relative z-10">
                                <div>
                                    <span className="text-xs uppercase tracking-wider text-gray-600 block mb-1">Deliverables</span>
                                    <span className="text-sm text-gray-300 font-medium">{step.deliverables}</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-white font-bold uppercase tracking-wide cursor-pointer hover:underline opacity-60 hover:opacity-100 transition-opacity">
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
        <section id="portfolio" className="py-40 bg-black relative border-t border-white/5">
             <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title={c.sectionTitle} subtitle={c.sectionSubtitle} align="left" />
                
                <div className="flex flex-col gap-20">
                    {c.items.map((item, idx) => (
                        <div key={item.id} className="grid lg:grid-cols-12 gap-12 items-start border-b border-white/5 pb-20 last:border-0 last:pb-0">
                            {/* Content Side */}
                            <div className={`lg:col-span-5 flex flex-col gap-8 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-sm">{item.industry}</span>
                                        <span className="text-gray-500 text-sm">{item.client}</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{item.title}</h3>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/10">
                                        <h4 className="text-sm text-gray-500 uppercase tracking-wide mb-2">The Challenge</h4>
                                        <p className="text-gray-300 font-light leading-relaxed">{item.problem}</p>
                                    </div>
                                    <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/10">
                                        <h4 className="text-sm text-gray-500 uppercase tracking-wide mb-2">The Solution</h4>
                                        <p className="text-gray-300 font-light leading-relaxed">{item.solution}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 py-4">
                                    <Trophy className="w-8 h-8 text-white" />
                                    <div>
                                        <div className="text-xl font-bold text-white">{item.outcome}</div>
                                        <div className="text-xs text-gray-500 uppercase">Key Result</div>
                                    </div>
                                </div>

                                <blockquote className="relative pl-6 italic text-gray-400 border-l-2 border-white/20">
                                    "{item.testimonial}"
                                </blockquote>
                            </div>

                            {/* Image Side */}
                            <div className={`lg:col-span-7 h-full min-h-[400px] relative rounded-[2rem] overflow-hidden border border-white/10 group ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <a href="#contact" className="px-12 py-6 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105 uppercase tracking-wider text-sm border border-transparent hover:border-white/50">
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
    <section id="pricing" className="py-40 bg-black relative border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={c.sectionTitle} subtitle={c.sectionSubtitle} />
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {c.plans.map((plan, idx) => (
            <div key={idx} className={`rounded-[2rem] p-10 relative flex flex-col transition-transform hover:-translate-y-2 duration-500 ${
              plan.isPopular 
                ? 'bg-white text-black' 
                : 'bg-[#080808] border border-white/10 text-white'
            }`}>
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-6 py-2 rounded-bl-2xl rounded-tr-[2rem] uppercase tracking-wider">
                  Selected
                </div>
              )}
              
              <div className="mb-10">
                <h3 className={`text-lg font-medium mb-4 ${plan.isPopular ? 'text-gray-600' : 'text-gray-400'}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-bold tracking-tighter">{plan.price}</span>
                </div>
                <span className={`text-sm ${plan.isPopular ? 'text-gray-500' : 'text-gray-600'}`}>{plan.period}</span>
              </div>

              <div className="flex-grow mb-10">
                <p className={`text-sm mb-8 leading-relaxed font-light ${plan.isPopular ? 'text-gray-600' : 'text-gray-400'}`}>{plan.description}</p>
                <ul className="space-y-4">
                    {plan.features.map((feat, i) => (
                    <li key={i} className={`flex items-center gap-3 text-sm ${plan.isPopular ? 'text-gray-800' : 'text-gray-300'}`}>
                        <Check className={`w-4 h-4 ${plan.isPopular ? 'text-black' : 'text-white'}`} />
                        {feat}
                    </li>
                    ))}
                </ul>
              </div>

              <button className={`w-full py-5 rounded-full font-bold text-sm tracking-wide transition-all ${
                plan.isPopular 
                  ? 'bg-black text-white hover:bg-gray-800' 
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
    <section id="contact" className="py-40 bg-black border-t border-white/5 relative">
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-none">{c.title}</h2>
            <p className="text-xl text-gray-400 mb-16 font-light max-w-md">{c.subtitle}</p>
            
            <div className="space-y-12">
              <div className="group flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#111] flex items-center justify-center border border-white/10 group-hover:border-white transition-colors">
                    <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-2">{language === 'en' ? 'Headquarters' : 'المقر الرئيسي'}</h4>
                  <p className="text-gray-400 font-light leading-relaxed">Business Bay, Dubai, UAE<br/>Sharq, Kuwait City, Kuwait</p>
                </div>
              </div>
              <div className="group flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#111] flex items-center justify-center border border-white/10 group-hover:border-white transition-colors">
                    <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-2">{language === 'en' ? 'Email Us' : 'راسلنا'}</h4>
                  <p className="text-gray-400 font-light text-lg">hello@gulfautomate.ai</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#080808] p-12 rounded-[3rem] border border-white/5 shadow-2xl">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                    <input type="text" placeholder=" " className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors" />
                    <label className="absolute left-0 top-4 text-gray-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white pointer-events-none">{c.nameLabel}</label>
                </div>
                <div className="relative group">
                    <input type="email" placeholder=" " className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors" />
                    <label className="absolute left-0 top-4 text-gray-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white pointer-events-none">{c.emailLabel}</label>
                </div>
              </div>
              <div className="relative group">
                <input type="tel" placeholder=" " className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors" />
                <label className="absolute left-0 top-4 text-gray-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white pointer-events-none">{c.phoneLabel}</label>
              </div>
              <div className="relative group">
                <textarea rows={4} placeholder=" " className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors resize-none"></textarea>
                <label className="absolute left-0 top-4 text-gray-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white pointer-events-none">{c.messageLabel}</label>
              </div>
              <button type="submit" className="w-full bg-white text-black font-bold py-5 rounded-full hover:bg-gray-200 transition-all hover:scale-[1.02] mt-8 text-lg tracking-wide">
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