import React from "react";

const ChooseCard = ({ id, heading, paragraph, icon }) => {
  return (
    <>
      <div
        className={`col-span-12 sm:col-span-6 lg:col-span-3 rounded-lg border border-gray-700 py-7 ${
          id % 2 === 0 ? "lg:my-10" : ""
        }`}
        data-aos="fade-up"
      >
        <div className="space-y-5 px-[5%] pt-5">
          {icon}
          <h1 className="text-white text-2xl xl:text-3xl font-bold pt-5">
            {heading}
          </h1>
          <p className="text-gray-300 xl:text-lg">{paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default ChooseCard;
