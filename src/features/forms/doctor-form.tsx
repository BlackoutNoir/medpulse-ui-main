'use client';

import DataFetcher from '@/utils/DataFetcher';
import DataSender from '@/utils/DataSender';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useEffect, useState } from 'react';

import { toast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
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


const doctorFormSchema = z.object({
  selectedUser: z.string({ required_error: 'Please select a user.' }),
  selectedTreatmentServices: z.array(z.string()).refine(value => value.some(item => item), {
    message: 'You have to select at least one item.',
  }),
});

type DoctorFormValues = z.infer<typeof doctorFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<DoctorFormValues> = {
  selectedUser: '',
  selectedTreatmentServices: [],
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
        DataFetcher.fetchUsersMock(),
        DataFetcher.fetchTreatmentServicesMock(),
      ]);
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

    DataSender.promoteToDoctor(data)
      .then(response => {
        toast({
          title: 'Promotion Successful',
          description: 'The user has been successfully promoted to a doctor.',
        });
        console.log('User promoted to Doctor sucessfully:', response);
      })
      .catch(error => {
        toast({
          title: 'Error',
          description: 'There was an error promoting user to doctor.',
          variant: 'destructive',
        });
        console.error('Error promoting User to Doctor:', error);
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
          name="selectedTreatmentServices"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel>Select Treatment Services</FormLabel>
                <FormDescription>
                  Select the treatment service you would like to assign to this doctor.
                </FormDescription>
              </div>
              {treatmentServices.map(service => (
                <FormField
                  key={service.id}
                  control={form.control}
                  name="selectedTreatmentServices"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={service.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(service.id)}
                            onCheckedChange={checked => {
                              return checked
                                ? field.onChange([...field.value, service.id])
                                : field.onChange(
                                    field.value?.filter(value => value !== service.id),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">{service.name}</FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Promote Staff to Doctor</Button>
      </form>
    </Form>
  );
}
