import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlaying && (
      <div className="bg-black">
        <div className="-mt-52 pl-12 relative z-20">
          <MovieList title="Now Playing" movies={movies.nowPlaying} />
          <MovieList title="Popular" movies={movies.popularMovies} />
          <MovieList title="Trending" movies={movies.nowPlaying} />
          <MovieList title="Upcoming" movies={movies.nowPlaying} />
          <MovieList title="Thriller" movies={movies.nowPlaying} />
        </div>
      </div>
    )
  );
};
