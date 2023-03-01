import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import CssSvg from '../public/assets/images/css.svg';
import FirebaseSvg from '../public/assets/images/firebase.svg';
import HtmlSvg from '../public/assets/images/html.svg';
import JsSvg from '../public/assets/images/javascript.svg';
import ReactSvg from '../public/assets/images/react.svg';
import ReduxSvg from '../public/assets/images/redux.svg';
import TypeScriptSvg from '../public/assets/images/typescript.svg';
type Props = {};

const Projects = (props: Props) => {
  const spline = useRef<any>();
  const targetRef = useRef<any>(null);
  const imageArray = [
    CssSvg,
    FirebaseSvg,
    HtmlSvg,
    JsSvg,
    ReactSvg,
    ReduxSvg,
    TypeScriptSvg,
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        spline?.current.emitEvent('start', 'Screen');
      } else {
        // spline?.current.emitEventReverse('start', 'Screen');
      }
    });

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  function onLoad(splineApp: any) {
    spline.current = splineApp;
  }

  return (
    <div className='sm:h-auto h-screen flex flex-col relative  text-left max-w-7xl px-10 justify-evenly mx-auto items-center '>
      <h3 className='md:top-0  sm:top-5 uppercase tracking-[5px] text-2xl '>
        Projects
      </h3>
      <div className='flex flex-row-reverse md:flex-col relative justify-evenly mx-auto items-center md:space-y-10  '>
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          ref={targetRef}
          transition={{ type: 'spring', bounce: 0, duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className='md:mt-[50px] md:!w-[300px] md:!h-[400px]lg:w-[350px] lg:h-[450px] w-[500px] h-[600px] mb-0  flex-shrink-0 object-cover flex'
        >
          <Spline
            scene='https://prod.spline.design/qP3F2IfinnN439To/scene.splinecode'
            onLoad={onLoad}
            className='h-max max-w-full w-full md:!w-[250px] md:!h-[450px] m-auto'
          />
        </motion.div>
        <div className='space-y-3 p-10 box-shadow-custom '>
          <h4 className='text-4xl font-semibold text-third sm:text-xl'>Thought Quality</h4>
          <div className='text-lg space-y-5'>
            <h4 className='font-bold text-2xl text-secondary sm:text-lg'>Features:</h4>
            <ul className='list-disc list-inside sm:text-sm'>
              <li>
                Simple interface to add your emotions and thoughts effortlessly.
              </li>
              <li>
                Charts to see the overall quality of your thoughts based on the
                date range selected.
              </li>
              <li>
                Review previous sessions to get a better understanding of your
                thought.
              </li>
              <li>Get notified daily to input your thoughts.</li>
            </ul>
            <div className='space-y-5'>
              <h4 className='font-bold text-1xl'>Tech Stack:</h4>
              <div className='flex space-x-5 flex-wrap'>
                {imageArray.map((image,index) => {
                  return <Image src={image} key={index} alt='image' className='w-5' />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
