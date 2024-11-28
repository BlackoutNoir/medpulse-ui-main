import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { MainNav } from '@/features/dashboard/components/main-nav';
import { UserOverview } from '@/features/dashboard/users/overview';
import { DoctorOverview } from '@/features/dashboard/doctors/overview';
import { PatientOverview } from '@/features/dashboard/patients/overview';
import { AppointmentOverview } from '@/features/dashboard/appointments/overview';

import { Search } from '@/features/dashboard/components/search';
import TeamSwitcher from '@/features/dashboard/components/team-switcher';
import { UserNav } from '@/features/dashboard/components/user-nav';
import { DoctorsStatCards } from '@/features/dashboard/doctors/stat-cards';
import { PatientsStatCards } from '@/features/dashboard/patients/stat-cards';

export default async function CreationPage() {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="border-b">
          <div className="hidden md:flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              <p className="text-muted-foreground">
                Here&apos;s the list of users for your organization!
              </p>
            </div>
            <Button>Download</Button>
          </div>

          <Tabs>
            <TabsList>
              <TabsTrigger value="users">All</TabsTrigger>
              <TabsTrigger value="doctors">Doctors</TabsTrigger>
              <TabsTrigger value="patients">Patients</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
            </TabsList>
            <TabsContent value="users" className="space-y-4">
              <DoctorsStatCards />
              <div className="">
                <Card className="">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                    <CardDescription>See list of Users.</CardDescription>
                  </CardHeader>
                  <CardContent className="mx-auto">
                    <UserOverview />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="doctors" className="space-y-4">
              <DoctorsStatCards />
              <div className="">
                <Card className="">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                    <CardDescription>See list of Doctors.</CardDescription>
                  </CardHeader>
                  <CardContent className="mx-auto">
                    <DoctorOverview />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="patients" className="space-y-4">
              <PatientsStatCards />
              <div className="">
                <Card className="">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                    <CardDescription>See list of Patients.</CardDescription>
                  </CardHeader>
                  <CardContent className="mx-auto">
                    <PatientOverview />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="appointments" className="space-y-4">
              <DoctorsStatCards />
              <div className="">
                <Card className="">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                    <CardDescription>See list of Appointments.</CardDescription>
                  </CardHeader>
                  <CardContent className="mx-auto">
                    <AppointmentOverview />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
