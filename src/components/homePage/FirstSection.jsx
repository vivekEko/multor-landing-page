// react and next
import React from "react";
import Image from "next/image";
// assets
import hero_bg from "../../assets/hero_bg.webp";
import logo from "../../assets/logo.svg";

const FirstSection = () => {
  return (
    <section className="max-h-[80vh] sm:max-h-none  relative ">
      {/* background image */}
      <Image
        fill
        className={` object-left sm:object-top  object-cover pointer-events-none z-[-10]`}
        src={hero_bg}
        alt="bg image"
        priority
      />

      {/* main content */}
      <div className="p-5 sm:pt-20 md:p-10 flex flex-col gap-10 sm:gap-16  pb-32 md:pb-44 w-full max-w-[400px] sm:max-w-none  mx-auto md:max-w-[1000px] ">
        <Image src={logo} alt="logo" priority />

        <h1 className="text-5xl sm:text-[5rem] leading-none font-semibold max-w-[600px] tracking-tighter">
          Describe the value of booking an appointment
        </h1>

        <p className=" text-xl max-w-[600px]">
          No need to get clever. Tell people exactly what you&apos; re offering,
          then use this space to communicate your key value proposition.
        </p>
      </div>
    </section>
  );
};

export default FirstSection;
