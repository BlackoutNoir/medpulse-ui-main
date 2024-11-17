import React from 'react';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const ManageAppointments: React.FC = () => {
  const handleViewAppointments = () => {
    //
    console.log('Viewing appointments');
  };

  const handleRequestAppointment = () => {
    //
    console.log('Requesting a new appointment');
  };

  const handleVirtualConsultation = () => {
    //
    console.log('Book Virtual Consultation');
  };

  return (
    <MaxWidthWrapper>
      <section className="p-4">
        <div className="text-center mb-7">
          <h1 className="text-3xl font-bold text-black">Manage Appointments</h1>
          <p className="mt-2 text-lg text-gray-600">
            Your one-stop solution for managing your appointments effectively.
          </p>
        </div>
        <div className="grid grid-cols-1">
          {/* View Appointments Section */}
          <div className="p-8 bg-blue-800 text-white flex flex-col justify-between h-60 rounded-md shadow mb-2">
            <h2 className="text-[22px] font-semibold">View Your Appointments</h2>
            <p>Check your upcoming and past appointments.</p>
            <button
              onClick={handleViewAppointments}
              className="mt-4 bg-white text-black py-2 px-4 rounded transition hover:bg-gray-200 shadow-lg"
            >
              View Appointments
            </button>
          </div>
          {/* Request Appointment Section */}
          <div className="p-8 bg-white text-black flex flex-col justify-between h-60 rounded-md mb-2">
            <h2 className="text-[22px] font-semibold">Request a New Appointment</h2>
            <p>Fill out the form to request a new appointment.</p>
            <button
              onClick={handleRequestAppointment}
              className="mt-4 bg-blue-800 text-white py-2 px-4 rounded transition hover:bg-blue-900 shadow-lg"
            >
              Request an Appointment
            </button>
          </div>
          {/* Book Virtual Consultation Section */}
          <div className="p-8 bg-blue-800 text-white flex flex-col justify-between h-60 rounded-md shadow">
            <h2 className="text-[22px] font-semibold">Book a Virtual Consultation</h2>
            <p>
              Connect with our healthcare professionals from the comfort of your home and discuss
              your health concerns
            </p>
            <button
              onClick={handleVirtualConsultation}
              className="mt-4 bg-white text-black hover:bg-gray-200 py-2 px-4 rounded transition shadow-lg"
            >
              Book a Virtual Consultation
            </button>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default ManageAppointments;
