export interface Category {
  id: string;
  name: string;
  description: string;
  iconIndex: number;
}

export const categories: Category[] = [
  {
    id: 'corporate',
    name: 'Corporate Gifts',
    description: 'Premium branded gifts for employees and clients',
    iconIndex: 0
  },
  {
    id: 'festive',
    name: 'Festive Hampers',
    description: 'Curated gift hampers for celebrations',
    iconIndex: 1
  },
  {
    id: 'luxury',
    name: 'Luxury Items',
    description: 'High-end gifts for special occasions',
    iconIndex: 2
  },
  {
    id: 'wellness',
    name: 'Wellness & Self-Care',
    description: 'Thoughtful wellness and self-care products',
    iconIndex: 3
  },
  {
    id: 'tech',
    name: 'Tech Accessories',
    description: 'Modern tech gadgets and accessories',
    iconIndex: 4
  },
  {
    id: 'custom',
    name: 'Custom Solutions',
    description: 'Bespoke gifting tailored to your needs',
    iconIndex: 5
  }
];

export const config = {
  whatsapp: {
    number: '919876543210',
    message: 'Hello! I would like to know more about Pegasus Gifting services.'
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

export function getWhatsAppLink(): string {
  const { number, message } = config.whatsapp;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
