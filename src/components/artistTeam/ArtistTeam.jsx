import React from "react";
import { artistsTeam } from "../../assets/artistsTeam/content";
import ArtistCard from "./ArtistCard";
const divider = require("../../assets/shared/images/divider-01.svg").default;

const ArtistTeam = () => {
  return (
    <>
      <div className="mx-[10%]" id="team">
        <div className="flex justify-center py-16">
          <img
            src={divider}
            className="w-[30%] sm:w-[20%] lg:w-[15%] xl:w-[10%]"
            alt=""
          />
        </div>
        <div className="text-3xl md:text-6xl font-bold text-white text-center pb-16">
          <h1>
            Meet the{" "}
            <span className="bg-gradient-to-r from-[#2600fc] to-[#ff00ea] bg-clip-text text-transparent">
              Artists
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-12 w-full sm:gap-4 lg:gap-y-5">
          {artistsTeam.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <ArtistCard
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  designation={item.designation}
                  discord={item.discord}
                  instagram={item.instagram}
                  twitter={item.twitter}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ArtistTeam;
