import React from "react";
import { useCountries } from "use-react-countries";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";


 
export function InputWithDropdown() {
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const { name, flags, countryCallingCode } = countries[country];
  
 
  return (
    <div className="hidden relative md:flex items-center w-full max-w-[18rem] ">
      <Input
        placeholder="Select Country"
        className="rounded-sm !border-t-blue-gray-200 focus:!border-t-gray-900  bg-white pl-10"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
    <CiSearch size={25} className="absolute left-2"/>
    <FaAngleDown size={25} className="absolute right-2"/>
    
    </div>
  );
}