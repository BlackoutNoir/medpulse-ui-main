'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useEffect, useState } from 'react';

//import { format } from 'date-fns';
import { toast } from '@/hooks/use-toast';
//import { CalendarIcon } from 'lucide-react';
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
//import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
//import { Calendar } from '@/components/ui/calendar';
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
});

type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AppointmentFormValues> = {
  testHolder: 'Test',
  selectedDoctor: '',
  selectedPatient: '',
};

export function AppointmentForm() {
  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  const [doctors, setDoctors] = useState<{ id: string; name: string }[]>([]);
  useEffect(() => {
    async function loadDoctors() {
      const doctorList = await DataFetcher.fetchDoctors();
      setDoctors(doctorList);
    }
    loadDoctors();
  }, []);

  
  const [patients, setPatients] = useState<{ id: string; name: string }[]>([]);
  useEffect(() => {
    async function loadPatients() {
      const patientList = await DataFetcher.fetchPatients();
      setPatients(patientList);
    }
    loadPatients();
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
              <FormDescription>
                Choose a doctor for your appointment from the list.
              </FormDescription>
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
              <FormDescription>
                Choose a doctor for your appointment from the list.
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
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  );
}
