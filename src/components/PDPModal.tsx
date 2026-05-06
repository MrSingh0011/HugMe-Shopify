'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useStore } from '@/context/StoreContext';
import { Product } from '@/types';

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const TABS = [
  { id: 'desc', label: 'Description', content: 'Crafted from premium full-grain leather, this piece is built to last generations. Each jacket is hand-finished for a supple, rich texture that only gets better with wear. Fully lined interior with two inner pockets.' },
  { id: 'shipping', label: 'Shipping & Returns', content: 'India: 3–6 business days. International: 12–26 business days. Free returns within 5 days of delivery. Items must be in original condition with tags attached.' },
  { id: 'rewards', label: 'Reward Points', content: 'Earn 1 HugMe point for every ₹10 spent. Points can be redeemed at checkout. 100 points = ₹50 discount. Points expire after 12 months of inactivity.' },
  { id: 'reviews', label: 'Reviews', content: '★★★★★ "Absolutely stunning quality. The leather feels incredible." – Priya S.\n\n★★★★★ "Fits perfectly. Gets better every time I wear it." – Rahul M.' },
  { id: 'faqs', label: 'FAQs', content: 'Q: How do I care for the leather?\nA: Use a damp cloth for light cleaning. Apply leather conditioner every 3–4 months.\n\nQ: Can I exchange for a different size?\nA: Yes, free size exchanges within 5 days of delivery.' },
];

function PDPContent({ product: p }: { product: Product }) {
  const { formatPrice, addToCart, closePDP, currency } = useStore();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(0);
  const [activeTab, setActiveTab] = useState('desc');
  const [wishlisted, setWishlisted] = useState(false);

  const price = formatPrice(p.priceINR);
  const mrp = formatPrice(p.priceMRP);
  const saving = Math.round((1 - p.priceINR / p.priceMRP) * 100);

  return (
    <div className="pdp-modal" onClick={e => e.stopPropagation()}>
      <div className="pdp-close" onClick={closePDP}>✕</div>
      <div className="pdp-img-col">
        {p.image ? (
          <Image
            src={p.image}
            alt={p.name}
            fill
            className="pdp-image"
            quality={85}
          />
        ) : (
          <div style={{ background: p.bg }}>{p.emoji}</div>
        )}
      </div>
      <div className="pdp-info-col">
        <div className="pdp-brand">HugMe Leather</div>
        <h2 className="pdp-title">{p.name}</h2>
        <div className="pdp-reviews">
          <span className="stars">★★★★★</span>
          <span>(48 reviews)</span>
          <a href="#" style={{ fontSize: 11.5, textDecoration: 'underline', color: 'var(--text-muted)', marginLeft: 6 }}>Write a Review</a>
        </div>
        <div className="pdp-pricing">
          <span className="pdp-sale-price">{price}</span>
          <span className="pdp-mrp">{mrp}</span>
          <span className="pdp-sale-tag">-{saving}%</span>
        </div>
        <div className="pdp-currency-note">
          {currency.code !== 'INR' ? `Price shown in ${currency.code}. Checkout in USD.` : 'Price in INR. Free shipping above ₹1,999.'}
        </div>
        <div className="pdp-urgency">
          <div className="pdp-urgency-item"><span>🔥</span>{p.sold} sold in last 18 hours</div>
          <div className="pdp-urgency-item"><span>👀</span>{p.viewing} viewing now</div>
        </div>
        <div className="pdp-label">Color</div>
        <div className="pdp-colors">
          {p.colors.map((c, i) => (
            <div key={c} className={`pdp-color-opt${selectedColor === i ? ' active' : ''}`} style={{ background: c }} onClick={() => setSelectedColor(i)} />
          ))}
        </div>
        <div className="pdp-label">Size</div>
        <div className="pdp-sizes">
          {SIZES.map(s => (
            <div key={s} className={`pdp-size-opt${selectedSize === s ? ' active' : ''}`} onClick={() => setSelectedSize(s)}>{s}</div>
          ))}
        </div>
        <a className="pdp-size-guide">📐 View Size Guide</a>
        <div className="pdp-cart-actions">
          <button className="btn-add-cart" onClick={() => addToCart(p, selectedSize)}>Add to Cart</button>
          <button className="btn-buy-now">Buy It Now</button>
        </div>
        <div className="pdp-wishlist" onClick={() => setWishlisted(true)}>
          {wishlisted ? '❤️ Added to Wishlist' : '🤍 Add to Wishlist'}
        </div>
        <div className="pdp-pickup">
          <h4>📍 Available at HugMe Leather Cafe Store Mumbai</h4>
          <p>Usually ready in 24 hours · <a href="#" style={{ textDecoration: 'underline' }}>View store info</a></p>
        </div>
        <div className="pdp-delivery">
          <div className="pdp-delivery-item"><strong>🇮🇳 India Delivery</strong>3–6 business days</div>
          <div className="pdp-delivery-item"><strong>🌍 International</strong>12–26 business days</div>
        </div>
        <div className="pdp-meta">
          <span>Vendor: HugMe</span><span>Type: Leather</span><span>SKU: {p.sku}</span>
        </div>
        <div className="pdp-share">
          {['𝕏', 'in', '📘', '📌'].map(s => <a key={s} href="#">{s}</a>)}
        </div>
        <div className="pdp-safe">🔒 Guaranteed Safe Checkout · SSL Secured · Multiple Payment Options</div>
        <div className="tabs" style={{ marginTop: 20 }}>
          <div className="tab-nav">
            {TABS.map(t => (
              <button key={t.id} className={`tab-btn${activeTab === t.id ? ' active' : ''}`} onClick={() => setActiveTab(t.id)}>
                {t.label}
              </button>
            ))}
          </div>
          {TABS.map(t => (
            <div key={t.id} className={`tab-content${activeTab === t.id ? ' active' : ''}`} style={{ whiteSpace: 'pre-line' }}>
              {t.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PDPModal() {
  const { pdpProduct, closePDP } = useStore();
  if (!pdpProduct) return null;

  return (
    <div className="pdp-overlay open" onClick={closePDP}>
      <PDPContent product={pdpProduct} />
    </div>
  );
}
