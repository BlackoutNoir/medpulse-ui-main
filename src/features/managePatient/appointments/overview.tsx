import { columns } from '@/features/managePatient/appointments/columns';
import { DataTable } from '@/features/dashboard/components/data-table';
import DataFetcher from '@/utils/DataFetcher';

export async function PatientAppointmentOverview() {
  const data = await fetchAppointment();
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
}

async function fetchAppointment(): Promise<any[]> {
  try {
    const appointments = await DataFetcher.fetchAppointments();
    return appointments;
  } catch (error) {
    console.error('Error fetching appointment:', error);
    throw error;
  }
}
