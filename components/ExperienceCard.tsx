import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import TwoMaidsLogo from '../public/assets/images/two-maids-logo.svg';
type Props = {};

const cardVariants: Variants = {
  offscreen: {
    y: 500,
    opacity: 0,
    rotate: -10,
  },
  onscreen: {
    y: -10,
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
    },
  },
};
const ExperienceCard = (props: Props) => {
  return (
    <motion.div
      className='card-container mt-[50px]'
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='splash' style={{ background: 'red' }} />

      <motion.article
        className='card p-5 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 sm:w-[500px] md:w-[600px] w-[900px]  bg-[#292929]'
        variants={cardVariants}
      >
        <div>
          <Image
            src={TwoMaidsLogo}
            alt=''
            className='xl:w-32 xl:h-32 w-[200px] h-[200px] object-fill'
          />
        </div>

        <div className='p-10'>
          <h4 className='text-4xl text-third sm:text-xl'>
            Front End Developer
          </h4>
          <p className='text-2xl mt-1 text-secondary sm:text-lg'>Two Maids</p>

          <p className='uppercase py-5 font-bold sm:text-sm'>2020 - Present</p>
          <ul className='list-disc space-y-4 ml-5 text-lg sm:text-sm'>
            <li>
              Developed and managed Next.js website for Two Maids, improving
              lead generation, SEO, and user experience.
            </li>
            <li>
              Introduced Tip functionality resulting in over $1 million
              financial gain for employees, boosting retention and compensation.
            </li>
            <li>
              Implemented three React projects for internal use, including a
              real-time map, leaderboard, and photo gallery.
            </li>
            <li>
              Maintained and improved custom scheduling software using Python,
              Django, and APIs. Integrated new scheduling software into Next.js
              website.
            </li>
          </ul>
        </div>
      </motion.article>
    </motion.div>
  );
};

export default ExperienceCard;
