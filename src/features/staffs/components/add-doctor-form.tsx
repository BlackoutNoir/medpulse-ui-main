'use client';

//import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'; // Import shadcn form components
import { useForm } from 'react-hook-form';

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
  });

  const onSubmit = (values: z.infer<typeof doctorSchema>) => {
    console.log({ values });
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add New Doctor</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Doctor</DialogTitle>
            <DialogDescription>Add a new doctor to your list of doctors.</DialogDescription>
          </DialogHeader>
          {/* Render the form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/*Name Field*/}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <input placeholder="Enter doctor's name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/*Email Field*/}
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddDoctorForm;
