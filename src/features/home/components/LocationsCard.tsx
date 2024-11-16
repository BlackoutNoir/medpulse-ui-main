import React from "react";
import Image from "next/image";

interface LocationProps {
  title: string;
  location: string;
  cardImage: string;
  link: string;
}

const LocationsCard: React.FC<LocationProps> = ({
  title,
  location,
  cardImage,
  link,
}) => {
  return (
    <div className="relative h-80 w-full rounded-lg shadow-md p-4 my-4 flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src={cardImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.9)] rounded-lg"></div>
      </div>

      <div className="relative text-white py-2 px-2">
        <h2 className="text-2xl font-semibold text-white pb-1">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {title}
          </a>
        </h2>
        <p className="text-sm">{location}</p>
      </div>
    </div>
  );
};

export default LocationsCard;
