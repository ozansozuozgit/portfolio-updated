'use client';
import Spline from '@splinetool/react-spline';
import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {};

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: [
      'Front End Developer.',
      'Full Stack Developer.',
      'Adaptable Dude.',
      'guy that gets things done.',
    ],
    loop: true,
    delaySpeed: 500,
    typeSpeed: 80,
    deleteSpeed: 30,
    
  });
  const [startTyping, setStartTyping] = useState(false);

  const [animate, setAnimate] = useState('hidden');
  const itemVariants: Variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <section className='flex flex-col md:flex-row h-screen max-w-6xl mx-auto'>
      {/* <BackgroundCircles /> */}
      <div className='w-full md:w-1/2 p-10'>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 24,
            duration: 1,
            delay: 0.5,
          }}
          onAnimationComplete={() => setStartTyping(true)}
          className='text-4xl md:text-6xl font-bold text-jet-black'
        >
          Ozan Sozuoz a {startTyping && <span className='text-third'> {text} </span>}
          <Cursor  />
        </motion.h1>
      </div>
      <motion.div
        className='w-full md:w-1/2 h-full'
        variants={itemVariants}
        initial='hidden'
        animate={animate}
      >
        <div className='h-full w-full max-w-full'>
          <Spline
            scene='https://prod.spline.design/KJF6vW9xX8HrpC-N/scene.splinecode'
            onLoad={() => {
                setAnimate('visible')
            }}
            className='h-max max-w-full'
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
