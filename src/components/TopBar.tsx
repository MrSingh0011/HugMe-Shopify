'use client';
import { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { CURRENCIES } from '@/data/products';
import { CurrencyCode } from '@/types';

export default function TopBar() {
  const { currency, setCurrency } = useStore();
  const [open, setOpen] = useState(false);

  const messages = [
    '🌍 Free International Shipping on orders over $250',
    '🇮🇳 Free Shipping in India on orders above ₹1,999',
    '🔄 Easy Returns within 5 days',
    '✨ New arrivals every Friday',
  ];
  const marquee = [...messages, ...messages];

  return (
    <div className="top-bar">
      <div className="top-bar-marquee">
        <div className="top-bar-marquee-inner">
          {marquee.map((m, i) => <span key={i}>{m}</span>)}
        </div>
      </div>
      <div className="top-bar-right">
        <div className="currency-selector" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
          <span className="currency-flag">{currency.flag}</span>
          <span>{currency.code} {currency.symbol}</span>
          <span>▾</span>
          {open && (
            <div className="currency-dropdown">
              {CURRENCIES.map(c => (
                <a key={c.code} href="#" onClick={e => { e.preventDefault(); setCurrency(c.code as CurrencyCode, c.symbol, c.flag); setOpen(false); }}>
                  {c.flag} {c.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
