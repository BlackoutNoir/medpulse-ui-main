import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PatientInfoOverview } from '@/features/managePatient/patientInfo/overview';
import { PatientMedicalOverview } from '@/features/managePatient/medicalRecord/overview';
import { PatientLabResultsOverview } from '@/features/managePatient/labResults/overview';
import { PatientPrescriptionsOverview } from '@/features/managePatient/patientPrescriptions/overview';
import { PatientAppointmentOverview } from '@/features/managePatient/appointments/overview';
import { Search } from '@/features/dashboard/components/search';
import { UserNav } from '@/features/dashboard/components/user-nav';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { Monitor, ClipboardMinus, User, Lock, Settings, Gauge } from 'lucide-react';
import CalendarSchedule from '@/features/managePatient/appointments/calendar-schedule';
import AboutMe from '@/features/managePatient/patientInfo/AboutMe';
import MainFooter from '@/features/home/components/MainFooter';
import PatientRecord from '@/features/managePatient/medicalRecord/PatientRecord';
import PatientResults from '@/features/managePatient/labResults/PatientResults';
import PatientPrescriptions from '@/features/managePatient/patientPrescriptions/Prescriptions';
import { Button } from '@/components/ui/button';

export default async function ManagePatientPage() {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="border-b">
          <div className="hidden md:flex h-16 items-center px-4 justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold whitespace-nowrap">MedPulse Clinic</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Search />
              <UserNav />
              <Link href="/dashboardd/users">
                <Button variant="ghost" asChild className="hover:bg-red-600 hover:text-white">
                  <div>
                    <Gauge />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-4 p-8 pb-16 pt-6 bg-blue-50">
          <div className="flex items-center justify-between space-y-2">
            <div>
              {/* <Avatar className="w-16 h-16">
                <AvatarImage src={'https://github.com/shadcn.png'} alt={'Jane Doe'} />
                <AvatarFallback>{'JD'}</AvatarFallback>
              </Avatar> */}
              <h2 className="text-3xl font-bold tracking-tight mb-2">My Profile</h2>
              <p className="text-muted-foreground">@JaneSmith</p>
            </div>
          </div>
          <Tabs defaultValue="patient-info">
            <TabsList className="bg-blue-100">
              <TabsTrigger value="patient-info">About Me</TabsTrigger>
              <TabsTrigger value="medical-record">Medical Record</TabsTrigger>
              <TabsTrigger value="lab-results">Lab Results</TabsTrigger>
              <TabsTrigger value="current-prescriptions">Current Prescriptions</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
            </TabsList>
            <TabsContent value="patient-info" className="space-y-4 mt-3">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* About Me Section */}
                <div className="lg:col-span-2">
                  <Card className="h-full shadow-sm">
                    <CardContent className="mx-auto">
                      <AboutMe />
                    </CardContent>
                  </Card>
                </div>

                <div className="flex flex-col gap-4 h-full">
                  <Link href="/profile/edit-profile" passHref>
                    <Card className="hover:shadow-md shadow-sm hover:border-blue-700 transition-all cursor-pointer flex-1">
                      <CardHeader className="flex justify-between items-center">
                        <User className="h-6 w-6 text-blue-700" />
                        <div className="text-center">
                          <CardTitle>Edit Profile</CardTitle>
                          <CardDescription>Update your personal details.</CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                  <Link href="/profile/change-password" passHref>
                    <Card className="hover:shadow-md shadow-sm hover:border-blue-700 transition-all cursor-pointer flex-1">
                      <CardHeader className="flex justify-between items-center">
                        <Lock className="h-6 w-6 text-blue-700" />
                        <div className="text-center">
                          <CardTitle>Change Password</CardTitle>
                          <CardDescription>Secure your account.</CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                  <Link href="/find-doctor" passHref>
                    <Card className="hover:shadow-md shadow-sm hover:border-blue-700 transition-all cursor-pointer flex-1">
                      <CardHeader className="flex justify-between items-center">
                        <Monitor className="h-6 w-6 text-blue-700" />
                        <div className="text-center">
                          <CardTitle>Find a Doctor</CardTitle>
                          <CardDescription>Search for specialists.</CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                  <Link href="/profile/settings" passHref>
                    <Card className="hover:shadow-md shadow-sm hover:border-blue-700 transition-all cursor-pointer flex-1">
                      <CardHeader className="flex justify-between items-center">
                        <Settings className="h-6 w-6 text-blue-700" />
                        <div className="text-center">
                          <CardTitle>Settings</CardTitle>
                          <CardDescription>Manage your preferences.</CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="medical-record" className="space-y-4">
              {/* Medical Record Section */}
              <div className="lg:col-span-2">
                <Card className="h-full shadow-sm">
                  <CardContent className="mx-auto">
                    <PatientRecord />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="lab-results" className="space-y-4">
              {/* Lab Results Section */}
              <div className="lg:col-span-2">
                <Card className="h-full shadow-sm">
                  <CardContent className="mx-auto">
                    <PatientResults />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="current-prescriptions" className="space-y-4">
              {/* Prescriptions Section */}
              <div className="lg:col-span-2">
                <Card className="h-full shadow-sm">
                  <CardContent className="mx-auto">
                    <PatientPrescriptions />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="appointments" className="space-y-4 mt-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <Link href="/request-appointment" passHref>
                  <Card className="hover:shadow shadow-sm hover:border-blue-700 transition-all  cursor-pointer">
                    <CardHeader className="flex justify-between items-center">
                      <ClipboardMinus className="h-6 w-6 text-blue-700" />
                      <div>
                        <CardTitle>Request an Appointment</CardTitle>
                        <CardDescription>
                          Schedule an in-person visit with our experts.
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
                <Link href="/book-virtual-appointment" passHref>
                  <Card className="hover:shadow shadow-sm hover:border-blue-700 transition-all cursor-pointer">
                    <CardHeader className="flex justify-between items-center">
                      <Monitor className="h-6 w-6 text-blue-700" />
                      <div>
                        <CardTitle>Book a Virtual Consultation</CardTitle>
                        <CardDescription>
                          Connect with a specialist online at your convenience.
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              </div>

              <div className="">
                <Card className="shadow-sm">
                  {/* <CardHeader className="">
                    <CardTitle className="text-center text-xl">Manage your appointments</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader> */}
                  {/* <CardContent className="mx-auto">
                    <PatientAppointmentOverview />
                  </CardContent> */}
                  <CardContent className="mx-auto">
                    <CalendarSchedule />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <MainFooter />
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
