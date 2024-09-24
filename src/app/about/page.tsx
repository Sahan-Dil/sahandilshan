'use client';

import CenteredPage from '@/components/home/CenteredPage';

export default function About() {
  return (
    <CenteredPage title="about">
      <section id="about" className="">
        <h2 className="text-4xl">About Section</h2>
        <p className="mt-4">
          This is the about section where you can describe yourself.
        </p>
      </section>
    </CenteredPage>
  );
}
