// import {API_KEY} from '../../src/appConfig.ts'
import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;



export const getPopularMovies = async () => {
    const movies = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
    return movies.data.results;
}


export const getMovieById = async (id) => {
    const movie = await axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`);
    return movie.data;
}

export const getMovieByTitle = async (title) => {
    const response = await axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${title}&page=1&include_adult=false`);
    const data = await response.data.results;
    return data;
}

export const getAllMovies = async () => {
    const allMovies = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=4`)
    return allMovies.data.results;
}