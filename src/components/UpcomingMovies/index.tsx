'use client';

import { useEffect, useState } from 'react';
import MovieService from '@/services/movie-service';
import { MovieModel } from '@/models/movie.model';
import MovieCard from '@/components/MovieCard';

const UpcomingMovies = () => {
  const [movies, setMovies] = useState<MovieModel[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    MovieService.getUpcomingMovies()
      .then((res) => setMovies(res.data.results))
      .finally(() => setLoaded(true));
  }, []);

  return (
    <>
      {loaded ? (
        <section>
          <h1 className="text-yellow-500 text-2xl font-extrabold my-12">
            Upcoming
          </h1>
          <ul className="results__container mb-12">
            {movies.map((m, i) => (
              <MovieCard
                movie={m}
                animate={true}
                fullDate={true}
                key={i}
              ></MovieCard>
            ))}
          </ul>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default UpcomingMovies;
