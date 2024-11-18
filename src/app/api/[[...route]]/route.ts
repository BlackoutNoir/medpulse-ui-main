import { Hono } from 'hono';
import { handle } from 'hono/vercel';

import MedpulseRepo from '@/utils/repo/medpulse-repo';

const app = new Hono().basePath('/api');

// User Routes
app.get('/users', async c => {
  const users = await MedpulseRepo.getAllUsers();
  return c.json(users);
});

app.get('/users/:userId', async c => {
  const { userId } = c.req.param();
  const user = await MedpulseRepo.getUserById(userId);
  if (user) {
    return c.json(user);
  }
  return c.notFound();
});

app.post('/users', async c => {
  const userData = await c.req.json();
  const user = await MedpulseRepo.createUser(userData);
  return c.json(user, 201);
});

app.put('/users/:userId', async c => {
  const { userId } = c.req.param();
  const updateData = await c.req.json();
  const updatedUser = await MedpulseRepo.updateUser(userId, updateData);
  return c.json(updatedUser);
});

app.delete('/users/:userId', async c => {
  const { userId } = c.req.param();
  await MedpulseRepo.deleteUser(userId);
  return c.status(204);
});

// Staff Routes
app.get('/staff', async c => {
  const staff = await MedpulseRepo.getAllStaff();
  return c.json(staff);
});

app.get('/staff/:staffId', async c => {
  const { staffId } = c.req.param();
  const staff = await MedpulseRepo.getStaffById(staffId);
  if (staff) {
    return c.json(staff);
  }
  return c.notFound();
});

app.post('/staff', async c => {
  const staffData = await c.req.json();
  const staff = await MedpulseRepo.createStaff(staffData);
  return c.json(staff, 201);
});

app.put('/staff/:staffId', async c => {
  const { staffId } = c.req.param();
  const updateData = await c.req.json();
  const updatedStaff = await MedpulseRepo.updateStaff(staffId, updateData);
  return c.json(updatedStaff);
});

app.delete('/staff/:staffId', async c => {
  const { staffId } = c.req.param();
  await MedpulseRepo.deleteStaff(staffId);
  return c.status(204); // No Content
});

// Patient Routes
app.get('/patients', async c => {
  const patients = await MedpulseRepo.getAllPatients();
  return c.json(patients);
});

app.get('/patients/:patientId', async c => {
  const { patientId } = c.req.param();
  const patient = await MedpulseRepo.getPatientById(patientId);
  if (patient) {
    return c.json(patient);
  }
  return c.notFound();
});

app.post('/patients', async c => {
  const patientData = await c.req.json();
  const patient = await MedpulseRepo.createPatient(patientData);
  return c.json(patient, 201);
});

app.put('/patients/:patientId', async c => {
  const { patientId } = c.req.param();
  const updateData = await c.req.json();
  const updatedPatient = await MedpulseRepo.updatePatient(patientId, updateData);
  return c.json(updatedPatient);
});

app.delete('/patients/:patientId', async c => {
  const { patientId } = c.req.param();

  // Try to delete the patient by ID
  try {
    const patient = await MedpulseRepo.deletePatient(patientId);

    if (!patient) {
      // If patient doesn't exist, return 404
      return c.json({ message: 'Patient not found' }, 404);
    }

    // If successful, return 204 No Content or 200 OK
    console.log('Patient deleted successfully');
    return c.status(201); // No Content
  } catch (error) {
    console.error('Error deleting patient:', error);
    return c.json({ message: 'Failed to delete patient', error: error }, 500); // Internal Server Error
  }
});

app.get('/doctors/:doctorId', async c => {
  const { doctorId } = c.req.param();
  const doctor = await MedpulseRepo.getDoctorById(doctorId);
  if (doctor) {
    return c.json(doctor);
  }
  return c.notFound();
});

app.post('/doctors', async c => {
  const doctorData = await c.req.json();
  const doctor = await MedpulseRepo.createDoctor(doctorData);
  return c.json(doctor, 201);
});

app.put('/doctors/:doctorId', async c => {
  const { doctorId } = c.req.param();
  const updateData = await c.req.json();
  const updatedDoctor = await MedpulseRepo.updateDoctor(doctorId, updateData);
  return c.json(updatedDoctor);
});

app.delete('/doctors/:doctorId', async c => {
  const { doctorId } = c.req.param();
  await MedpulseRepo.deleteDoctor(doctorId);
  return c.status(204); // No Content
});

// Treatment Service Routes
app.get('/treatment-services', async c => {
  const treatmentServices = await MedpulseRepo.getAllTreatmentServices();
  return c.json(treatmentServices);
});

app.get('/treatment-services/:treatmentServiceId', async c => {
  const { treatmentServiceId } = c.req.param();
  const treatmentService = await MedpulseRepo.getTreatmentServiceById(treatmentServiceId);
  if (treatmentService) {
    return c.json(treatmentService);
  }
  return c.notFound();
});

app.post('/treatment-services', async c => {
  const treatmentServiceData = await c.req.json();
  const treatmentService = await MedpulseRepo.createTreatmentService(treatmentServiceData);
  return c.json(treatmentService, 201);
});

app.put('/treatment-services/:treatmentServiceId', async c => {
  const { treatmentServiceId } = c.req.param();
  const updateData = await c.req.json();
  const updatedTreatmentService = await MedpulseRepo.updateTreatmentService(
    treatmentServiceId,
    updateData,
  );
  return c.json(updatedTreatmentService);
});

app.delete('/treatment-services/:treatmentServiceId', async c => {
  const { treatmentServiceId } = c.req.param();
  await MedpulseRepo.deleteTreatmentService(treatmentServiceId);
  return c.status(204); // No Content
});

// Chat Routes
app.get('/chats', async c => {
  const chats = await MedpulseRepo.getAllChats();
  return c.json(chats);
});

app.get('/chats/:chatId', async c => {
  const { chatId } = c.req.param();
  const chat = await MedpulseRepo.getChatById(chatId);
  if (chat) {
    return c.json(chat);
  }
  return c.notFound();
});

app.post('/chats', async c => {
  const chatData = await c.req.json();
  const chat = await MedpulseRepo.createChat(chatData);
  return c.json(chat, 201);
});

app.put('/chats/:chatId', async c => {
  const { chatId } = c.req.param();
  const updateData = await c.req.json();
  const updatedChat = await MedpulseRepo.updateChat(chatId, updateData);
  return c.json(updatedChat);
});

app.delete('/chats/:chatId', async c => {
  const { chatId } = c.req.param();
  await MedpulseRepo.deleteChat(chatId);
  return c.status(204); // No Content
});

// Message Routes
app.get('/messages', async c => {
  const messages = await MedpulseRepo.getAllMessages();
  return c.json(messages);
});

app.get('/messages/:messageId', async c => {
  const { messageId } = c.req.param();
  const message = await MedpulseRepo.getMessageById(messageId);
  if (message) {
    return c.json(message);
  }
  return c.notFound();
});

app.post('/messages', async c => {
  const messageData = await c.req.json();
  const message = await MedpulseRepo.createMessage(messageData);
  return c.json(message, 201);
});

app.put('/messages/:messageId', async c => {
  const { messageId } = c.req.param();
  const updateData = await c.req.json();
  const updatedMessage = await MedpulseRepo.updateMessage(messageId, updateData);
  return c.json(updatedMessage);
});

app.delete('/messages/:messageId', async c => {
  const { messageId } = c.req.param();
  await MedpulseRepo.deleteMessage(messageId);
  return c.status(204); // No Content
});

// Medical History Routes
app.get('/medical-history', async c => {
  const medicalHistories = await MedpulseRepo.getAllMedicalHistories();
  return c.json(medicalHistories);
});

app.get('/medical-history/:historyId', async c => {
  const { historyId } = c.req.param();
  const medicalHistory = await MedpulseRepo.getMedicalHistoryById(historyId);
  if (medicalHistory) {
    return c.json(medicalHistory);
  }
  return c.notFound();
});

app.post('/medical-history', async c => {
  const medicalHistoryData = await c.req.json();
  const medicalHistory = await MedpulseRepo.createMedicalHistory(medicalHistoryData);
  return c.json(medicalHistory, 201);
});

app.put('/medical-history/:historyId', async c => {
  const { historyId } = c.req.param();
  const updateData = await c.req.json();
  const updatedMedicalHistory = await MedpulseRepo.updateMedicalHistory(historyId, updateData);
  return c.json(updatedMedicalHistory);
});

app.delete('/medical-history/:historyId', async c => {
  const { historyId } = c.req.param();
  await MedpulseRepo.deleteMedicalHistory(historyId);
  return c.status(204); // No Content
});

// Appointment Routes
app.get('/appointments', async c => {
  const appointments = await MedpulseRepo.getAllAppointments();
  return c.json(appointments);
});

app.get('/appointments/:appointmentId', async c => {
  const { appointmentId } = c.req.param();
  const appointment = await MedpulseRepo.getAppointmentById(appointmentId);
  if (appointment) {
    return c.json(appointment);
  }
  return c.notFound();
});

app.post('/appointments', async c => {
  const appointmentData = await c.req.json();
  const appointment = await MedpulseRepo.createAppointment(appointmentData);
  return c.json(appointment, 201);
});

app.put('/appointments/:appointmentId', async c => {
  const { appointmentId } = c.req.param();
  const updateData = await c.req.json();
  const updatedAppointment = await MedpulseRepo.updateAppointment(appointmentId, updateData);
  return c.json(updatedAppointment);
});

app.delete('/appointments/:appointmentId', async c => {
  const { appointmentId } = c.req.param();
  await MedpulseRepo.deleteAppointment(appointmentId);
  return c.status(204); // No Content
});

// Lab Test Routes
app.get('/lab-tests', async c => {
  const labTests = await MedpulseRepo.getAllLabTests();
  return c.json(labTests);
});

app.get('/lab-tests/:labTestId', async c => {
  const { labTestId } = c.req.param();
  const labTest = await MedpulseRepo.getLabTestById(labTestId);
  if (labTest) {
    return c.json(labTest);
  }
  return c.notFound();
});

app.get('/lab-tests/patient/:patientId', async c => {
  const { patientId } = c.req.param();
  const labTests = await MedpulseRepo.getLabTestsByPatientId(patientId);
  if (labTests && labTests.length > 0) {
    return c.json(labTests);
  }
  return c.notFound();
});

app.post('/lab-tests', async c => {
  const labTestData = await c.req.json();
  const labTest = await MedpulseRepo.createLabTest(labTestData);
  return c.json(labTest, 201);
});

app.put('/lab-tests/:labTestId', async c => {
  const { labTestId } = c.req.param();
  const updateData = await c.req.json();
  const updatedLabTest = await MedpulseRepo.updateLabTest(labTestId, updateData);
  return c.json(updatedLabTest);
});

app.delete('/lab-tests/:labTestId', async c => {
  const { labTestId } = c.req.param();
  await MedpulseRepo.deleteLabTest(labTestId);
  return c.status(204); // No Content
});

// Prescription Routes
app.get('/prescriptions', async c => {
  const prescriptions = await MedpulseRepo.getAllPrescriptions();
  return c.json(prescriptions);
});

app.get('/prescriptions/:prescriptionId', async c => {
  const { prescriptionId } = c.req.param();
  const prescription = await MedpulseRepo.getPrescriptionById(prescriptionId);
  if (prescription) {
    return c.json(prescription);
  }
  return c.notFound();
});

app.get('/prescriptions/patient/:patientId', async c => {
  const { patientId } = c.req.param();
  const prescriptions = await MedpulseRepo.getPrescriptionsByPatientId(patientId);
  if (prescriptions && prescriptions.length > 0) {
    return c.json(prescriptions);
  }
  return c.notFound();
});

app.post('/prescriptions', async c => {
  const prescriptionData = await c.req.json();
  const prescription = await MedpulseRepo.createPrescription(prescriptionData);
  return c.json(prescription, 201);
});

app.put('/prescriptions/:prescriptionId', async c => {
  const { prescriptionId } = c.req.param();
  const updateData = await c.req.json();
  const updatedPrescription = await MedpulseRepo.updatePrescription(prescriptionId, updateData);
  return c.json(updatedPrescription);
});

app.delete('/prescriptions/:prescriptionId', async c => {
  const { prescriptionId } = c.req.param();
  await MedpulseRepo.deletePrescription(prescriptionId);
  return c.status(204); // No Content
});

// Insurance Routes
app.get('/working-days/:staffId', async c => {
  const { staffId } = c.req.param();
  try {
    // Call the repository method to get working days by staffId
    const workingDays = await MedpulseRepo.getWorkingDaysByStaffId(staffId);

    // If working days are found, return them as JSON
    if (workingDays && workingDays.length > 0) {
      return c.json(workingDays);
    } else {
      // If no working days found, return a 404 Not Found response
      return c.notFound();
    }
  } catch (error) {
    // Handle errors and return a 500 Internal Server Error response
    return c.json({ message: 'Error fetching working days', error }, 500);
  }
});

app.get('/insurances/:insuranceId', async c => {
  const { insuranceId } = c.req.param();
  const insurance = await MedpulseRepo.getInsuranceById(insuranceId);
  if (insurance) {
    return c.json(insurance);
  }
  return c.notFound();
});

app.post('/insurances', async c => {
  const insuranceData = await c.req.json();
  const insurance = await MedpulseRepo.createInsurance(insuranceData);
  return c.json(insurance, 201);
});

app.put('/insurances/:insuranceId', async c => {
  const { insuranceId } = c.req.param();
  const updateData = await c.req.json();
  const updatedInsurance = await MedpulseRepo.updateInsurance(insuranceId, updateData);
  return c.json(updatedInsurance);
});

app.delete('/insurances/:insuranceId', async c => {
  const { insuranceId } = c.req.param();
  await MedpulseRepo.deleteInsurance(insuranceId);
  return c.status(204); // No Content
});

// Department Routes
app.get('/departments', async c => {
  const departments = await MedpulseRepo.getAllDepartments();
  return c.json(departments);
});

app.get('/departments/:departmentId', async c => {
  const { departmentId } = c.req.param();
  const department = await MedpulseRepo.getDepartmentById(departmentId);
  if (department) {
    return c.json(department);
  }
  return c.notFound();
});

app.post('/departments', async c => {
  const departmentData = await c.req.json();
  const department = await MedpulseRepo.createDepartment(departmentData);
  return c.json(department, 201);
});

app.put('/departments/:departmentId', async c => {
  const { departmentId } = c.req.param();
  const updateData = await c.req.json();
  const updatedDepartment = await MedpulseRepo.updateDepartment(departmentId, updateData);
  return c.json(updatedDepartment);
});

app.delete('/departments/:departmentId', async c => {
  const { departmentId } = c.req.param();
  await MedpulseRepo.deleteDepartment(departmentId);
  return c.status(204); // No Content
});

// Working Days Routes
app.get('/working-days', async c => {
  const workingDays = await MedpulseRepo.getAllWorkingDays();
  return c.json(workingDays);
});

app.get('/working-days/:staffId', async c => {
  const { staffId } = c.req.param();
  const workingDays = await MedpulseRepo.getWorkingDaysByStaffId(staffId);
  if (workingDays) {
    return c.json(workingDays);
  }
  return c.notFound();
});

app.post('/working-days', async c => {
  const workingDayData = await c.req.json();
  const workingDay = await MedpulseRepo.createWorkingDay(workingDayData);
  return c.json(workingDay, 201);
});

app.put('/working-days/:staffId', async c => {
  const { staffId } = c.req.param();
  const updateData = await c.req.json();
  const updatedWorkingDay = await MedpulseRepo.updateWorkingDay(staffId, updateData);
  return c.json(updatedWorkingDay);
});

app.delete('/working-days/:staffId', async c => {
  const { staffId } = c.req.param();
  await MedpulseRepo.deleteWorkingDay(staffId);
  return c.status(204); // No Content
});

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
