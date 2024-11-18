'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CircleX, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

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
    accessorKey: 'doctor',
    header: 'Doctor',
    cell: ({ row }) => {
      const doctor = row.original?.doctor?.staff?.user;
      if (doctor) {
        return `Dr. ${doctor.first_name} ${doctor.last_name}`;
      }
      return 'No Doctor Assigned';
    },
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => {
      const date = new Date(row.original.date);
      if (!isNaN(date.getTime())) {
        return `${format(date, 'dd/MM/yyyy')} at ${format(date, 'HH:mm')}`;
      }
      return 'Invalid Date';
    },
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
      const handleDelete = async () => {
        const appointmentId = row.original.appointment_id;
        const confirmDelete = window.confirm(
          `Are you sure you want to delete appointment ID: ${appointmentId}?`
        );

        if (confirmDelete) {
          try {
            const response = await fetch(`/api/appointments/${appointmentId}`, {
              method: 'DELETE',
            });

            if (response.ok) {
              alert('Appointment deleted successfully!');
              // Reload the page after successful deletion
              window.location.reload();
            } else {
              const errorData = await response.json();
              console.error('Error deleting appointment:', errorData);
              alert('Failed to delete appointment. Please try again.');
            }
          } catch (error) {
            console.error('Error deleting appointment:', error);
            alert('An error occurred. Please try again.');
          }
        }
      };

      return (
        <Button
          variant="ghost"
          className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
          onClick={handleDelete}
        >
          <CircleX className="h-5 w-5" />
        </Button>
      );
    },
    header: '',
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
