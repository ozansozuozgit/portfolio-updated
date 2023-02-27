import { motion } from 'framer-motion';
import React from 'react';
type Props = {
  directionLeft?: boolean;
};

const Skill = (props: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: props.directionLeft ? -200 : 200,
        }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        src='https://cdn.worldvectorlogo.com/logos/react-2.svg'
        className='rounded-full border border-secondary object-cover w-32 h-32 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
    </div>
  );
};

export default Skill;
