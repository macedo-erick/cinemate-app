'use client';

import { useEffect, useState } from 'react';
import MovieService from '@/services/movie-service';

const MovieSearch = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [movie, setMovie] = useState<any>(null);

  const service = MovieService();

  useEffect(() => {
    service.getMovies('Star Wars').then((res) => setMovies(res.data));
    service.getMovie('tt1665728').then((res) => setMovies(res.data));
  }, []);

  return (
    <>
      <h1>Oi</h1>
    </>
  );
};

export default MovieSearch;
