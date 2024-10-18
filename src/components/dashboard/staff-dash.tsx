import Image from 'next/image';
import Link from 'next/link';

import { StatCard}  from '@/components/dashboard/StatCard';
import { columns, Payment } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";

//  .admin-header: @apply sticky top-3 z-20 mx-3 flex items-center justify-between rounded-2xl bg-dark-200 px-[5%] py-5 shadow-lg xl:px-12;
// .admin-main: @apply flex flex-col items-center space-y-6 px-[5%] pb-12 xl:space-y-12 xl:px-12;
// .admin-stat: @apply flex w-full flex-col justify-between gap-5 sm:flex-row xl:gap-10;

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ]
}

const StaffDash = async () => {
  const data = await getData();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="sticky top-3 z-20 mx-3 flex items-center justify-between rounded-2xl bg-dark-200 px-[5%] py-5 shadow-lg xl:px-12">
        <Link href="/" className="cursor-pointer">
          <Image src="/logo.svg" height={32} width={162} alt="logo" className="h-8 w-fit" />
        </Link>

        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="flex flex-col items-center space-y-6 px-[5%] pb-12 xl:space-y-12 xl:px-12;">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">Start the day with managing new appointments</p>
        </section>

        <section className="flex w-full flex-col justify-between gap-5 sm:flex-row xl:gap-10">
          <StatCard
            type="appointments"
            count={5}
            label="Scheduled appointments"
            icon={"/logo.svg"}
            // icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={10}
            label="Pending appointments"
            icon={"/logo.svg"}
            // icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={2}
            label="Cancelled appointments"
            icon={"/logo.svg"}
            // icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <DataTable columns={columns} data={data} />
      </main>
    </div>
  );
};

export default StaffDash;
