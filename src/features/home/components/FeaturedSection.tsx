import React from "react";
import FeaturedCategory from "./FeaturedCategory";

const FeaturedSection: React.FC = () => {
  return (
    <section>
      <div className="pt-10 mx-5 lg:mx-0">
        {/* Section Header */}
        <div className="pb-5 border-b-[1px] sm:mx-3">
          <h2 className="text-3xl font-semibold pb-3">Featured care areas</h2>
          <p className="text-lg">
            We solve the world's most serious and complex medical challenges.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10 ">
          <FeaturedCategory title="Bone marrow transplant" link="" />
          <FeaturedCategory title="Brain aneurysm" link="" />
          <FeaturedCategory title="Brain tumor" link="" />
          <FeaturedCategory title="Breast cancer" link="" />
          <FeaturedCategory title="Colon cancer" link="" />
          <FeaturedCategory title="Congenital heart disease" link="" />
          <FeaturedCategory title="Glioma" link="" />
          <FeaturedCategory title="Heart arrhythmia" link="" />
          <FeaturedCategory title="Heart valve disease" link="" />
          <FeaturedCategory title="Living-donor transplant" link="" />
          <FeaturedCategory title="Lung transplant" link="" />
          <FeaturedCategory title="Sarcoma" link="" />
          <FeaturedCategory title="Testicular cancer" link="" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
