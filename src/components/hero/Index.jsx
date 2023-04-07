import React from "react";

import pic1 from "../../assets/hero/images/01.png";
import pic2 from "../../assets/hero/images/2.png";
import pic3 from "../../assets/hero/images/3.png";
import pic4 from "../../assets/collection/images/1.jpg";
import pic5 from "../../assets/collection/images/2.jpg";
import sponsor4 from "../../assets/hero/images/sponsor4.png";
import sponsor5 from "../../assets/hero/images/sponsor5.png";
import sponsor6 from "../../assets/hero/images/sponsor6.png";
import sponsor7 from "../../assets/hero/images/sponsor7.png";

const Hero = () => {
  return (
    <>
      <div className="mx-[10%] md:flex lg:px-[10%] pt-24" data-aos="fade-up">
        <div className=" lg:flex lg:items-center md:pt-[10%] lg:pt-[5%]">
          <div className="text-white text-center md:text-start space-y-8 lg:mr-10 ">
            <h1 className="text-6xl font-bold">Lorem Ipsum is the great</h1>
            <p className="text-xl">
              Lorem Ipsum is simply dummy text of the printing industry. You
              dont have to worry about anything.
            </p>
            <button className="rounded-full font-bold text-white py-3 px-5 bg-gradient-to-r from-[#2600fc] to-[#ff00ea]">
              <a href="https://opensea.io/" rel="noreferrer" target="_blank">
                View in OPENSEA
              </a>
            </button>
            <div className="flex justify-center md:justify-start">
              <div className="flex justify-center md:justify-start">
                <div className="w-14 self-center rounded-full border border-gray-700">
                  <img src={pic1} alt="" className="rounded-full" />
                </div>
                <div className="-ml-[15%]  self-center w-14 border-solid rounded-full border border-gray-700">
                  <img src={pic2} alt="" className="rounded-full" />
                </div>
                <div className="-ml-[15%] self-center w-14 border-solid rounded-full border border-gray-700">
                  <img src={pic3} alt="" className="rounded-full" />
                </div>
              </div>
              <div className="text-start">
                <h1 className="text-4xl font-bold">40k+</h1>
                <p className="text-sm sm:text-base text-gray-400">
                  Community members
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="py-14 lg:py-0 flex justify-center items-center"
          data-aos="fade-up"
        >
          <div className="lg:pt-8">
            <div className="flex justify-start">
              <img
                src={pic4}
                alt=""
                className="w-[50%] lg:w-[55%] xl:w-[50%] rounded-xl rotate-12"
              />
            </div>
            <div className="flex justify-end">
              <img
                src={pic5}
                alt=""
                className="w-[50%] lg:w-[55%] xl:w-[50%] -mt-[5%] sm:mt-0 rounded-xl -rotate-12"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[10%] my-14 lg:my-[7%]" data-aos="fade-up">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6 lg:col-span-3 flex justify-center">
            <img src={sponsor4} alt="" />
          </div>
          <div className="col-span-6 lg:col-span-3 flex justify-center">
            <img src={sponsor5} alt="" />
          </div>
          <div className="col-span-6 lg:col-span-3 flex justify-center">
            <img src={sponsor6} alt="" />
          </div>
          <div className="col-span-6 lg:col-span-3 flex justify-center">
            <img src={sponsor7} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
