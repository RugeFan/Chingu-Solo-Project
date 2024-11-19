import React, { memo } from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";

const TopBar = memo(() => {
  return (
    <div className="bg-[#282828] flex justify-between h-[31px]">
      <div className="flex gap-4 items-center flex-grow-1">
        <BiLogoFacebook size={20} color="white" />
        <BiLogoInstagram size={20} color="white" />
        <BiEnvelope size={20} color="white" />
        <div className="ml-3 text-white">All Prices Are in AUD</div>
      </div>
      <div className="text-white flex items-center flex-grow-8">
        <div>Free Shipping over $90</div>
      </div>
      <div className="text-white gap-9 flex items-center justify-center flex-grow-1">
        <div>English</div>
        <div>简体中文</div>
        <div>繁体中文</div>
      </div>
    </div>
  );
});

export default TopBar;
