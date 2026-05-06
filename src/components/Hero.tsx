import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero">
      {/* <Image
        src="/banner1.jpg"
        alt="HugMe Fashion - Wear the Story"
        fill
        className="hero-image"
        priority
        quality={85}
      /> */}
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-tag">New Collection 2025</div>
        <h1 className="hero-title">Wear the<br /><em>Story</em></h1>
        <p className="hero-sub">Handcrafted leather fashion that transcends seasons. Made for those who move through the world with intention.</p>
        <div className="hero-actions">
          <a href="#products" className="btn-primary">Shop Now →</a>
          <a href="#" className="btn-outline">View Lookbook</a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
