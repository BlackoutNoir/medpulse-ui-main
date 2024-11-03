'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import AddContactButton from './AddContactButton';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, UserPlus2, Home } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Image from 'next/image';

const ChatNav = () => {

  return (
    <nav className="bg-white border-b p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="logo" width={152} height={56} />
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex space-x-2 mr-4">
          <AddContactButton className="hover:bg-blue-700 hover:text-white shadow-none transition-all ease-in-out duration-300"/>
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-blue-700 hover:text-white shadow-none transition-all ease-in-out duration-300"
          >
            <UserPlus2 className="h-4 w-4" />
            Contact Requests
          </Button>
        </div>

        {/* Menu Trigger Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden rounded-3xl">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>

          {/* Menu Content */}
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Quick actions for your chat app.</SheetDescription>
            </SheetHeader>
            <div className="mt-4 space-y-4">
              <Button
                variant="outline"
                className="w-full justify-start bg-blue-700 text-white hover:bg-blue-800 hover:text-white shadow-none transition-all ease-in-out duration-300"
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
              <AddContactButton className="bg-blue-700 text-white hover:bg-blue-800 hover:text-white shadow-none transition-all ease-in-out duration-300"/>
              <Button
                variant="outline"
                className="w-full justify-start bg-blue-700 text-white hover:bg-blue-800 hover:text-white shadow-none transition-all ease-in-out duration-300"
              >
                <UserPlus2 className="mr-2 h-4 w-4" />
                Contact Requests
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Modal for Adding Contact */}
      {/* {isModalOpen && (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" onClick={() => setIsModalOpen(!isModalOpen)}>
              <UserPlus className="h-4 w-4" />
              Add a Contact
            </Button>
          </PopoverTrigger>
          <PopoverContent className="mt-1 shadow">
            <div className="space-y-2">
              <h3 className="font-semibold">Add a Contact</h3>
              <p>Enter the email of the contact to add:</p>
              <Input
                type="email"
                placeholder="Contact Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded p-2"
              />
              <Button
                variant="outline"
                className="w-full justify-start bg-blue-700 text-white hover:bg-blue-800 hover:text-white shadow-none"
                onClick={handleAddContact}
              >
                Add Contact
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      )} */}
    </nav>
  );
};

export default ChatNav;
