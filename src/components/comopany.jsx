import React from "react";
import Marquee from "react-fast-marquee";
import complist from "../assets/company";

const Company = () => {
  return (
    <div className="w-full pt-20 py-6">
        <div className="flex justify-center items-center font-light"><p>Trusted by 30+ agencies, startups, and consultants worldwide</p></div>
      <div className="flex pt-5  justify-center items-center">
        <div className="w-[70%]">
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
  );
};

export default Company;
