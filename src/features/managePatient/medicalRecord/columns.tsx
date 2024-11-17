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
import { Badge } from '@/components/ui/badge';
import { Doctor } from '@/utils/interfaces/interfaces';

const allDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export const columns: ColumnDef<Doctor>[] = [
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
      const doctor = row.original
      return (
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={doctor.avatar} alt={doctor.name} />
            <AvatarFallback className="bg-gray-400">{doctor.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{doctor.name}</div>
            <div className="text-sm">{doctor.speciality}</div>
          </div>
        </div>
      )
    }
  },
  {
    accessorKey: 'speciality',
    header: 'SPECIALITY',
  },
  {
    accessorKey: 'email',
    header: 'CONTACT',
    cell: ({ row }) => {
      const staff = row.original;
      return (
        <div>
          <div>{staff.phoneNumber}</div>
          <div className="text-sm text-blue-600">{staff.email}</div>
        </div>
      )
    },
  },
  // {
  //   accessorKey: 'phoneNumber',
  //   header: 'Number',
  // },
  {
    accessorKey: "workingDays",
    header: "WORKING DAYS",
    cell: ({ row }) => {
      const staff = row.original
      return (
        <div className="flex space-x-1">
          {allDays.map((day, index) => (
            <span 
              key={index} 
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground'}`}
            >
              {day}
            </span>
          ))}
        </div>
      )
    },
  },
  {
    accessorKey: 'assignedTreatment',
    header: 'Assigned Treatment',
  },
  {
    accessorKey: "type",
    header: "TYPE",
    cell: ({ row }) => {
      const type = row.getValue("type") as string
      return (
        <Badge variant={type === "FULL-TIME" ? "default" : "secondary"}>
          {type}
        </Badge>
      )
    },
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
              Copy doctor ID
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
