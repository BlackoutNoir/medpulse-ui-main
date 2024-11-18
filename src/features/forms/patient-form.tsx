'use client';

import DataFetcher from '@/utils/DataFetcher';
import DataSender from '@/utils/DataSender';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useEffect, useState } from 'react';

import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';


const patientFormSchema = z.object({
  selectedUser: z.string({ required_error: 'Please select a user.' }),
  bloodType: z.string({
    required_error: 'You have to select an employment type.',
  }),
});

type PatientFormValues = z.infer<typeof patientFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<PatientFormValues> = {
  selectedUser: '',
};


export function PatientForm() {
  const form = useForm<PatientFormValues>({
    resolver: zodResolver(patientFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  const [users, setUsers] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    async function loadData() {
      const users = await DataFetcher.fetchUsers();
      setUsers(users);
    }
    loadData();
  }, []);

  function onSubmit(data: PatientFormValues) {
    alert(JSON.stringify(data));
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    DataSender.promoteToPatient(data)
      .then(response => {
        toast({
          title: 'Promotion Successful',
          description: 'The user has been successfully promoted to patient.',
        });
        console.log('User promoted to Patient successfully:', response);
      })
      .catch(error => {
        toast({
          title: 'Error',
          description: 'There was an error promoting user to patient.',
          variant: 'destructive',
        });
        console.error('Error promoting User to Patient:', error);
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="selectedUser"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select a User</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a user" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {users.map(user => (
                    <SelectItem key={user.id} value={user.id}>
                      {user.name + ' [UID:' + user.id + ']'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Choose a user to promote to patient from the list.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bloodType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select blood type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your blood type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="A+">A+</SelectItem>
                  <SelectItem value="A-">A-</SelectItem>
                  <SelectItem value="B+">B+</SelectItem>
                  <SelectItem value="B-">B-</SelectItem>
                  <SelectItem value="O+">O+</SelectItem>
                  <SelectItem value="O-">O-</SelectItem>
                  <SelectItem value="AB+">AB+</SelectItem>
                  <SelectItem value="AB-">AB-</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Select the blood type of this user.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Promote User to Patient</Button>
      </form>
    </Form>
  );
}
