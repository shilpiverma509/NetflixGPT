import React from "react";
import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  console.log("pso: " + posterPath);
  console.log("MovieCard", `IMG_CDN${posterPath}`);
  return (
    <div className="w-48 pr-4">
      <img src={`${IMG_CDN}${posterPath}`} alt="movie card" />
    </div>
  );
};

export default MovieCard;
