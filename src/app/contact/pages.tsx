import React from 'react';

interface ContactPageProps {
  theme: 'dark' | 'light';
}
const ContactPage: React.FC<ContactPageProps | any> = ({ theme }) => {
  return (
    <section id="contact" className={'min-h-screen py-20'}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center mt-14">contact</h2>
      </div>
    </section>
  );
};

export default ContactPage;
