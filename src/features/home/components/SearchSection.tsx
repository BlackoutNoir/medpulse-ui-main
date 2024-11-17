import React from "react";
import { Search } from "lucide-react";

const SearchSection: React.FC = () => {
  const alphabet = "ABCDEFGHIJKLMNOPRSTUVWXYZ".split("");

  return (
    <section className="py-10 mx-7">
      <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-start">
        {/* Alphabet Buttons */}
        <div>
          <h2 className="text-sm font-semibold mb-3">
            Find diseases & conditions by first letter
          </h2>
          <div className="grid justify-center grid-cols-5 gap-3 sm:grid-cols-6 sm:gap-4 lg:grid-cols-7">
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
        </div>

        {/* Search Input */}
        <div className="sm:w-1/2">
          <h2 className="mb-2 text-sm font-semibold">
            Search diseases & conditions
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-4 border border-black text-sm rounded-full pl-12"
            />
            <button className="absolute left-4 top-3 flex items-center">
              <Search className="h-7 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
