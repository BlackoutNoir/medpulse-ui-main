import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class MedpulseRepo {
  // User methods
  async getAllUsers() {
    return await prisma.user.findMany();
  }

  async getUserById(userId: string) {
    return await prisma.user.findUnique({
      where: { user_id: userId },
    });
  }

  async createUser(userData: any) {
    return await prisma.user.create({
      data: userData,
    });
  }

  async updateUser(userId: string, updateData: any) {
    return await prisma.user.update({
      where: { user_id: userId },
      data: updateData,
    });
  }

  async deleteUser(userId: string) {
    return await prisma.user.delete({
      where: { user_id: userId },
    });
  }

  // Staff methods
  async getAllStaff() {
    return await prisma.staff.findMany({
      include: { user: true, department: true },
    });
  }

  async getStaffById(staffId: string) {
    return await prisma.staff.findUnique({
      where: { staff_id: staffId },
      include: { user: true, department: true },
    });
  }

  async createStaff(staffData: any) {
    return await prisma.staff.create({
      data: staffData,
    });
  }

  async updateStaff(staffId: string, updateData: any) {
    return await prisma.staff.update({
      where: { staff_id: staffId },
      data: updateData,
    });
  }

  async deleteStaff(staffId: string) {
    return await prisma.staff.delete({
      where: { staff_id: staffId },
    });
  }

  // Working Days methods
  async getAllWorkingDays() {
    return await prisma.working_days.findMany({
      include: { Staff: true },
    });
  }

  async getWorkingDaysByStaffId(staffId: string) {
    try {
      // Query the working_days table to get working days based on staffId
      const workingDays = await prisma.working_days.findMany({
        where: {
          staffStaff_id: staffId, // Match the staffId field in the working_days model
        },
        include: {
          Staff: true, // Optionally, you can include related data like Staff here if needed
        },
      });

      // Return the working days found for the given staffId
      return workingDays;
    } catch (error) {
      console.error('Error fetching working days:', error);
      throw new Error('Could not fetch working days.');
    }
  }

  async getWorkingDayByDay(day: string) {
    return await prisma.working_days.findUnique({
      where: { day },
      include: { Staff: true },
    });
  }

  async createWorkingDay(workingDayData: any) {
    return await prisma.working_days.create({
      data: workingDayData,
    });
  }

  async updateWorkingDay(day: string, updateData: any) {
    return await prisma.working_days.update({
      where: { day },
      data: updateData,
    });
  }

  async deleteWorkingDay(day: string) {
    return await prisma.working_days.delete({
      where: { day },
    });
  }

  // Patient methods
  async getAllPatients() {
    return await prisma.patient.findMany({
      include: { user: true, medical_history: true, insurance: true, appointments: true },
    });
  }

  async getPatientById(patientId: string) {
    return await prisma.patient.findUnique({
      where: { patient_id: patientId },
      include: { user: true, medical_history: true, insurance: true, appointments: true },
    });
  }

  async createPatient(patientData: any) {
    return await prisma.patient.create({
      data: patientData,
    });
  }

  async updatePatient(patientId: string, updateData: any) {
    return await prisma.patient.update({
      where: { patient_id: patientId },
      data: updateData,
    });
  }

  async deletePatient(patientId: string) {
    try {
      return await prisma.patient.delete({
        where: { patient_id: patientId },
      });
    } catch (error) {
      return { error };
    }
  }

  // Doctor methods
  // async getAllDoctors() {
  //   return await prisma.doctor.findMany({
  //     include: { appointments: true, assigned_treatment_services: true, staff: {include: { user: true }} },
  //   });
  // }

  async getAllDoctors() {
    return await prisma.doctor.findMany({
      include: { appointments: true, staff: { include: { user: true } } },
    });
  }

  async getDoctorById(doctorId: string) {
    return await prisma.doctor.findUnique({
      where: { doctor_id: doctorId },
      include: { staff: true, appointments: true, assigned_treatment_services: true },
    });
  }

  async createDoctor(doctorData: any) {
    return await prisma.doctor.create({
      data: doctorData,
    });
  }

  async updateDoctor(doctorId: string, updateData: any) {
    return await prisma.doctor.update({
      where: { doctor_id: doctorId },
      data: updateData,
    });
  }

  async deleteDoctor(doctorId: string) {
    return await prisma.doctor.delete({
      where: { doctor_id: doctorId },
    });
  }

  // Chat methods
  async getAllChats() {
    return await prisma.chat.findMany({
      include: { messages: true },
    });
  }

  async getChatById(chatId: string) {
    return await prisma.chat.findUnique({
      where: { chat_id: chatId },
      include: { messages: true },
    });
  }

  async createChat(chatData: any) {
    return await prisma.chat.create({
      data: chatData,
    });
  }

  async updateChat(chatId: string, updateData: any) {
    return await prisma.chat.update({
      where: { chat_id: chatId },
      data: updateData,
    });
  }

  async deleteChat(chatId: string) {
    return await prisma.chat.delete({
      where: { chat_id: chatId },
    });
  }

  // Message methods
  async getAllMessages() {
    return await prisma.message.findMany({
      include: { sender: true, chat: true },
    });
  }

  async getMessageById(messageId: string) {
    return await prisma.message.findUnique({
      where: { message_id: messageId },
      include: { sender: true, chat: true },
    });
  }

  async createMessage(messageData: any) {
    return await prisma.message.create({
      data: messageData,
    });
  }

  async updateMessage(messageId: string, updateData: any) {
    return await prisma.message.update({
      where: { message_id: messageId },
      data: updateData,
    });
  }

  async deleteMessage(messageId: string) {
    return await prisma.message.delete({
      where: { message_id: messageId },
    });
  }

  // Department methods
  async getAllDepartments() {
    return await prisma.department.findMany({
      include: { staff: true },
    });
  }

  async getDepartmentById(deptId: string) {
    return await prisma.department.findUnique({
      where: { dept_id: deptId },
      include: { staff: true },
    });
  }

  async createDepartment(departmentData: any) {
    return await prisma.department.create({
      data: departmentData,
    });
  }

  async updateDepartment(deptId: string, updateData: any) {
    return await prisma.department.update({
      where: { dept_id: deptId },
      data: updateData,
    });
  }

  async deleteDepartment(deptId: string) {
    return await prisma.department.delete({
      where: { dept_id: deptId },
    });
  }

  // Insurance methods
  async getAllInsurance() {
    return await prisma.insurance.findMany({
      include: { patient: true },
    });
  }

  async getInsuranceById(insuranceId: string) {
    return await prisma.insurance.findUnique({
      where: { insurance_id: insuranceId },
      include: { patient: true },
    });
  }

  async createInsurance(insuranceData: any) {
    return await prisma.insurance.create({
      data: insuranceData,
    });
  }

  async updateInsurance(insuranceId: string, updateData: any) {
    return await prisma.insurance.update({
      where: { insurance_id: insuranceId },
      data: updateData,
    });
  }

  async deleteInsurance(insuranceId: string) {
    return await prisma.insurance.delete({
      where: { insurance_id: insuranceId },
    });
  }

  // Medical History methods
  async getAllMedicalHistories() {
    return await prisma.medicalHistory.findMany({
      include: { patient: true },
    });
  }

  async getMedicalHistoryById(historyId: string) {
    return await prisma.medicalHistory.findUnique({
      where: { history_id: historyId },
      include: { patient: true },
    });
  }

  async createMedicalHistory(medicalHistoryData: any) {
    return await prisma.medicalHistory.create({
      data: medicalHistoryData,
    });
  }

  async updateMedicalHistory(historyId: string, updateData: any) {
    return await prisma.medicalHistory.update({
      where: { history_id: historyId },
      data: updateData,
    });
  }

  async deleteMedicalHistory(historyId: string) {
    return await prisma.medicalHistory.delete({
      where: { history_id: historyId },
    });
  }

  // Appointment methods
  async getAllAppointments() {
    return await prisma.appointment.findMany({
      include: {
        patient: true,
        doctor: {
          select: {
            staff: { select: { user: { select: { first_name: true, last_name: true } } } },
          },
        },
      },
    });
  }

  async getAppointmentById(appointmentId: string) {
    return await prisma.appointment.findUnique({
      where: { appointment_id: appointmentId },
      include: { patient: true, doctor: true },
    });
  }

  // async createAppointment(appointmentData: any) {
  //   return await prisma.appointment.create({
  //     data: appointmentData,
  //   });
  // }

  async createAppointment(appointmentData: any) {
    const { doctorId, patientId, date, notes } = appointmentData;

    return await prisma.appointment.create({
      data: {
        doctor: {
          connect: { doctor_id: doctorId }, // Connect to an existing doctor
        },
        patient: {
          connect: { patient_id: patientId }, // Connect to an existing patient
        },
        date,
        notes,
      },
    });
  }

  async updateAppointment(appointmentId: string, updateData: any) {
    return await prisma.appointment.update({
      where: { appointment_id: appointmentId },
      data: updateData,
    });
  }

  // async deleteAppointment(appointmentId: string) {
  //   return await prisma.appointment.delete({
  //     where: { appointment_id: appointmentId },
  //   });
  // }

  async deleteAppointment(appointmentId: string) {
    try {
      return await prisma.appointment.delete({
        where: { appointment_id: appointmentId },
      });
    } catch (error) {
      console.error('Error deleting appointment:', error);
      return null;
    }
  }
  

  // Lab Test methods
  async getAllLabTests() {
    return await prisma.labTest.findMany({
      include: { patient: true },
    });
  }

  async getLabTestById(labTestId: string) {
    return await prisma.labTest.findUnique({
      where: { lab_test_id: labTestId },
      include: { patient: true },
    });
  }

  async getLabTestsByPatientId(patientId: string) {
    return await prisma.labTest.findMany({
      where: { patient_id: patientId },
      include: { patient: true },
    });
  }

  async createLabTest(labTestData: any) {
    return await prisma.labTest.create({
      data: labTestData,
    });
  }

  async updateLabTest(labTestId: string, updateData: any) {
    return await prisma.labTest.update({
      where: { lab_test_id: labTestId },
      data: updateData,
    });
  }

  async deleteLabTest(labTestId: string) {
    return await prisma.labTest.delete({
      where: { lab_test_id: labTestId },
    });
  }

  // Prescription methods
  async getAllPrescriptions() {
    return await prisma.prescription.findMany({
      include: { patient: true, doctor: true },
    });
  }

  async getPrescriptionById(prescriptionId: string) {
    return await prisma.prescription.findUnique({
      where: { prescription_id: prescriptionId },
      include: { patient: true, doctor: true },
    });
  }

  async getPrescriptionsByPatientId(patientId: string) {
    return await prisma.prescription.findMany({
      where: { patient_id: patientId },
      include: { patient: true },
    });
  }

  async createPrescription(prescriptionData: any) {
    return await prisma.prescription.create({
      data: prescriptionData,
    });
  }

  async updatePrescription(prescriptionId: string, updateData: any) {
    return await prisma.prescription.update({
      where: { prescription_id: prescriptionId },
      data: updateData,
    });
  }

  // async deletePrescription(prescriptionId: string) {
  //   return await prisma.prescription.delete({
  //     where: { prescription_id: prescriptionId },
  //   });
  // }

  async deletePrescription(prescriptionId: string) {
    try {
      return await prisma.prescription.delete({
        where: { prescription_id: prescriptionId },
      });
    } catch (error) {
      console.error('Error purchasing prescription:', error);
      return null;
    }
  }


  // Treatment Service methods
  async getAllTreatmentServices() {
    return await prisma.treatment_service.findMany({
      include: { Doctor: true },
    });
  }

  async getTreatmentServiceById(treatmentServiceId: string) {
    return await prisma.treatment_service.findUnique({
      where: { treatment_service_id: treatmentServiceId },
      include: { Doctor: true },
    });
  }

  async createTreatmentService(treatmentServiceData: any) {
    return await prisma.treatment_service.create({
      data: treatmentServiceData,
    });
  }

  async updateTreatmentService(treatmentServiceId: string, updateData: any) {
    return await prisma.treatment_service.update({
      where: { treatment_service_id: treatmentServiceId },
      data: updateData,
    });
  }

  async deleteTreatmentService(treatmentServiceId: string) {
    return await prisma.treatment_service.delete({
      where: { treatment_service_id: treatmentServiceId },
    });
  }
}

export default new MedpulseRepo();
