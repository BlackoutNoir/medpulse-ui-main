'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CircleX, MoreHorizontal } from 'lucide-react';
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
    accessorKey: 'appointment_id',
    header: 'Appointment ID',
  },
  {
    accessorKey: 'doctor_id',
    header: 'Doctor ID',
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'time',
    header: 'Time',
  },
  {
    accessorKey: 'notes',
    header: 'Notes',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    id: 'action_icon',
    cell: ({ row }) => {
      const handleClick = () => {
        console.log(`Action triggered for row ID: ${row.original.appointment_id}`);
      };

      return (
        <Button
          variant="ghost"
          className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
          onClick={handleClick}
        >
          <CircleX className="h-5 w-5" />
        </Button>
      );
    },
    header: 'Cancel',
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
              Copy appointment ID
            </DropdownMenuItem>
            <DropdownMenuItem>View Appointment Details</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-700">Cancel Appointment</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
