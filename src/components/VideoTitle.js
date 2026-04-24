const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex items-center px-6 md:px-20 text-white">
      {/* Gradient Layer */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-lg">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>

        <p className="hidden md:block py-4 text-lg text-gray-200">{overview}</p>

        <div className="mt-4 flex items-center">
          <button className="bg-white text-black px-6 py-2 rounded-lg text-lg hover:bg-opacity-80">
            ▶ Play
          </button>

          <button className="ml-4 bg-gray-500 text-white px-6 py-2 rounded-lg bg-opacity-50 hover:bg-opacity-70">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
