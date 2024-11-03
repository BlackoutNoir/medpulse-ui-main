import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { UserPlus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';

interface AddContactProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

// Define validation schema using zod
const addContactValidator = z.object({
  email: z.string().email('Invalid email address.'),
});

type FormData = z.infer<typeof addContactValidator>;

const AddContactButton: React.FC<AddContactProps> = ({ className, ...props }) => {
  const [showSuccessState, setShowSuccessState] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(addContactValidator),
  });

  const addContact = async (email: string) => {
    try {
      // Validate email
      const validatedEmail = addContactValidator.parse({ email });

      // Make API call
      await axios.post('/api/contacts/add', {
        email: validatedEmail.email,
      });

      setShowSuccessState(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError('email', { message: error.message });
        return;
      }

      if (error instanceof AxiosError) {
        setError('email', { message: error.response?.data });
        return;
      }

      setError('email', { message: 'Something went wrong.' });
    }
  };

  const onSubmit = (data: FormData) => {
    addContact(data.email);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className={`w-full justify-start ${className}`} {...props}>
          <UserPlus className="h-4 w-4" />
          Add a Contact
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mt-1 shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <h3 className="font-semibold">Add a Contact</h3>
          <p>Enter the email of the contact to add:</p>
          <Input
            type="email"
            placeholder="Contact Email"
            {...register('email')}
            className="border rounded p-2"
          />
          <Button
            type="submit"
            variant="outline"
            className="w-full justify-start bg-blue-700 text-white hover:bg-blue-800 hover:text-white shadow-none transition-all ease-in-out duration-300"
          >
            Add Contact
          </Button>
          <p className="mt-1 text-sm text-red-600">{errors.email?.message}</p>
          {showSuccessState ? (
            <p className="mt-1 text-sm text-green-600">Contact request sent!</p>
          ) : null}
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default AddContactButton;
