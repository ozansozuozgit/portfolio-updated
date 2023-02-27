import { motion } from 'framer-motion';
import React from 'react';
import Skill from './Skill';
type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div 
    animate={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 1 }}
    className='h-screen flex relative xl:flex-col md:text-center text-left flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>
        Skills
      </h3>
      <div className='grid grid-cols-4 gap-5'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
