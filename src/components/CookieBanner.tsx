'use client';
import { useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-text">
        We use cookies to enhance your shopping experience, personalize content, and analyze traffic.{' '}
        <a href="#">Cookie Policy</a> · <a href="#">Privacy Policy</a>
      </div>
      <div className="cookie-actions">
        <button className="btn-cookie btn-cookie-accept" onClick={() => setVisible(false)}>Accept All</button>
        <button className="btn-cookie btn-cookie-decline" onClick={() => setVisible(false)}>Decline</button>
      </div>
    </div>
  );
}
