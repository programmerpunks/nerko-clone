import React from "react";

const WorkingCard = ({ id, title, image, paragraph }) => {
  return (
    <>
      {id % 2 !== 0 ? (
        <>
          <div className="lg:flex justify-between lg:space-x-20 py-10">
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={image} className="lg:w-[80%]" alt="" />
            </div>
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="mt-10 lg:mt-0 space-y-5 w-[100%]">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#2600fc] to-[#ff00ea] bg-clip-text text-transparent">
                  0{id}.
                </p>
                <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-white">
                  {title}
                </h1>
                <p className="text-lg text-white">{paragraph}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col-reverse lg:flex lg:flex-row justify-between lg:space-x-20 py-10">
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="mt-10 lg:mt-0 space-y-5 w-[100%]">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#2600fc] to-[#ff00ea] bg-clip-text text-transparent">
                  0{id}.
                </p>
                <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-white">
                  {title}
                </h1>
                <p className="text-lg text-white">{paragraph}</p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center items-center">
              <img src={image} className="lg:w-[80%]" alt="" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default WorkingCard;
