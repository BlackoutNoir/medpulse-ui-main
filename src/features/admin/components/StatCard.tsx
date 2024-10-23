import clsx from "clsx";
import Image from "next/image";

//  .stat-card: flex flex-1 flex-col gap-6 rounded-2xl bg-cover p-6 shadow-lg;
//   .text-14-regular: apply text-[14px] leading-[18px] font-normal;

type StatCardProps = {
  type: "appointments" | "pending" | "cancelled";
  count: number;
  label: string;
  icon: string;
};

export const StatCard = ({ count = 0, label, icon, type }: StatCardProps) => {
  return (
    <div
      className={clsx("flex flex-1 flex-col gap-6 rounded-2xl bg-cover p-6 shadow-lg", {
        "bg-appointments": type === "appointments",
        "bg-pending": type === "pending",
        "bg-cancelled": type === "cancelled",
      })}
    >
      <div className="flex items-center gap-4">
        <Image
          src={icon}
          height={32}
          width={32}
          alt="appointments"
          className="size-8 w-fit"
        />
        <h2 className="text-[32px] leading-[36px] font-bold text-black">{count}</h2>
      </div>

      <p className="apply text-[14px] leading-[18px] font-normal">{label}</p>
    </div>
  );
};
