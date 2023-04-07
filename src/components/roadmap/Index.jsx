import React from "react";

import RoadmapCard from "./RoadmapCard";
import { roadmap } from "../../assets/roadmap/content";

const divider = require("../../assets/shared/images/divider-01.svg").default;

const Roadmap = () => {
  return (
    <>
      <div className="mx-[10%]" id="roadmap" data-aos="fade-up">
        <div className="flex justify-center py-16">
          <img
            src={divider}
            className="w-[30%] sm:w-[20%] lg:w-[15%] xl:w-[10%]"
            alt=""
          />
        </div>
        <div className="text-3xl md:text-6xl font-bold text-white text-center pb-16">
          <h1>
            Nerko's{" "}
            <span className="bg-gradient-to-r from-[#2600fc] to-[#ff00ea] bg-clip-text text-transparent">
              Roadmap
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-12 w-full gap-4 lg:gap-y-5">
          {roadmap.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <RoadmapCard
                  id={item.id}
                  title={item.title}
                  progress={item.progress}
                  paragraph={item.paragraph}
                  keypoints={item.keypoints}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Roadmap;
