import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlaying } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  //fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const { nowPlayingMovies } = useSelector((store) => store.movies);
  const getNowPlaying = async () => {
    const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlaying(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlaying();
  }, []);
};

export default useNowPlayingMovies;
