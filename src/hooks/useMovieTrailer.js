import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addHeroTrailer, addPopupTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId, isPopup = false) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS,
      );

      const json = await data.json();

      const trailer = json.results.find(
        (video) =>
          video.site === "YouTube" &&
          video.type === "Trailer" &&
          video.official === true,
      );

      const backup = json.results.find(
        (video) => video.site === "YouTube" && video.type === "Trailer",
      );

      const anyVideo = json.results.find((video) => video.site === "YouTube");

      const finalVideo = trailer || backup || anyVideo || null;

      // 🔥 decide where to store
      if (isPopup) {
        dispatch(addPopupTrailer(finalVideo));
      } else {
        dispatch(addHeroTrailer(finalVideo));
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  useEffect(() => {
    if (!movieId) return;
    getMovieVideos();
  }, [movieId]);
};

export default useMovieTrailer;
