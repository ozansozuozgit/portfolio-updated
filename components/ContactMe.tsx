import { useForm as useFormFormspree } from '@formspree/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { toast } from 'react-toastify';

type Props = {};
type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};
const ContactMe = (props: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const notify = () =>
    toast('Email sent! I will get back to you as soon as possible!');

  const [state, handleSubmitFormspree] = useFormFormspree('mvovbqkr');
  if (state.succeeded) {
    console.log('success');
    notify();
  }

  const createMessage = async () => {
    const response = await fetch('/api/generate-answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: `I am a recruiter. Write me an email to express my interest ${name} in working with a potential hire named Ozan Sozuoz who is a front end developer. ${
          email ? 'You can reach me at' : ''
        } ${email ? email : ''}`,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    setMessage('');
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
      // setMessage('message', messageString);
      setMessage((prev) => prev + chunkValue);
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
          <div className='flex items-center space-x-5 justify-center'>
            {/* <button onClick={createMessage} className='text-2xl sm:text-lg text-secondary'>
              Generate Message from ChatGPT
            </button> */}
            <button
              className='inline-flex items-center px-4 py-2 border border-transparent 
        rounded-full shadow-sm text-sm font-medium text-white 
        bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 
        hover:to-indigo-700 focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-indigo-500'
              onClick={createMessage}
            >
              <BsFillChatLeftTextFill
                className='-ml-1 mr-2 h-5 w-5'
                aria-hidden='true'
              />
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
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              className='contactInput'
              placeholder='Your Email'
              type='email'
              required
              id='email'
              name='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <input
            placeholder='Subject'
            className='contactInput'
            type='text'
            id='subject'
            name='subject'
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
          <textarea
            placeholder='Message'
            className='contactInput h-[200px]'
            id='message'
            name='message'
            required
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
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
