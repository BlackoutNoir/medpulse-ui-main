import React from "react";

const SearchSection: React.FC = () => {
  const alphabet = "ABCDEFGHIJKLMNOPRSTUVWXYZ".split("");
  return (
    <section className="py-10 mx-7">
      <h2 className="text-sm font-semibold mb-3">
        Find diseases & conditions by first letter
      </h2>
      <div className="grid justify-center grid-cols-5 gap-3 mb-8 ">
        {alphabet.map((letter) => (
          <button
            key={letter}
            className="w-12 h-12 border font-semibold border-blue-300 hover:border-blue-500 rounded-full text-sm text-blue-700 hover:text-blue-500"
          >
            {letter}
          </button>
        ))}
        <button className="w-12 h-12 border font-semibold border-blue-300 hover:border-blue-500 rounded-full text-sm text-blue-700 hover:text-blue-500">
          #
        </button>
      </div>
      <div className="relative w-auto mb-8">
        <h2 className="mb-2 text-sm">Search diseases & conditions</h2>
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-4 border border-black text-sm rounded-full"
          /* TODO: Add search icon */
        />
        <button className="absolute right-4 top-3"></button>
      </div>
    </section>
  );
};

export default SearchSection;
