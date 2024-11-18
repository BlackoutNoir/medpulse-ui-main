import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Search } from "lucide-react";

export default function SearchDropdown() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mt-4 mr-2 w-72">
        <div className="flex flex-col space-y-2">
          <label htmlFor="search" className="text-sm font-medium">
            Search
          </label>
          <div className="relative">
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4" />
            <input
              id="search"
              type="text"
              placeholder="Type to search..."
              className="w-full rounded-md border border-gray-300 px-3 py-2 pl-10 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
