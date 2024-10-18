import Image from 'next/image';
import Link from 'next/link';

//import { StatCard}  from '@/components/StatCard';
import { columns, User } from './columns';
import { DataTable } from '@/components/table/DataTable';

import AddDoctorForm from '@/features/staffs/components/add-doctor-form';

//.header: text-32-bold md:text-36-bold;
//.admin-header: @apply sticky top-3 z-20 mx-3 flex items-center justify-between rounded-2xl bg-dark-200 px-[5%] py-5 shadow-lg xl:px-12;
//.admin-main: @apply flex flex-col items-center space-y-6 px-[5%] pb-12 xl:space-y-12 xl:px-12;
//.admin-stat: @apply flex w-full flex-col justify-between gap-5 sm:flex-row xl:gap-10;

async function getUsers(): Promise<User[]> {
  const res = await fetch('https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users');
  const data = await res.json();
  return data;
}

const StaffsPage = async () => {
  const data = await getUsers();

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
          <h1 className="text-32-bold md:text-36-bold">Welcome 👋</h1>
          <p className="text-dark-700">Start the day with managing new appointments</p>
        </section>

        {/* add section for StatCards here*/}
        <AddDoctorForm />

        <DataTable columns={columns} data={data} />
      </main>
    </div>
  );
};
export default StaffsPage;

/*
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
*/
