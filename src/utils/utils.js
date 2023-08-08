// import {API_KEY} from '../../src/appConfig.ts'
import axios from "axios";
const API_KEY = '230c8944d7c01671a140ee7eb22facd5'


// export const getAllMovies = async () => {
//     const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
//     const data = await response.json();
//     return data.results;
// }

export const getAllMovies = async () => {
    const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    return movies.data.results;
}

// export const getMovieById = async (id) => {
//     const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
//     const data = await response.json();
//     return data;
// }

export const getMovieById = async (id) => {
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    return movie.data;
}

export const getAllMoviesByTitle = async (title) => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`);
    const data = await response.data.results;
    return data;
}
