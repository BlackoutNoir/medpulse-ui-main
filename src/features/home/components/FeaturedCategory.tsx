import React from "react";
import { ChevronRight } from "lucide-react"; // Import ChevronRight icon from lucide-react

interface TitleProps {
  title: string;
  link: string;
}

const FeaturedCategory: React.FC<TitleProps> = ({ title, link }) => {
  return (
    <div className="py-4 border-b-[1px] sm:mx-3 flex items-center justify-between">
      <a
        href={link}
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // For security purpose
        className="text-lg text-blue-700 hover:underline hover:text-blue-500 flex-1"
      >
        {title}
      </a>
      <ChevronRight className="text-blue-700" /> {/* Chevron icon */}
    </div>
  );
};

export default FeaturedCategory;
