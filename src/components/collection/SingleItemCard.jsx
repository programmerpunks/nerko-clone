import React from "react";

const SingleItemCard = ({ title, image, maker }) => {
  return (
    <>
      <div className="flex m-2 justify-center flex-col space-y-5 lg:w-[80%]">
        <div className="rounded-xl">
          <img src={image} className="rounded-xl" alt="" />
        </div>
        <div className="text-center space-y-2">
          <h1 className="text-white sm:text-xl text-2xl font-bold">{title}</h1>
          <h3 className="text-white ">{maker}</h3>
        </div>
      </div>
    </>
  );
};

export default SingleItemCard;
