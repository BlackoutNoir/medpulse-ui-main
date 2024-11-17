'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Calendar,
  ChevronDown,
  Heart,
  Menu,
  Search,
  Stethoscope,
  User,
  WormIcon as Virus2,
  X,
} from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export default function HomeNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isLargeScreen = useMediaQuery({ minWidth: 1200 });

  const mainNavItems = [
    {
      title: 'Care at MedPulse Clinic',
      items: [
        { title: 'Patient-Centered Care', href: '#' },
        { title: 'About MedPulse Clinic', href: '#' },
        { title: 'Request Appointment', href: '#' },
        { title: 'Find a Doctor', href: '#' },
        { title: 'Locations', href: '#' },
        { title: 'Clinical Trials', href: '#' },
      ],
    },
    {
      title: 'Health Library',
      items: [
        { title: 'Diseases & Conditions', href: '#' },
        { title: 'Symptoms', href: '#' },
        { title: 'Tests & Procedures', href: '#' },
        { title: 'Drugs & Supplements', href: '#' },
      ],
    },
    {
      title: 'For Medical Professionals',
      items: [
        { title: 'Professional Services', href: '#' },
        { title: 'Medical Education', href: '#' },
        { title: 'Research', href: '#' },
      ],
    },
    {
      title: 'Research & Education',
      items: [
        { title: 'Research Centers', href: '#' },
        { title: 'Education Centers', href: '#' },
        { title: 'Laboratories', href: '#' },
      ],
    },
    {
      title: 'Giving',
      items: [
        { title: 'Give Now', href: '#' },
        { title: 'Contact Development', href: '#' },
        { title: 'Ways to Give', href: '#' },
      ],
    },
  ];

  const quickActions = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Request appointment',
      href: '#',
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Donate',
      href: '#',
    },
    {
      icon: <Virus2 className="h-6 w-6" />,
      title: 'Diseases & conditions',
      href: '#',
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: 'Find a doctor',
      href: '#',
    },
  ];

  return (
    <header className="border-b ">
      <div className="container flex h-16 items-center justify-between px-4 max-w-[1400px] mx-auto ">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold whitespace-nowrap">MedPulse Clinic</span>
          </Link>
        </div>

        {/* Middle Section: Navigation Menu */}
        {isLargeScreen && (
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex-wrap my-3 ">
              {mainNavItems.map(item => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger className="text-sm px-2">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {/* Adjusted width of the list container */}
                    <ul className="grid w-[600px] gap-3 p-2 md:w-[700px] md:grid-cols-2 lg:w-[762px]">
                      {item.items.map(subItem => (
                        <li key={subItem.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={subItem.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:underline hover:text-blue-700 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {subItem.title}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        )}

        {/* Right Section: Buttons */}
        <div className="flex items-center gap-2">
          {/* "Request Appointment" button visible from 600px and up */}
          {!isMobile && (
            <Button variant="ghost" className="hidden sm:inline-flex text-sm whitespace-nowrap">
              Request Appointment
            </Button>
          )}

          {/* User Icon */}
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">User account</span>
          </Button>

          {/* Search Icon */}
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Menu Button: Hidden at 1200px and up */}
          {!isLargeScreen && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:max-w-lg">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                  {quickActions.map(action => (
                    <Link
                      key={action.title}
                      href={action.href}
                      className="flex flex-col items-center justify-center gap-2 rounded-lg bg-blue-600 p-4 text-center text-white"
                    >
                      {action.icon}
                      <span className="text-sm">{action.title}</span>
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col py-4">
                  {mainNavItems.map(section => (
                    <DropdownMenu key={section.title}>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex w-full justify-between">
                          {section.title}
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="start"
                        className="w-[--radix-dropdown-menu-trigger-width]"
                      >
                        {section.items.map(item => (
                          <DropdownMenuItem key={item.title} asChild>
                            <Link href={item.href}>{item.title}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
