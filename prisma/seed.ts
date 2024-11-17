const path = require('path');
const fs = require('fs-extra');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Define paths for JSON files
const workingDaysPath = path.join(process.cwd(), 'src/utils/json/working_days.json');
const userPath = path.join(process.cwd(), 'src/utils/json/user.json');
const departmentPath = path.join(process.cwd(), 'src/utils/json/department.json');
const staffPath = path.join(process.cwd(), 'src/utils/json/staff.json');
const departmentStaffPath = path.join(process.cwd(), 'src/utils/json/department_staff.json');
const staffWorkingDaysPath = path.join(process.cwd(), 'src/utils/json/staff_working_days.json');
const doctorPath = path.join(process.cwd(), 'src/utils/json/doctor.json');
const treatmentServicePath = path.join(process.cwd(), 'src/utils/json/treatment_service.json');
const doctorTreatmentServicePath = path.join(
  process.cwd(),
  'src/utils/json/doctor_treatment_service.json',
);
const patientPath = path.join(process.cwd(), 'src/utils/json/patient.json');
const medicalHistoryPath = path.join(process.cwd(), 'src/utils/json/medical_history.json');
const insurancePath = path.join(process.cwd(), 'src/utils/json/insurance.json');
const appointmentPath = path.join(process.cwd(), 'src/utils/json/appointment.json');
const labTestPath = path.join(process.cwd(), 'src/utils/json/lab_test.json');
const prescriptionPath = path.join(process.cwd(), 'src/utils/json/prescription.json');
const chatPath = path.join(process.cwd(), 'src/utils/json/chat.json');
const messagePath = path.join(process.cwd(), 'src/utils/json/message.json');

async function seed() {
  try {
    const workingDays = await fs.readJSON(workingDaysPath);

    for (const day of workingDays) {
      try {
        await prisma.workingDays.upsert({
          where: { day: day.day },
          update: { ...day },
          create: { ...day },
        });
      } catch (error) {
        console.error(`Error upserting working day with key ${day.day}:`, error);
      }
    }

    const users = await fs.readJSON(userPath);
    for (const user of users) {
      try {
        await prisma.user.upsert({
          where: { email: user.email },
          update: { ...user },
          create: { ...user },
        });
      } catch (error) {
        console.error(`Error upserting user with email ${user.email}:`, error);
      }
    }

    const departments = await fs.readJSON(departmentPath);
    for (const department of departments) {
      try {
        await prisma.department.upsert({
          where: { dept_id: department.dept_id },
          update: { ...department },
          create: { ...department },
        });
      } catch (error) {
        console.error(`Error upserting department with id ${department.dept_id}:`, error);
      }
    }

    const staff = await fs.readJSON(staffPath);
    for (const member of staff) {
      try {
        await prisma.staff.upsert({
          where: { staff_id: member.staff_id },
          update: { ...member },
          create: { ...member },
        });
      } catch (error) {
        console.error(`Error upserting staff with id ${member.staff_id}:`, error);
      }
    }

    const departmentStaff = await fs.readJSON(departmentStaffPath);
    for (const link of departmentStaff) {
      try {
        await prisma.departmentStaff.upsert({
          where: { id: link.id },
          update: { ...link },
          create: { ...link },
        });
      } catch (error) {
        console.error(`Error upserting departmentStaff with id ${link.id}:`, error);
      }
    }

    const staffWorkingDays = await fs.readJSON(staffWorkingDaysPath);
    for (const link of staffWorkingDays) {
      try {
        await prisma.staffWorkingDays.upsert({
          where: { id: link.id },
          update: { ...link },
          create: { ...link },
        });
      } catch (error) {
        console.error(`Error upserting staffWorkingDays with id ${link.id}:`, error);
      }
    }

    const doctors = await fs.readJSON(doctorPath);
    for (const doctor of doctors) {
      try {
        await prisma.doctor.upsert({
          where: { doctor_id: doctor.doctor_id },
          update: { ...doctor },
          create: { ...doctor },
        });
      } catch (error) {
        console.error(`Error upserting doctor with id ${doctor.doctor_id}:`, error);
      }
    }

    const treatmentServices = await fs.readJSON(treatmentServicePath);
    for (const service of treatmentServices) {
      try {
        await prisma.treatment_service.upsert({
          where: { treatment_service_id: service.treatment_service_id },
          update: { ...service },
          create: { ...service },
        });
      } catch (error) {
        console.error(
          `Error upserting treatment service with id ${service.treatment_service_id}:`,
          error,
        );
      }
    }

    const doctorTreatmentServices = await fs.readJSON(doctorTreatmentServicePath);
    for (const link of doctorTreatmentServices) {
      try {
        await prisma.doctorTreatmentService.upsert({
          where: { id: link.id },
          update: { ...link },
          create: { ...link },
        });
      } catch (error) {
        console.error(`Error upserting doctorTreatmentService with id ${link.id}:`, error);
      }
    }

    const patients = await fs.readJSON(patientPath);
    for (const patient of patients) {
      try {
        await prisma.patient.upsert({
          where: { patient_id: patient.patient_id },
          update: { ...patient },
          create: { ...patient },
        });
      } catch (error) {
        console.error(`Error upserting patient with id ${patient.patient_id}:`, error);
      }
    }

    const medicalHistories = await fs.readJSON(medicalHistoryPath);
    for (const history of medicalHistories) {
      try {
        await prisma.medicalHistory.upsert({
          where: { history_id: history.history_id },
          update: { ...history },
          create: { ...history },
        });
      } catch (error) {
        console.error(`Error upserting medical history with id ${history.history_id}:`, error);
      }
    }

    const insurances = await fs.readJSON(insurancePath);
    for (const policy of insurances) {
      try {
        await prisma.insurance.upsert({
          where: { insurance_id: policy.insurance_id },
          update: { ...policy },
          create: { ...policy },
        });
      } catch (error) {
        console.error(`Error upserting insurance with id ${policy.insurance_id}:`, error);
      }
    }

    const appointments = await fs.readJSON(appointmentPath);
    for (const appointment of appointments) {
      try {
        await prisma.appointment.upsert({
          where: { appointment_id: appointment.appointment_id },
          update: { ...appointment },
          create: { ...appointment },
        });
      } catch (error) {
        console.error(`Error upserting appointment with id ${appointment.appointment_id}:`, error);
      }
    }

    const labTests = await fs.readJSON(labTestPath);
    for (const test of labTests) {
      try {
        await prisma.labTest.upsert({
          where: { lab_test_id: test.lab_test_id },
          update: { ...test },
          create: { ...test },
        });
      } catch (error) {
        console.error(`Error upserting lab test with id ${test.lab_test_id}:`, error);
      }
    }

    const prescriptions = await fs.readJSON(prescriptionPath);
    for (const prescription of prescriptions) {
      try {
        await prisma.prescription.upsert({
          where: { prescription_id: prescription.prescription_id },
          update: { ...prescription },
          create: { ...prescription },
        });
      } catch (error) {
        console.error(
          `Error upserting prescription with id ${prescription.prescription_id}:`,
          error,
        );
      }
    }

    const chats = await fs.readJSON(chatPath);
    for (const chat of chats) {
      try {
        await prisma.chat.upsert({
          where: { chat_id: chat.chat_id },
          update: { ...chat },
          create: { ...chat },
        });
      } catch (error) {
        console.error(`Error upserting chat with id ${chat.chat_id}:`, error);
      }
    }

    const messages = await fs.readJSON(messagePath);
    for (const message of messages) {
      try {
        await prisma.message.upsert({
          where: { message_id: message.message_id },
          update: { ...message },
          create: { ...message },
        });
      } catch (error) {
        console.error(`Error upserting message with id ${message.message_id}:`, error);
      }
    }

    console.log('Seeding complete!');
  } finally {
    await prisma.$disconnect();
  }
}

seed();
