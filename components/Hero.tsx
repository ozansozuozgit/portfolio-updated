'use client';
import Spline from '@splinetool/react-spline';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { start } from 'repl';
import backgroundImage from '../public/assets/images/background.svg';

type Props = {
  headerAnimationCompleted: boolean;
};

const Hero = ({ headerAnimationCompleted }: Props) => {
  const [startTyping, setStartTyping] = useState(false);

  const [animate, setAnimate] = useState('hidden');
  const itemVariants: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'tween', duration: 1 },
    },
    hidden: {
      opacity: 0,
      x: '50vw',
    },
  };

  return (
    <section
      className={`xs:max-w-6xl h-screen md:max-w-6xl mx-auto relative bg-[url('../public/assets/images/background.svg')]`}
    >
      <div className='flex flex-col md:flex-row md:mt-[150px] '>
        {headerAnimationCompleted && (
          <>
            <motion.div
              initial={{
                opacity: 0,
                x: '-50vw',
              }}
              animate={{
                opacity: 1,
                x: 0,
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
              className='w-full md:w-1/2 p-10 flex flex-col'
            >
              <h1 className='text-6xl md:text-[82px] leading-none font-bold text-jet-black sm:1/2 h-[200px] xs:mb-[80px] '>
                I'm Ozan Sozuoz
                <br></br>{' '}
                <span className='text-third '>
                  {' '}
                  {startTyping && (
                    <Typewriter
                      words={[
                        'Front End Developer.',
                        'a guy who makes stupid jokes.',
                        'like my life.',
                        'hire me please.',
                      ]}
                      loop={true}
                      cursor
                      cursorStyle='_'
                      typeSpeed={55}
                      deleteSpeed={25}
                      delaySpeed={500}
                    />
                  )}
                </span>
              </h1>
            </motion.div>
            <motion.div
              className='w-full md:w-1/2 h-full z-20 relative'
              variants={itemVariants}
              initial='hidden'
              animate={animate}
            >
              <div className='h-full w-full max-w-full -mt-10 flex xs:justify-center md:justify-end'>
                <Spline
                  scene='https://prod.spline.design/KJF6vW9xX8HrpC-N/scene.splinecode'
                  onLoad={() => {
                    setAnimate('visible');
                  }}
                  className='h-max max-w-full m-0 bg-third spline-canvas '
                />
              </div>
              {/* <div className='blob'></div> */}
            </motion.div>
          </>
        )}
      </div>
      {startTyping && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div
            className='animate-bounce bg-white p-2 h-[50px] w-[50px] ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center             absolute left-0 right-0 md:bottom-[25%] m-auto xs:bottom[-10px]
'
          >
            <svg
              className='h-[50px] w-[50px] text-violet-500'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
            </svg>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
