import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        trendingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        }
    },

});

export const { addTrendingMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;