import { Doctor, columns } from '@/features/dashboard/components/columns';
import { DataTable } from '@/features/dashboard/components/data-table';

export async function Overview() {
  const data = await getData();
  return (
    <>
      <DataTable columns={columns} data={data} />
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
