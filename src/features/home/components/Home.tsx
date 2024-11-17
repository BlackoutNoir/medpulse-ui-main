import React from 'react';
import HeroSection from './HeroSection';
import SearchSection from './SearchSection';
import MainSection from './MainSection';

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <MainSection />
      </div>
    </>
  );
}
