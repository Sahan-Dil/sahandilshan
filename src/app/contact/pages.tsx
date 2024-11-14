'use client';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BottomNavigation, Box } from '@mui/material';

interface ContactPageProps {
  theme: 'dark' | 'light';
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC<ContactPageProps> = ({ theme }) => {
  const [buttonText, setButtonText] = useState('Send Message');

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: FormData) => {
    setButtonText('Sending...');

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(
        'service_kpeab8m',
        'template_ue10vdm',
        templateParams,
        'g4u2PPD4G6PfzRAGV'
      );

      alert('Your message has been sent successfully!');
      setButtonText('Sent!');
      reset();

      setTimeout(() => {
        setButtonText('Send Message');
      }, 30000);
    } catch (error) {
      alert('An error occurred while sending your message. Please try again.');
      setButtonText('Send Message');
    }
  };

  return (
    <section
      id="contact"
      className={`min-h-screen py-20 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center mt-14">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                {...register('name')}
                type="text"
                className={`py-2 px-4 rounded-md w-full outline-none focus:ring-2 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 focus:ring-[#815ac0]'
                    : 'bg-gray-200 text-black focus:ring-[#815ac0]'
                } ${errors.name ? 'border-red-500' : ''}`}
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div>
              <input
                {...register('email')}
                type="email"
                className={`py-2 px-4 rounded-md w-full outline-none focus:ring-2 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 focus:ring-[#815ac0]'
                    : 'bg-gray-200 text-black focus:ring-[#815ac0]'
                } ${errors.email ? 'border-red-500' : ''}`}
                placeholder="Your Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div>
            <input
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
          <div>
            <textarea
              {...register('message')}
              rows={4}
              className={`py-2 px-4 rounded-md w-full outline-none focus:ring-2 ${
                theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 focus:ring-[#815ac0]'
                  : 'bg-gray-200 text-black focus:ring-[#815ac0]'
              } ${errors.message ? 'border-red-500' : ''}`}
              placeholder="Say Something"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="inline-block w-2/4 px-4 py-2 bg-[#5a189a] text-white rounded transition duration-300 hover:bg-[#815ac0]"
          >
            {buttonText}
          </button>
        </form>

        <div className="flex justify-center mt-32 space-x-6 ">
          <a
            href="https://linkedin.com/in/sahan-dilshan-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="h-14 w-14"
            />
          </a>
          <a
            href="https://github.com/Sahan-Dil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://skillicons.dev/icons?i=github"
              alt="GitHub"
              className="h-14 w-14"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
