import React from 'react';
import LocationsSection from './LocationsSection';
import FeaturedSection from './FeaturedSection';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SearchSection from './SearchSection';

const MainSection: React.FC = () => {
  return (
    <section className="md:mx-5 md:px-5 lg:mx-14 lg:px-14 xl:mx-18 xl:px-18">
      <SearchSection />

      {/* First Section */}
      <div className="pt-12 pb-6 mx-6 border-t-2 md:mx-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <Image
              src="/images/healing-starts-here.jpg"
              referrerPolicy="no-referrer"
              alt="Healing starts here"
              width={400}
              height={400}
              className="w-full rounded-lg md:h-4/6"
            />
          </div>
          {/* Text */}
          <div className="order-1 md:order-2 p-12">
            <h2 className="text-3xl font-semibold pb-3">Healing starts here</h2>
            <div className="py-3">
              <h3 className="text-lg font-semibold">The right answers the first time</h3>
              <p className="text-lg">
                Effective treatment depends on getting the right diagnosis. Our experts diagnose and
                treat the toughest medical challenges.
              </p>
            </div>
            <div className="py-3">
              <h3 className="text-lg font-semibold py-1">Top-ranked in the U.S.</h3>
              <p className="text-lg">
                MedPulse Clinic has more No. 1 rankings than any other hospital in the nation according
                to U.S. News & World Report.{' '}
                <a className="text-blue-700 underline hover:text-blue-500">
                  Learn more about our top-ranked specialties.
                </a>
              </p>
            </div>
            <Link href="/home/patient-centered-care" passHref>
              <Button
                variant="outline"
                className="mt-6 p-6 py-7 border-2 font-normal text-lg border-blue-700 hover:border-blue-600 bg-white text-blue-700 hover:text-blue-600 rounded-3xl hover:bg-white"
              >
                Why choose MedPulse Clinic
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="pb-2 pt-6 mx-6 md:mx-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image */}
          <div className="order-2 md:order-2">
            <Image
              src="/images/world-class-care.jpg"
              referrerPolicy="no-referrer"
              alt="World-class care"
              width={400}
              height={400} 
              className="w-full rounded-lg md:h-4/6"
            />
          </div>
          {/* Text */}
          <div className="order-1 md:order-1 p-12">
            <h2 className="text-3xl font-semibold pb-3">World-class care for global patients</h2>
            <p className="text-lg">
              We make it easy for patients around the world to get care from MedPulse Clinic.
            </p>
            <Link href="/home/international-patient-services" passHref>
              <Button
                variant="outline"
                className="mt-6 p-6 py-7 border-2 font-normal text-lg border-blue-700 hover:border-blue-600 bg-white text-blue-700 hover:text-blue-600 rounded-3xl hover:bg-white"
              >
                International services
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <LocationsSection />
      <FeaturedSection />
    </section>
  );
};

export default MainSection;
