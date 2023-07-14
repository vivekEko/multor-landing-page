// react and next
import React from "react";
import Image from "next/image";

// assets
import image from "../../assets/sixthSection.jpg";

const SixthSection = () => {
  return (
    <section className="flex flex-col sm:flex-row gap-20 p-5  w-full max-w-[400px] sm:max-w-none  mx-auto md:max-w-[1000px]  items-center py-32">
      {/* Image container */}
      <div className="flex-1">
        <Image alt="" src={image} />
      </div>

      <div className="flex-1 space-y-5">
        <h2 className="font-semibold text-sm text-[#00c2c5] uppercase">
          About
        </h2>

        <h1 className="text-3xl font-semibold">
          Some more information about your business
        </h1>

        <p>
          Share a little about yourself as a business owner, or maybe describe
          what makes your service unique. Give visitors one more reason to care
          about your offer and want to work with you.
        </p>
      </div>
    </section>
  );
};

export default SixthSection;
