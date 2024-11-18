import { Separator } from '@/components/ui/separator';
import { DoctorForm } from '@/features/forms/doctor-form';

export default function FormDoctorPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Doctor Form</h3>
        <p className="text-sm text-muted-foreground">
          This is the form used to create a new doctor based on an existing staff member.
        </p>
      </div>
      <Separator />
      <DoctorForm />
    </div>
  );
}
