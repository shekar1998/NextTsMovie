import { FORM_DISPLAY, MOVIE_DISPLAY, MEDIA_QUERY, NAV_BAR, POPULAR_MOVIES, SINGLE_MOVIE, SINGLE_MOVIE_TRAILER, MOVIE_CAST_CREW } from "./actionTypes"

export const selectForm = (form : string) =>{
    return {
        type : FORM_DISPLAY,
        payload : form
    }
}

export const mediaQuery = (match : boolean) =>{
    return {
        type : MEDIA_QUERY,
        payload : match
    }
}

export const setMoviesToDisplay = (movies : any) =>{    
    return {
        type : MOVIE_DISPLAY,
        payload : movies
    }
}

export const setOpacity = (opacity : boolean) =>{
    return {
        type : NAV_BAR,
        payload : opacity
    }
}

export const setSingleMovie = (singleMovie : any) =>{
    return {
        type : SINGLE_MOVIE,
        payload : singleMovie
    }
}

export const setSingleMovieTrailer = (singleMovie : any) =>{
    console.log('Trailer_Action', singleMovie);
    return {
        type : SINGLE_MOVIE_TRAILER,
        payload : singleMovie
    }
}

export const setMovieCastCrew = (MovieCast : any) =>{
    console.log('Trailer_Action', MovieCast);
    return {
        type : MOVIE_CAST_CREW,
        payload : MovieCast
    }
}