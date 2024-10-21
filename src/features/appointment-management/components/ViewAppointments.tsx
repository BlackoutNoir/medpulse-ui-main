'use client';

import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

interface Appointment {
  id: number;
  date: Date;
  time: string;
  title: string;
  description: string;
  doctor: string; 
}

const ViewAppointments: React.FC = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  const [isModalOpen, setModalOpen] = useState(false);
  const [cancelId, setCancelId] = useState<number | null>(null);
  const [reason, setReason] = useState('');

  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      date: new Date(2024, 9, 20),
      time: '10:00 AM',
      title: 'Routine Check-up',
      description: 'A routine health check to ensure everything is fine.',
      doctor: 'Dr. Ahmed',
    },
    {
      id: 2,
      date: new Date(2024, 9, 22),
      time: '02:00 PM',
      title: 'Dental Cleaning',
      description: 'Professional cleaning to maintain dental hygiene.',
      doctor: 'Dr. Khalid',
    },
    {
      id: 3,
      date: new Date(2024, 9, 25),
      time: '11:30 AM',
      title: 'Follow-up Appointment',
      description: 'Follow-up consultation after previous treatment.',
      doctor: 'Dr. Smith',
    },
  ]);

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      setSelectedAppointment(null);
    }
  };

  const handleAppointmentClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
  };

  const filteredAppointments = appointments.filter(
    appointment => appointment.date.toDateString() === selectedDate.toDateString(),
  );

  const bookedDates = appointments.map(appointment => appointment.date);

  const handleCancelAppointment = (id: number) => {
    setCancelId(id);
    setModalOpen(true);
  };

  const confirmCancelAppointment = () => {
    if (reason.trim() === '') {
      alert('Please provide a reason for cancellation.');
      return;
    }

    // Remove the appointment from the appointments state
    setAppointments(prevAppointments => {
      const updatedAppointments = prevAppointments.filter(
        appointment => appointment.id !== cancelId,
      );

      // Reset selectedAppointment if it matches the canceled appointment
      if (selectedAppointment?.id === cancelId) {
        setSelectedAppointment(null); // Hide appointment details
      }

      return updatedAppointments;
    });

    // Reset state
    setModalOpen(false);
    setCancelId(null);
    setReason('');
  };

  return (
    <MaxWidthWrapper>
      <section className="p-5 border-b-2">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-2 text-black">View Appointments</h2>
          <p className="text-gray-600 mb-2">
            Select a date to view your upcoming and past appointments.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="p-4">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={handleDateChange}
              className="shadow transition-shadow border p-8 text-black rounded"
              modifiers={{ booked: bookedDates }}
              modifiersStyles={{
                booked: { color: 'red' },
              }}
            />
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold text-center">
            Appointments on {selectedDate.toDateString()}
          </h3>
          {filteredAppointments.length > 0 ? (
            <ul className="mt-2">
              {filteredAppointments.map(appointment => (
                <li
                  key={appointment.id}
                  className="border p-3 rounded mb-2 bg-blue-800 text-white cursor-pointer shadow hover:shadow-md transition-shadow"
                  onClick={() => handleAppointmentClick(appointment)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <strong>{appointment.title}</strong> <br />
                      <span className="text-sm">With: {appointment.doctor}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center">
              <p className="mt-3">Looking to book a new appointment?</p>
              <button
                className="mt-2 bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition"
                onClick={() => console.log('Requesting a new appointment...')}
              >
                Request an Appointment
              </button>
            </div>
          )}
        </div>

        {selectedAppointment && (
          <div className="mt-4 p-4 border text-md bg-white text-black rounded shadow">
            <h3 className="text-lg font-semibold text-center mb-2">Appointment Details</h3>
            <p>
              <strong>ID:</strong> {selectedAppointment.id}
            </p>
            <p>
              <strong>Title:</strong> {selectedAppointment.title}
            </p>
            <p>
              <strong>With:</strong> {selectedAppointment.doctor}
            </p>
            <p>
              <strong>Date:</strong> {selectedAppointment.date.toDateString()}
            </p>
            <p>
              <strong>Time:</strong> {selectedAppointment.time}
            </p>
            <p>
              <strong>Description:</strong> {selectedAppointment.description}
            </p>
            <div className="flex justify-end">
              <button
                className="underline text-black px-4 py-2 rounded hover:text-red-600 transition"
                onClick={() => handleCancelAppointment(selectedAppointment.id)}
              >
                Cancel Appointment
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Modal for Cancelling Appointment */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h3 className="text-lg font-semibold mb-2">Cancel Appointment</h3>
            <p className="mb-4">Please fill in the following details to cancel the appointment.</p>
            <textarea
              className="border p-2 w-full mb-4"
              placeholder="Reason for cancellation"
              value={reason}
              onChange={e => setReason(e.target.value)}
              rows={3}
            />
            <div className="flex justify-between">
              <button
                className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                onClick={confirmCancelAppointment}
              >
                Cancel Appointment
              </button>
              <button
                className="border px-4 py-2 rounded hover:bg-gray-100 transition"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </MaxWidthWrapper>
  );
};

export default ViewAppointments;
