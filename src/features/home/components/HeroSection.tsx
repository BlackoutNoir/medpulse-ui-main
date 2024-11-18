import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[500px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
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
      <div className="absolute bottom-0 text-white mx-6 my-5 sm:mx-12 sm:my-10 lg:mx-16 lg:my-12">
        <h1 className="text-[45px] font-medium leading-[3.5rem] sm:text-[50px] sm:leading-[4rem] lg:text-[60px] lg:leading-[5rem]">
          Transforming your care
        </h1>
        <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <p className="flex items-center text-base sm:text-lg lg:text-xl">
            Learn how we drive innovation <ChevronRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
          </p>
          <Link href="/request-appointment" passHref>
            <button className="mt-2 sm:mt-0 py-2 px-6 border-2 rounded-3xl text-white sm:px-8 sm:py-2 sm:text-lg lg:px-10 lg:py-3 lg:text-xl lg:ml-2">
              Request Appointment
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
