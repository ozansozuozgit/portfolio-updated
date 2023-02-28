'use client';
import About from '@/components/About';
import Header from '@/components/Header';

import ContactMe from '@/components/ContactMe';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import { useEffect, useRef, useState } from 'react';
export default function Home() {
  const [headerAnimationCompleted, setHeaderAnimationCompleted] =
    useState<boolean>(false);
  const handleAnimationComplete = () => {
    setHeaderAnimationCompleted(true);
  };
  const [isSticky, setIsSticky] = useState(false);
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = containerRef.current.scrollTop;
      if (scrollTop > 65) {
        // change 100 to the number of pixels at which you want the header to stick
        setIsSticky(true);
      } else {
        console.log('not sticky');
        setIsSticky(false);
      }
    };

    containerRef.current.addEventListener('scroll', handleScroll);
    setTimeout(() => {
      setHeaderAnimationCompleted(true);
    }, 15000);
    return () => {
      containerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <main
      className='bg-primary font-ubuntu text-jet-black h-screen overflow-y-scroll scroll-smooth overflow-x-hidden  scrollbar scrollbar-thumb-third scrollbar-track-gray-100 space-y-10'
      ref={containerRef}
    >
      {/* Header */}
      <Header
        handleAnimationComplete={handleAnimationComplete}
        isSticky={isSticky}
      />
      {/* Hero */}
      <section id='hero'>
        <Hero headerAnimationCompleted={headerAnimationCompleted} />
      </section>
      {headerAnimationCompleted && (
        <>
          <section id='about'>
            <About />
          </section>
          <section id='experience'>
            <WorkExperience />
          </section>
          <section id='skills'>
            <Skills />
          </section>
          <section id='projects'>
            <Projects />
          </section>
          <section id='contact'>
            <ContactMe />
          </section>
        </>
      )}
    </main>
  );
}
