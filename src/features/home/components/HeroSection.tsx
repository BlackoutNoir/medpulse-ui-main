import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[500px]">
      <div className="absolute inset-0">
        <Image
          src="/images/pharmaceutical-production.jpeg"
          referrerPolicy="no-referrer"
          alt="Pharmaceutical production"
          layout="fill"
          objectFit="cover"
          priority
          className="z-[-1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-80"></div>
      </div>
      <div className="absolute bottom-0 text-white mx-6 my-5">
        <h1 className="text-[45px] font-medium leading-[3.5rem]">Transforming your care</h1>
        <p className="mt-3">Learn how we drive innovation</p>
        <div className="relative w-auto">
          <button className="mt-2 py-2 w-full border-2 rounded-3xl text-white">
            Request Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
