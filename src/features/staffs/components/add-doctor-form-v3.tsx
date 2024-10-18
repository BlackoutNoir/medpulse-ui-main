'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Define form schema with zod
const doctorSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  specialization: z.string().min(1, 'Specialization is required'),
  password: z.string().min(6, 'Password should be at least 6 characters'),
});

type DoctorFormValues = z.infer<typeof doctorSchema>;

const AddDoctorForm = () => {
  const form = useForm<DoctorFormValues>({
    resolver: zodResolver(doctorSchema),
    defaultValues: {
      name: '',
      email: '',
      specialization: '',
      password: '',
    },
  });

  const onSubmit = (values: DoctorFormValues) => {
    console.log({ values });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add New Doctor</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[487px] p-0">
        <Card className="w-full border-none shadow-none">
          <CardHeader className="flex items-center justify-center text-center p-7">
            <CardTitle className="text-2xl">Add New Doctor</CardTitle>
            <CardDescription>
              Add a new doctor to your list of doctors.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-7">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} type="text" placeholder="Enter doctor's name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} type="email" placeholder="Enter doctor's email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="specialization"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} type="text" placeholder="Enter doctor's specialization" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} type="password" placeholder="Enter password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full">
                  Add Doctor
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default AddDoctorForm;
