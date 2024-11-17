import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface LocationProps {
  title: string;
  location: string;
  cardImage: string;
  link: string;
}

const LocationsCard: React.FC<LocationProps> = ({ title, location, cardImage, link }) => {
  return (
    <div className="relative h-72 sm:h-60 md:h-56 lg:h-72 w-full rounded-lg shadow-md p-4 mt-4 flex items-end overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src={cardImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.9)] rounded-lg"></div>
      </div>
      <div className="relative text-white py-2 px-2">
        <h2 className="text-2xl font-semibold text-white pb-1 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center"
          >
            {title}
            <ChevronRight className="ml-1 pt-1 h-6 w-6" /> {/* Chevron icon */}
          </Link>
        </h2>
        <p className="text-sm">{location}</p>
      </div>
    </div>
  );
};

export default LocationsCard;
