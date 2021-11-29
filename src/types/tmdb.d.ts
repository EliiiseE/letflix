type MovieItemsTMDB = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type GenresTMDB = {
  id: number;
  name: string;
};

type MovieTMDB = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: [GenresTMDB];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [ProductionCompanyTMDB];
  production_countries: [ProductionCountryTMDB];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [SpokenLanguageTMDB];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  success?: boolean;
};

type ProductionCompanyTMDB = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type ProductionCountryTMDB = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguageTMDB = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
