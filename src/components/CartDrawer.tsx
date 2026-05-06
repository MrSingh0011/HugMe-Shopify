'use client';
import { useState } from 'react';
import { useStore } from '@/context/StoreContext';

export default function CartDrawer() {
  const { cart, cartOpen, toggleCart, changeQty, formatPrice } = useStore();
  const [coupon, setCoupon] = useState('');
  const [note, setNote] = useState('');

  const subtotal = cart.reduce((s, i) => s + i.product.priceINR * i.qty, 0);
  const totalMRP = cart.reduce((s, i) => s + i.product.priceMRP * i.qty, 0);
  const savings = totalMRP - subtotal;

  return (
    <>
      <div className={`cart-backdrop${cartOpen ? ' open' : ''}`} onClick={toggleCart} />
      <div className={`cart-drawer${cartOpen ? ' open' : ''}`}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="icon-btn" onClick={toggleCart}>
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>
        <div className="cart-items">
          {cart.map(item => (
            <div key={`${item.product.id}-${item.size}`} className="cart-item">
              <div className="cart-item-img">{item.product.emoji}</div>
              <div className="cart-item-info">
                <h4>{item.product.name}</h4>
                <p>{item.size ? `Size: ${item.size} · ` : ''}SKU: {item.product.sku}</p>
                <div className="cart-qty">
                  <div className="qty-btn" onClick={() => changeQty(item.product.id, -1)}>−</div>
                  <span className="qty-val">{item.qty}</span>
                  <div className="qty-btn" onClick={() => changeQty(item.product.id, 1)}>+</div>
                </div>
              </div>
              <span className="cart-item-price">{formatPrice(item.product.priceINR * item.qty)}</span>
            </div>
          ))}
        </div>
        <div className="cart-footer">
          {savings > 0 && <div className="cart-savings">🎉 You&apos;re saving {formatPrice(savings)} on this order!</div>}
          <div className="cart-coupon">
            <input type="text" placeholder="Coupon code (e.g. HUGME20)" value={coupon} onChange={e => setCoupon(e.target.value)} />
            <button>Apply</button>
          </div>
          <div className="cart-note">
            <textarea placeholder="Special instructions for seller…" value={note} onChange={e => setNote(e.target.value)} />
          </div>
          <div className="cart-totals">
            <div className="cart-total-row"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
            <div className="cart-total-row"><span>Estimated Shipping</span><span>{formatPrice(0)} (Free)</span></div>
            <div className="cart-total-row big"><span>Total</span><span>{formatPrice(subtotal)}</span></div>
          </div>
          <button className="btn-buy-now" style={{ width: '100%', marginBottom: 8 }}>Checkout Securely</button>
          <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--text-muted)', marginTop: 6 }}>
            🔒 Guaranteed Safe &amp; Secure Checkout
          </div>
        </div>
      </div>
    </>
  );
}
