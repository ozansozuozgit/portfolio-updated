import * as openai from 'openai';
import React from 'react';
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
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${formData.email}?subject=${formData.subject}&body=${formData.message}`;
  };

  const createMessage = async () => {
    //@ts-ignore
    openai.apiKey = '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';
    console.log('process.env.OPENAI_API_KEY', process.env.OPENAI_API_KEY);
    const prompt = 'Hello, how are you?';
    const model = 'text-davinci-002';
    //@ts-ignore
    const response = await openai.Completion.create({
      engine: model,
      prompt: prompt,
      maxTokens: 50,
      n: 1,
      stop: '\n',
    });
    const message = response.choices[0].text.trim();
    console.log('message', message);
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
            <AiOutlineMail className='text-3xl text-third' />
            <h4 className='text-2xl sm:text-lg'>ozansozuoz@gmail.com </h4>
          </div>
          <div className='flex items-center space-x-5'>
            <BsFillTelephoneFill className='text-3xl text-third' />
            <a className='text-2xl sm:text-lg' href='tel:+1205-835-9898'>
              205-835-9898
            </a>
          </div>
          <div className='flex items-center space-x-5'>
            <BsFillChatLeftTextFill className='text-3xl text-third' />
            <button onClick={createMessage} className='text-2xl sm:text-lg'>
              Generate Message{' '}
            </button>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto sm:max-w-[100%]'
        >
          <div className='flex space-x-2 sm:flex-col sm:space-x-0 sm:space-y-2 sm:text-md'>
            <input
              {...register('name')}
              className='contactInput'
              placeholder='Name'
              type='text'
              required
            />
            <input
              {...register('email')}
              className='contactInput'
              placeholder='Email'
              type='email'
              required
            />
          </div>
          <input
            {...register('subject')}
            placeholder='Subject'
            className='contactInput'
            type='text'
          />
          <textarea
            placeholder='Message'
            className='contactInput'
            {...register('message')}
            required
          ></textarea>
          <button
            type='submit'
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
