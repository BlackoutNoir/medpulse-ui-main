'use client';

import { useEffect, useState } from 'react';
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
import  DataFetcher  from '@/utils/DataFetcher'; // Import DataFetcher

const allDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export const PatientTable = () => {
  const [patients, setPatients] = useState<any[]>([]); // Use `any[]` as we're not using interfaces anymore

  // Fetch patients when the component mounts
  useEffect(() => {
    const fetchPatients = async () => {
      const patientsData = await DataFetcher.fetchPatients(); // Fetch data from API
      setPatients(patientsData); // Set fetched data to state
    };

    fetchPatients();
  }, []);

  const columns: ColumnDef<any>[] = [ // Use `any` as the type for dynamic columns
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
        const patient = row.original;
        return (
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={patient.avatar} alt={patient.name} />
              <AvatarFallback className="bg-gray-400">{patient.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{patient.name}</div>
              <div className="text-sm">{patient.speciality}</div>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: 'speciality',
      header: 'SPECIALITY',
    },
    {
      accessorKey: 'email',
      header: 'CONTACT',
      cell: ({ row }) => {
        const patient = row.original;
        return (
          <div>
            <div>{patient.phoneNumber}</div>
            <div className="text-sm text-blue-600">{patient.email}</div>
          </div>
        );
      },
    },
    {
      accessorKey: "workingDays",
      header: "WORKING DAYS",
      cell: ({ row }) => {
        const patient = row.original;
        return (
          <div className="flex space-x-1">
            {allDays.map((day, index) => (
              <span 
                key={index} 
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs 
                    ${patient.workingDays && patient.workingDays.includes(day) ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
              >
                {day}
              </span>
            ))}
          </div>
        );
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
        const type = row.getValue("type") as string;
        return (
          <Badge variant={type === "FULL-TIME" ? "default" : "secondary"}>
            {type}
          </Badge>
        );
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
              <DropdownMenuItem>View patient</DropdownMenuItem>
              <DropdownMenuItem>View treatment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <div>
      {/* Render the table with the fetched data */}
      {/* Your table rendering logic here (e.g., Tanstack Table, Material UI Table) */}
    </div>
  );
};
