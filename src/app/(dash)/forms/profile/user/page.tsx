import { Separator } from "@/components/ui/separator"
import { UserForm } from "@/features/forms/user-form"

export default function FormUserPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">User Form</h3>
        <p className="text-sm text-muted-foreground">
          This is the form used to create a new user.
        </p>
      </div>
      <Separator />
      <UserForm />
    </div>
  )
}