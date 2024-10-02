import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { CiSearch } from "react-icons/ci";

 
export function InputWithButton() {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
 
  return (
    <div className="hidden relative md:flex w-full max-w-[40rem]">
     <Input
        placeholder="Find Cars Mobiles and more"
        className="rounded-sm !border-t-blue-gray-200 focus:!border-t-gray-900  bg-white "
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={email ? "gray" : "blue-gray"}
        className="!absolute right-0 top-0 h-full rounded-none"
      >
        <CiSearch size={25}/>
      </Button>
    </div>
  );
}