import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

type Props = {};

const About = (props: Props) => {
  return (
    <div className='sm:h-auto h-screen flex flex-col relative text-left max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='md:top-0  sm:top-5 uppercase tracking-[5px] text-2xl'>
        About
      </h3>

      <div className='flex flex-row md:flex-col relative justify-evenly mx-auto items-center '>
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{ type: 'spring', bounce: 0, duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          src='../assets/images/profile_pic.jpg'
          className='md:mt-[20px] md:!w-[300px] md:!h-[300px] md:rounded-full lg:w-[350px] lg:h-[450px] w-[500px] h-[600px] mb-0 rounded-lg shadow-2xl flex-shrink-0 object-cover'
        />
        <div className=' md:px-0 px-10 space-y-10 md:mt-10'>
          <h4 className='text-4xl font-semibold text-center sm:text-xl'>
            What I'm{' '}
            <span className='underline decoration-[#23B28C]/70'>All</span> About
          </h4>
          <div className='text-lg sm:text-sm space-y-4'>
            <p>
              If you're looking for someone who can create amazing web apps,
              websites, and mobile apps, you've come to the right place. I'm
              your go-to person!
            </p>

            <p>
              {' '}
              I love being part of a team, communicating with my colleagues, and
              tackling challenging yet rewarding projects. It's in these
              situations where I truly thrive.{' '}
            </p>
            <p>
              {' '}
              Aside from my passion for tech, I also love hitting the gym and
              lifting heavy weights. And when I'm not coding or lifting weights,
              you can find me enjoying the great outdoors or traveling to new
              places.
            </p>
          </div>

          <div className='flex items-center space-x-12 max-w-7xl mx-auto justify-center '>
            <Link
              href='https://github.com/ozansozuozgit'
              className='text-third hover:text-secondary'
              target={'_blank'}
            >
              <FaGithub className='md:h-[30px] md:w-[30px] h-[40px] w-[40px]' />
            </Link>
            <Link
              href='https://www.linkedin.com/in/ozan-sozuoz/'
              className='text-third hover:text-secondary'
              target={'_blank'}
            >
              <FaLinkedin className='md:h-[30px] md:w-[30px] h-[40px] w-[40px]' />
            </Link>
            <Link
              href='/assets/Ozan_Sozuoz_Frontend_Developer.pdf'
              target={'_blank'}
              className='bg-third hover:bg-secondary text-white font-bold py-3 px-5 rounded flex items-center text-xl md:text-sm md:py-2 md:px-2'
            >
              <span className='pr-3'>
                <FaFileAlt className='md:h-[20px] md:w-[20px] h-[25px] w-[25px]' />
              </span>
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
