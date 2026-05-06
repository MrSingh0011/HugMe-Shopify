const SHOP_LINKS = ['New Arrivals', 'Leather Jackets', 'Bags & Wallets', 'Accessories', 'Sale'];
const HELP_LINKS = ['Size Guide', 'Shipping Info', 'Returns Policy', 'Track Order', 'Contact Us'];
const COMPANY_LINKS = ['About HugMe', 'Sustainability', 'Careers', 'Cookie Policy', 'Privacy Policy'];
const PAYMENT_CARDS = ['VISA', 'MC', 'UPI', 'PayPal', 'AMEX'];

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <h3>Hug<span>Me</span></h3>
          <p>Premium leather fashion crafted with care. Timeless pieces for the modern individual.</p>
          <p style={{ fontSize: 12, color: 'rgba(245,242,238,0.4)', marginBottom: 16 }}>🏪 HugMe Leather Cafe Store, Mumbai</p>
          <div className="footer-socials">
            {['𝕏', 'in', '▶', '📸'].map(s => <div key={s} className="footer-social">{s}</div>)}
          </div>
        </div>
        <div className="footer-col">
          <h4>Shop</h4>
          <ul>{SHOP_LINKS.map(l => <li key={l}>{l}</li>)}</ul>
        </div>
        <div className="footer-col">
          <h4>Help</h4>
          <ul>{HELP_LINKS.map(l => <li key={l}>{l}</li>)}</ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>{COMPANY_LINKS.map(l => <li key={l}>{l}</li>)}</ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 HugMe Fashion. All rights reserved. · <a href="https://hugme.fashion" style={{ color: 'var(--warm-tan)' }}>hugme.fashion</a></span>
        <div className="footer-cards">
          {PAYMENT_CARDS.map(c => <span key={c} className="card-icon">{c}</span>)}
        </div>
      </div>
    </footer>
  );
}
