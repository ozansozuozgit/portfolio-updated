'use client';
import { animate, motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

type Props = {
  handleAnimationComplete: () => void;
};

function Header({ handleAnimationComplete }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  const navLinksVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const navLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  // Add sticky navbar when scroll down 
  window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
      navbar?.classList.add('sticky');
    } else {
      navbar?.classList.remove('sticky');
    }
  });

  return (
    <motion.nav
      animate={'open'}
      className='top-0 z-50 navbar'
      onAnimationComplete={() => {
        handleAnimationComplete();
      }}
    >
      <div className='max-w-7xl mx-auto md:px-6 px-8'>
        <div className='flex items-center justify-center md:justify-between h-16'>
        <div className='flex-shrink-0 md:block hidden'>
            <a className='text-jet-black font-bold text-lg'>Ozan Sozuoz</a>
          </div>
          <div className='md:hidden block'>
            <motion.div
              variants={{
                open: {
                  transition: {
                    type: 'spring',
                    bounce: 1,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.1,
                  },
                },
                closed: {
                  transition: {
                    type: 'spring',
                    bounce: 0,
                    duration: 0.3,
                  },
                },
              }}
              className='flex items-center space-x-4 font-bold text-jet-black text-2xl'
            >
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                variants={itemVariants}
                className='hover:text-third'
              >
                <Link href='#'>Home</Link>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: -50 }}
                variants={itemVariants}
                className='hover:text-third'
              >
                <Link href='/'>About</Link>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                variants={itemVariants}
                className='hover:text-third'
              >
                <Link href='/'>Projects</Link>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: -50 }}
                variants={itemVariants}
                className='hover:text-third'
              >
                <Link href='/'>Contact</Link>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                variants={itemVariants}
                className='hover:text-third'
              >
                <Link href='/'>Experience</Link>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: -50 }}
                variants={itemVariants}
                className='hover:text-third'
              >
                <Link href='/'>Skills</Link>
              </motion.span>
            </motion.div>
          </div>
          <div className='-mr-2 md:flex hidden'>
            <button
              onClick={toggleMenu}
              type='button'
              className='bg-third inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-tea-rose focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <FaBars className='h-6 w-6 text-white' />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className='md:block hidden'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className='px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white font-bold text-lg bg-third'
            variants={navLinksVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.div variants={navLinkVariants}>
              <Link
                href='#'
                className='block px-3 py-2 rounded-md text-base font-medium'
              >
                Home
              </Link>
            </motion.div>
            <motion.div variants={navLinkVariants}>
              <Link
                href='#'
                className='block px-3 py-2 rounded-md text-base font-medium  '
              >
                About
              </Link>
            </motion.div>
            <motion.div
              variants={navLinkVariants}
              className='block px-3 py-2 rounded-md text-base font-medium '
            >
              <Link href='#'>Projects</Link>
            </motion.div>
            <motion.div
              variants={navLinkVariants}
              className='block px-3 py-2 rounded-md text-base font-medium '
            >
              <Link href='#'>Contact</Link>
            </motion.div>
            <motion.div
              variants={navLinkVariants}
              className='block px-3 py-2 rounded-md text-base font-medium '
            >
              <Link href='#'>Experience</Link>
            </motion.div>
            <motion.div
              variants={navLinkVariants}
              className='block px-3 py-2 rounded-md text-base font-medium '
            >
              <Link href='#'>Skills</Link>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
}
export default Header;
