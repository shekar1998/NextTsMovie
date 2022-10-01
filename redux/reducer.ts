import { reduceEachTrailingCommentRange } from 'typescript';
import { FORM_DISPLAY, MOVIE_DISPLAY, MEDIA_QUERY, NAV_BAR, POPULAR_MOVIES, SINGLE_MOVIE, SINGLE_MOVIE_TRAILER, MOVIE_CAST_CREW } from './actionTypes';

const formInitialState = {
  formDisplay: 'LOGIN_FORM',
};

const usersChatInitialState = {
  movie: [],
};

const MediaQueryInitialState = {
  query: true
};

const NabBarInitialState = {
  nav: false
};

const singleMovieInitialState = {
  singleMovie: []
};

const singleMovieTrailerInitialState = {
  singleMovieTrailer: []
};

const singleMovieCastCrewInitialState = {
  singleMovieCastCrew: []
};

export const MovieReducer = (state = usersChatInitialState, action: any) => {
  switch (action.type) {
    case MOVIE_DISPLAY:
      return { ...state, movie: action.payload };
    default:
      return state;
  }
};

export const MediaQuery = (state = MediaQueryInitialState, action: any) => {
  switch (action.type) {
    case MEDIA_QUERY:
      return { ...state, query: action.payload };
    default:
      return state;
  }
};

export const NavBar = (state = NabBarInitialState, action: any) => {
  switch (action.type) {
    case NAV_BAR:
      return { ...state, nav: action.payload };
    default:
      return state;
  }
};

export const SingleMovieReducer = (state = singleMovieInitialState, action: any) => {
  switch (action.type) {
    case SINGLE_MOVIE:
      return { ...state, singleMovie: action.payload };
    default:
      return state;
  }
};

export const SingleMovieTrailerReducer = (state = singleMovieTrailerInitialState, action: any) => {
  switch (action.type) {
    case SINGLE_MOVIE_TRAILER:
      console.log('Trailer_Reducer', action)
      return { ...state, singleMovieTrailer: action.payload };
    default:
      return state;
  }
};

export const SingleMovieCastCrewReducer = (state = singleMovieCastCrewInitialState, action: any) => {
  switch (action.type) {
    case MOVIE_CAST_CREW:
      console.log('Trailer_Reducer', action)
      return { ...state, singleMovieCastCrew: action.payload };
    default:
      return state;
  }
};


