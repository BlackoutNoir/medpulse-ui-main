import { Metadata } from "next"

import { Separator } from "@/components/ui/separator"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
}

interface FormsLayoutProps {
  children: React.ReactNode
}

export default function FormsLayout({ children }: FormsLayoutProps) {
  return (
    <>
      <div className="space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Forms</h2>
          <p className="text-muted-foreground">
            Manage user settings and administer accounts seamlessly
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <div className="flex-1 lg:max-w-2xl">{children}</div>
          <Toaster />
        </div>
      </div>
    </>
  )
}