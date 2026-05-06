'use client';
import { useState, useRef, useEffect } from 'react';
import { useStore } from '@/context/StoreContext';
import { SEARCH_SUGGESTIONS } from '@/data/products';

const NAV_ITEMS = ['New In', 'Jackets', 'Bags', 'Accessories', 'Sale', 'About'];

export default function Header() {
  const { cart, toggleCart } = useStore();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [activeNav, setActiveNav] = useState('New In');
  const searchRef = useRef<HTMLDivElement>(null);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const handleSearch = (val: string) => {
    setQuery(val);
    if (!val.trim()) { setSuggestions([]); return; }
    setSuggestions(SEARCH_SUGGESTIONS.filter(s => s.toLowerCase().includes(val.toLowerCase())));
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setSuggestions([]);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header>
      <div className="header-logo">Hug<span>Me</span></div>
      <nav>
        {NAV_ITEMS.map(item => (
          <div key={item} className={`nav-item${activeNav === item ? ' active' : ''}`} onClick={() => setActiveNav(item)}>
            {item}
          </div>
        ))}
      </nav>
      <div className="header-actions">
        <div className="header-search-wrap" style={{ position: 'relative' }} ref={searchRef}>
          <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: 'var(--text-muted)', fill: 'none', strokeWidth: 2 }}>
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input type="text" placeholder="Search by color, style…" value={query} onChange={e => handleSearch(e.target.value)} />
          {suggestions.length > 0 && (
            <div className="autocomplete show">
              {suggestions.map(s => (
                <div key={s} className="autocomplete-item" onClick={() => { setQuery(s); setSuggestions([]); }}>
                  <svg viewBox="0 0 24 24" style={{ width: 12, height: 12, stroke: 'var(--text-muted)', fill: 'none', strokeWidth: 2 }}>
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                  </svg>
                  {s}
                </div>
              ))}
            </div>
          )}
        </div>
        <button className="icon-btn" title="Wishlist">
          <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
        </button>
        <button className="icon-btn" title="Account">
          <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        </button>
        <button className="icon-btn" title="Cart" onClick={toggleCart}>
          <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
}
