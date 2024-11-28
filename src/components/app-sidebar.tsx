import * as React from "react"
import { LucideIcon } from "lucide-react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Import all icons you want to use
import {
  Bot,
  Users,
  UserPlus,
  Stethoscope,
  ClipboardList,
  Calendar,
  UserCircle,
  User,
  Briefcase,
} from "lucide-react"

// This is sample data with icons added.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Documentation",
          url: "#",
          icon: Bot,
        },
      ],
    },
    {
      title: "User Management",
      url: "#",
      items: [
        {
          title: "Users List",
          url: "/dashboardd/users",
          icon: Users,
          isActive: true,
        },
        {
          title: "Patients",
          url: "/dashboardd/users",
          icon: UserPlus,
        },
        {
          title: "Treatments",
          url: "/dashboardd/users",
          icon: Stethoscope,
        },
        {
          title: "Staff List",
          url: "/dashboardd/users",
          icon: ClipboardList,
        },
      ],
    },
    {
      title: "Forms",
      url: "#",
      items: [
        {
          title: "Appointment",
          url: "/formss/appointment",
          icon: Calendar,
        },
        {
          title: "User",
          url: "/formss/profile/user",
          icon: UserCircle,
        },
        {
          title: "Patient",
          url: "/formss/profile/patient",
          icon: User,
        },
        {
          title: "Staff",
          url: "/formss/profile/staff",
          icon: ClipboardList,
        },
        {
          title: "Doctor",
          url: "/formss/profile/doctor",
          icon: Briefcase,
        },
      ],
    },
  ],
}

interface NavItem {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item: NavItem) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url} className="flex items-center gap-2">
                        {item.icon && <item.icon className="h-4 w-4" />}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

