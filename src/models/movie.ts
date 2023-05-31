export interface Movie {
  title: string;
  releasedDate: string;
  genres: string[];
  director: string[];
  writer: string;
  actors: string;
  synopsis: string;
  languages: string[];
  country: string;
  poster: string;
  rating: number;
  imdbId: string;
  year: string;
  runtime: number;
  videos: Video[];
}

interface Video {
  name: string;
  link: string;
}
