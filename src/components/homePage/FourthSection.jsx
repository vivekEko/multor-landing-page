// react and next
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// assets
import playButton from "../../assets/play.svg";
import pauseButton from "../../assets/pause.svg";
import stars from "../../assets/stars.svg";
import stars2 from "../../assets/stars2.svg";
import avatar_1 from "../../assets/avatar_1.jpg";
import avatar_2 from "../../assets/avatar_2.jpg";

const FourthSection = () => {
  // local variables
  const [controlIs, setControlIs] = useState(false);
  const videoRef = useRef();

  // play pause feature
  useEffect(() => {
    if (controlIs) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [controlIs]);

  // static data
  const testimonialData = [
    {
      id: 1,
      image: stars,
      testimonial:
        "Share a real testimonial that hits some of your benefits (but isn't too sales-y).",
      avatar: avatar_1,
      name: "Tabitha Ricchio",
      location: "New Jersey, USA",
    },

    {
      id: 2,
      image: stars2,
      testimonial:
        "Include someone talking about how easy it was to sign up and participate.",
      avatar: avatar_2,
      name: "Monica Geller",
      location: "Nevada, USA",
    },
  ];
  return (
    <section className="max-w-[400px] sm:max-w-none md:max-w-[1000px]  mx-auto">
      {/* video container */}
      <div className="relative -mt-[100px] md:-mt-[300px] overflow-hidden w-full ">
        <video ref={videoRef} src="/demo.mp4" className="mx-auto w-full" />
        <button
          className="bg-[#1ECAFF] w-[50px] md:w-[100px] aspect-square rounded-full absolute bottom-[5%] right-[5%] bg-opacity-75 flex justify-center items-center group"
          onClick={() => setControlIs(!controlIs)}
        >
          {/* play / pause button */}
          <Image
            src={controlIs ? pauseButton : playButton}
            alt=".."
            className=" w-[20px] md:w-[50px] mx-auto group-active:scale-95 transition-all"
          />
        </button>
      </div>

      <div className="py-24 text-center">
        <h2 className="font-semibold text-sm text-[#00c2c5]">
          DON'T JUST TAKE OUR WORD FOR IT
        </h2>
      </div>

      {/* testimonials */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-10 pb-20 p-5 ">
        {testimonialData?.map((data) => {
          return (
            <div key={data?.id} className="">
              <Image alt={data?.name} src={data?.image} />

              <h2 className="text-2xl italic text-accentColor  mt-5 mb-10">
                {data?.testimonial}
              </h2>
              <div className="flex gap-5">
                <div>
                  <Image alt={data?.name} src={data?.avatar} />
                </div>
                <div>
                  <h3>{data?.name}</h3>
                  <h4>{data?.location}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FourthSection;
