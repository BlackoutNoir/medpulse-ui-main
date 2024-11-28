import { Separator } from "@/components/ui/separator"
import { PatientForm } from "@/features/forms/patient-form"

export default function FormPatientPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Patient Form</h3>
        <p className="text-sm text-muted-foreground">
          This is the form used to create a new patient based on an existing user.
        </p>
      </div>
      <Separator />
      <PatientForm />
    </div>
  )
}