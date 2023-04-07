import React from "react";

import { social_links } from "../../assets/footer/content/socialLinks";

const Footer = () => {
  return (
    <>
      <div className="py-5 text-white">
        <hr className="h-px my-8 bg-gray-700 border-0" />
        <div className="mx-[10%] pt-14" data-aos="fade-up">
          <div className="md:flex justify-between">
            <div className="md:w-[60%] lg:w-[50%] space-y-7">
              <h1 className="font-bold text-5xl text-white">Nerko</h1>
              <p className="text-gray-300">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="flex">
                {social_links.map((item) => {
                  return (
                    <a
                      href={item.link}
                      key={item.id}
                      className="pr-4"
                      rel="noreferrer"
                      target="_blank"
                    >
                      {item.icon}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="mt-10 text-start flex">
              <ul className="space-y-5 text-xl font-bold">
                <li className="hover:border-r-2 hover:border-b-2 hover:border-slate-600  pr-5">
                  <a
                    href={
                      window.location.pathname === "/mint"
                        ? "/#collection"
                        : "#collection"
                    }
                  >
                    Collection
                  </a>
                </li>
                <li className="hover:border-r-2 hover:border-b-2 hover:border-slate-600  pr-5">
                  <a href="/mint">Mint</a>
                </li>
                <li className="hover:border-r-2 hover:border-b-2 hover:border-slate-600  pr-5">
                  <a
                    href={
                      window.location.pathname === "/mint"
                        ? "/#whyUs  "
                        : "#whyUs"
                    }
                  >
                    Why us
                  </a>
                </li>
                <li className="hover:border-r-2 hover:border-b-2 hover:border-slate-600  pr-5">
                  <a
                    href={
                      window.location.pathname === "/mint" ? "/#team " : "#team"
                    }
                  >
                    Team
                  </a>
                </li>
                <li className="hover:border-r-2 hover:border-b-2 hover:border-slate-600  pr-5">
                  <a
                    href={
                      window.location.pathname === "/mint"
                        ? "/#roadmap"
                        : "#roadmap"
                    }
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-base text-gray-300 text-center py-14">
            <p>© 2022 Nerko. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
