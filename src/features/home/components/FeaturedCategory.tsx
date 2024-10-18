import React from "react";

interface TitleProps {
  title: string;
  link: string;
}

const FeaturedCategory: React.FC<TitleProps> = ({ title, link }) => {
  return (
    <div className="py-4 border-b-[1px] ">
      <a
        href={link}
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // For security purpose
        className="text-lg text-blue-700 hover:underline hover:text-blue-500"
      >
        {title}
      </a>
    </div>
  );
};

export default FeaturedCategory;
