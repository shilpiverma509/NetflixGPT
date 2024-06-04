import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold w-1/3">{title}</h1>
      <p className="text-lg py-6 w-1/3">{overview}</p>
      <div className="">
        <button className="bg-white  rounded-md  text-black px-12 p-4 text-xl hover:bg-opacity-80">
          {" "}
          ▶️ Play
        </button>
        <button className="bg-gray-500 bg-opacity-50 rounded-md  text-white px-12 p-4 text-xl mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
