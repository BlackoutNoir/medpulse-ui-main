'use client';
import React from 'react';
// import MainSection from '@/components/home/MainSection';
import ManageAppointments from '@/features/appointment-management/components/ManageAppointments';
import ViewAppointments from '@/features/appointment-management/components/ViewAppointments';

const Page = () => {
  return (
    <>
      <header>
        <title>Home - MedPulse</title>
        <meta name="description" content="Medpulse Home Page" />
      </header>
      {/* <MainSection /> */}
      <ManageAppointments />
      <ViewAppointments />
    </>
  );
};

export default Page;
