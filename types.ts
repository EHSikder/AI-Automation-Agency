export type Language = 'en' | 'ar';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Service {
  id: string;
  iconName: string;
  title: string;
  description: string;
  features: string[];
  priceStart: string;
}

export interface Industry {
  id: string;
  title: string;
  kpis: string[];
  description: string;
}

export interface WorkStep {
  number: string;
  title: string;
  timeline: string;
  description: string;
  deliverables: string;
  microCta: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
}

export interface PortfolioItem {
  id: string;
  client: string;
  industry: string;
  title: string;
  background: string;
  problem: string;
  solution: string;
  outcome: string;
  testimonial: string;
  image: string;
}

export interface Translation {
  nav: NavItem[];
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustText: string;
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Service[];
  };
  industries: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Industry[];
  };
  howItWorks: {
    sectionTitle: string;
    sectionSubtitle: string;
    steps: WorkStep[];
  };
  pricing: {
    sectionTitle: string;
    sectionSubtitle: string;
    plans: PricingPlan[];
  };
  portfolio: {
    sectionTitle: string;
    sectionSubtitle: string;
    cta: string;
    items: PortfolioItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    messageLabel: string;
    submitBtn: string;
  };
  aiChat: {
    trigger: string;
    placeholder: string;
    welcome: string;
  };
}