export interface Category {
  id: string;
  name: string;
  description: string;
  iconIndex: number;
}

export const categories: Category[] = [
  {
    id: 'combo-gift-sets',
    name: 'Combo Gift Sets',
    description: 'Thoughtfully curated gift combinations',
    iconIndex: 0
  },
  {
    id: 'office-executive',
    name: 'Office & Executive',
    description: 'Premium desk accessories and essentials',
    iconIndex: 1
  },
  {
    id: 'tech-utility',
    name: 'Tech & Utility',
    description: 'Modern gadgets and practical accessories',
    iconIndex: 2
  },
  {
    id: 'bottles-drinkware',
    name: 'Bottles & Drinkware',
    description: 'Elegant bottles and premium drinkware',
    iconIndex: 3
  },
  {
    id: 'bags-premium',
    name: 'Bags & Premium Gifts',
    description: 'Luxury bags and high-end items',
    iconIndex: 4
  },
  {
    id: 'awards-recognition',
    name: 'Awards & Recognition',
    description: 'Trophies, plaques, and recognition items',
    iconIndex: 5
  }
];

export const assets = {
  logo: '/assets/generated/pegasus-logo-red.dim_512x512.png',
  heroBanner: '/assets/generated/hero-banner.dim_1600x700.png',
  heroProduct: '/assets/generated/pegasus-home-hero-product.dim_1400x900.png',
};

export const config = {
  whatsapp: {
    number: '919876543210',
    defaultMessage: 'Hello! I would like to know more about Pegasus Gifting services.'
  },
  catalogue: {
    url: '/assets/pegasus-catalogue.pdf',
    filename: 'Pegasus-Gifting-Catalogue.pdf'
  },
  company: {
    name: 'Pegasus Gifting',
    tagline: 'Premium Corporate Gifting Solutions',
    description: 'Elevate your corporate relationships with thoughtfully curated gifts'
  }
};

export function getCategoryImagePath(categoryId: string): string {
  return `/assets/generated/category-${categoryId}.dim_800x600.png`;
}

export function getWhatsAppLink(customMessage?: string): string {
  const { number, defaultMessage } = config.whatsapp;
  const message = customMessage || defaultMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppMessage(
  intent: string,
  secondAnswer?: string,
  category?: string
): string {
  let message = `Hello! I'm interested in ${intent}`;
  
  if (secondAnswer) {
    if (intent === 'bulk corporate gifting') {
      message += ` (${secondAnswer})`;
    } else if (intent === 'single/few gifts') {
      message += ` for ${secondAnswer}`;
    }
  }
  
  if (category) {
    message += `. I'm particularly interested in ${category}`;
  }
  
  message += '. Could you help me with this?';
  
  return message;
}
