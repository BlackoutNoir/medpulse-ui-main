'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, ArrowUpDown, Mail, Phone, Calendar} from 'lucide-react';
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
import { User } from '@/utils/interfaces/backend_interfaces';
import { formatDateTime } from '@/utils/DateFormatter';

export const columns: ColumnDef<User>[] = [
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
    accessorKey: 'firstname',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          USER
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={'/placeholder.svg?height=32&width=32'} alt={user.firstname} />
            <AvatarFallback className="bg-primary">{user.firstname.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{user.firstname}</div>
            <div className="text-sm text-muted-foreground">{user.username || 'N/A'}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'email',
    header: 'CONTACT',
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="flex flex-col">
          <div className="flex items-center">
            <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{user.email}</span>
          </div>
          <div className="flex items-center mt-1">
            <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{user.phone_no}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'gender',
    header: 'GENDER',
    cell: ({ row }) => {
      const user = row.original;
      return (
        <Badge variant={user.gender === 'MALE' ? 'default' : 'secondary'}>
          {user.gender}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'date_of_birth',
    header: 'AGE',
    cell: ({ row }) => {
      const user = row.original;
      const age = new Date().getFullYear() - new Date(user.date_of_birth!).getFullYear();
      return (
        <div className="flex items-center">
          <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
          <span>{age} years</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'created_at',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          JOINED
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const user = row.original;
      return <div>{formatDateTime(user.created_at!).dateOnly}</div>;
    },
  },
  {
    accessorKey: 'is_active',
    header: 'STATUS',
    cell: ({ row }) => {
      const user = row.original;
      return (
        <Badge variant={user.is_active ? 'default' : 'destructive'}>
          {user.is_active ? 'Active' : 'Inactive'}
        </Badge>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const user = row.original;
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
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.uid!)}>
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View user details</DropdownMenuItem>
            <DropdownMenuItem>Edit user</DropdownMenuItem>
            <DropdownMenuItem>
              {user.is_active ? 'Deactivate user' : 'Activate user'}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

