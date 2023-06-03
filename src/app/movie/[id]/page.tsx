'use client';

import { useEffect, useState } from 'react';
import MovieService from '@/services/movie-service';
import { Movie } from '@/models/movie';
import RelatedMovies from '@/components/RelatedMovies';
import Videos from '@/components/Videos';
import Reviews from '@/components/Reviews';
import Image from 'next/image';

interface MovieProps {
  params: { id: number };
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
          <section className="flex wrap gap-12 items-center justify-center py-36">
            <article className="w-1/5">
              <Image
                src={movie?.poster!}
                alt={movie?.title!}
                width={1920}
                height={1080}
                quality={100}
                className="h-full w-full rounded"
              ></Image>
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

              {movie?.genres.length ? (
                <div className="flex gap-2">
                  {movie.genres.map((g, i) => (
                    <span className="chip" key={i}>
                      {g}
                    </span>
                  ))}
                </div>
              ) : (
                <></>
              )}

              {movie?.languages.length ? (
                <div className="flex gap-2">
                  {movie.languages.map((l, i) => (
                    <span className="chip" key={i}>
                      {l}
                    </span>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </article>
          </section>

          <RelatedMovies id={params.id}></RelatedMovies>
          <Videos id={params.id}></Videos>
          <Reviews id={params.id}></Reviews>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Movie;
