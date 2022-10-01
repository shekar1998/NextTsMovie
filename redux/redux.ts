import { createStore, combineReducers } from "redux";
import {  MovieReducer, MediaQuery, SingleMovieReducer, SingleMovieTrailerReducer, SingleMovieCastCrewReducer } from "./reducer";

const reducer = combineReducers({
  movie : MovieReducer,
  query : MediaQuery,
  singleMovie : SingleMovieReducer,
  SingleMovieTrailer : SingleMovieTrailerReducer,
  singleMovieCastCrew : SingleMovieCastCrewReducer
});

const store = createStore(reducer);

export default store;
