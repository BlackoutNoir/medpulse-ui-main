import React from 'react';
import { Button } from '@/components/ui/button';

const ManageAppointments: React.FC = () => {
  const handleViewAppointments = () => {
    //
    console.log('Viewing existing appointments');
  };

  const handleRequestAppointment = () => {
    //
    console.log('Requesting a new appointment');
  };

  const handleCancelAppointment = () => {
    //
    console.log('Canceling an appointment');
  };

  return (
    <section className="p-4">
      <div className="text-center mb-7">
        <h1 className="text-3xl font-bold text-black">Manage Appointments</h1>
        <p className="mt-2 text-lg text-gray-600">
          Your one-stop solution for managing your appointments effectively.
        </p>
      </div>
      <div className="grid grid-cols-1 shadow-xl">
        {/* View Appointments Section */}
        <div className="p-8 bg-blue-800 text-white flex flex-col justify-between h-52 rounded-t-lg shadow-lg">
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
        <div className="p-8 bg-white text-black flex flex-col justify-between border border-transparent h-52 shadow-lg">
          <h2 className="text-[22px] font-semibold">Request a New Appointment</h2>
          <p>Fill out the form to request a new appointment.</p>
          <button
            onClick={handleRequestAppointment}
            className="mt-4 bg-blue-800 text-white py-2 px-4 rounded transition hover:bg-blue-950 shadow-lg"
          >
            Request an Appointment
          </button>
        </div>
        {/* Cancel Appointment Section */}
        <div className="p-8 bg-blue-800 text-white flex flex-col justify-between h-52 rounded-b-lg shadow-lg">
          <h2 className="text-[22px] font-semibold">Cancel an Existing Appointment</h2>
          <p>Select an appointment to cancel it.</p>
          <button
            onClick={handleCancelAppointment}
            className="mt-4 bg-white text-black hover:bg-gray-200 py-2 px-4 rounded transition shadow-lg"
          >
            Cancel an Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default ManageAppointments;