import { Movie } from '@/models/movie';

import './style.scss';
import Link from 'next/link';

interface MovieCardProps {
  movie: Movie;
  fullDate?: boolean;
  animate?: boolean;
}

const MovieCard = ({
  movie,
  fullDate = false,
  animate = true,
}: MovieCardProps) => {
  return (
    <>
      <li
        className={`card__wrapper flex flex-col gap-4 select-none ${
          animate ? 'animate' : ''
        }`}
      >
        <Link href={'/movie/' + movie.id} className="h-max">
          <img src={movie.poster} alt={movie.title} className="rounded" />
        </Link>

        <h1 className="text-white font-bold h-12">{movie.title}</h1>

        <div className="flex flex-wrap gap-2">
          <span className="chip">
            {fullDate ? movie.releasedDate : movie.year || 'N/A'}
          </span>
          {movie.genres.map((g, i) => (
            <span className="chip" key={i}>
              {g}
            </span>
          ))}

          {movie.runtime ? (
            <span className="chip">
              {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}min
            </span>
          ) : (
            <></>
          )}
        </div>
      </li>
    </>
  );
};

export default MovieCard;
