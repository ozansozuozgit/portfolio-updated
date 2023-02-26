import { motion } from 'framer-motion';
import React from 'react';
import profilePicture from '../public/assets/images/profile_pic.jpg';
type Props = {};

const About = (props: Props) => {
  return (
    <div className='h-screen flex flex-row md:flex-col relative md:text-center text-left max-w-7xl px-10 justify-evenly mx-auto items-center '>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>
        About
      </h3>

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
      <div className='space-y-10 md:px-0 px-10'>
        <h4 className='text-4xl font-semibold'>
          Stuff <span className='underline decoration-[#23B28C]/70'>about</span>{' '}
          me
        </h4>
        <p className='text-lg'>
          If you're looking for someone who can create amazing web apps,
          websites, and mobile apps, you've come to the right place. I'm your
          go-to person! I love being part of a team, communicating with my
          colleagues, and tackling challenging yet rewarding projects. It's in
          these situations where I truly thrive. Aside from my passion for tech,
          I also love hitting the gym and lifting heavy weights. And when I'm
          not coding or lifting weights, you can find me enjoying the great
          outdoors or traveling to new places.
        </p>
      </div>
    </div>
  );
};

export default About;
