import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PatientOverview } from '@/features/dashboard/patients/overview';
import { PatientMedicalOverview } from '@/features/managePatient/medicalRecord/overview';
import { PatientAppointmentOverview } from '@/features/managePatient/appointments/overview';
import { Search } from '@/features/dashboard/components/search';
import { UserNav } from '@/features/dashboard/components/user-nav';
import { PatientsStatCards } from '@/features/managePatient/patients/stat-cards';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default async function ManagePatientPage() {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="border-b">
          <div className="hidden md:flex h-16 items-center px-4">
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <Avatar className="w-16 h-16">
                <AvatarImage src={'https://github.com/shadcn.png'} alt={'John Doe'} />
                <AvatarFallback>{'JD'}</AvatarFallback>
              </Avatar>
              <h2 className="text-3xl font-bold tracking-tight">My Profile</h2>
              <p className="text-muted-foreground">@JohnDoe</p>
            </div>
          </div>

          <Tabs>
            <TabsList>
              <TabsTrigger value="patient-info">My Information</TabsTrigger>
              <TabsTrigger value="medical-record">Medical Record</TabsTrigger>
              <TabsTrigger value="lab-results">Lab Results</TabsTrigger>
              <TabsTrigger value="current-prescriptions">Current Prescriptions</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
            </TabsList>
            <TabsContent value="patient-info" className="space-y-4">
              <div className="">
                <Card className="">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                    <CardDescription>Here&apos;s your most relevant information!</CardDescription>
                  </CardHeader>
                  <CardContent className="mx-auto">
                    <PatientsStatCards />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="medical-record" className="space-y-4">
              <PatientsStatCards />
              <div className="">
                <Card className="">
                  <CardHeader>
                    <CardTitle>Medical Record</CardTitle>
                    <CardDescription>View your medical record.</CardDescription>
                  </CardHeader>
                  <CardContent className="mx-auto">
                    <PatientMedicalOverview />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="lab-results" className="space-y-4">
              <PatientsStatCards />
              <div className="">
                <Card className="">
                  <CardHeader>
                    <CardTitle>Lab Results</CardTitle>
                    <CardDescription>View your lab results.</CardDescription>
                  </CardHeader>
                  <CardContent className="mx-auto">
                    <PatientOverview />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="current-prescriptions" className="space-y-4">
              <div className="">
                <Card className="">
                  <CardHeader>
                    <CardTitle>Current Prescriptions</CardTitle>
                    <CardDescription>View your currently prescribed medicine.</CardDescription>
                  </CardHeader>
                  <CardContent className="mx-auto">
                    <PatientOverview />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="appointments" className="space-y-4">
              <div className="">
                <Card className="">
                  <CardHeader>
                    <CardTitle>Appointments Overview</CardTitle>
                    <CardDescription>Manage your appointments.</CardDescription>
                  </CardHeader>
                  <CardContent className="mx-auto">
                    <PatientAppointmentOverview />
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

/*
CSS (JSMastery Health platform):
  .data-table {
    @apply z-10 w-full overflow-hidden rounded-lg border border-dark-400 shadow-lg;
  }

  .table-actions {
    @apply flex w-full items-center justify-between space-x-2 p-4;
  }

*/
