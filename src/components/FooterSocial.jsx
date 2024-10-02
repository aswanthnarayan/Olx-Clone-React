import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import Playstore from "../assets/playstore.png";
import Appstore from "../assets/appstore.png";

const FooterSocial = () => {
  return (
    <div className="bg-[#F7F8F9] py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-5 p-2 mb-6">
      <ul>
        <li className="font-bold mb-3">Popular Locations</li>
        <li>Kolkata</li>
        <li>Mumbai</li>
        <li>Chennai</li>
        <li>Pune</li>
      </ul>
      <ul>
        <li className="font-bold mb-3">Trending Locations</li>
        <li>Bhubaneshwar</li>
        <li>Hyderabad</li>
        <li>Chandigarh</li>
        <li>Nashik</li>
      </ul>
      <ul>
        <li className="font-bold mb-3">Abhout Us</li>
        <li>Tech@OLX</li>
      </ul>
      <ul>
        <li className="font-bold mb-3">OLX</li>
        <li>Blog</li>
        <li>Sitemap</li>
        <li>Legal & Privacy information</li>
        <li>Vulnerability Disclosure Program</li>
      </ul>
      <div className="ml-auto">
        <p className="font-bold mb-1">FOLLOW US</p>

        <div className="flex gap-[15px] mb-6">
          <FaXTwitter size={30} />
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaYoutube size={30} />
        </div>
        <div className="flex gap-2 items-center ">
          <img className="w-20" src={Appstore} alt="app store" />
          <img className="w-20" src={Playstore} alt="play store" />
        </div>
      </div>
    </div>
  );
};

export default FooterSocial;
