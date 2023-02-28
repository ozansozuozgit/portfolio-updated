import React from 'react';
import ExperienceCard from './ExperienceCard';

type Props = {};
const WorkExperience = (props: Props) => {
  return (
    <section className=' relative flex flex-col items-center space-y-10 '>
      <h3 className='uppercase tracking-[5px] text-2xl mt-10 '>Experience</h3>{' '}
      <div className='flex flex-col space-y-10 w-full mt-10 '>
        <ExperienceCard />
      </div>
    </section>
  );
};

export default WorkExperience;
