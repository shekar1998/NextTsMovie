// import axios from 'axios';

// const options: any = {
//   params: { nconst: 'nm0001667' },
//   headers: {
//     'x-rapidapi-key': '1296da19ccmshfe8b786ac89cdcep10d7b4jsnbe19113ced77',
//     'x-rapidapi-host': 'imdb8.p.rapidapi.com',
//   },
// };

// export async function AllMovies() {
//   const res = await axios.get('https://imdb8.p.rapidapi.com/actors/get-all-images', options);
//   console.log(res);
//   // return res;
// }

import axios from 'axios';
import { setMovieCastCrew, setMoviesToDisplay, setSingleMovie, setSingleMovieTrailer } from '../../redux/actions';

const url = 'https://staging-api.moviexchange.com/mxs/reference-data/v1/cinema-chains';
const options: any = { method: 'GET', headers: { Accept: 'application/json', Authorization: 'Bearer ' } };

export function AllMovies(dispatch: any) {
  axios
    .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=baf23d910bee4014180d34d74cfd7d3a`)
    .then((res: any) => {
      console.log("AllMovies =>", res);
      dispatch(setMoviesToDisplay(res.data.results));
    });
}

export function SingleMovies(dispatch: any, id: any) {  
  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=baf23d910bee4014180d34d74cfd7d3a`)
    .then((res: any) => {
      console.log("SingleMovies =>", res);
      dispatch(setSingleMovie(res.data));
    });
}

export function SingleMoviesTrailer(dispatch: any, id: any) {
  axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=baf23d910bee4014180d34d74cfd7d3a`)
    .then((res: any) => {
      console.log("SingleMoviesTrailer =>", res);
      dispatch(setSingleMovieTrailer(res.data.results));
    });
}

export function MovieCastCrew(dispatch: any, id: any) {
  axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=baf23d910bee4014180d34d74cfd7d3a`)
    .then((res: any) => {
      console.log("MovieCastCrew =>", res);
      dispatch(setMovieCastCrew(res.data.cast));
    });
}

