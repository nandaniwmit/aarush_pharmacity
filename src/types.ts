export interface Medicine {
  id: number;
  name: string;
  brand: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  category: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  badge?: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  category: 'Medicines' | 'Healthcare' | 'OTC' | 'Devices' | 'Services';
  features: string[];
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'Store Front' | 'Medicine Shelves' | 'Healthcare Products' | 'Equipment';
  image: string;
  description: string;
}

export interface HealthTip {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
}
