import React from 'react';
import HeroSection from './HeroSection';
import SearchSection from './SearchSection';
import MainSection from './MainSection';
import MainNav from './MainNav';
import MainFooter from './MainFooter';

export default function Home() {
  return (
    <>
      <div>
        <MainNav />
        <MainSection />
        <MainFooter />
      </div>
    </>
  );
}
