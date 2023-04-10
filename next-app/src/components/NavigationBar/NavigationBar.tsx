import React from "react";
import Image from "next/image";
import SearchInput from "./SearchInput/SearchInput";
import MenuItems from "./MenuItems/MenuItems";
const NavigationBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image
          src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg"
          width={250}
          height={100}
        />
      </div>
      <SearchInput />
      <MenuItems />
      <div className="bg-green-600 w-full block flex-grow lg:flex lg:items-center lg:w-auto"></div>
    </nav>
  );
};

export default NavigationBar;
