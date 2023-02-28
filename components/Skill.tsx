import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type Props = {
  directionLeft?: boolean;
  skillImage?: any;
};
const Skill = ({ directionLeft, skillImage }: any) => {
  console.log('skillImage', skillImage);
  return (
    <motion.div
      className='group relative flex cursor-pointer'
      initial={{
        x: directionLeft ? -200 : 200,
      }}
      transition={{ duration: 1 }}
      whileInView={{ x: 0, opacity: 1 }}
    >
      <Image
        alt='React icon'
        src={skillImage}
        className='rounded-xl borderobject-cover w-32 h-32 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
    </motion.div>
  );
};

export default Skill;
