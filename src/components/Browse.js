import React, { useEffect } from "react";
import { Header } from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";

export const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      {/*
      Main Container 
        - Video Player
        - Video Title
      Secondary Container
        -Movie List * n
          -cards * n
          */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
