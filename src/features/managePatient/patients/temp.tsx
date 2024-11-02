import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DoctorOverview } from '@/features/dashboard/doctors/overview';
import { PatientOverview } from '@/features/managePatient/patients/overview';

const tabItems = [
  { value: 'patient-info', label: 'Patient Information' },
  { value: 'appointment-history', label: 'Appointment History' },
  { value: 'medical-record', label: 'Medical Record' },
  { value: 'lab-results', label: 'Lab Results' },
  { value: 'current-prescriptions', label: 'Current Prescriptions' },
];

export default async function ManageMedicalPrescriptionPage() {
  const userProfile = await fetchUserProfile(); // Fetch user profile data

  return (
    <>
      <div className="flex flex-col p-4 w-full sm:p-6 md:p-8 lg:flex-1">
        <div className="flex items-center justify-between">
          <div className="space-y-4 p-4">
            <h2 className="text-2xl font-bold tracking-tight">My Profile</h2>
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={userProfile.avatarUrl || "https://github.com/shadcn.png"} alt={userProfile.name || "John Doe"} />
                <AvatarFallback>{userProfile.initials || "JD"}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-lg font-semibold">{userProfile.name || "John Doe"}</p>
                <p className="text-sm text-muted-foreground">@{userProfile.username || "johndoe"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue={tabItems[0].value} className="w-full">
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
              <div className="p-6 bg-card text-card-foreground rounded-lg shadow h-96 overflow-auto">
                <h3 className="text-lg font-semibold mb-4">{item.label}</h3>
                {item.value === 'patient-info' && <PatientOverview />}
                {item.value === 'appointment-history' && <DoctorOverview />}
                {item.value === 'medical-record' && <DoctorOverview />}
                {item.value === 'lab-results' && <PatientOverview />}
                {item.value === 'current-prescriptions' && <PatientOverview />}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
}

// Example async function (fetch data here)
async function fetchUserProfile() {
  return {
    name: "Johnnnnnn Doe",
    username: "johndoe",
    avatarUrl: "https://github.com/shadcn.png",
    initials: "JD",
  };
}
