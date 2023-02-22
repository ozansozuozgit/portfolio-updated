import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { AnimatePresence } from "framer-motion";

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
