'use client';

import React, { ReactNode } from 'react';

interface CenteredPageProps {
  title: string;
  children?: ReactNode;
}

export default function CenteredPage({ title, children }: CenteredPageProps) {
  return (
    <div className="min-h-screen backdrop-blur-md flex justify-center">
      <div className="">
        <h1 className="text-xl font-semibold mb-4">{title}</h1>
        <div>{children}</div>
      </div>
    </div>
  );
}
