//import { Payment, columns } from '@/features/staffs/components/columns';
//import { DataTable } from '@/features/staffs/components/data-table';

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: '728ed52f',
//       amount: 100,
//       status: 'pending',
//       email: 'm@example.com',
//     },
//     {
//       id: '728ed52f',
//       amount: 100,
//       status: 'pending',
//       email: 'm@example.com',
//     },
//     {
//       id: '728ed52f',
//       amount: 100,
//       status: 'pending',
//       email: 'd@example.com',
//     },
//     {
//       id: '728ed52f',
//       amount: 100,
//       status: 'pending',
//       email: 'm@example.com',
//     },
//     {
//       id: '728ed52f',
//       amount: 100,
//       status: 'pending',
//       email: 'f@example.com',
//     },
//     {
//       id: '728ed52f',
//       amount: 100,
//       status: 'pending',
//       email: 'm@example.com',
//     },
//     {
//       id: '728ed52f',
//       amount: 100,
//       status: 'pending',
//       email: 'm@example.com',
//     },
//     {
//       id: '728ed52f',
//       amount: 100,
//       status: 'pending',
//       email: 'm@example.com',
//     },
//     {
//       id: '728ed52f',
//       amount: 300,
//       status: 'pending',
//       email: 'm@example.com',
//     },
//     {
//       id: '728ed52f',
//       amount: 100,
//       status: 'pending',
//       email: 'm@example.com',
//     },
//     {
//       id: '728ed52f',
//       amount: 100,
//       status: 'pending',
//       email: 'm@example.com',
//     },
//     {
//       id: '728ed52f',
//       amount: 400,
//       status: 'pending',
//       email: 'c@example.com',
//     },
//     // ...
//   ];
// }

export default async function StaffsPage() {
  // const data = await getData();

  return (
    <>
      <p>Hello from Staffs Page</p>
      <div className="container mx-auto py-10">
        {/* <DataTable columns={columns} data={data} /> */}
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