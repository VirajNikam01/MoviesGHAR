import React from "react";
import useBgVideo from "../hooks/useBgVideo";
import { useSelector } from "react-redux";

const VideoBackgroud = ({ id }) => {
  useBgVideo(id);
  const movie = useSelector((store) => store.movie.videoBG);
  if (!movie) return;
  const bgVideo = movie.find((singleMovie) => {
    return singleMovie.type === "Trailer";
  });
 

  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${bgVideo.key}?si=4fMIVOCBSQS2ltcd&amp;controls=0&amp;start=3&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackgroud;
