import React from "react";

import { faqs } from "../../assets/faq/content";
import QuestionItem from "./QuestionItem";

const divider = require("../../assets/shared/images/divider-01.svg").default;

const Faq = () => {
  return (
    <>
      <div className="mx-[10%]" data-aos="fade-up">
        <div className="flex justify-center py-16">
          <img
            src={divider}
            className="w-[30%] sm:w-[20%] lg:w-[15%] xl:w-[10%]"
            alt=""
          />
        </div>
        <div className="text-3xl md:text-6xl font-bold text-white text-center pb-16">
          <h1>Your Questions,</h1>
          <h1 className="bg-gradient-to-r from-[#2600fc] to-[#ff00ea] bg-clip-text text-transparent">
            Answered!
          </h1>
        </div>
        <div className="mx-[10%] md:mx-[15%] lg:mx-[20%] text-white border rounded-md border-gray-600 p-2">
          {faqs.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <QuestionItem
                  id={item.id}
                  question={item.question}
                  answer={item.answer}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Faq;
