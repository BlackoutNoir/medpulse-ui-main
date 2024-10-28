import { Doctor, columns } from '@/features/dashboard/doctors/columns';
import { DataTable } from '@/features/dashboard/components/data-table';
import { UpperStats } from '@/features/dashboard/components/upper-stats';

export default async function CreationPage() {
  const data = await getData();

  return (
    <>
      <div className="container">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Doctors List</h2>
          <p className="text-muted-foreground">
            Here&apos;s the list of doctors for your organization!
          </p>
        </div>
        <div className="container mx-auto">
          <UpperStats />
        </div>
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
}

async function getData(): Promise<Doctor[]> {
  // Fetch data from your API here.
  return [
    {
      id: '1',
      name: 'Ronald Richards',
      speciality: 'Dentist',
      email: 'ronaldrichards@example.com',
      phoneNumber: '209-555-0104',
      workingDays: ['S', 'M', 'T', 'W', 'T', 'F'],
      assignedTreatment: 'Dental service',
      type: 'PART-TIME',
      avatar: '/placeholder.svg?height=32&width=32',
    },
    {
      id: '2',
      name: 'Dorothy Spencer',
      speciality: 'Cardiologist',
      email: 'dorothyspencer@example.com',
      phoneNumber: '415-555-0198',
      workingDays: ['M', 'T', 'W', 'T', 'F'],
      assignedTreatment: 'Cardiac care',
      type: 'FULL-TIME',
      avatar: '/placeholder.svg?height=32&width=32',
    },
    {
      id: '3',
      name: 'Michael Jordan',
      speciality: 'Pediatrician',
      email: 'michaeljordan@example.com',
      phoneNumber: '213-555-0123',
      workingDays: ['M', 'T', 'W', 'F'],
      assignedTreatment: 'Child health',
      type: 'PART-TIME',
      avatar: '/placeholder.svg?height=32&width=32',
    },
    {
      id: '4',
      name: 'Sarah Johnson',
      speciality: 'Dermatologist',
      email: 'sarahjohnson@example.com',
      phoneNumber: '650-555-0143',
      workingDays: ['T', 'W', 'T', 'F', 'S'],
      assignedTreatment: 'Skin care',
      type: 'FULL-TIME',
      avatar: '/placeholder.svg?height=32&width=32',
    },
  ];
}

/*
CSS (JSMastery Health platform):
  .data-table {
    @apply z-10 w-full overflow-hidden rounded-lg border border-dark-400 shadow-lg;
  }

  .table-actions {
    @apply flex w-full items-center justify-between space-x-2 p-4;
  }


*/
