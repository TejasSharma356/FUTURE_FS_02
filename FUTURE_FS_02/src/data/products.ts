import { Product, Category } from '@/types/product';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Luxury Accessories',
    slug: 'luxury-accessories',
    description: 'Timeless pieces crafted with exceptional attention to detail',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600'
  },
  {
    id: '2',
    name: 'Fashion & Apparel',
    slug: 'fashion-apparel',
    description: 'Curated collections from renowned designers',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600'
  },
  {
    id: '3',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Premium technology for the discerning individual',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600'
  },
  {
    id: '4',
    name: 'Home & Living',
    slug: 'home-living',
    description: 'Elevate your living space with curated decor',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600'
  }
];

export const products: Product[] = [
  // Luxury Accessories
  {
    id: 'la-001',
    name: 'Artisan Chronograph',
    description: 'Swiss-made automatic movement with sapphire crystal and Italian leather strap. Water resistant to 100 meters.',
    price: 2850,
    originalPrice: 3200,
    category: 'luxury-accessories',
    categoryLabel: 'Luxury Accessories',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600'
    ],
    colors: ['Silver', 'Gold', 'Rose Gold'],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 124
  },
  {
    id: 'la-002',
    name: 'Heritage Leather Wallet',
    description: 'Hand-stitched full-grain Italian leather with RFID protection. Minimalist design with maximum functionality.',
    price: 285,
    category: 'luxury-accessories',
    categoryLabel: 'Luxury Accessories',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600'
    ],
    colors: ['Cognac', 'Black', 'Navy'],
    inStock: true,
    rating: 4.8,
    reviewCount: 89
  },
  {
    id: 'la-003',
    name: 'Aviator Sunglasses',
    description: 'Titanium frame with polarized lenses. Classic design reimagined for modern sophistication.',
    price: 420,
    category: 'luxury-accessories',
    categoryLabel: 'Luxury Accessories',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600'
    ],
    colors: ['Gold/Green', 'Silver/Blue', 'Black/Grey'],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: 'la-004',
    name: 'Pearl Drop Earrings',
    description: 'South Sea pearls set in 18k white gold. Elegant simplicity for any occasion.',
    price: 1650,
    category: 'luxury-accessories',
    categoryLabel: 'Luxury Accessories',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600'
    ],
    inStock: true,
    rating: 5.0,
    reviewCount: 42
  },
  {
    id: 'la-005',
    name: 'Diamond Tennis Bracelet',
    description: 'Brilliant cut diamonds set in platinum. A timeless piece for special moments.',
    price: 4200,
    originalPrice: 4800,
    category: 'luxury-accessories',
    categoryLabel: 'Luxury Accessories',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600'
    ],
    inStock: true,
    featured: true,
    rating: 5.0,
    reviewCount: 31
  },
  {
    id: 'la-006',
    name: 'Gold Chain Necklace',
    description: '18k solid gold Cuban link chain. Bold statement piece with premium craftsmanship.',
    price: 3100,
    category: 'luxury-accessories',
    categoryLabel: 'Luxury Accessories',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600'
    ],
    colors: ['Yellow Gold', 'White Gold', 'Rose Gold'],
    inStock: true,
    rating: 4.8,
    reviewCount: 67
  },
  
  // Fashion & Apparel
  {
    id: 'fa-001',
    name: 'Cashmere Overcoat',
    description: 'Double-breasted Italian cashmere coat with silk lining. Tailored silhouette for refined elegance.',
    price: 1890,
    originalPrice: 2400,
    category: 'fashion-apparel',
    categoryLabel: 'Fashion & Apparel',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600'
    ],
    colors: ['Camel', 'Charcoal', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 67
  },
  {
    id: 'fa-002',
    name: 'Leather Tote Bag',
    description: 'Structured tote in pebbled calfskin with suede lining. Perfect for work to weekend transitions.',
    price: 780,
    category: 'fashion-apparel',
    categoryLabel: 'Fashion & Apparel',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600'
    ],
    colors: ['Tan', 'Black', 'Burgundy'],
    inStock: true,
    rating: 4.8,
    reviewCount: 93
  },
  {
    id: 'fa-003',
    name: 'Premium Sneakers',
    description: 'Italian leather upper with memory foam insole. Minimalist design meets ultimate comfort.',
    price: 545,
    category: 'fashion-apparel',
    categoryLabel: 'Fashion & Apparel',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600'
    ],
    colors: ['White', 'Black', 'Grey'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 214
  },
  {
    id: 'fa-004',
    name: 'Silk Scarf',
    description: 'Hand-rolled edges on pure silk twill. Original artwork printed in Como, Italy.',
    price: 320,
    category: 'fashion-apparel',
    categoryLabel: 'Fashion & Apparel',
    images: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600'
    ],
    colors: ['Floral', 'Geometric', 'Abstract'],
    inStock: true,
    rating: 4.6,
    reviewCount: 58
  },
  {
    id: 'fa-005',
    name: 'Merino Wool Sweater',
    description: 'Extra-fine merino wool in a relaxed fit. Perfect layering piece for any season.',
    price: 295,
    category: 'fashion-apparel',
    categoryLabel: 'Fashion & Apparel',
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600'
    ],
    colors: ['Cream', 'Navy', 'Forest Green', 'Burgundy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    rating: 4.7,
    reviewCount: 112
  },
  {
    id: 'fa-006',
    name: 'Tailored Blazer',
    description: 'Wool-blend blazer with peak lapels. Impeccable Italian tailoring for a sharp silhouette.',
    price: 890,
    originalPrice: 1100,
    category: 'fashion-apparel',
    categoryLabel: 'Fashion & Apparel',
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600'
    ],
    colors: ['Navy', 'Charcoal', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    rating: 4.9,
    reviewCount: 78
  },
  {
    id: 'fa-007',
    name: 'Designer Handbag',
    description: 'Quilted lambskin leather with chain strap. Iconic design with timeless appeal.',
    price: 2450,
    category: 'fashion-apparel',
    categoryLabel: 'Fashion & Apparel',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600'
    ],
    colors: ['Black', 'Beige', 'Red'],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 156
  },
  
  // Electronics
  {
    id: 'el-001',
    name: 'Wireless Headphones Pro',
    description: 'Active noise cancellation with spatial audio. 40-hour battery life with premium leather ear cushions.',
    price: 549,
    originalPrice: 649,
    category: 'electronics',
    categoryLabel: 'Electronics',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600'
    ],
    colors: ['Midnight Black', 'Platinum Silver', 'Space Grey'],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 342
  },
  {
    id: 'el-002',
    name: 'Smart Watch Elite',
    description: 'Sapphire crystal display with titanium case. Health monitoring and seamless connectivity.',
    price: 899,
    category: 'electronics',
    categoryLabel: 'Electronics',
    images: [
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600'
    ],
    colors: ['Silver', 'Gold', 'Graphite'],
    inStock: true,
    rating: 4.9,
    reviewCount: 187
  },
  {
    id: 'el-003',
    name: 'Portable Speaker',
    description: '360° sound with deep bass. Waterproof design with 24-hour playback. Premium acoustic engineering.',
    price: 329,
    category: 'electronics',
    categoryLabel: 'Electronics',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600'
    ],
    colors: ['Black', 'Forest Green', 'Desert Sand'],
    inStock: true,
    rating: 4.7,
    reviewCount: 276
  },
  {
    id: 'el-004',
    name: 'Wireless Earbuds',
    description: 'Crystal clear audio with adaptive EQ. Precision-crafted with seamless device switching.',
    price: 279,
    category: 'electronics',
    categoryLabel: 'Electronics',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600'
    ],
    colors: ['White', 'Black'],
    inStock: false,
    rating: 4.6,
    reviewCount: 421
  },
  {
    id: 'el-005',
    name: 'Digital Camera',
    description: 'Full-frame mirrorless camera with 45MP sensor. Professional grade imaging in a compact body.',
    price: 2799,
    originalPrice: 3199,
    category: 'electronics',
    categoryLabel: 'Electronics',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600'
    ],
    colors: ['Black'],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 89
  },
  {
    id: 'el-006',
    name: 'Mechanical Keyboard',
    description: 'Premium aluminum chassis with custom switches. RGB backlighting with wireless connectivity.',
    price: 349,
    category: 'electronics',
    categoryLabel: 'Electronics',
    images: [
      'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600'
    ],
    colors: ['Space Grey', 'Silver', 'Black'],
    inStock: true,
    rating: 4.8,
    reviewCount: 203
  },
  
  // Home & Living
  {
    id: 'hl-001',
    name: 'Artisan Ceramic Vase',
    description: 'Hand-thrown ceramic vase with reactive glaze. Each piece is unique.',
    price: 185,
    category: 'home-living',
    categoryLabel: 'Home & Living',
    images: [
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600'
    ],
    colors: ['Sage', 'Terracotta', 'Cream'],
    inStock: true,
    rating: 4.7,
    reviewCount: 45
  },
  {
    id: 'hl-002',
    name: 'Cashmere Throw Blanket',
    description: 'Pure Mongolian cashmere in a generous size. Ultimate luxury for cozy evenings.',
    price: 495,
    category: 'home-living',
    categoryLabel: 'Home & Living',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600'
    ],
    colors: ['Oatmeal', 'Grey', 'Blush'],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 78
  },
  {
    id: 'hl-003',
    name: 'Marble Candle Set',
    description: 'Hand-poured soy candles in natural marble vessels. Long-lasting fragrance with clean burn.',
    price: 120,
    category: 'home-living',
    categoryLabel: 'Home & Living',
    images: [
      'https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600'
    ],
    colors: ['White Marble', 'Black Marble', 'Green Marble'],
    inStock: true,
    rating: 4.6,
    reviewCount: 134
  },
  {
    id: 'hl-004',
    name: 'Designer Table Lamp',
    description: 'Sculptural brass lamp with linen shade. Statement lighting for sophisticated spaces.',
    price: 680,
    originalPrice: 780,
    category: 'home-living',
    categoryLabel: 'Home & Living',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600'
    ],
    colors: ['Brass', 'Matte Black', 'Nickel'],
    inStock: true,
    rating: 4.8,
    reviewCount: 52
  }
];

export const getFeaturedProducts = () => products.filter(p => p.featured);

export const getProductsByCategory = (category: string) => 
  products.filter(p => p.category === category);

export const getProductById = (id: string) => 
  products.find(p => p.id === id);
