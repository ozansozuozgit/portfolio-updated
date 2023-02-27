import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

type Props = {};

const Projects = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const spline = useRef<any>();
  const targetRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting) {
        console.log('visible');
        // spline?.current.emitEvent('start', 'Screen');
        console.log(spline.current);
        // triggerAnimation();
      } else {
        console.log('not visible');
        // spline?.current.emitEventReverse('start', 'Screen');
      }
    });

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  function onLoad(splineApp: any) {
    // save the app in a ref for later use
    spline.current = splineApp;
  }
  function triggerAnimation() {
    spline?.current.emitEvent('start', 'Screen');
  }
  return (
    <div className='h-screen flex flex-col relative  text-left max-w-7xl px-10 justify-evenly mx-auto items-center '>
      <h3 className='md:top-0  sm:top-5 uppercase tracking-[20px] text-2xl mb-[-50px]'>
        Projects
      </h3>
      <div className='flex flex-row-reverse md:flex-col relative justify-evenly mx-auto items-center md:space-y-10  ' >
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          ref={targetRef}
          transition={{ type: 'spring', bounce: 0, duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          className='md:mt-[50px] md:!w-[300px] md:!h-[400px]lg:w-[350px] lg:h-[450px] w-[500px] h-[600px] mb-0  flex-shrink-0 object-cover flex'
        >
          <Spline
            scene='https://prod.spline.design/qP3F2IfinnN439To/scene.splinecode'
            onLoad={onLoad}
            className='h-max max-w-full w-full md:!w-[350px] md:!h-[450px] m-auto'
          />
        </motion.div>
        <div className='space-y-3 md:px-0 p-10 box-shadow-custom '>
          <h4 className='text-4xl font-semibold text-third'>
            Thought Quality
          </h4>
          <div className='text-lg space-y-5'>
            <h4 className='font-bold text-2xl'>Features:</h4>
            <ul className='list-disc list-inside '>
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
              <h4 className='font-bold text-2xl'>Tech Stack:</h4>
              <div className='flex space-x-5 '>
                <img
                  src='https://cdn.worldvectorlogo.com/logos/react-2.svg'
                  alt=''
                  className='rounded-full border border-secondary object-cover w-8 h-8'
                />
                <img
                  src='https://cdn.worldvectorlogo.com/logos/react-2.svg'
                  alt=''
                  className='rounded-full border border-secondary object-cover w-8 h-8'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
