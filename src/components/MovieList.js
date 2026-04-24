import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 md:px-12 py-2">
      <h1 className="text-base md:text-xl py-2 text-white font-semibold">
        {title}
      </h1>

      <div className="relative">
        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        {/* SCROLL ROW */}
        <div className="flex overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex space-x-3">
            {movies?.map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                movieId={movie.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
