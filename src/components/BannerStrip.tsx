import Image from 'next/image';

const BANNERS = [
  { id: 1, title: 'Leather Jackets', sub: 'From ₹9,999 / $199', cta: 'Shop Collection →', image: '/black jacket.jpg' },
  { id: 2, title: 'Designer Bags', sub: 'Handcrafted Luxury', cta: 'Explore →', image: '/bags.jpg' },
  { id: 3, title: 'Accessories', sub: 'Complete the Look', cta: 'Discover →', image: '/accesseries.jpg' },
];

export default function BannerStrip() {
  return (
    <div className="banner-strip">
      {BANNERS.map((b) => (
        <div key={b.id} className="banner-card">
          <div className="banner-card-image-wrap">
            <Image
              src={b.image}
              alt={b.title}
              fill
              className="banner-card-image"
              quality={80}
            />
            <div className="banner-card-overlay" />
            <div className="banner-card-label">
              <h3>{b.title}</h3>
              <p>{b.sub}</p>
              <a href="#">{b.cta}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
