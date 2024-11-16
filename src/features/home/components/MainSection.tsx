import React from 'react';
import SectionBtn from './SectionBtn';
import LocationsSection from './LocationsSection';
import FeaturedSection from './FeaturedSection';
import Image from 'next/image';

const MainSection: React.FC = () => {
  return (
    <section>
      <div className="py-8 mx-6 border-t-2">
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
            Mayo Clinic has more No. 1 rankings than any other hospital in the nation according to
            U.S. News & World Report.{' '}
            <a className="text-blue-700 underline hover:text-blue-500">
              {' '}
              Learn more about our top-ranked specialties.
            </a>
          </p>
        </div>
        <SectionBtn title="Why choose Mayo Clinic" />
      </div>
      <Image
        src="/images/healing-starts-here.jpg"
        referrerPolicy="no-referrer"
        alt="Image 1"
        width={450}
        height={48}
      />
      <div className="py-10 mx-6">
        <h2 className="text-3xl font-semibold pb-3">World-class care for global patients</h2>
        <p className="text-lg">
          We make it easy for patients around the world to get care from Mayo Clinic.
        </p>
        <SectionBtn title="International services" />
      </div>
      <Image 
      src="/images/world-class-care.jpg"
      referrerPolicy="no-referrer"
      alt="Image 2"
      width={450}
      height={48} />
      <LocationsSection />
      <FeaturedSection />
    </section>
  );
};

export default MainSection;
