import { GoCheckCircle, GoCheckCircleFill, GoHome, GoHomeFill, GoCalendar, GoPulse } from 'react-icons/go';
import { SettingsIcon, UsersIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const routes = [
  {
    label: 'Home',
    href: '',
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: 'My Tasks',
    href: '/tasks',
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: 'Members',
    href: '/members',
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
  {
    label: 'Test',
    href: '/dash/test',
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
  {
    label: 'Reservations',
    href: '/dash/reservations',
    icon: GoCalendar,
    activeIcon: GoCalendar,
  },
  {
    label: 'Patients',
    href: '/dash/patients',
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
  {
    label: 'Treatments',
    href: '/dash/treatments',
    icon: GoPulse,
    activeIcon: GoPulse,
  },
  {
    label: 'Staff Members',
    href: '/dash/staffs',
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
];

export const Navigation = () => {
  return (
    <ul className="flex flex-col">
      {routes.map(item => {
        const isActive = false;
        const Icon = isActive ? item.activeIcon : item.icon;

        return (
          <Link key={item.href} href={item.href}>
            <div
              className={cn(
                'flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500',
                isActive && 'bg-white shadow-sm hover:opacity-100 text-primary',
              )}
            >
              <Icon className="size-5 text-neutral-500" />
              {item.label}
            </div>
          </Link>
        );
      })}
    </ul>
  );
};
