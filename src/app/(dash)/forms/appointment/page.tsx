import { Separator } from "@/components/ui/separator"
import { AppointmentForm } from "@/features/forms/appointment-form"

export default function SettingsAppointmentPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Appointment Form</h3>
        <p className="text-sm text-muted-foreground">
          Request new appointment.
        </p>
      </div>
      <Separator />
      <AppointmentForm />
    </div>
  )
}