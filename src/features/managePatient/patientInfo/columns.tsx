'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: 'user.first_name',
    header: 'First Name',
  },
  {
    accessorKey: 'user.last_name',
    header: 'Last Name',
  },
  {
    accessorKey: 'user.email',
    header: 'Email',
  },
  {
    accessorKey: 'user.phone_no',
    header: 'Phone Number',
  },
  {
    accessorKey: 'user.date_of_birth',
    header: 'Date Of Birth',
  },
  {
    accessorKey: 'user.gender',
    header: 'Gender',
  },
  {
    accessorKey: 'last_visit_date',
    header: 'Most Recent Visit',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const patient = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(patient.patient_id)}>
              Copy patient ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View patient details</DropdownMenuItem>
            <DropdownMenuItem>View appointments</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
