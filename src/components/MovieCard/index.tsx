import { Movie } from '@/models/movie';

import './style.scss';
import Link from 'next/link';

interface MovieCardProps {
  movie: Movie;
  fullDate?: boolean;
}

const MovieCard = ({ movie, fullDate = false }: MovieCardProps) => {
  const noImageLink =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png';

  return (
    <>
      <div className="card__wrapper flex flex-col gap-4">
        <Link href={'/movie/' + movie.imdbId} className="h-max">
          <img
            src={movie.poster != 'N/A' ? movie.poster : noImageLink}
            alt={movie.title}
          />
        </Link>

        <h1 className="text-white font-bold h-12">{movie.title}</h1>

        <div className="flex flex-wrap gap-2">
          <span className="text-yellow-500 text-xs font-bold bg-slate-950 p-2 rounded-lg">
            {fullDate ? movie.releasedDate : movie.year}
          </span>
          {movie.genre.map((g, i) => (
            <span
              className="text-yellow-500 text-xs text-center font-bold bg-slate-950 p-2 rounded-lg"
              key={i}
            >
              {g}
            </span>
          ))}

          {movie.runtime ? (
            <span className="text-yellow-500 text-xs text-center font-bold bg-slate-950 p-2 rounded-lg">
              {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}min
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
