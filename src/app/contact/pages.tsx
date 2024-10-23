'use client';
import React from 'react';

interface ContactPageProps {
  theme: 'dark' | 'light';
}
const ContactPage: React.FC<ContactPageProps | any> = ({ theme }) => {
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
          action="https://fabform.io/f/{form-id}"
          method="post"
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              id="name"
              name="name"
              type="text"
              className={`py-2 px-4 rounded-md w-full outline-none focus:ring-2 ${
                theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 focus:ring-purple-500'
                  : 'bg-gray-200 text-black focus:ring-purple-500'
              }`}
              placeholder="Name"
            />
            <input
              id="email"
              name="email"
              type="email"
              className={`py-2 px-4 rounded-md w-full outline-none focus:ring-2 ${
                theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 focus:ring-purple-500'
                  : 'bg-gray-200 text-black focus:ring-purple-500'
              }`}
              placeholder="Email"
            />
          </div>
          <input
            id="subject"
            type="text"
            className={`py-2 px-4 rounded-md w-full outline-none focus:ring-2 ${
              theme === 'dark'
                ? 'bg-gray-800 text-gray-300 focus:ring-purple-500'
                : 'bg-gray-200 text-black focus:ring-purple-500'
            }`}
            placeholder="Subject"
          />
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`py-2 px-4 rounded-md w-full outline-none focus:ring-2 ${
              theme === 'dark'
                ? 'bg-gray-800 text-gray-300 focus:ring-purple-500'
                : 'bg-gray-200 text-black focus:ring-purple-500'
            }`}
            placeholder="Say Something"
          />
          <button className="inline-block px-4 py-2 bg-[#5a189a] text-white rounded transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
