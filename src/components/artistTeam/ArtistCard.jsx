import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import React from "react";
import { RiDiscordFill } from "react-icons/ri";

const ArtistCard = ({
  id,
  name,
  image,
  designation,
  discord,
  instagram,
  twitter,
}) => {
  return (
    <>
      <div
        className="col-span-12 sm:col-span-6 lg:col-span-3 mx-auto text-white justify-center mt-4"
        data-aos="fade-up"
      >
        <div
          className={`rounded-3xl border border-gray-700 p-2 ${
            id % 2 === 0 ? "lg:mt-10" : ""
          }`}
        >
          <img src={image} className="rounded-2xl w-[100%]" alt="" />
        </div>
        <div className="text-center mt-5">
          <h1 className="font-bold text-2xl">{name}</h1>
          <h3 className="text-gray-500 text-xl lg:text-2xl">{designation}</h3>
        </div>
        <div className="flex justify-center py-3 space-x-5">
          <a href={discord} target="_blank" rel="noreferrer">
            <RiDiscordFill size={30} color={"white"} />
          </a>
          <a href={instagram} target="_blank" rel="noreferrer">
            <FaInstagramSquare size={30} color={"white"} />{" "}
          </a>
          <a href={twitter} target="_blank" rel="noreferrer">
            <FaTwitterSquare size={30} color={"white"} />{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default ArtistCard;
