import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const SearchInput = () => {
  return (
    <div className="xl:w-96">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch rounded-full border border-solid border-neutral-300 bg-neutral-950/50 ">
        <span
          className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
          id="basic-addon2"
        >
          <MagnifyingGlassIcon className="h-5 w-5 text-white" />
        </span>

        <input
          type="search"
          className="relative m-0 block w-96 min-w-0 flex-auto  bg-transparent bg-clip-padding  py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
          placeholder="Search moveis, TV, actors, more..."
          aria-label="Search"
          aria-describedby="button-addon2"
        />
      </div>
    </div>
  );
};

export default SearchInput;
