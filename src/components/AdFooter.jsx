import React from "react";
import bikeWale from "../assets/bikewale.svg";
import cartradeTech from "../assets/cartrade_tech.svg";
import cartrade from "../assets/cartrade.svg";
import carwale from "../assets/carwale.svg";
import olx from "../assets/olx.svg";
import mobility from "../assets/mobility.svg";

const AdFooter = () => {
  return (
    <div className="bg-[#012F35] flex flex-col py-6">
      <div className="grid grid-cols-3 md:grid-cols-6 justify-items-center">
        <img className="h-[96px]" src={cartradeTech} alt="cartradeTech" />
          <img className="h-[60px]" src={olx} alt="olx" />
          <img className="h-[60px]" src={carwale} alt="carwale" />
          <img className="h-[60px]" src={bikeWale} alt="bikeWale" />
          <img className="h-[60px]" src={cartrade} alt="cartradeTech" />
          <img className="h-[60px]" src={mobility} alt="mobility" />
      </div>
      <div className="flex justify-between px-2 md:px-8 text-white mt-7 md:mt-3 lg:mt-0">
        <p>Help-Sitemap</p>
        <p>All rights reserved © 2006-2024 OLX</p>
      </div>
    </div>
  );
};

export default AdFooter;
