import React from "react";
import { working_details } from "../../assets/working/content";
import WorkingCard from "./WorkingCard";
const divider = require("../../assets/shared/images/divider-01.svg").default;

const Working = () => {
  return (
    <>
      <div className="mx-[10%]">
        <div className="flex justify-center py-16">
          <img
            src={divider}
            className="w-[30%] sm:w-[20%] lg:w-[15%] xl:w-[10%]"
            alt=""
          />
        </div>
        <div className="text-3xl md:text-6xl font-bold text-white text-center pb-16">
          <h1>
            How it{" "}
            <span className="bg-gradient-to-r from-[#2600fc] to-[#ff00ea] bg-clip-text text-transparent">
              works!
            </span>
          </h1>
        </div>
        {working_details.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <WorkingCard
                id={item.id}
                title={item.title}
                image={item.image}
                paragraph={item.paragraph}
              />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Working;
