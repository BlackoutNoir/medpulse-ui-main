import React from "react";

interface TitleProps {
  title: string;
}

const SectionBtn: React.FC<TitleProps> = ({ title }) => {
  return (
    <button className="mt-6 px-6 py-3 border-2 text-lg border-blue-700 hover:border-blue-600 bg-white text-blue-700 hover:text-blue-600 rounded-3xl">
      {title}
    </button>
  );
};

export default SectionBtn;
