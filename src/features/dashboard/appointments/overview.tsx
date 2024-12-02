import { columns } from '@/features/dashboard/appointments/columns';
import { DataTable } from '@/features/dashboard/components/data-table';
import { Appointment } from '@/utils/interfaces/interfaces';
import DataFetcher from '@/utils/DataFetcher';

export async function AppointmentOverview() {
  const data = await fetchAppointments();
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
}

async function fetchAppointments(): Promise<Appointment[]> {
  // Fetch data from your API here.
  try {
    const appointments = await DataFetcher.fetchAppointmentsMock();
    return appointments;
  } catch (error) {
    console.error('Error fetching appointments:', error);
    throw error;
  }
}
