import { Product } from '@/types';

export const products: Product[] = [
  { id: 1, name: 'Black Leather Jacket', sku: 'JK195', type: 'jacket', colors: ['#1a1a1a','#3d2314','#722f37'], priceINR: 9999, priceMRP: 14999, badge: 'sale', emoji: 'JK', bg: 'linear-gradient(135deg,#1a1a1a,#3d2314)', sold: 30, viewing: 22, image: '/black jacket.jpg' },
  { id: 2, name: 'Cognac Tote Bag', sku: 'BG041', type: 'bag', colors: ['#9b4826','#1a1a1a','#c8a882'], priceINR: 7499, priceMRP: 10999, badge: 'new', emoji: 'BG', bg: 'linear-gradient(135deg,#9b4826,#5c2d0e)', sold: 18, viewing: 14, image: '/totebag.jpg' },
  { id: 3, name: 'Brown Biker Jacket', sku: 'JK203', type: 'jacket', colors: ['#8b5e3c','#1a1a1a','#c8a882'], priceINR: 12999, priceMRP: 17999, badge: null, emoji: 'BJ', bg: 'linear-gradient(135deg,#5c3d1e,#9b6b3a)', sold: 45, viewing: 8, image: '/brown jacket.jpg' },
  { id: 4, name: 'Tan Crossbody Bag', sku: 'BG055', type: 'bag', colors: ['#c8a882','#8b5e3c','#1a1a1a'], priceINR: 5999, priceMRP: 8499, badge: 'sale', emoji: 'CB', bg: 'linear-gradient(135deg,#b8904a,#8b5e3c)', sold: 27, viewing: 11, image: '/tan bag.jpg' },
  { id: 5, name: 'Olive Moto Jacket', sku: 'JK218', type: 'jacket', colors: ['#6b7c4b','#1a1a1a','#3d2314'], priceINR: 11499, priceMRP: 15999, badge: 'new', emoji: 'OJ', bg: 'linear-gradient(135deg,#3d4a28,#6b7c4b)', sold: 12, viewing: 19, image: '/olive jacket.jpg' },
  { id: 6, name: 'Leather Belt', sku: 'AC012', type: 'accessory', colors: ['#1a1a1a','#8b5e3c','#9b4826'], priceINR: 2499, priceMRP: 3499, badge: null, emoji: 'BL', bg: 'linear-gradient(135deg,#2a1a0a,#1a1a1a)', sold: 63, viewing: 5, image: '/belt.jpg' },
  { id: 7, name: 'Burgundy Wallet', sku: 'AC034', type: 'accessory', colors: ['#722f37','#1a1a1a','#8b5e3c'], priceINR: 3499, priceMRP: 4999, badge: 'sale', emoji: 'WL', bg: 'linear-gradient(135deg,#4a1a20,#722f37)', sold: 41, viewing: 7, image: '/wallets.jpg' },
  { id: 8, name: 'Cognac Chelsea Boots', sku: 'BT007', type: 'accessory', colors: ['#9b4826','#1a1a1a','#8b5e3c'], priceINR: 8999, priceMRP: 12999, badge: 'new', emoji: 'CB', bg: 'linear-gradient(135deg,#6b2e12,#9b4826)', sold: 9, viewing: 31, image: '/boots.jpg' },
];

export const CURRENCY_RATES: Record<string, number> = {
  INR: 1, USD: 0.012, GBP: 0.0095, EUR: 0.011, MYR: 0.056, JPY: 1.82, AED: 0.044,
};

export const CURRENCIES = [
  { code: 'INR', symbol: '₹', flag: '🇮🇳', label: 'India (INR ₹)' },
  { code: 'USD', symbol: '$', flag: '🇺🇸', label: 'USA (USD $)' },
  { code: 'GBP', symbol: '£', flag: '🇬🇧', label: 'UK (GBP £)' },
  { code: 'EUR', symbol: '€', flag: '🇪🇺', label: 'EU (EUR €)' },
  { code: 'MYR', symbol: 'MYR', flag: '🇲🇾', label: 'Malaysia (MYR)' },
  { code: 'JPY', symbol: '¥', flag: '🇯🇵', label: 'Japan (JPY ¥)' },
  { code: 'AED', symbol: 'AED', flag: '🇦🇪', label: 'UAE (AED)' },
] as const;

export const SEARCH_SUGGESTIONS = [
  'Black Leather Jacket','Brown Biker Jacket','Cognac Tote Bag','Olive Moto Jacket',
  'Burgundy Wallet','Tan Crossbody Bag','Leather Belt','Chelsea Boots',
];
