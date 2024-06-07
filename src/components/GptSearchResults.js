import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList.js";

const GptSearchResults = () => {
  const { movieNames, searchMovieResults } = useSelector(
    (store) => store.gptSearch
  );
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 text-white bg-black  bg-opacity-80">
      <div className="">
        {movieNames.map((movie, index) => (
          <MovieList
            key={movie}
            title={movie}
            movies={searchMovieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSearchResults;
