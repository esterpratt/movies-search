import { QueryFunctionContext } from 'react-query';
import { MoviesRes, Movies } from '../types/Movies';
const url = 'https://jsonmock.hackerrank.com/api/movies/search/';

function adaptMovies(moviesRes: MoviesRes): Movies {
  const moviesData = moviesRes.data.map((movie) => {
    return { title: movie.Title, year: movie.Year };
  });

  return {
    data: moviesData,
    pages: moviesRes.total_pages,
  };
}

async function getMovies({
  queryKey,
}: QueryFunctionContext<
  [string, { title: string; page: number | undefined }]
>) {
  const [_key, { title, page }] = queryKey;
  const res = await fetch(`${url}?Title=${title}&page=${page ?? 1}`);
  if (!res.ok) {
    throw new Error(`Error while fetching data from ${url}`);
  }
  const movies = await res.json();
  return adaptMovies(movies);
}

export { getMovies };
