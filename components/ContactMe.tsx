import { useForm as useFormFormspree, ValidationError } from '@formspree/react';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillChatLeftTextFill, BsFillTelephoneFill } from 'react-icons/bs';

type Props = {};
type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};
const ContactMe = (props: Props) => {
  const { register, handleSubmit, setValue } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ozansozuoz@gmail.com?subject=${formData.subject}&body=${formData.message}`;
  };

  const [state, handleSubmitFormspree] = useFormFormspree('mvovbqkr');
  if (state.succeeded) {
    console.log('success');
  }

  const createMessage = async () => {
    const response = await fetch('/api/generate-answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt:
          'Write me an email to express my interest in working with a potential client named Ozan Sozuoz.',
      }),
    });
    console.log('Edge function returned.');

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let messageString = '';
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      messageString += chunkValue;
      setValue('message', messageString);
    }
  };
  return (
    <div className='h-screen flex flex-col relative  text-left max-w-7xl px-10 justify-evenly mx-auto items-center sm:max-w-[80%] '>
      {' '}
      <h3 className='md:top-0  sm:top-5 uppercase tracking-[5px] text-2xl mb-[-50px]'>
        Contact Me
      </h3>
      <div className='flex flex-col space-y-10  sm:space-y-5'>
        <h4 className='decoration-[#fd5e61]/50 underline text-4xl font-semibold text-center sm:text-xl'>
          Lets get in touch!
        </h4>
        <div className='space-y-10  sm:space-y-5'>

          <div className='flex items-center space-x-5'>
            <BsFillChatLeftTextFill className='text-3xl text-third' />
            <button onClick={createMessage} className='text-2xl sm:text-lg'>
              Generate Message from ChatGPT
            </button>
          </div>
        </div>
        <form
          onSubmit={handleSubmitFormspree}
          className='flex flex-col space-y-2 w-fit mx-auto sm:max-w-[100%]'
        >
          <div className='flex space-x-2 sm:flex-col sm:space-x-0 sm:space-y-2 sm:text-md'>
            <input
              className='contactInput'
              placeholder='Name'
              type='text'
              required
              id='name'
              name='name'
            />
            <input
              className='contactInput'
              placeholder='Email'
              type='email'
              required
              id='email'
              name='email'
            />
          </div>
          <input
            placeholder='Subject'
            className='contactInput'
            type='text'
            id='subject'
            name='subject'
          />
          <textarea
            placeholder='Message'
            className='contactInput h-[200px]'
            id='message'
            name='message'
            required
          />
          <button
            type='submit'
            disabled={state.submitting}
            className='bg-third text-white py-5 px-10 rounded-md font-bold text-lg hover:opacity-[0.5]'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
