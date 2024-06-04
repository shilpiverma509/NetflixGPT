import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailorVideo } from "../utils/movieSlice";

const VideoBackground = ({ movieId }) => {
  //fetch traior of video
  const trailorVideo = useSelector((store) => store.movies?.trailorVideo);
  console.log("key", trailorVideo?.key);
  const dispatch = useDispatch();
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
    getMovieTrailor();
  }, []);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailorVideo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
