// react and next
import Image from "next/image";
import React from "react";

// assets
import logo_white from "../../assets/logo_white.svg";

const Footer = () => {
  return (
    <footer className="bg-accentColor">
      <div className=" w-full  sm:max-w-none  mx-auto md:max-w-[1000px]  p-20 flex flex-col sm:flex-row  justify-between items-center gap-10">
        <Image className="opacity-50" src={logo_white} alt="logo light" />

        <p className="text-[#a2acac] text-sm text-center sm:text-right ">
          © 2020 Insert Name Here. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
