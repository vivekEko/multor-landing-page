// react and next
import React, { useRef, useState } from "react";
import Image from "next/image";

// assets
import tv_icon from "../../assets/tv_icon.svg";
import heart_icon from "../../assets/heart_icon.svg";
import medal_icon from "../../assets/medal_icon.svg";

const SecondSection = () => {
  // local variables
  const [submitStatus, setSubmitStatus] = useState(false);
  const formRef = useRef(null);
  // functions
  const onSubmitHandler = (e) => {
    e?.preventDefault();
    formRef?.current?.reset();
    setSubmitStatus(true);
  };
  // static data
  const pageData = [
    {
      id: 1,
      icon: tv_icon,
      title: "Benefit 1",
      desc: "Highlight the benefits of signing up for an appointment, online class, or video consultation.",
    },
    {
      id: 2,
      icon: heart_icon,
      title: "Benefit 2",
      desc: "For example, fitness instructors might describe how their routines make people healthier *and* happier.",
    },

    {
      id: 3,
      icon: medal_icon,
      title: "Benefit 3",
      desc: "Remind visitors how easy it is to claim your offer and start enjoying the benefits.",
    },
  ];
  return (
    <section className="max-w-[400px] sm:max-w-none md:max-w-[1000px]  mx-auto p-5  flex flex-col-reverse sm:flex-row gap-5 ">
      {/* benefits */}
      <div className="flex-1 py-20">
        {pageData?.map((data) => {
          return (
            <div
              key={data?.id}
              className={`flex gap-5 ${data?.id === 2 ? "my-20" : ""} `}
            >
              <div className="flex-none">
                <Image
                  src={data?.icon}
                  alt={data?.title}
                  className="w-[3rem]"
                />
              </div>

              <div>
                <h1 className="font-semibold text-xl mb-4">{data?.title}</h1>
                <p className="w-[80%]">{data?.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* form */}
      <div className="flex-1">
        <div className="bg-accentColor  w-full text-white text-center p-10 max-w-[450px] sm:ml-auto -mt-32 py-20  ">
          <h1 className="  text-4xl font-semibold ">Schedule an Appointment</h1>

          <p className="my-5 text-lg">
            Here, let visitors know what will happen when they complete your
            form.
          </p>

          <form
            ref={formRef}
            onSubmit={onSubmitHandler}
            className="flex flex-col gap-5 justify-between items-center "
          >
            <input
              type="text"
              placeholder="First Name*"
              name="first name"
              required
              className="p-3 rounded-lg w-full text-lg text-black outline-none border-0"
            />
            <input
              type="text"
              placeholder="Last Name*"
              name="last name"
              required
              className="p-3 rounded-lg w-full text-lg text-black outline-none border-0"
            />
            <input
              type="email"
              placeholder="Email*"
              name="email"
              required
              className="p-3 rounded-lg w-full text-lg text-black outline-none border-0"
            />
            <input
              type="number"
              placeholder="Phone Number*"
              name="phone"
              required
              className="p-3 rounded-lg w-full text-lg text-black outline-none border-0"
            />

            <select
              name="type_of_appointment"
              required
              className="p-3 rounded-lg w-full text-lg text-black outline-none border-0"
            >
              <option value="none" selected disabled hidden>
                Type of Appointment
              </option>
              <option value="Type 1">Type 1 </option>
              <option value="Type 2">Type 2 </option>
              <option value="Type 3">Type 3 </option>
            </select>

            <button className="bg-[#00c2c5] w-full p-3 active:scale-95 transition-all font-semibold text-xl rounded-lg">
              SCHEDULE NOW
            </button>
          </form>
        </div>
      </div>

      {/* form onsubmit pop up */}
      {submitStatus && (
        <>
          {/* pop-up overlay */}
          <div
            className="bg-gray-600 fixed inset-0 bg-opacity-50 z-10"
            onClick={() => {
              setSubmitStatus(false);
            }}
          ></div>

          {/* pop-up */}
          <div className="bg-accentColor w-[400px] aspect-video flex justify-between items-center p-5 fixed z-20 border-t-4 border-t-[#00c2c5] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
            <div className="text-center  w-full">
              <h1 className="text-3xl">Thank You!</h1>
              <p className="px-5 mt-5">
                We'll reach out to confirm your appointment shortly.
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default SecondSection;
