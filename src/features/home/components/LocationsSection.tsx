import React from 'react';
import LocationsCard from './LocationsCard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const LocationsSection: React.FC = () => {
  return (
    <section className="pt-16 mx-4 sm:mx-6 md:mx-0 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {/* Text Section */}
        <div className="p-4 self-center">
          <h2 className="text-3xl font-semibold pb-3">Locations</h2>
          <p className="text-lg">
            Learn more about MedPulse Clinic locations or choose a specific location.
          </p>
          <Link href="/home/international-patient-services" passHref>
            <Button
              variant="outline"
              className="mt-6 p-6 py-7 border-2 font-normal text-lg border-blue-700 hover:border-blue-600 bg-white text-blue-700 hover:text-blue-600 rounded-3xl hover:bg-white"
            >
              Explore All Locations
            </Button>
          </Link>
        </div>

        {/* Location Cards */}
        <LocationsCard
          title="MedPulse Clinic in Arizona"
          location="Phoenix & Scottsdale"
          cardImage="/images/mayoclinic-arizona.jpg.webp"
          link=""
        />
        <LocationsCard
          title="MedPulse Clinic in Florida"
          location="Jacksonville"
          cardImage="/images/mayoclinic-florida.jpeg"
          link=""
        />
        <LocationsCard
          title="MedPulse Clinic in Minnesota"
          location="Rochester"
          cardImage="/images/mayoclinic-minnesota.jpg.webp"
          link=""
        />
        <LocationsCard
          title="MedPulse Clinic Health System"
          location="Iowa, Minnesota, Wisconsin"
          cardImage="/images/mayoclinic-health-system.jpeg"
          link=""
        />
        <LocationsCard
          title="MedPulse Clinic Healthcare"
          location="London, United Kingdom"
          cardImage="/images/mayoclinic-healthcare.avif"
          link=""
        />
      </div>
    </section>
  );
};

export default LocationsSection;
