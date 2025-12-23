
import { Translation } from './types';

export const COMPANY_INFO = {
  name: "RIWA AI",
  email: "contact@riwaai.com",
  phone: "+965 60751323",
  hq: "Kuwait City, Al Asimah, Kuwait",
  markets: "UAE, KSA, Kuwait, Qatar"
};

export const STRATEGY_CALL_URL = "https://riwa-ekram.youcanbook.me";

export const CONTENT: Record<'en' | 'ar', Translation> = {
  en: {
    nav: [
      { id: 'services', label: 'Capabilities', href: '#services' },
      { id: 'industries', label: 'Industries', href: '#industries' },
      { id: 'pricing', label: 'Engagement', href: '#pricing' },
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
      trustTitle: "TRUSTED BY FORWARD-THINKING BRANDS"
    },
    featuresStrip: {
      title: "Why RIWA?",
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
          features: ["Zero hold times", "CRM instant sync", "Local number"]
        },
        {
          id: 'whatsapp',
          iconName: 'MessageSquare',
          title: "Chatbot Revenue Engine",
          description: "Automate cart recovery, catalog sales, and customer support on the Gulf's #1 app.",
          features: ["Official Meta API", "Broadcast marketing", "Auto-checkout"]
        },
        {
          id: 'scraping',
          iconName: 'Search',
          title: "Autonomous Lead Scraping",
          description: "Hyper-targeted B2B lead generation across LinkedIn, Google Maps, and local GCC directories.",
          features: ["98% Data Accuracy", "Automated CRM Export", "Real-time Intent Tracking"]
        },
        {
          id: 'sales',
          iconName: 'UserPlus',
          title: "AI Sales Closers",
          description: "Autonomous sales sequences that move leads from cold outreach to signed invoices.",
          features: ["Objection Handling", "Calendar Booking", "Multi-channel Follow-up"]
        },
        {
          id: 'social',
          iconName: 'Share2',
          title: "Social Media Architect",
          description: "24/7 community management and content generation localized for Instagram, TikTok, and Snap.",
          features: ["Dialect Sentiment Analysis", "Auto-Engagement", "Trend Detection"]
        },
        {
          id: 'design',
          iconName: 'Palette',
          title: "Generative Visual Studio",
          description: "Transform raw product photos into 4K studio-quality marketing assets in seconds using AI.",
          features: ["Batch Image Processing", "Consistent Brand Style", "Instant Ad-Ready Exports"]
        },
        {
          id: 'ops',
          iconName: 'Workflow',
          title: "Full-Stack Integrations",
          description: "Connect your AI to your actual business logic: POS, Inventory, and Dispatch systems.",
          features: ["CleanCloud / Foodics", "Salesforce / Hubspot", "Zapier / Make"]
        }
      ]
    },
    industries: {
      sectionTitle: "Pre-Trained Workflows",
      sectionSubtitle: "",
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
          problem: "Problem: Missed calls during xrush hour.",
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
          name: "Core AI Automation",
          tagline: "For Local Businesses",
          description: "An intelligent AI agent that handles customer conversations, captures data, and automates repetitive workflows—without disrupting your existing systems.",
          featuresTitle: "What’s included:",
          features: [
            "AI-powered customer handling (chat-based)",
            "Workflow automation (leads, support, operations)",
            "Monthly performance summary",
            "Ongoing maintenance & standard support"
          ],
          roi: "Est. ROI: 3x first month",
          cta: "Book Strategy Call"
        },
        {
          name: "Scalable AI Systems",
          tagline: "For Scaling Teams",
          description: "Multiple AI agents working together with custom integrations to automate complex operations and decision-making across your business.",
          featuresTitle: "What’s included:",
          features: [
            "Multiple specialized AI agents",
            "Custom system & API integrations",
            "Priority support & faster iterations",
            "Advanced analytics & monthly optimization updates"
          ],
          cta: "Book Strategy Call",
          isPopular: true
        },
        {
          name: "Full Business Automation",
          tagline: "Full Transformation",
          description: "A complete AI-driven business system designed to automate operations, train AI agents on your processes, and continuously optimize performance.",
          featuresTitle: "What’s included:",
          features: [
            "End-to-end business automation",
            "Custom-trained AI agents for your workflows",
            "Monthly system tracking, refinement & upgrades",
            "Strategic automation planning & execution"
          ],
          cta: "Book Strategy Call"
        }
      ]
    },
    faq: {
      sectionTitle: "Frequently Asked Questions",
      sectionSubtitle: "Everything you need to know about implementing RIWA AI.",
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
          question: "Can I integrate with my existing POS?",
          answer: "We support deep API integrations with major regional systems like Foodics, CleanCloud, Odoo, Salesforce, Zoho and others"
        },
        {
          question: "Is this system connected to our existing software?",
          answer: "Yes. We integrate directly with your existing systems such as: Order management software (e.g. CleanCloud), CRMs, Google Sheets, and Internal tools. No need to replace your current setup."
        },
        {
          question: "Is customer data safe?",
          answer: "Yes. We follow strict data-handling practices: No sensitive payment data is stored, Secure APIs and credentials, Access control for admins only."
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
      trigger: "Chat with RIWA",
      placeholder: "Ask about automation...",
      welcome: "Hi! I'm RIWA. How can I help automate your business today?"
    }
  },
  ar: {
    nav: [
      { id: 'services', label: 'الخدمات', href: '#services' },
      { id: 'industries', label: 'القطاعات', href: '#industries' },
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
      title: "لماذا RIWA؟",
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
          features: ["بدون انتظار", "مزامنة CRM", "رقم محلي"]
        },
        {
          id: 'whatsapp',
          iconName: 'MessageSquare',
          title: "محرك إيرادات الشات بوت",
          description: "أتمتة استعادة السلة، مبيعات الكتالوج، ودعم العملاء.",
          features: ["واجهة رسمية", "حملات تسويقية", "دفع آلي"]
        },
        {
          id: 'scraping',
          iconName: 'Search',
          title: "التنقيب الذكي عن العملاء",
          description: "توليد عملاء محتملين B2B من لينكد إن، خرائط جوجل، والأدلة التجارية في دول الخليج.",
          features: ["دقة بيانات 98٪", "تصدير تلقائي لـ CRM", "تتبع نية الشراء"]
        },
        {
          id: 'sales',
          iconName: 'UserPlus',
          title: "وكلاء المبيعات المستقلون",
          description: "سلسلة مبيعات مؤتمتة تبدأ من التواصل البارد وتنتهي بتوقيع العقود.",
          features: ["معالجة الاعتراضات", "جدولة المواعيد", "متابعة متعددة القنوات"]
        },
        {
          id: 'social',
          iconName: 'Share2',
          title: "مهندس التواصل الاجتماعي",
          description: "إدارة مجتمعات وتوليد محتوى مخصص لإنستغرام وتيك توك وسناب شات على مدار الساعة.",
          features: ["تحليل المشاعر باللهجة", "تفاعل تلقائي", "كشف التوجهات"]
        },
        {
          id: 'design',
          iconName: 'Palette',
          title: "أتمتة التصميم البصري",
          description: "تحويل صور المنتجات العادية إلى أصول تسويقية بجودة استوديو 4K في ثوانٍ.",
          features: ["معالجة صور جماعية", "هوية بصرية موحدة", "تصدير جاهز للإعلانات"]
        },
        {
          id: 'ops',
          iconName: 'Workflow',
          title: "تكامل شامل",
          description: "ربط الذكاء الاصطناعي بمنطق عملك الفعلي: نقاط البيع والمخزون.",
          features: ["CleanCloud / Foodics", "Salesforce", "Zapier"]
        }
      ]
    },
    industries: {
      sectionTitle: "سير عمل جاهز",
      sectionSubtitle: "",
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
          name: "أتمتة الذكاء الاصطناعي الأساسية",
          tagline: "للأعمال المحلية",
          description: "وكيل ذكاء اصطناعي ذكي يدير محادثات العملاء، ويجمع البيانات، ويؤتمت مهام العمل المتكررة - دون تعطيل أنظمتك الحالية.",
          featuresTitle: "يتضمن العرض:",
          features: [
            "إدارة العملاء المدعومة بالذكاء الاصطناعي (عبر الدردشة)",
            "أتمتة سير العمل (العملاء المحتملون، الدعم، العمليات)",
            "ملخص شهري للأداء",
            "صيانة مستمرة ودعم قياسي"
          ],
          roi: "عائد استثمار فوري",
          cta: "حجز مكالمة استراتيجية"
        },
        {
          name: "أنظمة الذكاء الاصطناعي القابلة للتوسع",
          tagline: "للفرق المتوسعة",
          description: "وكلاء ذكاء اصطناعي متعددون يعملون معاً مع تكاملات مخصصة لأتمتة العمليات المعقدة واتخاذ القرارات عبر عملك.",
          featuresTitle: "يتضمن العرض:",
          features: [
            "وكلاء ذكاء اصطناعي متخصصون ومتعددون",
            "تكاملات مخصصة للأنظمة وواجهات البرمجية",
            "دعم ذو أولوية وتطويرات أسرع",
            "تحليلات متقدمة وتحديثات تحسين شهرية"
          ],
          cta: "حجز مكالمة استراتيجية",
          isPopular: true
        },
        {
          name: "أتمتة الأعمال الكاملة",
          tagline: "تحول كامل",
          description: "نظام عمل كامل مدفوع بالذكاء الاصطناعي مصمم لأتمتة العمليات، وتدريب وكلاء الذكاء الاصطناعي على إجراءاتك، وتحسين الأداء باستمرار.",
          featuresTitle: "يتضمن العرض:",
          features: [
            "أتمتة الأعمال من البداية إلى النهاية",
            "وكلاء ذكاء اصطناعي مدربون خصيصاً لسير عملك",
            "تتبع شهري للنظام وتحسينه وترقيته",
            "تخطيط وتنفيذ الأتمتة الاستراتيجية"
          ],
          cta: "حجز مكالمة استراتيجية"
        }
      ]
    },
    faq: {
      sectionTitle: "الأسئلة الشائعة",
      sectionSubtitle: "كل ما تحتاج لمعرفته حول تطبيق RIWA AI.",
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
          question: "هل يمكن الربط مع نظام نقاط البيع لدي؟",
          answer: "ندعم الربط العميق مع الأنظمة الرئيسية مثل فودكس، كلين كلاود، أودو، سيلزفورس، زوهو وغيرها."
        },
        {
          question: "هل يتصل هذا النظام ببرامجنا الحالية؟",
          answer: "نعم. نحن نتكامل مباشرة مع أنظمتك الحالية مثل: برامج إدارة الطلبات (مثل CleanCloud)، وأنظمة إدارة العملاء (CRMs)، وجداول بيانات Google، والأدوات الداخلية. لا داعي لاستبدال إعدادك الحالي."
        },
        {
          question: "هل بيانات العملاء آمنة؟",
          answer: "نعم. نحن نتبع ممارسات صارمة للتعامل مع البيانات: لا يتم تخزين بيانات الدفع الحساسة، واجهات برمجة تطبيقات (APIs) وبيانات اعتماد آمنة، التحكم في الوصول للمسؤولين فقط."
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
