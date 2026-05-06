'use client';
import { useEffect } from 'react';
import { useStore } from '@/context/StoreContext';

export default function LocaleSetter({ locale }: { locale: 'en-in' | 'en-us' }) {
  const { setCurrency } = useStore();
  useEffect(() => {
    if (locale === 'en-us') setCurrency('USD', '$', '🌍');
    else setCurrency('INR', '₹', '🇮🇳');
  }, [locale, setCurrency]);
  return null;
}
