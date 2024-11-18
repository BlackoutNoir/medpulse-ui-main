'use client';

import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { format, addDays } from 'date-fns';
import Link from 'next/link';
import DataFetcher from '@/utils/DataFetcher';
import { useRouter } from 'next/navigation'; // Correct import

const AppointmentForm: React.FC = () => {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [reason, setReason] = useState<string>('');
  const router = useRouter(); // Initialize router
  const patientId = 'user-2';

  const times = Array.from({ length: 13 }, (_, i) => `${8 + i}:30`);

  // Generate a list of dates from today to one month later
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i <= 60; i++) {
      const date = addDays(today, i);
      dates.push(format(date, 'dd-MM-yyyy'));
    }
    return dates;
  };

  const availableDates = generateDates();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const fetchedDoctors = await DataFetcher.fetchDoctors();
        setDoctors(fetchedDoctors);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const handleSubmit = async () => {
    if (!selectedDoctor || !selectedDate || !selectedTime || !reason.trim()) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    try {
      const [day, month, year] = selectedDate.split('-').map(Number);
      const [hours, minutes] = selectedTime.split(':').map(Number);

      const dateTime = new Date(year, month - 1, day, hours, minutes);

      if (isNaN(dateTime.getTime())) {
        alert('Invalid date or time format. Please try again.');
        return;
      }

      const formattedDateTime = `${format(dateTime, 'dd/MM/yyyy')} at ${format(dateTime, 'HH:mm')}`;
      console.log('Formatted DateTime:', formattedDateTime);

      const appointmentDetails = {
        doctorId: selectedDoctor,
        patientId: patientId,
        date: dateTime.toISOString(),
        notes: reason,
      };

      console.log('Appointment Details:', appointmentDetails);

      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentDetails),
      });

      if (response.ok) {
        alert('Appointment requested successfully!');
        router.push('/profile'); // Redirect after success
      } else {
        const errorData = await response.json();
        console.error('Error creating appointment:', errorData);
        alert('Failed to request appointment. Please try again.');
      }
    } catch (error) {
      console.error('Error formatting date or time:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Logo and Header */}
        <div className="mb-8 flex items-center gap-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src={'https://github.com/shadcn.png'} alt="CarePulse" />
            <AvatarFallback>CP</AvatarFallback>
          </Avatar>
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold whitespace-nowrap">MedPulse Clinic</span>
          </Link>
        </div>

        <form>
          <Card className="border shadow">
            <CardHeader>
              <h1 className="text-4xl font-bold mb-2">Request Appointment</h1>
              <p className="text-zinc-400">
                Fill out this quick form to request an appointment with our doctors.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Doctor Selection */}
              <div className="space-y-2 ">
                <label className="text-sm text-zinc-400">Doctor</label>
                <Select onValueChange={(value) => setSelectedDoctor(value)}>
                  <SelectTrigger className="w-full hover:bg-gray-100 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <SelectValue placeholder="Select a doctor" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {doctors.length > 0 ? (
                      doctors.map((doctor) => (
                        <SelectItem key={doctor.doctor_id} value={doctor.doctor_id}>
                          {`${doctor.staff.user.first_name} ${doctor.staff.user.last_name}`}
                        </SelectItem>
                      ))
                    ) : (
                      <div className="p-2 text-sm text-gray-500">No doctors available</div>
                    )}
                  </SelectContent>
                </Select>
              </div>

              {/* Date Selection */}
              <div className="space-y-2">
                <label className="text-sm text-zinc-400">Appointment Date</label>
                <Select onValueChange={(value) => setSelectedDate(value)}>
                  <SelectTrigger className="w-full hover:bg-gray-100 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <SelectValue placeholder="Select a date" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="absolute w-full mt-1 z-10 bg-white border border-gray-200 rounded-md shadow-lg max-h-40 overflow-y-scroll">
                    {availableDates.map((date) => (
                      <SelectItem
                        key={date}
                        value={date}
                        className="hover:bg-gray-100 px-2 py-1 transition-all duration-200"
                      >
                        {date}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Time Selection */}
              <div className="space-y-2">
                <label className="text-sm text-zinc-400">Time</label>
                <Select onValueChange={(value) => setSelectedTime(value)}>
                  <SelectTrigger className="w-full hover:bg-gray-100 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <SelectValue placeholder="Select a time" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="absolute w-full mt-1 z-10 bg-white border border-gray-200 rounded-md shadow-lg max-h-40 overflow-y-scroll">
                    {times.map((time) => (
                      <SelectItem
                        key={time}
                        value={time}
                        className="hover:bg-gray-100 px-2 py-1 transition-all duration-200"
                      >
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Reason for Appointment */}
              <div className="space-y-2">
                <label className="text-sm text-zinc-400">Reason for appointment</label>
                <Textarea
                  placeholder="Enter the reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="min-h-[120px] resize-none focus:border-blue-700 hover:bg-gray-100 transition-all duration-300"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="button"
                className="w-full bg-blue-800 hover:bg-blue-900 text-white"
                onClick={handleSubmit}
              >
                Request Appointment
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
