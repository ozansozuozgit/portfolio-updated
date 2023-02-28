'use client';
import Spline from '@splinetool/react-spline';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { Typewriter } from 'react-simple-typewriter';
import PlaceHolderImage from '../public/assets/images/hero-placeholder.png';

type Props = {
  headerAnimationCompleted: boolean;
};

const Hero = ({ headerAnimationCompleted }: Props) => {
  const [startTyping, setStartTyping] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [animate, setAnimate] = useState<string>('hidden');
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
    <div
      className={`xs:max-w-6xl max-w-6xl sm:h-auto h-screen 2xl:h-auto mx-auto flex justify-around flex-col`}
    >
      <div className='flex flex-row sm:flex-col sm:mt-0 mt-[80px]'>
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
              className='w-full p-10 flex flex-col'
            >
              <h1 className='sm:text-4xl text-6xl leading-none font-bold text-jet-black h-[200px] mb-[80px] md:mb-[100px] sm:!mb-0'>
                I'm
                <br></br>
                Ozan Sozuoz
                <br></br>{' '}
                <span className='text-third '>
                  {' '}
                  {startTyping && (
                    <Typewriter
                      words={[
                        'Front End Developer.',
                        'Other Catchy Titles.',
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
              className=' w-full h-full z-20 relative'
              variants={itemVariants}
              initial='hidden'
              animate={animate}
            >
              {/* {loading && (
                <Circles
                  height='80'
                  width='80'
                  color='#fd5e61'
                  ariaLabel='circles-loading'
                  wrapperStyle={{}}
                  wrapperClass=''
                  visible={true}
                />
              )} */}
              <div className='h-full w-full max-w-full -mt-10 flex sm:justify-center justify-end sm:pointer-events-none'>
                <Spline
                  scene='https://prod.spline.design/KJF6vW9xX8HrpC-N/scene.splinecode'
                  onLoad={() => {
                    setAnimate('visible');
                    setLoading(false);
                  }}
                  className='h-max max-w-full m-0 bg-third spline-canvas md:!w-[350px] md:!h-[350px]'
                />
              </div>
              {loading && (
                <div className='h-full w-full max-w-full -mt-10 flex sm:justify-center justify-end'>
                  <Image
                    src={PlaceHolderImage}
                    alt='placeholder image'
                    className='h-max max-w-full m-0 bg-third spline-canvas md:!w-[350px] md:!h-[350px]'
                  />
                </div>
              )}
            </motion.div>
          </>
        )}
      </div>
      {!startTyping && <div style={{ height: '50px' }}></div>}
      {startTyping && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <a href='#about'>
            <div className='animate-bounce bg-white p-2 h-[50px] w-[50px] ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center m-auto md:mt-10 sm:mb-5'>
              <svg
                className='h-[50px] w-[50px] text-jungle-green'
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
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
