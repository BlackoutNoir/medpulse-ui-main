//import { MainNav } from '@/features/dashboard/components/main-nav';
//import { Search } from '@/features/dashboard/components/search';
//import TeamSwitcher from '@/features/dashboard/components/team-switcher';
//import { UserNav } from '@/features/dashboard/components/user-nav';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { DoctorOverview } from '@/features/dashboard/doctors/overview';
import { PatientOverview } from '@/features/dashboard/patients/overview';
import { DoctorsStatCards } from '@/features/dashboard/doctors/stat-cards';
import { PatientsStatCards } from '@/features/dashboard/patients/stat-cards';
import DemoOverview from '@/features/dashboard/payments/overview';

export default function Page() {
  return (
    <>
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
          <TabsTrigger value="demo">Demo</TabsTrigger>
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
                <DoctorOverview />
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
        <TabsContent value="demo" className="space-y-4">
          <DoctorsStatCards />
          <div className="">
            <Card className="">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardDescription>See list of Doctors.</CardDescription>
              </CardHeader>
              <CardContent className="mx-auto">
                <DemoOverview />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
