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

async function getMoviesApi(title: string, page?: number) {
  try {
    const res = await fetch(`${url}?Title=${title}&page=${page ?? 1}`);
    const movies = await res.json();
    return adaptMovies(movies);
  } catch (e) {
    return null;
  }
}

export { getMoviesApi };
