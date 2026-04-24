import { useSelector, useDispatch } from "react-redux";
import { toggleTrailer } from "../utils/moviesSlice";
import VideoBackground from "./VideoBackground";

const TrailerPopup = () => {
  const dispatch = useDispatch();
  const { showTrailer, selectedMovieId } = useSelector((store) => store.movies);

  if (!showTrailer) return null;

  const handleClose = () => {
    dispatch(toggleTrailer(null));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 backdrop-blur-sm z-50 flex justify-center items-start pt-16 transition-all duration-300 ease-in-out">
      {/* Close Button */}
      <button
        className="absolute top-6 right-6 text-white text-4xl bg-black bg-opacity-60 px-3 py-1 rounded-lg hover:bg-opacity-80"
        onClick={handleClose}
      >
        ✖
      </button>
      {/* Video Container */}
      <div className="w-[90%] h-[80%] mt-14 mb-6 rounded-lg overflow-hidden shadow-2xl transform scale-95 animate-[fadeIn_0.3s_ease-in-out_forwards]">
        <VideoBackground movieId={selectedMovieId} isPopup={true} />
      </div>
    </div>
  );
};

export default TrailerPopup;
