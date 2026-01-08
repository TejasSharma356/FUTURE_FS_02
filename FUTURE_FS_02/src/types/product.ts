export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'luxury-accessories' | 'fashion-apparel' | 'electronics' | 'home-living';
  categoryLabel: string;
  images: string[];
  colors?: string[];
  sizes?: string[];
  inStock: boolean;
  featured?: boolean;
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}
