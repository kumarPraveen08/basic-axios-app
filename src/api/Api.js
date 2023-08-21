import axios from "axios";

const apiBaseUrl = "https://api.themoviedb.org/3";
// const api_key = process.env.REACT_APP_TMDB_API_KEY;
const token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTAyZmVlYjc1ZmUyNWNmZDAzYjlmYTZlODY3YTcyYyIsInN1YiI6IjY0ODJiMTE0ZTI3MjYwMDEwNzIxNDNkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.haTEPisAqE50Bxwnb2MEVEDtlDsk0C5XAtsJ-9fIXTY`;

// ENDPOINTS
const moviesEndpoint = `${apiBaseUrl}/movie/popular`;

// DYNAMIC ENPOINTS
const movieDetailEndpoint = (id) => `${apiBaseUrl}/movie/${id}`;

// Image fallback
export const posterFallbackImage = `https://www.tgv.com.my/assets/images/404/movie-poster.jpg`;
export const bannerFallbackImage = `https://image.tmdb.org/t/p/w1280/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg`;

export const image342 = (path) => {
  return `https://image.tmdb.org/t/p/w342${path}`;
};

export const image500 = (path) => {
  return `https://image.tmdb.org/t/p/w500${path}`;
};

export const image780 = (path) => {
  return `https://image.tmdb.org/t/p/w780${path}`;
};

export const imageOriginal = (path) => {
  return `https://image.tmdb.org/t/p/Original${path}`;
};

// CALL API
const apiCall = async (endpoint, method = "GET", data, params) => {
  const options = {
    method,
    url: endpoint,
    params: params ? params : {},
    data: data ? data : {},
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

// FETCH METHODS
export const fetchMovies = () => {
  return apiCall(moviesEndpoint);
};

export const fetchMovieDetails = (id) => {
  return apiCall(movieDetailEndpoint(id));
};
