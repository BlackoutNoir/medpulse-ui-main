import React from "react";
import SectionBtn from "./SectionBtn";
import LocationsCard from "./LocationsCard";

const LocationsSection: React.FC = () => {
  return (
    <section>
      <div className="pt-16 mx-6">
        <h2 className="text-3xl font-semibold pb-3">Locations</h2>
        <p className="text-lg">
          Learn more about Mayo Clinic locations or choose a specific location.
        </p>
        <SectionBtn title="Explore All Locations" />
      </div>
      <div className="mx-6">
        <LocationsCard
          title="Mayo Clinic in Arizona"
          location="Phoenix & Scottsdale"
          cardImage="./images/mayoclinic-arizona.jpg.webp"
          link=""
        />
        <LocationsCard
          title="Mayo Clinic in Florida"
          location="Jacksonville"
          cardImage="./images/mayoclinic-florida.jpeg"
          link=""
        />
        <LocationsCard
          title="Mayo Clinic in Minnesota"
          location="Rochester"
          cardImage="./images/mayoclinic-minnesota.jpg.webp"
          link=""
        />
        <LocationsCard
          title="Mayo Clinic Health System"
          location="Iowa, Minnesota, Wisconsin"
          cardImage="./images/mayoclinic-health-system.jpeg"
          link=""
        />
        <LocationsCard
          title="Mayo Clinic Healthcare"
          location="London, United Kingdom"
          cardImage="./images/mayoclinic-healthcare.avif"
          link=""
        />
      </div>
    </section>
  );
};

export default LocationsSection;
