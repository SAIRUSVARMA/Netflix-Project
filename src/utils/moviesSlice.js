import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,

    // 🔥 split states
    heroTrailerVideo: null,
    popupTrailerVideo: null,

    showTrailer: false,
    selectedMovieId: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    // 🔥 separate reducers
    addHeroTrailer: (state, action) => {
      state.heroTrailerVideo = action.payload;
    },
    addPopupTrailer: (state, action) => {
      state.popupTrailerVideo = action.payload;
    },

    toggleTrailer: (state, action) => {
      state.showTrailer = !state.showTrailer;
      state.selectedMovieId = action.payload || null;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addHeroTrailer,
  addPopupTrailer,
  toggleTrailer,
} = moviesSlice.actions;

export default moviesSlice.reducer;
