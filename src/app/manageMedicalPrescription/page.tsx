'use client';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const tabItems = [
  { value: 'patient-info', label: 'Patient Information' },
  { value: 'appointment-history', label: 'Appointment History' },
  { value: 'medical-record', label: 'Medical Record' },
  { value: 'lab-results', label: 'Lab Results' },
  { value: 'current-prescriptions', label: 'Current Prescriptions' },
];

const ManageMedicalPrescriptionPage = () => {
  const [activeTab, setActiveTab] = useState(tabItems[0].value);

  return (
    <>
      <div className="flex flex-col p-4 w-full sm:p-6 md:p-8 lg:flex-1">
        <div className="flex items-center justify-between">
          <div className="space-y-4 p-4">
            <h2 className="text-2xl font-bold tracking-tight">My Profile</h2>
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://github.com/shadcn.png" alt="John Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-lg font-semibold">John Doe</p>
                <p className="text-sm text-muted-foreground">@johndoe</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="block md:hidden mb-6">
          <Select value={activeTab} onValueChange={setActiveTab}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a tab" />
            </SelectTrigger>
            <SelectContent>
              {tabItems.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="hidden md:flex w-full justify-start lg:justify-center flex-wrap">
            {tabItems.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="flex-1 text-center min-w-[120px] lg:flex-initial lg:min-w-[150px]"
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabItems.map((item) => (
            <TabsContent key={item.value} value={item.value} className="mt-6">
              <div className="p-6 bg-card text-card-foreground rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">{item.label}</h3>
                <p className="text-muted-foreground">
                  {item.value === 'patient-info' &&
                    "View and update patient's personal and contact information here."}
                  {item.value === 'appointment-history' &&
                    'Review past appointments and schedule new ones.'}
                  {item.value === 'medical-record' &&
                    'Access comprehensive medical history and treatment plans.'}
                  {item.value === 'lab-results' &&
                    'View and interpret recent laboratory test results.'}
                  {item.value === 'current-prescriptions' &&
                    'Manage and review current medication prescriptions.'}
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default ManageMedicalPrescriptionPage;
