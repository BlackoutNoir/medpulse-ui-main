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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
//import { Badge } from '@/components/ui/badge';
import { Patient } from '@/utils/interfaces/interfaces';
import { formatDateTime } from '@/utils/dateFormatter';

export const columns: ColumnDef<Patient>[] = [
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
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          NAME
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const patient= row.original
      return (
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={patient.avatar} alt={patient.name} />
            <AvatarFallback className="bg-gray-400">{patient.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{patient.name}</div>
          </div>
        </div>
      )
    }
  },
  {
    accessorKey: 'phoneNumber',
    header: 'PHONE',
  },
  {
    accessorKey: 'email',
    header: 'EMAIL',
    cell: ({ row }) => {
      const patient = row.original;
      return (
        <div className="text-blue-600">{patient.email}</div>
      )
    },
  },
  {
    accessorKey: 'address',
    header: 'ADDRESS',
  },
  {
    accessorKey: 'createdAt',
    header: 'REGISTERED',
    cell: ({ row }) => {
      const patient = row.original;
      return (
        <div>{formatDateTime(patient.createdAt).dateOnly}</div> // Date only
      )
    },
  },
  {
    accessorKey: 'lastVisitDate',
    header: 'LAST VISIT',
    cell: ({ row }) => {
      const patient = row.original;
      return (
        <div>{formatDateTime(patient.lastVisitDate).dateOnly}</div> // Date only
      )
    },
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
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(patient.id)}>
              Copy patient ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View doctor</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];