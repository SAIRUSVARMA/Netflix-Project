import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <div className="relative w-full min-h-screen text-white">
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none"
        src={BG_URL}
        alt="bg"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 -z-10 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
