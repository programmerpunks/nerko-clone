import React from "react";

const divider = require("../../assets/shared/images/divider-01.svg").default;

const StartMinting = () => {
  return (
    <>
      <div className="mx-[10%]" data-aos="fade-up">
        <div className="flex justify-center py-16">
          <img
            src={divider}
            className="w-[30%] sm:w-[20%] lg:w-[15%] xl:w-[10%]"
            alt=""
          />
        </div>
        <div className="text-white text-center space-y-5">
          <h1 className="text-3xl md:text-6xl font-bold">
            Let's Start{" "}
            <span className="bg-gradient-to-r from-[#2600fc] to-[#ff00ea] bg-clip-text text-transparent">
              Minting
            </span>
          </h1>
          <p className="md:text-lg">
            Lorem Ipsum is simply dummy text of the printing and great.
          </p>
        </div>
        <div className="flex justify-center pt-10">
          <button className="font-bold md:text-2xl flex gap-2 text-white hover:scale-110 px-6 py-2 md:py-5 rounded-full bg-gradient-to-r from-[#2600fc] to-[#ff00ea]">
            <a href="/mint">Get Started</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default StartMinting;
