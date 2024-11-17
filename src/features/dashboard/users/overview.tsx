import { columns } from '@/features/dashboard/users/columns';
import { DataTable } from '@/features/dashboard/components/data-table';
import DataFetcher from '@/utils/DataFetcher';
import { User } from '@/utils/interfaces/interfaces';

export async function UserOverview() {
  const data = await fetchUsers();
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
}

async function fetchUsers(): Promise<User[]> {
  // Fetch data from your API here.
  try {
    const users = await DataFetcher.fetchUsers()
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}
