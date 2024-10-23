import Image from 'next/image';
import Link from 'next/link';

import { StatCard } from '@/features/admin/components/StatCard';
import { columns, Payment } from '@/features/admin/components/columns';
import { DataTable } from '@/features/admin/components/DataTable';

//  .admin-header: @apply sticky top-3 z-20 mx-3 flex items-center justify-between rounded-2xl bg-dark-200 px-[5%] py-5 shadow-lg xl:px-12;
// .admin-main: @apply flex flex-col items-center space-y-6 px-[5%] pb-12 xl:space-y-12 xl:px-12;
// .admin-stat: @apply flex w-full flex-col justify-between gap-5 sm:flex-row xl:gap-10;

// .header text-32-bold md:text-36-bold;
// .sub-header apply text-18-bold md:text-24-bold;
//.container @apply relative flex-1 overflow-y-auto px-[5%];
// .sub-container mx-auto flex size-full flex-col py-10;

//  .text-32-bold: @apply text-[32px] leading-[36px] font-bold;
// .text-36-bold  @apply text-[36px] leading-[40px] font-bold;
// bg-dark-400: 1A1D21
//  .text-16-semibold: apply text-[16px] leading-[20px] font-semibold;


async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      patient: 'John Cena',
      doctor: 'Leila Cameron',
      schedule: 'Jun 28, 2024 9:30AM',
      status: 'pending',
      reason: 'reason lol',
      note: 'note lol',
      userId: 'f25de826',
      cancellationReason: "cancel lol"
    },
  ];
}

const Admin = async () => {
  const data = await getData();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="sticky top-3 z-20 mx-3 flex items-center justify-between rounded-2xl bg-dark-200 px-[5%] py-5 shadow-lg xl:px-12">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/logo.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>

        <p className="text-[16px] leading-[20px] font-semibold">Admin Dashboard</p>
      </header>

      <main className="flex flex-col items-center space-y-6 px-[5%] pb-12 xl:space-y-12 xl:px-12">
        <section className="w-full space-y-4">
          <h1 className="text-[32px] leading-[36px] font-bold md:text-36-bold">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="flex w-full flex-col justify-between gap-5 sm:flex-row xl:gap-1">
          <StatCard
            type="appointments"
            count={5}
            label="Scheduled appointments"
            icon={"/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={10}
            label="Pending appointments"
            icon={"/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={3}
            label="Cancelled appointments"
            icon={"/icons/cancelled.svg"}
          />
        </section>

        <DataTable columns={columns} data={data} />
      </main>
    </div>
  );
};

export default Admin