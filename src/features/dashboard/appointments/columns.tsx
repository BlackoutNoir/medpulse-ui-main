'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { ArrowUpDown } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Badge } from '@/components/ui/badge';
import { formatDateTime } from '@/utils/dateFormatter';
import { Appointment } from '@/utils/interfaces/interfaces';


export const columns: ColumnDef<Appointment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'patient.name',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        PATIENT
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const patient = row.original.patient;
      return (
        <div>
          <div className="font-medium">{patient.name}</div>
          <div className="text-sm text-muted-foreground">{patient.email}</div>
        </div>
      );
    },
  },
  {
    accessorKey: 'doctor.name',
    header: 'DOCTOR',
    cell: ({ row }) => {
      const doctor = row.original.doctor;
      return (
        <div>
          <div className="font-medium">{doctor.name}</div>
          <div className="text-sm text-muted-foreground">{doctor.speciality}</div>
        </div>
      );
    },
  },
  {
    accessorKey: 'scheduledAt',
    header: 'DATE & TIME',
    cell: ({ row }) => {
      const appointment = row.original;
      return formatDateTime(appointment.scheduledAt).dateTime;
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original;
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
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
              Copy appointment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View appointment</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
