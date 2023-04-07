import React from "react";

const ChooseStatCard = ({ id, heading, stat }) => {
  return (
    <>
      <div
        className={`col-span-12 lg:col-span-3 border-gray-500 ${
          id !== 4 ? "border-b lg:border-b-0 lg:border-r" : ""
        }`}
        data-aos="fade-up"
      >
        <div className="text-center py-4 space-y-5" key={id}>
          <p className="text-3xl lg:text-6xl font-bold text-white">{stat}</p>
          <h3 className="text-xl font-light text-white">{heading}</h3>
        </div>
      </div>
    </>
  );
};

export default ChooseStatCard;
