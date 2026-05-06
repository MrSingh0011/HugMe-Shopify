const REWARDS = [
  { icon: '🎯', title: 'Earn Points', desc: 'Earn 1 point per ₹10 spent. Redeem for discounts on future purchases.' },
  { icon: '🎁', title: 'Gift Vouchers', desc: 'Purchase and redeem gift vouchers for yourself or loved ones.' },
  { icon: '📄', title: 'Credit Notes', desc: 'Get store credit for returns and refunds – shop at your own pace.' },
];

export default function RewardsSection() {
  return (
    <section className="rewards-section">
      <div className="section-header">
        <h2 className="section-title">Loyalty <em>Rewards</em></h2>
        <a href="#" className="section-link">View Full Program</a>
      </div>
      <div className="rewards-grid">
        {REWARDS.map((r, i) => (
          <div key={r.title} className={`reward-card fade-in stagger-${i + 1}`}>
            <div className="reward-icon">{r.icon}</div>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
