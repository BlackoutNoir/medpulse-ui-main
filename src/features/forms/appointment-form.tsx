'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { toast } from '@/hooks/use-toast';
import { CalendarIcon, Clock } from 'lucide-react';
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
//import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import DataFetcher from '@/utils/DataFetcher';

const appointmentFormSchema = z.object({
  testHolder: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.',
    }),
  medicalConcernDescription: z
    .string()
    .min(2, {
      message: 'Medical concern description must be at least 2 characters.',
    })
    .max(300, {
      message: 'Medical concern description must not be longer than 300 characters.',
    }),
  otherMedicalConcernDescription: z
    .string()
    .min(2, {
      message: 'Other Medical concern description must be at least 2 characters.',
    })
    .max(300, {
      message: 'Other Medical concern description must not be longer than 300 characters.',
    }),
  additionalThoughtsDescription: z
    .string()
    .min(2, {
      message: 'Additonal thoughts description must be at least 2 characters.',
    })
    .max(300, {
      message: 'Additional thoughts description must not be longer than 300 characters.',
    }),
  selectedDoctor: z.string({ required_error: 'Please select a doctor.' }),
  selectedPatient: z.string({ required_error: 'Please select a patient.' }),
  appointmentDate: z.date({
    required_error: 'Please select a date for the appointment.',
  }),
  appointmentTime: z.string({
    required_error: 'Please select a time for the appointment.',
  }),
});

type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AppointmentFormValues> = {
  testHolder: 'Test',
  selectedDoctor: '',
  selectedPatient: '',
  appointmentDate: undefined,
  appointmentTime: '',
};

export function AppointmentForm() {
  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  const [doctors, setDoctors] = useState<{ id: string; name: string }[]>([]);
  const [patients, setPatients] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    async function loadData() {
      const [doctorList, patientList] = await Promise.all([
        DataFetcher.fetchDoctors(),
        DataFetcher.fetchPatients(),
      ]);
      setDoctors(doctorList);
      setPatients(patientList);
    }
    loadData();
  }, []);


  function onSubmit(data: AppointmentFormValues) {
    alert(JSON.stringify(data));
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="selectedPatient"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select a Patient</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a patient" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {patients.map(patient => (
                    <SelectItem key={patient.id} value={patient.id}>
                      {patient.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Choose a patient for your appointment from the list.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="selectedDoctor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select a Doctor</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a doctor" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {doctors.map(doctor => (
                    <SelectItem key={doctor.id} value={doctor.id}>
                      {doctor.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Choose a doctor for your appointment from the list.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="appointmentDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Appointment Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={`w-[240px] pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 2))
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select the date for your appointment.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="appointmentTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Appointment Time</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a time" />
                    <Clock className="ml-auto h-4 w-4 opacity-50" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'].map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Choose a time for your appointment.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="medicalConcernDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Medical Concern</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your medical concern in 300 characters or less."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Please tell us about your primary medical concern. If this is a medical emergency,
                call 911. If this is a mental health emergency, please visit findahelpline.com.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="otherMedicalConcernDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other Medical Concerns</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your additional medical concerns in 300 characters or less."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Are there any other medical concerns you would like to discuss?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="additionalThoughtsDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Thoughts</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please share any additional thoughts in 300 characters or less."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Is there anything else you would like us to know? After this step, you&apos;ll
                review and submit your request.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit Appointment Request</Button>
      </form>
    </Form>
  );
}
