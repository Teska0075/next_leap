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
    setNumber(++number);
  }
  function handleBack() {
    number > 1 && setNumber(--number);
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
                px-4 rounded-r-lg hover:bg-red-600 hover:text-white text-white"
      >
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};
// {
//   return (
//     <div className="flex items-center justify-center  px-4 py-3 sm:px-6">
//       <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
//         <div>
//           <nav
//             className="isolate inline-flex -space-x-px rounded-md shadow-sm"
//             aria-label="Pagination"
//           >
//             <a
//               href="#"
//               className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-red-950 focus:z-20 focus:outline-offset-0"
//             >
//               <span className="sr-only">Previous</span>
//               <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
//             </a>
//             {/* Current: "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600", Default: "text-white ring-1 ring-inset ring-gray-300 hover:bg-red-950 focus:outline-offset-0" */}
//             <a
//               href="#"
//               aria-current="page"
//               className="relative z-10 inline-flex items-center bg-red-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
//             >
//               1
//             </a>
//             <a
//               href="#"
//               className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-red-950 focus:z-20 focus:outline-offset-0"
//             >
//               2
//             </a>
//             <a
//               href="#"
//               className="relative hidden items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-red-950 focus:z-20 focus:outline-offset-0 md:inline-flex"
//             >
//               3
//             </a>
//             <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
//               ...
//             </span>
//             <a
//               href="#"
//               className="relative hidden items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-red-950 focus:z-20 focus:outline-offset-0 md:inline-flex"
//             >
//               8
//             </a>
//             <a
//               href="#"
//               className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-red-950 focus:z-20 focus:outline-offset-0"
//             >
//               9
//             </a>
//             <a
//               href="#"
//               className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-red-950 focus:z-20 focus:outline-offset-0"
//             >
//               10
//             </a>
//             <a
//               href="#"
//               className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-red-950 focus:z-20 focus:outline-offset-0"
//             >
//               <span className="sr-only">Next</span>
//               <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
//             </a>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Pagination;
