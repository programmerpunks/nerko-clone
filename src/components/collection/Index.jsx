import React from "react";
import Slider from "react-slick";

import { collections } from "../../assets/collection/content";
import SingleItemCard from "./SingleItemCard";

const divider = require("../../assets/shared/images/divider-01.svg").default;

function SampleNextArrow(props) {
  const { className, style, onClick, hideOnMobile } = props;

  return (
    <>
      <button
        className={className}
        style={{
          ...style,
          justifyContent: "center",
          marginRight: "-25px",
          scale: "3",
          display: hideOnMobile ? "none" : "block",
        }}
        onClick={onClick}
      ></button>
    </>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick, hideOnMobile } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: hideOnMobile ? "none" : "block",
        justifyContent: "center",
        marginLeft: "-25px",
        scale: "3",
      }}
      onClick={onClick}
    />
  );
}

const Collection = () => {
  const isMobile = window.matchMedia("(max-width: 480px)").matches;

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow hideOnMobile={isMobile} />,
    prevArrow: <SamplePrevArrow hideOnMobile={isMobile} />,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="mx-[10%]" id="collection" data-aos="fade-up">
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
              collection
            </span>
          </h1>
        </div>
        <div className="px-[10%] overflow-x-hidden">
          <Slider {...settings}>
            {collections.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <SingleItemCard
                    title={item.title}
                    image={item.image}
                    maker={item.maker}
                  />
                </React.Fragment>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Collection;
