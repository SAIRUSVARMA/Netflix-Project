import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId, isPopup = false }) => {
  const heroVideo = useSelector((store) => store.movies?.heroTrailerVideo);
  const popupVideo = useSelector((store) => store.movies?.popupTrailerVideo);

  const trailerVideo = isPopup ? popupVideo : heroVideo;

  useMovieTrailer(movieId, isPopup);

  if (!trailerVideo?.key) {
    return (
      <div className="flex items-center justify-center w-full h-full text-white bg-black">
        Trailer not available
      </div>
    );
  }

  return (
    <div
      className={
        isPopup
          ? "w-full h-full bg-black"
          : "w-screen h-screen overflow-hidden bg-black"
      }
    >
      <iframe
        className={isPopup ? "w-full h-full" : "w-screen h-screen scale-125"}
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
