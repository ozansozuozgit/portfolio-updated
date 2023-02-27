import { motion, Variants } from 'framer-motion';
import React from 'react';
type Props = {};

const cardVariants: Variants = {
  offscreen: {
    y: 500,
    opacity: 0.3,
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
      className='card-container'
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: false, amount: 0.6,}}
    >
      <div className='splash' style={{ background: 'red' }} />

      <motion.article
        className='card p-5 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 sm:w-[500px] md:w-[600px] w-[900px]  bg-[#292929]'
        variants={cardVariants}
      >
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          whileInView={{ y: 0, opacity: 1 }}
          //   viewport={{ once: true }}
          src='../assets/images/profile_pic.jpg'
          alt=''
          className='xl:w-32 xl:h-32 rounded-full w-[200px] h-[200px] object-cover object-center'
        />
        <div className='md:px-0 px-10'>
          <h4 className='text-4xl font-light'>CEO of ME</h4>
          <p className='font-bold text-2xl mt-1'>Two Maids</p>
          <div className='flex space-x-2 my-2'>
            <img
              className='h-10 w-10 rounded-full'
              src='../assets/images/profile_pic.jpg'
              alt=''
            />
            {/* Tech Used */}
          </div>
          <p className='uppercase py-5 text-third'>
            Started work ... - Ended..
          </p>
          <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
          </ul>
        </div>
      </motion.article>
    </motion.div>
  );
};

export default ExperienceCard;
