'use client';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface ContactPageProps {
  theme: 'dark' | 'light';
}

const ContactPage: React.FC<ContactPageProps> = ({ theme }) => {
  const form = useRef<HTMLFormElement>(null);
  const [buttonText, setButtonText] = React.useState('Send Message');

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    subject: Yup.string().required('Subject is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    setButtonText('Sending...');

    emailjs
      .sendForm(
        'service_kpeab8m',
        'template_ue10vdm',
        form.current as HTMLFormElement,
        'g4u2PPD4G6PfzRAGV'
      )
      .then(
        () => {
          alert('Your message has been sent successfully!');
          setButtonText('Sent!');
          form.current?.reset();
        },
        () => {
          alert(
            'An error occurred while sending your message. Please try again.'
          );
          setButtonText('Send Message');
        }
      );
  };

  return (
    <section
      id="contact"
      className={`min-h-screen py-20 ${theme === 'dark' ? ' text-white' : ' text-black'}`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center mt-14">
          Get in Touch
        </h2>
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                id="name"
                {...register('name')}
                type="text"
                className={`py-2 px-4 rounded-md w-full outline-none focus:ring-2 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 focus:ring-[#815ac0]'
                    : 'bg-gray-200 text-black focus:ring-[#815ac0]'
                } ${errors.name ? 'border-red-500' : ''}`}
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div>
              <input
                id="email"
                {...register('email')}
                type="email"
                className={`py-2 px-4 rounded-md w-full outline-none focus:ring-2 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 focus:ring-[#815ac0]'
                    : 'bg-gray-200 text-black focus:ring-[#815ac0]'
                } ${errors.email ? 'border-red-500' : ''}`}
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div>
            <input
              id="subject"
              {...register('subject')}
              type="text"
              className={`py-2 px-4 rounded-md w-full outline-none focus:ring-2 ${
                theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 focus:ring-[#815ac0]'
                  : 'bg-gray-200 text-black focus:ring-[#815ac0]'
              } ${errors.subject ? 'border-red-500' : ''}`}
              placeholder="Subject"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject.message}</p>
            )}
          </div>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`py-2 px-4 rounded-md w-full outline-none focus:ring-2 ${
              theme === 'dark'
                ? 'bg-gray-800 text-gray-300 focus:ring-[#815ac0]'
                : 'bg-gray-200 text-black focus:ring-[#815ac0]'
            }`}
            placeholder="Say Something"
          />
          <button
            type="submit"
            className="inline-block w-2/4 px-4 py-2 bg-[#5a189a] text-white rounded transition duration-300"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
