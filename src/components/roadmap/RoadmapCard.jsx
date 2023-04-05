import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const RoadmapCard = ({ id, title, progress, paragraph, keypoints }) => {
  return (
    <>
      <div className="border rounded-xl border-gray-700 col-span-12 lg:col-span-4 p-5 mx-auto">
        <div className="flex justify-between">
          <div className="text-xl bg-gradient-to-r from-[#2600fc] to-[#ff00ea] bg-clip-text text-transparent">
            PHASE {id}
          </div>
          <div className="rounded-full font-bold text-white p-2 bg-gradient-to-r from-[#2600fc] to-[#ff00ea]">
            {progress}%
          </div>
        </div>
        <div className="text-white py-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="pt-3">{paragraph}</p>
        </div>
        <hr className="h-px w-[30%] my-3 bg-gray-700 border-0" />
        <div>
          {keypoints.map((point) => {
            return (
              <>
                <div className="flex space-x-2 font-light text-white py-1">
                  <div>
                    <MdOutlineKeyboardDoubleArrowRight
                      size={20}
                      color={"#7d00f5"}
                    />
                  </div>
                  <div>{point}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RoadmapCard;
