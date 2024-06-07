import React from "react";
import GptSearchInputBar from "./GptSearchInputBar";
import GptSearchResults from "./GptSearchResults";
import { MAIN_TRAILER } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={MAIN_TRAILER} alt="trailer" />
      </div>
      <GptSearchInputBar />
      <GptSearchResults />
    </div>
  );
};

export default GptSearch;
