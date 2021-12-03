// Get data with fetch from the API URL
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://api.themoviedb.org/3';

export type AllMoviesType = {
  page: number;
  results: MovieItemsTMDB[];
  total_pages: number;
  total_results: number;
};

type AllGenresType = {
  genres: GenresTMDB[];
};

// Function for getting top rated movies
export const getTopRatedMovies = async (): Promise<AllMoviesType> => {
  const url = `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=fr-FR`;

  const response = await fetch(url);
  const responseJson = await response.json();

  return responseJson;
};

// Function for getting top rated movies
export const getAllGenres = async (): Promise<AllGenresType> => {
  const url = `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=fr-FR`;

  const response = await fetch(url);
  const responseJson = await response.json();

  return responseJson;
};

// Function for getting movies from genre
export const getMoviesFromGenre = async (id: number): Promise<AllMoviesType> => {
  const url = `${API_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=${id}`;

  const response = await fetch(url);
  const responseJson = await response.json();

  return responseJson;
};

// Function for getting movie details
export const getMovie = async (id: string): Promise<MovieTMDB> => {
  const url = `${API_URL}/movie/${id}?api_key=${API_KEY}&language=fr-FR`;

  const response = await fetch(url);
  const responseJson = await response.json();

  return responseJson;
};

// Function for getting similar movies
export const getSimilarMovies = async (id: string): Promise<AllMoviesType> => {
  const url = `${API_URL}/movie/${id}/similar?api_key=${API_KEY}&language=fr-FR`;

  const response = await fetch(url);
  const responseJson = await response.json();

  return responseJson;
};

// Function for getting popular movies
export const getPopularMovies = async (): Promise<AllMoviesType> => {
  const url = `${API_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR`;

  const response = await fetch(url);
  const responseJson = await response.json();

  return responseJson;
};

// Function for getting search movie
export const getSearchedMovies = async (query: string): Promise<AllMoviesType> => {
  const url = `${API_URL}/search/movie?api_key=${API_KEY}&language=fr-FR&query=${query}`;

  const response = await fetch(url);
  const responseJson = await response.json();

  return responseJson;
};
