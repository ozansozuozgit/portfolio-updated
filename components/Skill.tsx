import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type Props = {
  directionLeft?: boolean;
  skillImage?: any;
};
const Skill = ({ directionLeft, skillImage }: any) => {
  return (
    <motion.div
      className='group relative flex cursor-pointer overflow-x-hidden items-center justify-center'
      initial={{
        x: directionLeft ? -100 : 100,
      }}
      transition={{ duration: 1 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
    >
      <Image
        alt='React icon'
        src={skillImage}
        className='rounded-xl borderobject-cover sm:!w-12 sm:!h-12 w-32 h-32 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
    </motion.div>
  );
};

export default Skill;
