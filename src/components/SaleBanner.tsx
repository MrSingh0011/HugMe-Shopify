export default function SaleBanner() {
  return (
    <div className="sale-banner">
      <div className="sale-banner-text">
        <h2>Mid-Season<br /><em>Sale</em></h2>
        <p>Up to 40% off on select styles. Limited time only.</p>
      </div>
      <div className="sale-banner-code">
        <p>Use code at checkout</p>
        <strong>HUGME20</strong>
      </div>
      <a className="btn-outline" href="#" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)', alignSelf: 'center' }}>
        Shop Sale →
      </a>
    </div>
  );
}
