import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies?.nowPlayingMovies) return null;

  return (
    <div className="bg-black text-white">
      <div className="relative z-20 mt-8 px-4 md:px-12 space-y-8">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Trending" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Upcoming Movies" movies={movies.nowPlayingMovies} />
        <MovieList title="Horror" movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
