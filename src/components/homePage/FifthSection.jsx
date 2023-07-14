// react and next
import React from "react";
import Image from "next/image";

// assets
import feature1 from "../../assets/feature1.jpg";
import feature2 from "../../assets/feature2.jpg";
import feature3 from "../../assets/feature3.jpg";

const FifthSection = () => {
  // static data
  const featureData = [
    {
      id: 1,
      img: feature1,
      title: "Feature 1",
      desc: "Talk about some of the details of your offer with a focus on the value people get back.",
    },

    {
      id: 2,
      img: feature2,
      title: "Feature 2",
      desc: "Is there a pain point that your service resolves? Tell visitors about it here.",
    },

    {
      id: 3,
      img: feature3,
      title: "Feature 3",
      desc: "Alternatively, you could use this section to address some frequently asked questions.",
    },
  ];
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-10  w-full max-w-[400px] sm:max-w-none  mx-auto md:max-w-[1000px] p-5  py-20">
      {featureData?.map((data) => {
        return (
          <div key={data?.id} className="space-y-5">
            <Image alt={data?.title} src={data?.img} className="w-full" />
            <h1 className="text-xl font-semibold uppercase">{data?.title}</h1>
            <p>{data?.desc}</p>
          </div>
        );
      })}
    </section>
  );
};

export default FifthSection;
