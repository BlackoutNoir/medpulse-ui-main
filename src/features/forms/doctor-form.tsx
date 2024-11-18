'use client';

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

import DataFetcher from '@/utils/DataFetcher';
import DataSender from '@/utils/DataSender';


const doctorFormSchema = z.object({
  selectedUser: z.string({ required_error: 'Please select a user.' }),
  selectedTreatmentService: z.string({ required_error: 'Please select a treatment.' }),
});

type DoctorFormValues = z.infer<typeof doctorFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<DoctorFormValues> = {
  selectedUser: '',
  selectedTreatmentService: '',
};

export function DoctorForm() {
  const form = useForm<DoctorFormValues>({
    resolver: zodResolver(doctorFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  const [users, setUsers] = useState<{ id: string; name: string }[]>([]);
  const [treatmentServices, setTreatmentServices] = useState<{ id: string; name: string }[]>([]);


  useEffect(() => {
    async function loadData() {
      const [userList, treatmentList] = await Promise.all([
        DataFetcher.fetchUsers(),
        DataFetcher.fetchTreatmentServices(),
      ]);
      console.log(userList);
      console.log(treatmentList);
      setUsers(userList);
      setTreatmentServices(treatmentList);
    }
    loadData();
  }, []);

  function onSubmit(data: DoctorFormValues) {
    alert(JSON.stringify(data));
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    DataSender.requestAppointment(data)
      .then(response => {
        toast({
          title: 'Appointment Requested',
          description: 'Your appointment request has been sent.',
        });
        console.log('Appointment requested:', response);
      })
      .catch(error => {
        console.error('Error requesting appointment:', error);
        toast({
          title: 'Error',
          description: 'There was an error requesting your appointment.',
          variant: 'destructive',
        });
        console.error('Error requesting appointment:', error);
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
              <FormDescription>Choose a user to promote to doctor from the list.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="selectedTreatmentService"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select a Treatment</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a treatment" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {treatmentServices.map(treatment => (
                    <SelectItem key={treatment.id} value={treatment.id}>
                      {treatment.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Assign treatment services to this doctor.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Promote Staff to Doctor</Button>
      </form>
    </Form>
  );
}
