import React from "react";
import FeaturedCategory from "./FeaturedCategory";

const FeaturedSection: React.FC = () => {
  return (
    <section>
      <div className="pt-10 mx-6">
        <div className="pb-5 border-b-[1px]">
          <h2 className="text-3xl font-semibold pb-3">Featured care areas</h2>
          <p className="text-lg">
            We solve the world's most serious and complex medical challenges.
          </p>
        </div>
        <div className="mb-10">
          <FeaturedCategory title="Bone marrow transparent" link="" />
          <FeaturedCategory title="Brain aneurysm" link="" />
          <FeaturedCategory title="Brain tumor" link="" />
          <FeaturedCategory title="Breast cancer" link="" />
          <FeaturedCategory title="Colon cancer" link="" />
          <FeaturedCategory title="Congenital heart disease" link="" />
          <FeaturedCategory title="Giloma" link="" />
          <FeaturedCategory title="Heart arrhythmia" link="" />
          <FeaturedCategory title="Heart valve disease" link="" />
          <FeaturedCategory title="Living-dobor transplant" link="" />
          <FeaturedCategory title="Lung transplant" link="" />
          <FeaturedCategory title="Sarcoma" link="" />
          <FeaturedCategory title="Testicular cancer" link="" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
