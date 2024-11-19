'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CirclePlus } from 'lucide-react';
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
    accessorKey: 'prescription_id',
    header: 'ID',
  },
  {
    accessorKey: 'medication',
    header: 'Medication',
  },
  {
    accessorKey: 'dosage',
    header: 'Dosage',
  },
  {
    accessorKey: 'instructions',
    header: 'Instructions',
  },
  {
    accessorKey: 'doctor',
    header: 'Issued By',
    cell: ({ row }) => {
      const doctor = row.original?.doctor?.staff?.user;
      if (doctor) {
        return `Dr. ${doctor.first_name} ${doctor.last_name}`;
      }
      return 'No Doctor Assigned';
    },
  },
  {
    accessorKey: 'issue_date',
    header: 'Date Issued',
  },
  {
    id: 'action_icon',
    cell: ({ row }) => {
      const handlePurchase = async () => {
        const prescriptionid = row.original.prescription_id;
        const confirmPurchase = window.confirm(
          `Are you sure you want to purchase prescription ID: ${prescriptionid}?`
        );

        if (confirmPurchase) {
          try {
            const response = await fetch(`/api/prescriptions/${prescriptionid}`, {
              method: 'DELETE',
            });

            if (response.ok) {
              alert('Perscription purchased successfully!');
              // Reload the page after successful deletion
              window.location.reload();
            } else {
              const errorData = await response.json();
              console.error('Error purchasing Prescription:', errorData);
              alert('Failed to purchase prescription. Please try again.');
            }
          } catch (error) {
            console.error('Error purchasing prescription:', error);
            alert('An error occurred. Please try again.');
          }
        }
      };

      return (
        <Button
          variant="ghost"
          className="h-8 w-8 p-0 text-green-500 hover:text-green-600"
          onClick={handlePurchase}
        >
          <CirclePlus className="h-5 w-5" />
        </Button>
      );
    },
    header: 'Purchase',
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
