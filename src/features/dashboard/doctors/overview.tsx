import { columns } from '@/features/dashboard/doctors/columns';
import { DataTable } from '@/features/dashboard/components/data-table';
import { Doctor } from '@/utils/interfaces/interfaces';
import DataFetcher from '@/utils/DataFetcher';

export async function DoctorOverview() {
  const data = await fetchDoctors();
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
}

async function fetchDoctors(): Promise<Doctor[]> {
  // Fetch data from your API here.
  try {
    const doctors = await DataFetcher.fetchDoctors();
    return doctors;
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error;
  }
}
