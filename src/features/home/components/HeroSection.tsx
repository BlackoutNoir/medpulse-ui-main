import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[500px]"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 1)), url('/features/home/images/pharmaceutical-production.jpeg'}",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute bottom-0 text-white mx-6 my-5">
        <h1 className="text-[45px] font-medium leading-[3.5rem]">Transforming your care</h1>
        <p className="mt-3">Learn how we drive innovation </p>
        <div className="relative w-auto">
          <button className=" mt-2 py-2 w-full border-2 rounded-3xl text-white">
            Request Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
