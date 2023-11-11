import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black px-5 sm:px-16 py-12 ">
      <div className="flex justify-between">
        <div>
          <h1 className="text-white text-xl sm:text-2xl">
            <span className="text-teal-700 font-bold">M</span>ovies
            <span className="text-teal-700 font-bold">GHAR</span>
          </h1>
        </div>
        <div>
            <h1 className="text-white text-sm sm:text-lg">Crafted By Viraj Nikam</h1>
            <h1 className="text-white text-xs sm:text-lg">November 2023</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
