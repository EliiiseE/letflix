import { createContext } from 'react';

type FavoriteMovieType = {
  image: string;
  id: number;
};
export interface DataContextType {
  favoriteMovies: FavoriteMovieType[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFavoriteMovies: (movies: any) => void;
}

const DataContext = createContext<DataContextType>([] as never);

export default DataContext;
