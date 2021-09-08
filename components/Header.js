import React, { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";

// react-date-range files
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  const selectRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelection = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    setSearchInput("");
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:px-10">
      {/* left section */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle section */}
      <div className="flex items-center  md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search"}
          value={searchInput}
          onChange={({ target }) => setSearchInput(target.value)}
        />
        <SearchIcon className="hidden md:inline-flex h-6 bg-red-400 text-white rounded-full p-1 mx-2 cursor-pointer" />
      </div>

      {/* right section */}
      <div className="flex items-center justify-end space-x-3 text-gray-700">
        <div className="p-2 cursor-pointer rounded-full hidden lg:inline-flex hover:bg-gray-300">
          <p className="cursor-pointer">Become a host</p>
        </div>
        <div className="p-3 cursor-pointer rounded-full hover:bg-gray-300 ">
          <GlobeAltIcon className="h-6" />
        </div>

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelection}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UserIcon className="h-5" />
            <input
              value={numberOfGuests}
              onChange={({ target }) => setNumberOfGuests(target.value)}
              min="1"
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-500">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
