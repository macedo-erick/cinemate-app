'use client';

import { useEffect, useState } from 'react';

import { Movie } from '@/utils/models/movie';
import MovieService from '@/services/movie-service';
import MovieCard from '@/components/MovieCard';

const PopularMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    MovieService.getPopularMovies()
      .then((res) => setMovies(res.data.results))
      .finally(() => setLoaded(true));
  }, []);

  return (
    <>
      {loaded ? (
        <section className="mb-12">
          <h1 className="section__title">Popular</h1>
          <ul className="results__container">
            {movies.map((m, i) => (
              <MovieCard movie={m} key={i}></MovieCard>
            ))}
          </ul>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default PopularMovies;
