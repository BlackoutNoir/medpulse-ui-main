'use client';
import React from 'react';
import Home from '@/features/home/components/Home';
import HomeNav from '@/features/home/components/MainNav';
import HomeFooter from '@/features/home/components/MainFooter';

const Page = () => {
  return (
    <>
      <header>
        <title>Home - MedPulse</title>
        <meta name="description" content="Medpulse Home Page" />
      </header>
      <Home />
    </>
  );
};

export default Page;
