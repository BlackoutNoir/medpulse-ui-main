import { columns } from '@/features/dashboard/patients/columns';
import { DataTable } from '@/features/dashboard/components/data-table';
import DataFetcher from '@/utils/DataFetcher';
import { Patient } from '@/utils/interfaces/interfaces';

export async function PatientOverview() {
  const data = await fetchPatients();
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
}

async function fetchPatients(): Promise<Patient[]> {
  // Fetch data from your API here.
  try {
    const patients = await DataFetcher.fetchPatientsMock()
    return patients;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
}
