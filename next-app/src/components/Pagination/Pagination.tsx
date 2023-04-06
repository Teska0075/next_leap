import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Pagination = () => {
  let [number, setNumber] = useState(1);

  let [cur, setCur] = useState(1);

  const pages = [
    { page: number },
    { page: number + 1 },
    { page: number + 2 },
    { page: number + 3 },
    { page: number + 4 },
  ];

  function handleNext() {
    setNumber(5 + number);
  }

  function handleBack() {
    number > 1 && setNumber(number - 5);
  }

  return (
    <div className="flex rounded-lg font-semibold">
      <button
        onClick={handleBack}
        className="h-12 border-2 border-r-0 border-red-600
                px-4 rounded-l-lg hover:bg-red-800 text-white hover:text-white"
      >
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      {pages.map((pg, i) => (
        <button
          key={i}
          onClick={() => setCur(pg.page)}
          className={`h-12 border-2 border-r-0 border-red-600
                w-12 text-white  ${cur === pg.page && "bg-red-600 text-white"}`}
        >
          {pg.page}
        </button>
      ))}
      <button
        onClick={handleNext}
        className="h-12 border-2  border-red-600
                px-4 rounded-r-lg hover:bg-red-800 hover:text-white text-white"
      >
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Pagination;
