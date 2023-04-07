import React from "react";

const QuestionItem = ({ id, question, answer }) => {
  return (
    <>
      <details data-aos="fade-up">
        <summary className="flex items-center">
          <div className="accordion-item flex w-full flex-wrap">
            <div className="font-Glacial leading-[30px] cursor-pointer w-full">
              <div
                className={`flex border-gray-600 mb-4 justify-between ${
                  id !== 1 ? "border-t" : ""
                }`}
              >
                <div className="flex p-2 md:h-[65px] w-full items-center justify-start rounded-[4px] border-[#726f6f]">
                  <span className="font-Glacial text-md sm:text-base md:text-lg font-bold">
                    {question}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </summary>
        <div className=" leading-normal w-full text-md lg:text-base text-gray-300 p-2">
          {answer}
        </div>
      </details>
    </>
  );
};

export default QuestionItem;
