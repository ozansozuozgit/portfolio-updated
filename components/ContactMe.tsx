import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';

type Props = {};
type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};
const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  return (
    <div className='h-screen flex flex-col relative  text-left max-w-7xl px-10 justify-evenly mx-auto items-center '>
      {' '}
      <h3 className='md:top-0  sm:top-5 uppercase tracking-[20px] text-2xl mb-[-50px]'>
        Contact Me
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='decoration-[#23B28C]/50 underline text-4xl font-semibold text-center'>
          Lets get in touch!
        </h4>
        <div className='space-y-10'>
          <div className='flex item-center space-x-5'>
            <AiOutlineMail className='text-3xl animate-pulse text-third' />
            <h4 className='text-2xl'>ozansozuoz@gmail.com </h4>
          </div>
          <div className='flex item-center space-x-5'>
            <BsFillTelephoneFill className='text-3xl animate-pulse text-third' />
            <a className='text-2xl' href='tel:+1205-835-9898'>
              205-835-9898
            </a>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto'
        >
          <div className='flex space-x-2'>
            <input
              {...register('name')}
              className='contactInput'
              placeholder='Name'
              type='text'
            />
            <input
              {...register('email')}
              className='contactInput'
              placeholder='Email'
              type='email'
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
