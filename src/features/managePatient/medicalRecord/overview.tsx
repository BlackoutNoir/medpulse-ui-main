import { columns } from '@/features/managePatient/medicalRecord/columns';
import { DataTable } from '@/features/dashboard/components/data-table';
import DataFetcher from '@/utils/DataFetcher';

export async function PatientMedicalOverview() {
  const data = await fetchPatient();
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
}

async function fetchPatient(): Promise<any[]> {
  // Fetch data from your API here.
  try {
    const patient = await DataFetcher.fetchPatient();
    console.log(patient);
    return [patient];
  } catch (error) {
    console.error('Error fetching patient:', error);
    throw error;
  }
}
