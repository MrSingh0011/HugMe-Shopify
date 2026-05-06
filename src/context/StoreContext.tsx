'use client';
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { CartItem, CurrencyCode, CurrencyState, Product } from '@/types';
import { CURRENCY_RATES } from '@/data/products';

interface StoreContextType {
  currency: CurrencyState;
  setCurrency: (code: CurrencyCode, symbol: string, flag: string) => void;
  formatPrice: (inr: number) => string;
  cart: CartItem[];
  addToCart: (product: Product, size?: string) => void;
  changeQty: (productId: number, delta: number) => void;
  cartOpen: boolean;
  toggleCart: () => void;
  pdpProduct: Product | null;
  openPDP: (product: Product) => void;
  closePDP: () => void;
}

const StoreContext = createContext<StoreContextType | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyState>({ code: 'INR', symbol: '₹', flag: '🇮🇳' });
  const [cart, setCart] = useState<CartItem[]>([
    { product: { id: 1, name: 'Black Leather Jacket', sku: 'JK195', type: 'jacket', colors: ['#1a1a1a'], priceINR: 9999, priceMRP: 14999, badge: 'sale', emoji: 'JK', bg: '', sold: 30, viewing: 22 }, qty: 1, size: 'M' },
    { product: { id: 2, name: 'Cognac Tote Bag', sku: 'BG041', type: 'bag', colors: ['#9b4826'], priceINR: 7499, priceMRP: 10999, badge: 'new', emoji: 'BG', bg: '', sold: 18, viewing: 14 }, qty: 1, size: '' },
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [pdpProduct, setPdpProduct] = useState<Product | null>(null);

  const setCurrency = useCallback((code: CurrencyCode, symbol: string, flag: string) => {
    setCurrencyState({ code, symbol, flag });
  }, []);

  const formatPrice = useCallback((inr: number): string => {
    if (currency.code === 'INR') return `₹${inr.toLocaleString('en-IN')}`;
    const rate = CURRENCY_RATES[currency.code];
    const converted = inr * 0.012 * (rate / CURRENCY_RATES['USD']);
    return `${currency.symbol}${converted.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  }, [currency]);

  const addToCart = useCallback((product: Product, size = 'M') => {
    setCart(prev => {
      const existing = prev.find(i => i.product.id === product.id && i.size === size);
      if (existing) return prev.map(i => i.product.id === product.id && i.size === size ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { product, qty: 1, size }];
    });
    setCartOpen(true);
  }, []);

  const changeQty = useCallback((productId: number, delta: number) => {
    setCart(prev => prev
      .map(i => i.product.id === productId ? { ...i, qty: Math.max(1, i.qty + delta) } : i)
    );
  }, []);

  const toggleCart = useCallback(() => setCartOpen(v => !v), []);
  const openPDP = useCallback((product: Product) => setPdpProduct(product), []);
  const closePDP = useCallback(() => setPdpProduct(null), []);

  return (
    <StoreContext.Provider value={{ currency, setCurrency, formatPrice, cart, addToCart, changeQty, cartOpen, toggleCart, pdpProduct, openPDP, closePDP }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
}
