'use client';
import Header from '@/components/Header';

import Hero from '@/components/Hero';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [headerAnimationCompleted, setHeaderAnimationCompleted] =
    useState<boolean>(false);
  const handleAnimationComplete = () => {
    setHeaderAnimationCompleted(true);
  };
  return (
    <main className='bg-primary font-ubuntu text-jet-black h-screen'>
      {/* Header */}
      <Header handleAnimationComplete={handleAnimationComplete}/>
      {/* Hero */}
      <Hero headerAnimationCompleted={headerAnimationCompleted} />
    </main>
  );
}
