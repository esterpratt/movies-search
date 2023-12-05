interface MovieRes {
  Title: string;
  Year: number;
  imdbId: string;
}

interface MoviesRes {
  data: MovieRes[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

interface Movie {
  title: string;
  year: number;
}

interface Movies {
  data: Movie[];
  pages: number;
}

export type { MoviesRes, Movies, Movie };
