'use client';
import Image from 'next/image';
import { useStore } from '@/context/StoreContext';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product: p }: ProductCardProps) {
  const { formatPrice, addToCart, openPDP } = useStore();
  const price = formatPrice(p.priceINR);
  const mrp = formatPrice(p.priceMRP);
  const saving = Math.round((1 - p.priceINR / p.priceMRP) * 100);

  return (
    <div className="product-card" onClick={() => openPDP(p)}>
      <div className="product-card-img-wrap">
        {p.image ? (
          <Image
            src={p.image}
            alt={p.name}
            fill
            className="product-card-image"
            quality={75}
          />
        ) : (
          <div className="product-card-fake-img" style={{ background: p.bg }}>{p.emoji}</div>
        )}
        {p.badge && <div className={`product-badge badge-${p.badge}`}>{p.badge === 'sale' ? 'SALE' : 'NEW'}</div>}
        <div className="product-card-actions">
          <div className="product-card-action" onClick={e => { e.stopPropagation(); addToCart(p); }}>Add to Cart</div>
          <div className="product-card-action" onClick={e => { e.stopPropagation(); openPDP(p); }}>Quick View</div>
        </div>
      </div>
      <div className="product-card-info">
        <div className="product-card-brand">HugMe Leather</div>
        <div className="product-card-name">{p.name}</div>
        <div className="product-card-colors">
          {p.colors.map(c => <div key={c} className="product-card-color" style={{ background: c }} />)}
        </div>
        <div className="product-card-price">
          <span className="price-sale">{price}</span>
          <span className="price-mrp">{mrp}</span>
          <span className="price-save">-{saving}%</span>
        </div>
        <div className="product-card-sku">SKU: {p.sku}</div>
        {p.sold > 20 && (
          <div className="product-card-urgency">
            <div className="pulse-dot" />🔥 {p.sold} sold in last 18hrs
          </div>
        )}
      </div>
    </div>
  );
}
