'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, ArrowUpDown, Calendar, Clock, User, UserIcon as UserMd, Clipboard } from 'lucide-react';
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
import { formatDateTime } from '@/utils/DateFormatter';
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
    accessorKey: 'scheduledAt',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        DATE & TIME
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const appointment = row.original;
      const { dateOnly, timeOnly } = formatDateTime(appointment.scheduledAt);
      return (
        <div className="flex flex-col">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{dateOnly}</span>
          </div>
          <div className="flex items-center mt-1">
            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{timeOnly}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'patient.name',
    header: 'PATIENT',
    cell: ({ row }) => {
      const patient = row.original.patient;
      return (
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={patient.avatar} alt={patient.name} />
            <AvatarFallback className="bg-primary"><User /></AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{patient.name}</div>
            <div className="text-sm text-muted-foreground">{patient.email}</div>
          </div>
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
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={doctor.avatar} alt={doctor.name} />
            <AvatarFallback className="bg-secondary"><UserMd /></AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{doctor.name}</div>
            <div className="text-sm text-muted-foreground">{doctor.speciality}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'treatmentService.name',
    header: 'SERVICE',
    cell: ({ row }) => {
      const service = row.original.treatmentService;
      return (
        <div className="flex items-center space-x-2">
          <Clipboard className="h-4 w-4 text-muted-foreground" />
          <span>{service.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: 'STATUS',
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <Badge variant={getBadgeVariant(status)}>
          {status}
        </Badge>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const appointment = row.original;
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
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(appointment.id)}>
              Copy appointment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View appointment details</DropdownMenuItem>
            <DropdownMenuItem>Reschedule appointment</DropdownMenuItem>
            <DropdownMenuItem>Cancel appointment</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

function getBadgeVariant(status: string): "default" | "secondary" | "destructive" | "outline" {
  switch (status) {
    case 'SCHEDULED':
      return 'default';
    case 'COMPLETED':
      return 'secondary';
    case 'CANCELLED':
      return 'destructive';
    case 'PENDING':
      return 'outline';
    default:
      return 'default';
  }
}

