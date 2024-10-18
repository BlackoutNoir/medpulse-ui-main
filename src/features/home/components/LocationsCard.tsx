import React from "react";

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
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0.9)), url(${cardImage})`,
      }}
      className="bg-cover bg-center h-80 w-full rounded-lg shadow-md p-4 my-4 flex items-end"
    >
      <div className="text-white py-2 px-2">
        <h2 className="text-2xl font-semibold text-white pb-1">
          <a
            href={link}
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // For security purpose
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
