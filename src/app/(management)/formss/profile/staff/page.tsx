import { Separator } from "@/components/ui/separator"
import { StaffForm } from "@/features/forms/staff-form"

export default function FormStaffPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Staff Form</h3>
        <p className="text-sm text-muted-foreground">
          This is the form used to create a new staff member based on an existing user.
        </p>
      </div>
      <Separator />
      <StaffForm />
    </div>
  )
}