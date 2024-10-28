import { Patient } from '@/utils/interfaces/interfaces';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Patient>[] = [
  {
    accessorKey: 'name',
    header: 'NAME',
  },
  {
    accessorKey: 'email',
    header: 'EMAIL',
  },
  {
    accessorKey: 'phoneNumber',
    header: 'NUMBER',
  },
];
