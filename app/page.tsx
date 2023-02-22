import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { Inter } from '@next/font/google';
import Image from 'next/image';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='bg-primary font-ubuntu text-jet-black h-screen'>
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
    </main>
  );
}
