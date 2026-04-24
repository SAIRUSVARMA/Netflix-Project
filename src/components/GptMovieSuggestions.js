import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="mt-8 px-4 md:px-12">
      {/* 🔥 Title FIXED */}
      <h1 className="text-xl md:text-3xl text-white font-bold px-2 py-4">
        🎬 AI Recommended Movies
      </h1>

      <div className="bg-black bg-opacity-80 rounded-lg p-4 space-y-6">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
