import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-white bg-gradient-to-r from-black w-screen aspect-video absolute">
      <div className=" top-1/4 pt-4 absolute px-5 sm:px-16 ">
        <div className="w-[220px] sm:w-[450px]">
          <h1 className="text-lg sm:text-4xl">{title}</h1>
          <h2 className=" text-[9px] sm:text-xs">{overview}</h2>
          <div className="py-1 sm:py-7">
            <button className="px-2 hover:bg-opacity-60 sm:px-8 sm:py-2 bg-white text-black text-xs  sm:text-xl sm:rounded-lg">Play</button>
            <button className="px-2 hover:bg-opacity-60 sm:px-8 sm:py-2 bg-gray-400 bg-opacity-50 text-xs sm:text-xl sm:rounded-lg mx-5">Watch Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
