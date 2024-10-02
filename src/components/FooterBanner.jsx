import React from "react";
import FtBanner from "../assets/ad1.png";
import Playstore from "../assets/playstore.png";
import Appstore from "../assets/appstore.png";
import { Typography } from "@material-tailwind/react";

const FooterBanner = () => {
  return (
    <div className="bg-[#F7F8F9] flex flex-col gap-4 md:gap-0 md:flex-row justify-around px-8 py-4 md:py-8  my-6">
      <div className="">
        <img src={FtBanner} alt="footer banner" />
      </div>
      <div className="flex flex-col justify-center">
        <Typography variant="h2" >TRY THE OLX APP</Typography>
        <p className="text-lg">
          Buy, sell and find just about anything using the app on your mobile.
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-center "
      >
        <p className="font-bold text-center">GET YOUR APP TODAY</p>
        <div className="flex flex-col gap-2 items-center">
  <img className="w-34 h-auto" src={Appstore} alt="app store" />
  <img className="w-34 h-auto" src={Playstore} alt="play store" />
</div>
      </div>
    </div>
  );
};

export default FooterBanner;
