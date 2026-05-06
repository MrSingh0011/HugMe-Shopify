const TRUST_ITEMS = [
  { icon: '🚀', title: 'Fast Delivery', desc: 'India: 3–6 days · Global: 12–26 days' },
  { icon: '🔄', title: 'Easy Returns', desc: 'Free returns within 5 days' },
  { icon: '🔒', title: 'Secure Checkout', desc: '256-bit SSL encryption' },
  { icon: '💎', title: 'Premium Quality', desc: 'Genuine full-grain leather' },
];

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      {TRUST_ITEMS.map(item => (
        <div key={item.title} className="trust-item">
          <span className="trust-icon">{item.icon}</span>
          <div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
