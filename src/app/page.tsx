'use client';
import React from 'react';
import Home from '@/features/home/components/Home';
import HomeNav from '@/features/home/components/HomeNav';
import HomeFooter from '@/features/home/components/HomeFooter';

const Page = () => {
  return (
    <>
      <header>
        <HomeNav />
        <title>Home - MedPulse</title>
        <meta name="description" content="Medpulse Home Page" />
      </header>
      <Home />
      <footer>
        <HomeFooter />
      </footer>
    </>
  );
};

export default Page;
