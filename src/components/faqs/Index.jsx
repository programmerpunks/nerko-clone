import React from "react";
import { faqs } from "../../assets/faq/content";
import QuestionItem from "./QuestionItem";

const Faq = () => {
  return (
    <>
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
    </>
  );
};

export default Faq;
