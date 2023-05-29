'use client';

import { useEffect, useState } from 'react';

import { Movie } from '@/models/movie';
import MovieService from '@/services/movie-service';
import MovieCard from '@/components/MovieCard';

const PopularMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    MovieService.getPopularMovies()
      .then((res) => setMovies(res.data))
      .finally(() => setLoaded(true));
  }, []);

  return (
    <>
      {loaded ? (
        <>
          <h1 className="text-yellow-500 text-2xl font-extrabold my-12">
            Popular
          </h1>
          <div className="results__container">
            {movies.map((m, i) => (
              <MovieCard movie={m} key={i}></MovieCard>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default PopularMovies;
