import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // ✅ loading state
  const [loading, setLoading] = useState(false);

  // 🎬 Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results;
  };

  // 🔥 GPT SEARCH HANDLER
  const handleGptSearchClick = async () => {
    setLoading(true); // ✅ start loading

    const query = searchText.current.value;

    if (!query) {
      setLoading(false); // ✅ stop if empty
      return;
    }

    try {
      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query: " +
        query +
        ". Only give 5 movie names, comma separated.";

      const response = await fetch("http://localhost:5000/gpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: gptQuery,
        }),
      });

      const data = await response.json();

      const gptMovies = data.result.split(",");

      const promiseArray = gptMovies.map((movie) =>
        searchMovieTMDB(movie.trim()),
      );

      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({
          movieNames: gptMovies,
          movieResults: tmdbResults,
        }),
      );

      setLoading(false); // ✅ stop after success
    } catch (error) {
      console.error("GPT Search Error:", error);
      setLoading(false); // ✅ stop on error
    }
  };

  return (
    <div className="flex justify-center pt-32 px-4">
      <form
        className="w-full md:w-1/2 bg-black bg-opacity-80 rounded-lg flex items-center p-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="flex-1 p-3 bg-gray-800 text-white rounded-l-lg focus:outline-none"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />

        <button
          className="px-6 py-3 bg-red-700 text-white rounded-r-lg hover:bg-red-800 transition disabled:opacity-50"
          onClick={handleGptSearchClick}
          disabled={loading}
        >
          {loading ? "Searching..." : lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
