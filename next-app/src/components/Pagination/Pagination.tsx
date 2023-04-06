import React, { use, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

const Pagination = ({ total, pageCount }: any, page: [Number]) => {
  const router = useRouter();
  const [number, setNumber] = useState(1);
  const [cur, setCur] = useState(1);

  // console.log("Page", page);

  const pages = [
    { page: number },
    { page: number + 1 },
    { page: number + 2 },
    { page: number + 3 },
    { page: number + 4 },
  ];

  function nextPage() {
    number > 1 && setNumber(cur + 1);
    setCur((pre) => pre + 1);
    console.log("CURRENT", cur);
    router.push(`/?limit=4&page=${cur + 1}`);
    console.log("NUMBER", number);
  }

  function prevPage() {
    setCur((pre) => pre - 1);
    console.log(cur);
    router.push(`/?limit=4&page=${cur - 1}`);
  }

  return (
    <div className="flex rounded-lg font-semibold">
      <button
        onClick={prevPage}
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
        onClick={nextPage}
        className="h-12 border-2  border-red-600
                px-4 rounded-r-lg hover:bg-red-800 hover:text-white text-white"
      >
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Pagination;
