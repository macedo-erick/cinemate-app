'use client';

import { useEffect, useState } from 'react';
import MovieService from '@/services/movie-service';
import { Movie } from '@/models/movie';

interface MovieProps {
  params: { id: string };
}

const Movie = ({ params }: MovieProps) => {
  const [movie, setMovie] = useState<Movie>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    MovieService.getMovie(params.id)
      .then((res) => {
        setMovie(res.data);
      })
      .finally(() => setLoaded(true));
  }, []);

  return (
    <>
      {loaded ? (
        <>
          <section className="flex flex wrap gap-12 items-center justify-center py-32">
            <article className="w-1/5">
              <img src={movie?.poster} alt="Poster" className="rounded" />
            </article>

            <article className="w-2/6 flex flex-col gap-6">
              <h1 className="text-yellow-500 text-xl font-extrabold">
                {movie?.title}
              </h1>

              <p className="text-yellow-500 text-sm text-justify">
                {movie?.synopsis}
              </p>

              <p className="chip">{movie?.rating.toFixed(1)}</p>

              <p className="chip">{movie?.year}</p>

              {movie?.runtime ? (
                <span className="chip">
                  {Math.floor(movie?.runtime / 60)}h {movie?.runtime % 60}min
                </span>
              ) : (
                <></>
              )}

              <div className="flex gap-2">
                {movie?.genres.map((g, i) => (
                  <span className="chip" key={i}>
                    {g}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                {movie?.languages.map((l, i) => (
                  <span className="chip" key={i}>
                    {l}
                  </span>
                ))}
              </div>
            </article>
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );

  // return (

  // );
};

export default Movie;
