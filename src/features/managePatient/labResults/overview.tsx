import { columns } from '@/features/managePatient/labResults/columns';
import { DataTable } from '@/features/dashboard/components/data-table';
import DataFetcher from '@/utils/DataFetcher';

export async function PatientLabResultsOverview() {
  const data = await fetchLabResults();
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
}

async function fetchLabResults(): Promise<any[]> {
  // Fetch data from your API here.
  try {
    const labtest = await DataFetcher.fetchLabResults();
    return labtest;
  } catch (error) {
    console.error('Error fetching labtest:', error);
    throw error;
  }
}
