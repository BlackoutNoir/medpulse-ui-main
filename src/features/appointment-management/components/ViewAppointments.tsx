'use client';

import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

interface Appointment {
  id: number;
  date: Date;
  time: string;
  description: string;
  doctor: string;
}

const ViewAppointments: React.FC = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  const appointments: Appointment[] = [
    {
      id: 1,
      date: new Date(2024, 9, 20),
      time: '10:00 AM',
      description: 'Routine check-up',
      doctor: 'Dr. Smith',
    },
    {
      id: 2,
      date: new Date(2024, 9, 22),
      time: '02:00 PM',
      description: 'Dental Cleaning',
      doctor: 'Dr. Jones',
    },
    {
      id: 3,
      date: new Date(2024, 9, 25),
      time: '11:30 AM',
      description: 'Follow-up appointment',
      doctor: 'Dr. Brown',
    },
  ];

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

  return (
    <section className="p-5">
      <div>
        <h2 className="text-3xl font-semibold mb-2 text-center text-black">View Appointments</h2>
        <p className="text-gray-600 mb-2 text-center">
          Select a date to view your scheduled appointments.
        </p>
      </div>
      <div className="flex justify-center mb-4">
        <div className="p-4">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleDateChange}
            className="shadow transition-shadow border p-8 text-black"
            modifiers={{ booked: bookedDates }}
            modifiersStyles={{
              booked: { color: 'red' },
            }}
            onDayClick={date => handleDateChange(date)}
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
                <strong>{appointment.time}</strong>: {appointment.description} <br />
                <span className="text-sm text-gray-300">With: {appointment.doctor}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center">No appointments booked for this date.</p>
        )}
      </div>

      {selectedAppointment && (
        <div className="mt-4 p-4 border bg-white text-black rounded shadow">
          <h3 className="text-lg font-semibold text-center mb-2">Appointment Details</h3>
          <p>
            <strong>Date:</strong> {selectedAppointment.date.toDateString()}
          </p>
          <p>
            <strong>Time:</strong> {selectedAppointment.time}
          </p>
          <p>
            <strong>Description:</strong> {selectedAppointment.description}
          </p>
          <p>
            <strong>Doctor:</strong> {selectedAppointment.doctor}
          </p>
        </div>
      )}
    </section>
  );
};

export default ViewAppointments;
