import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import BootStrapSvg from '../public/assets/images/bootstrap.svg';
import CssSvg from '../public/assets/images/css.svg';
import FirebaseSvg from '../public/assets/images/firebase.svg';
import HtmlSvg from '../public/assets/images/html.svg';
import JsSvg from '../public/assets/images/javascript.svg';
import NextSvg from '../public/assets/images/next.svg';
import Python from '../public/assets/images/python.svg';
import ReactNativeSvg from '../public/assets/images/react-native.svg';
import ReactSvg from '../public/assets/images/react.svg';
import ReduxSvg from '../public/assets/images/redux.svg';
import TypeScriptSvg from '../public/assets/images/typescript.svg';
import UISvg from '../public/assets/images/ui.svg';
import VueSvg from '../public/assets/images/vue.svg';
import Skill from './Skill';

type Props = {};

const Skills = (props: Props) => {
  const skillArray = [
    BootStrapSvg,
    CssSvg,
    FirebaseSvg,
    HtmlSvg,
    JsSvg,
    NextSvg,
    Python,
    ReactNativeSvg,
    ReactSvg,
    ReduxSvg,
    TypeScriptSvg,
    UISvg,
    VueSvg,
  ];
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      className='h-screen flex relative xl:flex-col md:text-center text-left flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center space-y-0 mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[5px] text-2xl'>
        Skills
      </h3>
      <div className='grid grid-cols-4 gap-5'>
        {skillArray.map((skill, index) => {
          return <Skill key={index} skillImage={skill} />;
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
