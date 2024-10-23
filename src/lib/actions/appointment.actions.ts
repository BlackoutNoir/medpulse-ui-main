'use server';

/* 
//not using appwrite
import { ID, Query } from "node-appwrite"; 
import {
  APPOINTMENT_COLLECTION_ID,
  DATABASE_ID,
  databases,
  messaging,
} from "../appwrite.config";
*/

import { revalidatePath } from 'next/cache';
import { Patient, Appointment, Status } from '@/types/appwrite.types';
import { formatDateTime, parseStringify } from '../utils';

// Dummy data
// Dummy data for patients
const dummyPatients: Patient[] = [
  {
    id: 'patient1',
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
  },
  {
    id: 'patient2',
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    phone: '+1987654321',
  },
  // Add more dummy patients as needed
];

//Dummy Data for Appointments
const dummyAppointments: Appointment[] = [
  {
    id: '1',
    patient: dummyPatients[0],
    primaryPhysician: 'Dr. Smith',
    schedule: new Date().toISOString(),
    status: Status.Pending,
    //$createdAt: new Date().toISOString(),
    //$updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    patient: dummyPatients[0],
    primaryPhysician: 'Dr. Johnson',
    schedule: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
    status: Status.Pending,
    //$createdAt: new Date().toISOString(),
    //$updatedAt: new Date().toISOString(),
  },
  // Add more dummy appointments as needed
];

//  CREATE APPOINTMENT
export const createAppointment = async (appointment: CreateAppointmentParams) => {
  try {
    const newAppointment: Appointment = {
      $id: (dummyAppointments.length + 1).toString(),
      ...appointment,
      //$createdAt: new Date().toISOString(),
      //$updatedAt: new Date().toISOString(),
    };
    dummyAppointments.push(newAppointment);

    revalidatePath('/admin');
    return parseStringify(newAppointment);
  } catch (error) {
    console.error('An error occurred while creating a new appointment:', error);
  }
};

//  GET RECENT APPOINTMENTS
export const getRecentAppointmentList = async () => {
  try {
    const appointments = dummyAppointments;

    // const scheduledAppointments = (
    //   appointments.documents as Appointment[]
    // ).filter((appointment) => appointment.status === "scheduled");

    // const pendingAppointments = (
    //   appointments.documents as Appointment[]
    // ).filter((appointment) => appointment.status === "pending");

    // const cancelledAppointments = (
    //   appointments.documents as Appointment[]
    // ).filter((appointment) => appointment.status === "cancelled");

    // const data = {
    //   totalCount: appointments.total,
    //   scheduledCount: scheduledAppointments.length,
    //   pendingCount: pendingAppointments.length,
    //   cancelledCount: cancelledAppointments.length,
    //   documents: appointments.documents,
    // };

    const initialCounts = {
      scheduledCount: 0,
      pendingCount: 0,
      cancelledCount: 0,
    };

    const counts = appointments.reduce((acc, appointment) => {
      switch (appointment.status) {
        case Status.Cancelled:
          acc.scheduledCount++;
          break;
        case Status.Pending:
          acc.pendingCount++;
          break;
        case Status.Cancelled:
          acc.cancelledCount++;
          break;
      }
      return acc;
    }, initialCounts);

    const data = {
      totalCount: appointments.length,
      ...counts,
      documents: appointments,
    };

    return parseStringify(data);
  } catch (error) {
    console.error('An error occurred while retrieving the recent appointments:', error);
  }
};

//  SEND SMS NOTIFICATION
// export const sendSMSNotification = async (userId: string, content: string) => {
//   try {
//     // https://appwrite.io/docs/references/1.5.x/server-nodejs/messaging#createSms
//     const message = await messaging.createSms(ID.unique(), content, [], [userId]);
//     return parseStringify(message);
//   } catch (error) {
//     console.error('An error occurred while sending sms:', error);
//   }
// };

//  UPDATE APPOINTMENT
export const updateAppointment = async ({
  appointmentId,
  userId,
  timeZone,
  appointment,
  type,
}: UpdateAppointmentParams) => {
  try {
    // Update appointment to scheduled -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#updateDocument
    const index = dummyAppointments.findIndex(a => a.id === appointmentId);
    if (index === -1) {
      throw new Error(`Appointment with ID ${appointmentId} not found`);
    }

    // Update the appointment with the new data
    const updatedAppointment = {
      ...dummyAppointments[index],
      ...appointment,
      $updatedAt: new Date().toISOString(),
    };

    // Update the in-memory dummyAppointments array
    dummyAppointments[index] = updatedAppointment;
    //if (!updatedAppointment) throw Error;

    //const smsMessage = `Greetings from CarePulse. ${type === 'schedule' ? `Your appointment is confirmed for ${formatDateTime(appointment.schedule!, timeZone).dateTime} with Dr. ${appointment.primaryPhysician}` : `We regret to inform that your appointment for ${formatDateTime(appointment.schedule!, timeZone).dateTime} is cancelled. Reason:  ${appointment.cancellationReason}`}.`;
    //await sendSMSNotification(userId, smsMessage);

    revalidatePath('/admin');
    return parseStringify(updatedAppointment);
  } catch (error) {
    console.error('An error occurred while scheduling an appointment:', error);
  }
};

// GET APPOINTMENT
export const getAppointment = async (appointmentId: string) => {
  try {
    // Find the appointment in dummyAppointments array by its ID
    const appointment = dummyAppointments.find(a => a.id === appointmentId);
    
    if (!appointment) {
      throw new Error(`Appointment with ID ${appointmentId} not found`);
    }

    return parseStringify(appointment);
  } catch (error) {
    console.error('An error occurred while retrieving the existing patient:', error);
  }
};
