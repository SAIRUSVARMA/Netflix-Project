import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleTrailer } from "../utils/moviesSlice";

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();

  if (!posterPath) return null;

  const handleClick = () => {
    dispatch(toggleTrailer(movieId));
  };

  return (
    <div
      className="w-36 md:w-48 pr-4 transform transition duration-300 ease-in-out hover:scale-110 hover:z-30 cursor-pointer"
      onClick={handleClick}
    >
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        className="rounded-lg"
      />
    </div>
  );
};

export default MovieCard;
