import React, { useRef } from "react";
import langConstants from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice.js";

const GptSearchInputBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const { lang } = useSelector((store) => store.config);
  const handleGptSearch = async () => {
    //make an API call to get the GPT API
    try {
      const gptQuery = `Act as a movie recommendation system and suggest some movies for the query ${searchText.current.value} and only give names of 5 movies,comma separated like the example result given ahead. Example Result: Chupke Chupke, Don, Badshah, Bazigar, Golmaal  `;
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      const gptMovieList = gptResults.choices?.[0]?.message?.content.split(",");
      //for each movie search the TMDB API
      const fetchMoviesPromiseArray = gptMovieList.map((movie) =>
        searchMovieTMDB(movie)
      );
      const fetchMoviesTmdb = await Promise.all(fetchMoviesPromiseArray);
      console.log("fethc", fetchMoviesTmdb);
      dispatch(
        addGptMovieResult({
          movieNames: gptMovieList,
          searchMovieResults: fetchMoviesTmdb,
        })
      );
    } catch (error) {
      console.log(`Error fetching list of movies: ${error}`);
    }
  };
  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    const results = json.results;
    return results;
  };
  return (
    <div className="pt-[5%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" z-10  w-1/2 bg-black grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          placeholder={langConstants?.[lang].gptSearchPlaceholder}
          className=" col-span-9 p-4 m-4 text-wrap"
        />
        <button
          onClick={handleGptSearch}
          className="m-4 col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
          {langConstants?.[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchInputBar;
