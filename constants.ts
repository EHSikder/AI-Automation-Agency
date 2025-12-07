import { Translation } from './types';

export const COMPANY_INFO = {
  name: "Riwa AI",
  email: "hello@riwa.ai",
  phone: "+971 4 123 4567",
  hq: "Dubai, UAE",
  markets: "UAE, KSA, Kuwait, Qatar"
};

export const CONTENT: Record<'en' | 'ar', Translation> = {
  en: {
    nav: [
      { id: 'services', label: 'Capabilities', href: '#services' },
      { id: 'industries', label: 'Industries', href: '#industries' },
      { id: 'portfolio', label: 'Case Studies', href: '#portfolio' },
      { id: 'pricing', label: 'Engagement', href: '#pricing' }, // Renamed from Pricing
      { id: 'faq', label: 'FAQ', href: '#faq' },
      { id: 'contact', label: 'Book Demo', href: '#contact' },
    ],
    hero: {
      badge: "7-DAY FREE PILOT • LIMITED AVAILABILITY",
      headline: "The Operating System for Gulf Business",
      subheadline: "Automate support, sales, and operations across WhatsApp, calls, and your POS. Native Gulf dialect support. Launch in days, not months.",
      ctaPrimary: "Start 7-Day Free Pilot",
      ctaSecondary: "Book Strategy Call",
      trustText: "Trusted by leading enterprises",
      trustTitle: "TRUSTED BY FORWARD-THINKING BRANDS IN THE GCC"
    },
    featuresStrip: {
      title: "Why Riwa?",
      items: [
        { icon: "BrainCircuit", title: "Dialect Native", desc: "Trained on Khaleeji, Levantine, and Egyptian dialects for natural conversation." },
        { icon: "Zap", title: "POS Integrated", desc: "Deep sync with Foodics, CleanCloud, and Odoo. We don't just chat, we do." },
        { icon: "ShieldCheck", title: "Enterprise Secure", desc: "GDPR compliant data handling with local GCC hosting options available." }
      ]
    },
    services: {
      sectionTitle: "Operational Neural Networks",
      sectionSubtitle: "Replace manual busywork with intelligent agents that run 24/7.",
      items: [
        {
          id: 'voice',
          iconName: 'Phone',
          title: "Bilingual Voice Agents",
          description: "Handle reservations, support tickets, and sales qualification calls in fluent Arabic & English.",
          features: ["Zero hold times", "CRM instant sync", "Local number"],
          priceStart: "View Pilot Options"
        },
        {
          id: 'whatsapp',
          iconName: 'MessageSquare',
          title: "WhatsApp Revenue Engine",
          description: "Automate cart recovery, catalog sales, and customer support on the Gulf's #1 app.",
          features: ["Official Meta API", "Broadcast marketing", "Auto-checkout"],
          priceStart: "View Pilot Options"
        },
        {
          id: 'ops',
          iconName: 'Workflow',
          title: "Full-Stack Integrations",
          description: "Connect your AI to your actual business logic: POS, Inventory, and Dispatch systems.",
          features: ["CleanCloud / Foodics", "Salesforce / Hubspot", "Zapier / Make"],
          priceStart: "Custom Integration"
        }
      ]
    },
    industries: {
      sectionTitle: "Pre-Trained Workflows",
      sectionSubtitle: "Select your industry to see specific automation use cases.",
      items: [
        {
          id: 'laundry',
          title: "Laundry & Cleaning",
          description: "Automate pickup scheduling & status updates.",
          problem: "Problem: Manual WhatsApp data entry errors.",
          solution: "Solution: Auto-sync to CleanCloud POS.",
          kpi: "Zero Missed Pickups",
          kpis: ["Zero Missed Pickups"]
        },
        {
          id: 'restaurants',
          title: "Restaurants",
          description: "Handle reservations & catering queries 24/7.",
          problem: "Problem: Missed calls during rush hour.",
          solution: "Solution: Voice agent handles bookings.",
          kpi: "100% Call Answer Rate",
          kpis: ["100% Answer Rate"]
        },
        {
          id: 'clinics',
          title: "Clinics & Dental",
          description: "Patient booking & post-care checkups.",
          problem: "Problem: High no-show rates.",
          solution: "Solution: WhatsApp/SMS automated reminders.",
          kpi: "Reduce No-Shows by 40%",
          kpis: ["-40% No-Shows"]
        },
        {
          id: 'realestate',
          title: "Real Estate",
          description: "Qualify leads & schedule viewings instantly.",
          problem: "Problem: Slow response to property portals.",
          solution: "Solution: Instant 24/7 lead qualification.",
          kpi: "24/7 Lead Response",
          kpis: ["24/7 Response"]
        },
        {
          id: 'logistics',
          title: "Logistics",
          description: "Driver coordination & address verification.",
          problem: "Problem: Failed deliveries due to bad location.",
          solution: "Solution: WhatsApp location pin collection.",
          kpi: "Higher Delivery Success",
          kpis: ["Higher Success"]
        },
        {
          id: 'retail',
          title: "Retail",
          description: "Inventory checks & order status.",
          problem: "Problem: Repetitive 'where is my order' calls.",
          solution: "Solution: Instant automated status lookup.",
          kpi: "80% Auto-Resolution",
          kpis: ["80% Auto-Res"]
        }
      ]
    },
    howItWorks: {
      sectionTitle: "Deployment Roadmap",
      sectionSubtitle: "From audit to automation in 3 weeks or less.",
      steps: [
        { number: "01", title: "Audit", timeline: "Days 1-2", description: "We analyze your communication logs.", deliverables: "ROI Report", microCta: "Book Audit" },
        { number: "02", title: "Build", timeline: "Days 3-10", description: "We configure agents & connect APIs.", deliverables: "Beta Agent", microCta: "View Tech Stack" },
        { number: "03", title: "Launch", timeline: "Day 14+", description: "Live deployment & monitoring.", deliverables: "Live System", microCta: "Start Launch" }
      ]
    },
    pricing: {
      sectionTitle: "Engagement Models",
      sectionSubtitle: "Scalable solutions tailored to your business stage. Start with a free pilot.",
      plans: [
        {
          name: "Starter Pilot",
          tagline: "For Local Businesses",
          description: "Perfect for single-location businesses starting with automation.",
          features: ["1 AI Voice Agent", "Basic WhatsApp Bot", "Monthly Reporting", "Standard Support"],
          roi: "Est. ROI: 3x first month",
          cta: "Apply for Pilot"
        },
        {
          name: "Growth",
          tagline: "For Scaling Teams",
          description: "Robust integration for multi-branch operations.",
          features: ["3 AI Agents", "POS/CRM Integration", "Priority Support", "Advanced Analytics"],
          roi: "Est. ROI: 5x-10x",
          cta: "Apply for Pilot",
          isPopular: true
        },
        {
          name: "Enterprise",
          tagline: "Full Transformation",
          description: "Custom LLM training and on-premise deployment options.",
          features: ["Unlimited Agents", "Custom LLM Fine-tuning", "Dedicated Success Manager", "SLA Guarantees"],
          roi: "Strategic Partnership",
          cta: "Book Strategy Call"
        }
      ]
    },
    portfolio: {
      sectionTitle: "Proven Results",
      sectionSubtitle: "We let the numbers speak for themselves.",
      cta: "View Full Case Studies",
      items: [
        {
          id: '1',
          client: "Kuwait Laundry Co.",
          industry: "Services",
          title: "Scaling to 12k Orders",
          stats: [
            { label: "Orders Automated", value: "12,000/mo" },
            { label: "Revenue Increase", value: "+35%" }
          ],
          content: "Replaced manual WhatsApp entry with a CleanCloud-integrated AI agent. Staff now focuses purely on quality control.",
          quote: "Riwa AI handles 90% of our bookings. It's like magic."
        },
        {
          id: '2',
          client: "Riyadh Medical",
          industry: "Healthcare",
          title: "Eliminating Missed Calls",
          stats: [
            { label: "Call Answer Rate", value: "99.8%" },
            { label: "No-Show Reduction", value: "-40%" }
          ],
          content: "Deployed a bilingual voice agent to handle appointments during peak hours and automated WhatsApp reminders.",
          quote: "Patients love booking at 2AM on a Friday."
        }
      ]
    },
    faq: {
      sectionTitle: "Frequently Asked Questions",
      sectionSubtitle: "Everything you need to know about implementing Riwa AI.",
      items: [
        {
          question: "How long does it take to launch?",
          answer: "Typically 7-14 days for standard integrations. Custom enterprise solutions with bespoke LLM training may take 3-4 weeks."
        },
        {
          question: "Do you support local Gulf dialects?",
          answer: "Yes, our AI is specifically trained on Khaleeji, Levantine, and Egyptian dialects to ensure natural, effective communication with your customers."
        },
        {
          question: "Is my data secure?",
          answer: "Absolutely. We use bank-grade encryption and offer local data residency options within GCC borders (Saudi Arabia/UAE) to comply with data sovereignty regulations."
        },
        {
          question: "Can I integrate with my existing POS?",
          answer: "We support deep API integrations with major regional systems like Foodics, CleanCloud, Odoo, Salesforce, and Zoho."
        },
        {
          question: "How do I get started?",
          answer: "Book a strategy call or start a pilot. We will assess your needs and propose a tailored automation roadmap."
        }
      ]
    },
    contact: {
      title: "Start Your Transformation",
      subtitle: "Book a strategy call or start your free pilot today.",
      nameLabel: "Full Name",
      emailLabel: "Work Email",
      phoneLabel: "Mobile Number",
      messageLabel: "Message",
      submitBtn: "Get my automation roadmap",
      disclaimer: "We respond within 24 hours. WhatsApp follow-up available.",
      form: {
        name: "Full Name",
        email: "Work Email",
        phone: "Mobile Number",
        submit: "Get my automation roadmap"
      }
    },
    aiChat: {
      trigger: "Chat with Riwa",
      placeholder: "Ask about automation...",
      welcome: "Hi! I'm Riwa. How can I help automate your business today?"
    }
  },
  ar: {
    nav: [
      { id: 'services', label: 'الخدمات', href: '#services' },
      { id: 'industries', label: 'القطاعات', href: '#industries' },
      { id: 'portfolio', label: 'أعمالنا', href: '#portfolio' },
      { id: 'pricing', label: 'الخطط', href: '#pricing' },
      { id: 'faq', label: 'الأسئلة الشائعة', href: '#faq' },
      { id: 'contact', label: 'حجز ديمو', href: '#contact' },
    ],
    hero: {
      badge: "تجربة مجانية لمدة 7 أيام • أماكن محدودة",
      headline: "نظام التشغيل الذكي للأعمال الخليجية",
      subheadline: "أتمتة الدعم والمبيعات والعمليات عبر واتساب والمكالمات. دعم كامل للهجات الخليجية. إطلاق خلال أيام.",
      ctaPrimary: "ابدأ التجربة المجانية",
      ctaSecondary: "حجز مكالمة استراتيجية",
      trustText: "موثوق به",
      trustTitle: "موثوق به من قبل الشركات الرائدة في الخليج"
    },
    featuresStrip: {
      title: "لماذا Riwa؟",
      items: [
        { icon: "BrainCircuit", title: "دعم اللهجات", desc: "مدرب على اللهجات الخليجية والشامية والمصرية." },
        { icon: "Zap", title: "تكامل الأنظمة", desc: "ربط مباشر مع Foodics و CleanCloud و Odoo." },
        { icon: "ShieldCheck", title: "أمان المؤسسات", desc: "متوافق مع GDPR مع خيارات استضافة محلية للبيانات." }
      ]
    },
    services: {
      sectionTitle: "شبكات عصبية تشغيلية",
      sectionSubtitle: "استبدل العمل اليدوي بوكلاء أذكياء يعملون 24/7.",
      items: [
        {
          id: 'voice',
          iconName: 'Phone',
          title: "وكلاء صوت ثنائيو اللغة",
          description: "إدارة الحجوزات وتذاكر الدعم وتأهيل المبيعات بطلاقة بالعربية والإنجليزية.",
          features: ["بدون انتظار", "مزامنة CRM", "رقم محلي"],
          priceStart: "خيارات تجريبية"
        },
        {
          id: 'whatsapp',
          iconName: 'MessageSquare',
          title: "محرك إيرادات واتساب",
          description: "أتمتة استعادة السلة، مبيعات الكتالوج، ودعم العملاء.",
          features: ["واجهة رسمية", "حملات تسويقية", "دفع آلي"],
          priceStart: "خيارات تجريبية"
        },
        {
          id: 'ops',
          iconName: 'Workflow',
          title: "تكامل شامل",
          description: "ربط الذكاء الاصطناعي بمنطق عملك الفعلي: نقاط البيع والمخزون.",
          features: ["CleanCloud / Foodics", "Salesforce", "Zapier"],
          priceStart: "تكامل مخصص"
        }
      ]
    },
    industries: {
      sectionTitle: "سير عمل جاهز",
      sectionSubtitle: "اختر قطاعك لرؤية حالات استخدام محددة.",
      items: [
        {
          id: 'laundry',
          title: "المصابغ",
          description: "أتمتة الجدولة وتحديثات الحالة.",
          problem: "المشكلة: أخطاء الإدخال اليدوي.",
          solution: "الحل: مزامنة تلقائية مع CleanCloud.",
          kpi: "صفر استلامات مفقودة",
          kpis: ["صفر استلامات مفقودة"]
        },
        {
          id: 'restaurants',
          title: "المطاعم",
          description: "حجوزات واستفسارات 24/7.",
          problem: "المشكلة: مكالمات فائتة وقت الذروة.",
          solution: "الحل: وكيل صوتي للحجوزات.",
          kpi: "رد على 100٪ من المكالمات",
          kpis: ["رد على 100٪ من المكالمات"]
        },
        {
          id: 'clinics',
          title: "العيادات",
          description: "حجز المرضى والمتابعة.",
          problem: "المشكلة: نسبة تغيب عالية.",
          solution: "الحل: تذكيرات واتساب آلية.",
          kpi: "تقليل التغيب 40٪",
          kpis: ["تقليل التغيب 40٪"]
        },
        {
          id: 'realestate',
          title: "العقارات",
          description: "تأهيل العملاء وجدولة المعاينات.",
          problem: "المشكلة: استجابة بطيئة.",
          solution: "الحل: تأهيل فوري 24/7.",
          kpi: "رد فوري",
          kpis: ["رد فوري"]
        },
        {
          id: 'logistics',
          title: "اللوجستيات",
          description: "تنسيق السائقين والتحقق من العنوان.",
          problem: "المشكلة: فشل التوصيل.",
          solution: "الحل: جمع الموقع عبر واتساب.",
          kpi: "نجاح توصيل أعلى",
          kpis: ["نجاح توصيل أعلى"]
        },
        {
          id: 'retail',
          title: "التجزئة",
          description: "فحص المخزون وحالة الطلب.",
          problem: "المشكلة: مكالمات متكررة.",
          solution: "الحل: بحث تلقائي عن الحالة.",
          kpi: "حل تلقائي 80٪",
          kpis: ["حل تلقائي 80٪"]
        }
      ]
    },
    howItWorks: {
      sectionTitle: "خارطة الطريق",
      sectionSubtitle: "من التدقيق إلى الأتمتة في 3 أسابيع أو أقل.",
      steps: [
        { number: "01", title: "التدقيق", timeline: "يوم 1-2", description: "نحلل سجلات الاتصال الخاصة بك.", deliverables: "تقرير العائد", microCta: "حجز تدقيق" },
        { number: "02", title: "البناء", timeline: "يوم 3-10", description: "نضبط الوكلاء ونربط الأنظمة.", deliverables: "وكيل تجريبي", microCta: "عرض التقنيات" },
        { number: "03", title: "الإطلاق", timeline: "يوم 14+", description: "نشر حي ومراقبة.", deliverables: "نظام فعال", microCta: "بدء الإطلاق" }
      ]
    },
    pricing: {
      sectionTitle: "نماذج العمل",
      sectionSubtitle: "حلول قابلة للتطوير تناسب مرحلة عملك.",
      plans: [
        {
          name: "التجربة الأولية",
          tagline: "للأعمال المحلية",
          description: "للأعمال المحلية التي تبدأ بالأتمتة.",
          features: ["1 وكيل صوتي", "بوت واتساب أساسي", "تقارير شهرية", "دعم قياسي"],
          roi: "عائد استثمار فوري",
          cta: "ابدأ التجربة المجانية"
        },
        {
          name: "النمو",
          tagline: "للفرق المتوسعة",
          description: "تكامل قوي للعمليات متعددة الفروع.",
          features: ["3 وكلاء صوت", "ربط نقاط البيع", "دعم ذو أولوية", "تحليلات متقدمة"],
          roi: "عائد 5x-10x",
          cta: "ابدأ التجربة المجانية",
          isPopular: true
        },
        {
          name: "المؤسسات",
          tagline: "تحول كامل",
          description: "تحول رقمي كامل ونشر مخصص.",
          features: ["وكلاء غير محدودين", "تدريب خاص", "مدير نجاح مخصص", "ضمان مستوى الخدمة"],
          roi: "شراكة استراتيجية",
          cta: "حجز مكالمة استراتيجية"
        }
      ]
    },
    portfolio: {
      sectionTitle: "نتائج مثبتة",
      sectionSubtitle: "ندع الأرقام تتحدث عن نفسها.",
      cta: "عرض جميع الحالات",
      items: [
        {
          id: '1',
          client: "مصبغة الكويت",
          industry: "خدمات",
          title: "أتمتة 12 ألف طلب",
          stats: [
            { label: "طلبات مؤتمتة", value: "12,000/شهرياً" },
            { label: "زيادة إيرادات", value: "+35%" }
          ],
          content: "استبدال الإدخال اليدوي بوكيل ذكي مرتبط بـ CleanCloud.",
          quote: "Riwa AI يعالج 90٪ من حجوزاتنا."
        },
        {
          id: '2',
          client: "مركز الرياض الطبي",
          industry: "رعاية صحية",
          title: "القضاء على المكالمات الفائتة",
          stats: [
            { label: "نسبة الرد", value: "99.8%" },
            { label: "تقليل التغيب", value: "-40%" }
          ],
          content: "نشر وكيل صوتي ثنائي اللغة للتعامل مع المواعيد وقت الذروة.",
          quote: "المرضى يحبون الحجز في أي وقت."
        }
      ]
    },
    faq: {
      sectionTitle: "الأسئلة الشائعة",
      sectionSubtitle: "كل ما تحتاج لمعرفته حول تطبيق Riwa AI.",
      items: [
        {
          question: "كم يستغرق الإطلاق؟",
          answer: "عادةً من 7 إلى 14 يوماً. الحلول المخصصة قد تستغرق 3-4 أسابيع."
        },
        {
          question: "هل تدعمون اللهجات المحلية؟",
          answer: "نعم، تم تدريب نماذجنا على اللهجات الخليجية والشامية والمصرية لضمان تواصل طبيعي وفعال."
        },
        {
          question: "هل بياناتي آمنة؟",
          answer: "بالتأكيد. نستخدم تشفيراً عالي المستوى ونوفر خيارات استضافة البيانات محلياً داخل دول مجلس التعاون الخليجي للامتثال للقوانين."
        },
        {
          question: "هل يمكن الربط مع نظام نقاط البيع لدي؟",
          answer: "ندعم الربط العميق مع الأنظمة الرئيسية مثل فودكس، كلين كلاود، أودو، سيلزفورس وزوهو."
        },
        {
          question: "كيف أبدأ؟",
          answer: "احجز مكالمة استراتيجية أو ابدأ تجربة. سنقوم بتقييم احتياجاتك واقتراح خارطة طريق أتمتة مخصصة."
        }
      ]
    },
    contact: {
      title: "ابدأ التحول",
      subtitle: "احجز مكالمة استراتيجية أو ابدأ تجربتك المجانية اليوم.",
      nameLabel: "الاسم الكامل",
      emailLabel: "بريد العمل",
      phoneLabel: "رقم الجوال",
      messageLabel: "الرسالة",
      submitBtn: "الحصول على خارطة الطريق",
      disclaimer: "نرد خلال 24 ساعة. متاح المتابعة عبر واتساب.",
      form: {
        name: "الاسم الكامل",
        email: "بريد العمل",
        phone: "رقم الجوال",
        submit: "الحصول على خارطة الطريق"
      }
    },
    aiChat: {
      trigger: "تحدث معنا",
      placeholder: "اسأل عن الأتمتة...",
      welcome: "مرحباً! كيف يمكنني مساعدتك في أتمتة عملك اليوم؟"
    }
  }
};