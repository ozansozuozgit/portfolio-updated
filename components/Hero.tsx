'use client';
import React from 'react';
import { Cursor,useTypewriter } from 'react-simple-typewriter';

type Props = {};

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: ['Hello', 'From', 'Typewriter', 'Hook!'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <h1>
        {' '}
        <span> {text} </span>
        <Cursor />
      </h1>
    </div>
  );
};

export default Hero;
