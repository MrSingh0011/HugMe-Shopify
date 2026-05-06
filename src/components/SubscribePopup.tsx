'use client';
import { useState, useEffect } from 'react';

export default function SubscribePopup() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('popupShown')) {
        setVisible(true);
        sessionStorage.setItem('popupShown', '1');
      }
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    setVisible(false);
    alert('🎉 Welcome! Your 10% discount code has been sent to your email.');
  };

  if (!visible) return null;

  return (
    <div className="popup-overlay" onClick={() => setVisible(false)}>
      <div className="popup-modal" onClick={e => e.stopPropagation()}>
        <div className="popup-close" onClick={() => setVisible(false)}>✕</div>
        <div className="popup-img">HM</div>
        <div className="popup-body">
          <div className="popup-tag">✦ Members Only</div>
          <h2>Get 10% Off Your First Order</h2>
          <p>Join the HugMe family. Be first to know about new drops, exclusive offers and style tips.</p>
          <div className="popup-form">
            <input type="text" className="popup-input" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
            <input type="email" className="popup-input" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
            <button className="popup-submit" onClick={handleSubmit}>Claim My 10% Discount</button>
          </div>
          <div className="popup-skip" onClick={() => setVisible(false)}>No thanks, I&apos;ll pay full price</div>
        </div>
      </div>
    </div>
  );
}
