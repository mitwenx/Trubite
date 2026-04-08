export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  originalPrice?: string;
  weight: string;
  category: 'powder' | 'butter';
  variant: string;
  images: string[];
  features: string[];
  nutrition: {
    protein: string;
    fat: string;
    calories: string;
  };
  amazonLink: string;
  badge?: string;
  color: string;
}

export const products: Product[] = [
  {
    id: 'pb-powder-unsweetened',
    name: 'Peanut Butter Powder',
    tagline: 'Unsweetened',
    description: 'Pure peanut goodness with 87% less fat than traditional peanut butter. Perfect for smoothies, baking, and protein shakes.',
    price: '₹349',
    originalPrice: '₹399',
    weight: '227g',
    category: 'powder',
    variant: 'Unsweetened',
    images: [
      '/images/61jHzkXjILL._AC_UF894,1000_QL80_.jpg',
      '/images/61gcfZFb7-L._AC_UF894,1000_QL80_.jpg',
      '/images/61IJcIPHgkL._AC_UF894,1000_QL80_.jpg',
    ],
    features: [
      '56g Protein per 100g',
      '87% Less Fat',
      '1/3 The Calories',
      '100% Natural',
      'Gluten Free & Vegan',
    ],
    nutrition: {
      protein: '56g',
      fat: '12.5g',
      calories: '415',
    },
    amazonLink: 'https://amazon.in',
    badge: 'Bestseller',
    color: '#4A9B5E',
  },
  {
    id: 'pb-powder-classic',
    name: 'Peanut Butter Powder',
    tagline: 'Classic',
    description: 'The perfect balance of taste and nutrition. Our Classic variant delivers delicious peanut flavor with added pink Himalayan salt.',
    price: '₹399',
    originalPrice: '₹449',
    weight: '425g',
    category: 'powder',
    variant: 'Classic',
    images: [
      '/images/61L1WC2TQFL._AC_UF894,1000_QL80_.jpg',
      '/images/613Z+d6VYEL._AC_UF894,1000_QL80_.jpg',
      '/images/61HCCit8uhL._AC_UF894,1000_QL80_.jpg',
    ],
    features: [
      '48g Protein per 100g',
      '88% Less Fat',
      '1/3 The Calories',
      'Pink Himalayan Salt',
      'Source of Dietary Fiber',
    ],
    nutrition: {
      protein: '48g',
      fat: '12g',
      calories: '426',
    },
    amazonLink: 'https://amazon.in',
    color: '#E85A9A',
  },
  {
    id: 'pb-powder-cocoa',
    name: 'Peanut Butter Powder',
    tagline: 'Cocoa',
    description: 'Rich chocolate flavor meets peanut butter goodness. The perfect treat for chocolate lovers who want to stay healthy.',
    price: '₹449',
    originalPrice: '₹499',
    weight: '227g',
    category: 'powder',
    variant: 'Cocoa',
    images: [
      '/images/61cUUGUD8nL._AC_UF894,1000_QL80_.jpg',
      '/images/61ViBHOYa+L._AC_UF894,1000_QL80_.jpg',
      '/images/61f3xlXIVYL._AC_UF894,1000_QL80_.jpg',
    ],
    features: [
      '39g Protein per 100g',
      '88% Less Fat',
      '1/3 The Calories',
      'Real Cocoa Powder',
      'Delicious Chocolate Taste',
    ],
    nutrition: {
      protein: '39g',
      fat: '12g',
      calories: '400',
    },
    amazonLink: 'https://amazon.in',
    badge: 'New',
    color: '#F5B800',
  },
  {
    id: 'natural-pb-creamy',
    name: 'Natural Peanut Butter',
    tagline: 'Creamy',
    description: '100% natural creamy peanut butter made with roasted peanuts. No additives, no preservatives—just pure peanut goodness.',
    price: '₹549',
    originalPrice: '₹599',
    weight: '1kg',
    category: 'butter',
    variant: 'Creamy',
    images: [
      '/images/71WspErHE5L._AC_UF894,1000_QL80_.jpg',
      '/images/819AK8THO9L._AC_UF894,1000_QL80_.jpg',
      '/images/81V5aHrT0zL._AC_UF894,1000_QL80_.jpg',
    ],
    features: [
      '100% Natural',
      'High in Protein',
      'Zero Cholesterol',
      'Made in India',
      'No Added Sugar',
    ],
    nutrition: {
      protein: '30g',
      fat: '49g',
      calories: '619',
    },
    amazonLink: 'https://amazon.in',
    color: '#2A9D8F',
  },
  {
    id: 'natural-pb-crunchy',
    name: 'Natural Peanut Butter',
    tagline: 'Crunchy',
    description: 'The same 100% natural peanut butter with satisfying crunchy bits. Perfect for those who love texture in every bite.',
    price: '₹549',
    originalPrice: '₹599',
    weight: '1kg',
    category: 'butter',
    variant: 'Crunchy',
    images: [
      '/images/71LgJN4xoGL._AC_UF894,1000_QL80_.jpg',
      '/images/81csFsZrcML._AC_UF894,1000_QL80_.jpg',
      '/images/71+sEd4D20L._AC_UF894,1000_QL80_.jpg',
    ],
    features: [
      '100% Natural',
      'High in Protein',
      'Zero Cholesterol',
      'Crunchy Texture',
      'Made in India',
    ],
    nutrition: {
      protein: '30g',
      fat: '49g',
      calories: '619',
    },
    amazonLink: 'https://amazon.in',
    color: '#E76F51',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4);
};

export const getPowderProducts = (): Product[] => {
  return products.filter((p) => p.category === 'powder');
};

export const getButterProducts = (): Product[] => {
  return products.filter((p) => p.category === 'butter');
};
