import { Translation } from './types';

export const COMPANY_INFO = {
  name: "GulfAutomate AI",
  email: "hello@gulfautomate.ai",
  phone: "+971 4 123 4567",
  hq: "Dubai, UAE",
  markets: "UAE, KSA, Kuwait, Qatar"
};

export const CONTENT: Record<'en' | 'ar', Translation> = {
  en: {
    nav: [
      { id: 'services', label: 'Services', href: '#services' },
      { id: 'industries', label: 'Industries', href: '#industries' },
      { id: 'how-it-works', label: 'How it Works', href: '#how-it-works' },
      { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
      { id: 'pricing', label: 'Pricing', href: '#pricing' },
      { id: 'contact', label: 'Contact', href: '#contact' },
    ],
    hero: {
      badge: "The GCC's #1 AI Automation Partner",
      headline: "AI Automates. You Grow.",
      subheadline: "We design AI systems that handle your customers, sales, and operations—24/7.",
      ctaPrimary: "Book a Demo",
      ctaSecondary: "View Solutions",
      trustText: "Trusted by leading companies in Riyadh, Dubai, and Kuwait City"
    },
    services: {
      sectionTitle: "Our Expertise",
      sectionSubtitle: "Comprehensive automation solutions tailored for the Gulf market.",
      items: [
        {
          id: 'voice',
          iconName: 'Phone',
          title: "Bilingual AI Voice Agents",
          description: "Human-like voice assistants that handle bookings, support, and sales in Arabic (Gulf dialects) and English. 24/7 availability.",
          features: ["Local SIP Integration", "Dialect Support", "CRM Sync"],
          priceStart: "From $500/mo"
        },
        {
          id: 'whatsapp',
          iconName: 'MessageSquare',
          title: "WhatsApp Automation",
          description: "End-to-end sales and support on WhatsApp. Recover abandoned carts and answer FAQs instantly.",
          features: ["Official API Access", "Broadcast Campaigns", "Catalog Integration"],
          priceStart: "From $300/mo"
        },
        {
          id: 'ops',
          iconName: 'Workflow',
          title: "Operations & POS Sync",
          description: "Connect your Point of Sale (CleanCloud, Foodics) directly to AI agents for seamless order processing.",
          features: ["Real-time Sync", "Error Reduction", "Auto-Invoicing"],
          priceStart: "Custom Quote"
        }
      ]
    },
    industries: {
      sectionTitle: "Built for Your Industry",
      sectionSubtitle: "Specialized workflows for high-volume sectors.",
      items: [
        {
          id: 'laundry',
          title: "Laundry & Cleaning",
          description: "Automate pickup scheduling, order status updates, and driver dispatch via WhatsApp.",
          kpis: ["Zero Missed Pickups", "Auto-Dispatch"]
        },
        {
          id: 'restaurants',
          title: "Restaurants & Catering",
          description: "AI voice agents for table reservations and catering inquiries during peak hours.",
          kpis: ["Capture 100% Calls", "Upsell Menu Items"]
        },
        {
          id: 'clinics',
          title: "Clinics & Dental",
          description: "24/7 patient booking, triage, post-care checkups, and no-show reduction.",
          kpis: ["-40% No-Shows", "Instant Booking"]
        },
        {
          id: 'realestate',
          title: "Real Estate",
          description: "Instant lead qualification, viewing scheduling, and property FAQ automation.",
          kpis: ["24/7 Lead Response", "Auto-Scheduling"]
        },
        {
          id: 'delivery',
          title: "Delivery Companies",
          description: "Automated address verification, driver coordination, and status updates.",
          kpis: ["Reduce Failed Deliveries", "Driver Support"]
        },
        {
          id: 'gyms',
          title: "Gyms",
          description: "Class booking, membership renewals, and reactivation campaigns.",
          kpis: ["Higher Retention", "Auto-Renewals"]
        },
        {
          id: 'retail',
          title: "Retail Stores",
          description: "Inventory queries, buy-online-pickup-in-store coordination, and returns.",
          kpis: ["Instant Stock Check", "Seamless Returns"]
        },
        {
          id: 'cars',
          title: "Car Services",
          description: "Service appointment booking, maintenance reminders, and status notifications.",
          kpis: ["Fill Service Bays", "Auto-Reminders"]
        }
      ]
    },
    howItWorks: {
      sectionTitle: "How It Works",
      sectionSubtitle: "A transparent 6-step journey from audit to automation mastery.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          timeline: "Days 1-2",
          description: "We audit your current workflows to find the highest impact automation opportunities.",
          deliverables: "Audit Report & ROI Projection",
          microCta: "Book discovery call"
        },
        {
          number: "02",
          title: "Setup",
          timeline: "Days 3-7",
          description: "Technical integration with your CRM, POS, and telephony providers.",
          deliverables: "Connected API Infrastructure",
          microCta: "View integration list"
        },
        {
          number: "03",
          title: "Training",
          timeline: "Days 8-14",
          description: "Ingesting your knowledge base and fine-tuning the AI's dialect and tone.",
          deliverables: "Trained Agent v1.0",
          microCta: "Hear sample audio"
        },
        {
          number: "04",
          title: "Pilot",
          timeline: "Days 15-20",
          description: "Controlled testing with a small segment of live traffic to ensure accuracy.",
          deliverables: "Performance Logs",
          microCta: "See testing protocols"
        },
        {
          number: "05",
          title: "Launch",
          timeline: "Day 21",
          description: "Full deployment to all customer channels with real-time monitoring.",
          deliverables: "Live Production System",
          microCta: "Start your launch"
        },
        {
          number: "06",
          title: "Scale",
          timeline: "Ongoing",
          description: "Continuous optimization, A/B testing scripts, and feature expansion.",
          deliverables: "Monthly Growth Reports",
          microCta: "View support plans"
        }
      ]
    },
    pricing: {
      sectionTitle: "Transparent Investment",
      sectionSubtitle: "Choose the plan that fits your growth stage.",
      plans: [
        {
          name: "Starter",
          price: "$999",
          period: "/month",
          description: "Perfect for small businesses starting with automation.",
          features: ["1 AI Voice Agent", "Basic WhatsApp Bot", "Standard Support (9-5)", "Monthly Reporting"],
          cta: "Start Trial"
        },
        {
          name: "Growth",
          price: "$2,499",
          period: "/month",
          description: "For scaling companies needing robust integration.",
          features: ["3 AI Voice Agents", "Advanced WhatsApp Flows", "POS/CRM Integration", "Priority Support"],
          cta: "Get Started",
          isPopular: true
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "",
          description: "Full-scale digital transformation and consulting.",
          features: ["Unlimited Agents", "Custom LLM Fine-tuning", "On-premise Options", "Dedicated Success Manager"],
          cta: "Contact Sales"
        }
      ]
    },
    portfolio: {
      sectionTitle: "Portfolio",
      sectionSubtitle: "Real business impact across the GCC.",
      cta: "See more work / Book case review",
      items: [
        {
          id: 'case_a',
          client: "Kuwait Laundry Co.",
          industry: "Logistics & Services",
          title: "Automating 12,000 monthly orders",
          background: "A leading laundry chain in Kuwait City struggling with manual WhatsApp orders.",
          problem: "Staff spent 6 hours/day manually entering WhatsApp orders into CleanCloud POS, leading to mistakes and missed pickups.",
          solution: "Deployed a WhatsApp AI Agent integrated directly with CleanCloud API for instant order creation and driver dispatch.",
          outcome: "+35% Revenue, 12,000 Auto-orders/mo",
          testimonial: "The AI handles 90% of our bookings now. Our staff can finally focus on quality control.",
          image: "https://picsum.photos/seed/laundry/800/600"
        },
        {
          id: 'case_b',
          client: "Riyadh Medical Center",
          industry: "Healthcare",
          title: "Zero missed patient calls",
          background: "A busy polyclinic in Riyadh facing a high volume of appointment calls.",
          problem: "Receptionists were overwhelmed, missing 40% of calls during peak hours. High no-show rate for appointments.",
          solution: "Implemented a Bilingual (Arabic/English) Voice Agent to handle scheduling, FAQs, and WhatsApp reminders.",
          outcome: "40% Less No-shows, 98% Pickup Rate",
          testimonial: "Our patients love that they can book an appointment at 2 AM on a Friday.",
          image: "https://picsum.photos/seed/medical/800/600"
        },
        {
          id: 'case_c',
          client: "Dubai Retail Group",
          industry: "E-commerce",
          title: "Instant customer support",
          background: "Luxury fashion retailer with high return volumes.",
          problem: "Customer support response time was 24+ hours, leading to frustration and lost repeat sales.",
          solution: "Omnichannel AI (Instagram + WhatsApp) trained on policy docs to handle returns and sizing queries instantly.",
          outcome: "80% Auto-resolution, Instant Replies",
          testimonial: "It feels like we hired a team of 20 experts overnight. The tone is perfectly on-brand.",
          image: "https://picsum.photos/seed/mall/800/600"
        }
      ]
    },
    contact: {
      title: "Ready to Automate?",
      subtitle: "Book a free strategy session with our technical team.",
      nameLabel: "Full Name",
      emailLabel: "Work Email",
      phoneLabel: "Phone Number",
      messageLabel: "Tell us about your needs",
      submitBtn: "Send Inquiry"
    },
    aiChat: {
      trigger: "Ask AI Agent",
      placeholder: "Type your question here...",
      welcome: "Hello! I'm the GulfAutomate assistant. Ask me about our services, pricing, or how we can help your business."
    }
  },
  ar: {
    nav: [
      { id: 'services', label: 'خدماتنا', href: '#services' },
      { id: 'industries', label: 'القطاعات', href: '#industries' },
      { id: 'how-it-works', label: 'كيف نعمل', href: '#how-it-works' },
      { id: 'portfolio', label: 'أعمالنا', href: '#portfolio' },
      { id: 'pricing', label: 'الأسعار', href: '#pricing' },
      { id: 'contact', label: 'تواصل معنا', href: '#contact' },
    ],
    hero: {
      badge: "الشريك الأول للأتمتة الذكية في الخليج",
      headline: "الذكاء الاصطناعي يعمل. أنت تنمو.",
      subheadline: "نصمم أنظمة ذكية تدير عملائك، مبيعاتك، وعملياتك—على مدار الساعة.",
      ctaPrimary: "احجز عرض توضيحي",
      ctaSecondary: "استكشف الحلول",
      trustText: "موثوق بنا من قبل الشركات الرائدة في الرياض، دبي، والكويت"
    },
    services: {
      sectionTitle: "خبراتنا",
      sectionSubtitle: "حلول أتمتة شاملة مصممة خصيصاً للسوق الخليجي.",
      items: [
        {
          id: 'voice',
          iconName: 'Phone',
          title: "وكلاء صوت ثنائيو اللغة",
          description: "مساعدون صوتيون للتعامل مع الحجوزات والدعم والمبيعات بالعربية (اللهجات الخليجية) والإنجليزية. متوفر 24/7.",
          features: ["دمج مع الاتصالات المحلية", "دعم اللهجات", "مزامنة CRM"],
          priceStart: "يبدأ من 500$ / شهر"
        },
        {
          id: 'whatsapp',
          iconName: 'MessageSquare',
          title: "أتمتة واتساب",
          description: "مبيعات ودعم كامل عبر واتساب. استعادة السلات المتروكة والإجابة على الأسئلة الشائعة فوراً.",
          features: ["واجهة برمجة رسمية", "حملات إعلانية", "دمج الكتالوج"],
          priceStart: "يبدأ من 300$ / شهر"
        },
        {
          id: 'ops',
          iconName: 'Workflow',
          title: "العمليات ونقاط البيع",
          description: "ربط نقاط البيع (CleanCloud, Foodics) مباشرة بالوكلاء الذكيين لمعالجة الطلبات بسلاسة.",
          features: ["مزامنة فورية", "تقليل الأخطاء", "فواتير تلقائية"],
          priceStart: "تسعير مخصص"
        }
      ]
    },
    industries: {
      sectionTitle: "حلول لكل قطاع",
      sectionSubtitle: "سير عمل مخصص للقطاعات عالية الحجم.",
      items: [
        {
          id: 'laundry',
          title: "المصابغ والتنظيف",
          description: "أتمتة جدولة الاستلام وتحديثات الحالة وتوجيه السائقين عبر واتساب.",
          kpis: ["صفر استلامات مفقودة", "توزيع تلقائي"]
        },
        {
          id: 'restaurants',
          title: "المطاعم والضيافة",
          description: "وكلاء صوت لحجز الطاولات والرد على استفسارات القائمة في أوقات الذروة.",
          kpis: ["استقبال 100٪ مكالمات", "زيادة الطلبات"]
        },
        {
          id: 'clinics',
          title: "العيادات والأسنان",
          description: "حجز المرضى 24/7، الفرز، وتقليل التغيب عن المواعيد.",
          kpis: ["-40٪ تغيب", "حجز فوري"]
        },
        {
          id: 'realestate',
          title: "العقارات",
          description: "تأهيل العملاء المحتملين فوراً وجدولة المعاينات.",
          kpis: ["رد فوري 24/7", "جدولة تلقائية"]
        },
        {
          id: 'delivery',
          title: "شركات التوصيل",
          description: "التحقق من العناوين آلياً وتنسيق السائقين وتحديثات الحالة.",
          kpis: ["تقليل فشل التوصيل", "دعم السائقين"]
        },
        {
          id: 'gyms',
          title: "النوادي الرياضية",
          description: "حجز الحصص وتجديد الاشتراكات وحملات إعادة التفعيل.",
          kpis: ["احتفاظ أعلى", "تجديد تلقائي"]
        },
        {
          id: 'retail',
          title: "متاجر التجزئة",
          description: "استعلامات المخزون وتنسيق الاستلام من المتجر والإرجاع.",
          kpis: ["فحص مخزون فوري", "إرجاع سلس"]
        },
        {
          id: 'cars',
          title: "خدمات السيارات",
          description: "حجز مواعيد الصيانة والتذكيرات وإشعارات حالة السيارة.",
          kpis: ["ملء مسارات الخدمة", "تذكير تلقائي"]
        }
      ]
    },
    howItWorks: {
      sectionTitle: "كيف نعمل",
      sectionSubtitle: "رحلة شفافة من 6 خطوات من التدقيق إلى احتراف الأتمتة.",
      steps: [
        {
          number: "01",
          title: "الاكتشاف",
          timeline: "يوم 1-2",
          description: "نقوم بتدقيق سير العمل الحالي للعثور على فرص الأتمتة ذات التأثير الأكبر.",
          deliverables: "تقرير التدقيق وتوقعات العائد",
          microCta: "احجز مكالمة اكتشاف"
        },
        {
          number: "02",
          title: "الإعداد",
          timeline: "يوم 3-7",
          description: "التكامل التقني مع أنظمة CRM ونقاط البيع ومزودي الاتصالات.",
          deliverables: "بنية تحتية متصلة",
          microCta: "عرض قائمة التكاملات"
        },
        {
          number: "03",
          title: "التدريب",
          timeline: "يوم 8-14",
          description: "تغذية قاعدة المعرفة وضبط لهجة ونبرة الذكاء الاصطناعي.",
          deliverables: "النسخة 1.0 من الوكيل",
          microCta: "اسمع نموذج صوتي"
        },
        {
          number: "04",
          title: "الاختبار",
          timeline: "يوم 15-20",
          description: "اختبار متحكم فيه مع شريحة صغيرة من العملاء لضمان الدقة.",
          deliverables: "سجلات الأداء",
          microCta: "شاهد بروتوكولات الاختبار"
        },
        {
          number: "05",
          title: "الإطلاق",
          timeline: "يوم 21",
          description: "نشر كامل لجميع قنوات العملاء مع مراقبة فورية.",
          deliverables: "نظام إنتاج حي",
          microCta: "ابدأ الإطلاق"
        },
        {
          number: "06",
          title: "النمو",
          timeline: "مستمر",
          description: "تحسين مستمر، اختبار نصوص A/B، وتوسيع الميزات.",
          deliverables: "تقارير نمو شهرية",
          microCta: "عرض خطط الدعم"
        }
      ]
    },
    pricing: {
      sectionTitle: "استثمار شفاف",
      sectionSubtitle: "اختر الخطة التي تناسب مرحلة نموك.",
      plans: [
        {
          name: "البداية",
          price: "$999",
          period: "/شهر",
          description: "مثالي للشركات الصغيرة التي تبدأ بالأتمتة.",
          features: ["1 وكيل صوتي", "بوت واتساب أساسي", "دعم قياسي (9-5)", "تقارير شهرية"],
          cta: "ابدأ التجربة"
        },
        {
          name: "النمو",
          price: "$2,499",
          period: "/شهر",
          description: "للشركات المتوسعة التي تحتاج إلى تكامل قوي.",
          features: ["3 وكلاء صوت", "تدفقات واتساب متقدمة", "ربط نقاط البيع/CRM", "دعم ذو أولوية"],
          cta: "ابدأ الآن",
          isPopular: true
        },
        {
          name: "المؤسسات",
          price: "مخصص",
          period: "",
          description: "تحول رقمي شامل واستشارات.",
          features: ["عدد غير محدود من الوكلاء", "تدريب خاص للنماذج", "خيارات داخلية", "مدير نجاح مخصص"],
          cta: "تواصل مع المبيعات"
        }
      ]
    },
    portfolio: {
      sectionTitle: "أعمالنا",
      sectionSubtitle: "تأثير حقيقي للأعمال في جميع أنحاء الخليج.",
      cta: "شاهد المزيد من الأعمال / احجز مراجعة",
      items: [
        {
          id: 'case_a',
          client: "مصبغة الكويت",
          industry: "الخدمات اللوجستية",
          title: "أتمتة 12,000 طلب شهرياً",
          background: "سلسلة مصابغ رائدة في الكويت تعاني من الطلبات اليدوية عبر واتساب.",
          problem: "كان الموظفون يقضون 6 ساعات يومياً في إدخال الطلبات يدوياً، مما أدى لأخطاء.",
          solution: "نشر وكيل واتساب ذكي مرتبط مباشرة بـ CleanCloud لإنشاء الطلبات فوراً.",
          outcome: "+35٪ إيرادات، 12,000 طلب تلقائي",
          testimonial: "الذكاء الاصطناعي يعالج 90٪ من حجوزاتنا الآن. طاقمنا يركز على الجودة.",
          image: "https://picsum.photos/seed/laundry/800/600"
        },
        {
          id: 'case_b',
          client: "مركز الرياض الطبي",
          industry: "الرعاية الصحية",
          title: "صفر مكالمات مفقودة",
          background: "عيادة مزدحمة في الرياض تواجه ضغطاً كبيراً في المكالمات.",
          problem: "كان موظفو الاستقبال يفوتون 40٪ من المكالمات وقت الذروة.",
          solution: "تنفيذ وكيل صوتي ثنائي اللغة للتعامل مع الجدولة والتذكيرات.",
          outcome: "40٪ تغيب أقل، 98٪ نسبة الرد",
          testimonial: "مرضانا يحبون إمكانية حجز موعد في الساعة 2 صباحاً.",
          image: "https://picsum.photos/seed/medical/800/600"
        },
        {
          id: 'case_c',
          client: "مجموعة دبي للتجزئة",
          industry: "التجارة الإلكترونية",
          title: "دعم عملاء فوري",
          background: "متجر أزياء فاخر يعاني من حجم كبير من طلبات الإرجاع.",
          problem: "كان زمن الاستجابة يتجاوز 24 ساعة مما يسبب خسارة المبيعات.",
          solution: "ذكاء اصطناعي شامل (إنستغرام + واتساب) مدرب للرد فوراً.",
          outcome: "80٪ حل تلقائي، ردود فورية",
          testimonial: "كأننا وظفنا فريقاً من 20 خبيراً بين عشية وضحاها.",
          image: "https://picsum.photos/seed/mall/800/600"
        }
      ]
    },
    contact: {
      title: "جاهز للأتمتة؟",
      subtitle: "احجز جلسة استراتيجية مجانية مع فريقنا التقني.",
      nameLabel: "الاسم الكامل",
      emailLabel: "بريد العمل",
      phoneLabel: "رقم الهاتف",
      messageLabel: "اخبرنا عن احتياجاتك",
      submitBtn: "إرسال الطلب"
    },
    aiChat: {
      trigger: "اسأل المساعد الذكي",
      placeholder: "اكتب سؤالك هنا...",
      welcome: "مرحباً! أنا مساعد GulfAutomate. اسألني عن خدماتنا، الأسعار، أو كيف يمكننا مساعدة عملك."
    }
  }
};