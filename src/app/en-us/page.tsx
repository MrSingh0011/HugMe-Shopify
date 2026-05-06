import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BannerStrip from '@/components/BannerStrip';
import ProductGrid from '@/components/ProductGrid';
import TrustStrip from '@/components/TrustStrip';
import SaleBanner from '@/components/SaleBanner';
import RewardsSection from '@/components/RewardsSection';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import PDPModal from '@/components/PDPModal';
import SubscribePopup from '@/components/SubscribePopup';
import CookieBanner from '@/components/CookieBanner';
import WhatsAppButton from '@/components/WhatsAppButton';
import LocaleSetter from '@/components/LocaleSetter';

export const metadata: Metadata = {
  title: 'HugMe – Premium Leather Fashion | International Store',
  description: 'Shop premium leather jackets, bags & accessories. International shipping worldwide.',
  alternates: {
    canonical: 'https://hugme.fashion/en-us',
    languages: {
      'en-IN': 'https://hugme.fashion',
      'en-US': 'https://hugme.fashion/en-us',
    },
  },
};

export default function InternationalHome() {
  return (
    <>
      <LocaleSetter locale="en-us" />
      <TopBar />
      <Header />
      <main>
        <Hero />
        <BannerStrip />
        <ProductGrid />
        <TrustStrip />
        <SaleBanner />
        <RewardsSection />
      </main>
      <Footer />
      <CartDrawer />
      <PDPModal />
      <SubscribePopup />
      <CookieBanner />
      <WhatsAppButton />
    </>
  );
}
