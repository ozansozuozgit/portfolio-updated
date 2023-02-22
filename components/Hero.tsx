'use client';
import Spline from '@splinetool/react-spline';
import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

type Props = {
  headerAnimationCompleted: boolean;
};

const Hero = ({ headerAnimationCompleted }: Props) => {
  // const [text] = useTypewriter({
  //   words: [
  //     'Front End Developer.',
  //     'Full Stack Developer.',
  //     'Adaptable Dude.',
  //     'guy that gets things done.',
  //   ],
  //   loop: true,
  //   delaySpeed: 500,
  //   typeSpeed: 80,
  //   deleteSpeed: 30,
  // });
  const [startTyping, setStartTyping] = useState(false);

  const [animate, setAnimate] = useState('hidden');
  const itemVariants: Variants = {
    visible: {
      opacity: 1,
      clipPath: 'inset(0% 0% 0% 0% round 10px)',
      transition: { type: 'tween', duration: 1 },
    },
    hidden: {
      opacity: 0,
      clipPath: 'inset(10% 50% 90% 50% round 10px)',
    },
  };

  return (
    <section className='flex flex-col md:flex-row h-screen max-w-6xl mx-auto'>
      {/* <BackgroundCircles /> */}
      {headerAnimationCompleted && (
        <>
          <div className='w-full md:w-1/2 p-10'>
            <motion.h1
              initial={{
                opacity: 0,
                clipPath: 'inset(10% 50% 90% 50% round 10px)',
              }}
              animate={{
                opacity: 1,
                clipPath: 'inset(0% 0% 0% 0% round 10px)',
              }}
              transition={{
                type: 'tween',
                duration: 1,
                ease: 'easeInOut',
              }}
              onAnimationComplete={() => {
                setTimeout(() => {
                  setStartTyping(true);
                }, 500);
              }}
              className='text-4xl md:text-6xl font-bold text-jet-black'
            >
              I'm Ozan Sozuoz, a{' '}
              <span className='text-third'>
                {' '}
                {startTyping && (
                  <Typewriter
                    words={[
                      'Front End Developer.',
                      'Full Stack Developer.',
                      'Adaptable Dude.',
                      'guy that gets things done.',
                    ]}
                    loop={true}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={500}
                  />
                )}
              </span>
            </motion.h1>
          </div>
          <motion.div
            className='w-full md:w-1/2 h-full'
            variants={itemVariants}
            initial='hidden'
            animate={animate}
          >
            <div className='h-full w-full max-w-full'>
              {/* <Spline
                scene='https://prod.spline.design/KJF6vW9xX8HrpC-N/scene.splinecode'
                onLoad={() => {
                  setAnimate('visible');
                }}
                className='h-max max-w-full'
              /> */}
            </div>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default Hero;
