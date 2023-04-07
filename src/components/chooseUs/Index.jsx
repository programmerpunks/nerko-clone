import React from "react";

import { chooseUsDetails } from "../../assets/chooseUs/content";
import { chooseUsStats } from "../../assets/chooseUs/content/Stats";
import ChooseCard from "./ChooseCard";
import ChooseStatCard from "./ChooseStatCard";

const divider = require("../../assets/shared/images/divider-01.svg").default;

const ChooseUs = () => {
  return (
    <>
      <div className="mx-[10%]" id="whyUs" data-aos="fade-up">
        <div className="flex justify-center py-16">
          <img
            src={divider}
            className="w-[30%] sm:w-[20%] lg:w-[15%] xl:w-[10%]"
            alt=""
          />
        </div>
        <div className="text-3xl md:text-6xl font-bold text-white text-center pb-16">
          <h1>
            Why{" "}
            <span className="bg-gradient-to-r from-[#2600fc] to-[#ff00ea] bg-clip-text text-transparent">
              choose us!
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {chooseUsDetails.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <ChooseCard
                  id={item.id}
                  heading={item.heading}
                  paragraph={item.paragraph}
                  icon={item.icon}
                />
              </React.Fragment>
            );
          })}
        </div>
        <div className="flex justify-center py-16">
          <img
            src={divider}
            className="w-[30%] sm:w-[20%] lg:w-[15%] xl:w-[10%]"
            alt=""
          />
        </div>
        <div className="grid grid-cols-12">
          {chooseUsStats.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <ChooseStatCard
                  id={item.id}
                  heading={item.heading}
                  stat={item.stat}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
