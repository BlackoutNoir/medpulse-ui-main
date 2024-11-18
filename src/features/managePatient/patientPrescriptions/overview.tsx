import { columns } from '@/features/managePatient/patientPrescriptions/columns';
import { DataTable } from '@/features/dashboard/components/data-table';
import DataFetcher from '@/utils/DataFetcher';

export async function PatientPrescriptionsOverview() {
  const data = await fetchPrescriptions();
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
}

async function fetchPrescriptions(): Promise<any[]> {
  // Fetch data from your API here.
  try {
    const prescriptions = await DataFetcher.fetchPrescriptions();
    return prescriptions;
  } catch (error) {
    console.error('Error fetching patient:', error);
    throw error;
  }
}
