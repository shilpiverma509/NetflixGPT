import { useEffect } from "react";
import { addTrailorVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailor = (movieId) => {
  const dispatch = useDispatch();
  const trailorVideo = useSelector((store) => store.movies);

  const getMovieTrailor = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    const filterData = json.results.filter(
      (result) => result.type === "Trailer"
    );
    const trailor = filterData.length > 0 ? filterData[0] : json.results[0];
    dispatch(addTrailorVideo(trailor));
  };

  useEffect(() => {
    !trailorVideo && getMovieTrailor();
  }, []);
};

export default useMovieTrailor;
