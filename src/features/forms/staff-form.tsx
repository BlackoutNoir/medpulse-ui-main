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
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import DataFetcher from '@/utils/DataFetcher';
import DataSender from '@/utils/DataSender';
import { Clock } from 'lucide-react';

const staffFormSchema = z.object({
  selectedUser: z.string({ required_error: 'Please select a user.' }),
  employmentType: z.string({
    required_error: 'You have to select an employment type.',
  }),
  workingDays: z.array(z.string()).refine(value => value.length > 0, {
    message: 'You have to select at least one working day.',
  }),
  workingHoursStartTime: z.string({
    required_error: 'Please select a time for start hours.',
  }),
  workingHoursEndTime: z.string({
    required_error: 'Please select a time for end hours.',
  }),
});

type StaffFormValues = z.infer<typeof staffFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<StaffFormValues> = {
  selectedUser: '',
  workingDays: [],
};

const workingDays = [
  { id: 'sunday', label: 'Sunday' },
  { id: 'monday', label: 'Monday' },
  { id: 'tuesday', label: 'Tuesday' },
  { id: 'wednesday', label: 'Wednesday' },
  { id: 'thursday', label: 'Thursday' },
  { id: 'friday', label: 'Friday' },
  { id: 'saturday', label: 'Saturday' },
];

export function StaffForm() {
  const form = useForm<StaffFormValues>({
    resolver: zodResolver(staffFormSchema),
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

  function onSubmit(data: StaffFormValues) {
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
              <FormDescription>Choose a user to promote to staff from the list.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="employmentType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select employment type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your employment type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="partTime">Part Time</SelectItem>
                  <SelectItem value="fullTime">Full Time</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Select whether this staff member is a full-time or part-time employee
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workingDays"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel>Select employee working days</FormLabel>
                <FormDescription>
                  Select the days this staff member is available to work.
                </FormDescription>
              </div>
              {workingDays.map(item => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="workingDays"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={checked => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(field.value?.filter(value => value !== item.id));
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">{item.label}</FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workingHoursStartTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Working Start Time</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a time" />
                    <Clock className="ml-auto h-4 w-4 opacity-50" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'].map(time => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Choose when this employee starts their shift.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workingHoursEndTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Working End Time</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a time" />
                    <Clock className="ml-auto h-4 w-4 opacity-50" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'].map(time => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Choose when this employee ends their shift.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Promote User to Staff</Button>
      </form>
    </Form>
  );
}
