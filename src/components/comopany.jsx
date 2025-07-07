import React from "react";
import Marquee from "react-fast-marquee";
import complist from "../assets/company";

const Company = () => {
  return (
    <div className=" max-sm:flex max-sm:items-cneter max-sm:justify-center">
    <div className="w-full max-sm:w-[90%] pt-20 py-6">
        <div className="flex justify-center items-center max-sm:font-bold max-sm:text-l font-light"><p>Trusted by 30+ agencies, startups, and consultants worldwide</p></div>
      <div className="flex pt-5  justify-center items-center">
        <div className="max-sm:w-[100%] w-[70%]">
          <Marquee speed={50} pauseOnHover={true} className="">
            {complist.map((name, index) => (
              <div
                key={index}
                className="mx-6 px-4 py-2 text-white  shadow min-w-max"
              >
                {name}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Company;
