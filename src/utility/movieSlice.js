import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState:{
        popularMovies : null,
        videoBG : null,
        topRatedMovies: null,
        upComingMovies: null,
        nowPlayingMovies: null,
    },
    reducers:{
        addPopularMovies:(state, action)=>{
            state.popularMovies = action.payload;
        },
        addVideoBG:(state, action)=>{
            state.videoBG = action.payload
        },
        addTopRatedMovies:(state, action)=>{
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies:(state, action)=>{
            state.upComingMovies = action.payload
        },
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload
        }
    }
})

export const {addPopularMovies, addVideoBG, addTopRatedMovies, addUpcomingMovies, addNowPlayingMovies} = movieSlice.actions
export default movieSlice.reducer;
