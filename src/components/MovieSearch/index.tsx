'use client';

import React, { useState } from 'react';

import './style.scss';

import MovieService from '@/services/movie-service';
import MovieCard from '@/components/MovieCard';

const MovieSearch = () => {
  const [result, setResult] = useState<any[]>([]);
  const [query, setQuery] = useState('');
  const [lastQueries, setLastQueries] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      queryMovies(query);
    }
  };

  const queryMovies = (query: string) => {
    if (query.trim().length) {
      MovieService.getMovies(query)
        .then((res) => setResult(res.data.content))
        .catch(() => setResult([]))
        .finally(() => {
          setLoaded(true);
          setLastQueries([...lastQueries, query]);
        });
    }
  };

  return (
    <>
      <div className="grid gap-3 items-center justify-center">
        <div className="flex gap-4">
          <div className="search__container flex items-center rounded-lg p-5 bg-slate-950">
            <span className="material-symbols-outlined text-slate-400">
              search
            </span>
            <input
              type="text"
              className="px-3 text-white font-bold bg-slate-950 focus:outline-none"
              placeholder="Find a movie..."
              value={query}
              onKeyDown={handleKeyDown}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <button
            className="w-16 bg-yellow-400 rounded-full grid place-items-center"
            onClick={() => queryMovies(query)}
          >
            <span className="material-symbols-outlined text-3xl">
              play_arrow
            </span>
          </button>
        </div>

        {lastQueries.length ? (
          <div className="last__queries__container flex flex-wrap gap-3">
            {Array.from(new Set(lastQueries)).map((l, i) => (
              <span
                className="text-yellow-500 text-sm text-center font-bold bg-slate-950 shadow-lg p-3 px-5 rounded-lg hover:cursor-pointer"
                key={i}
                onClick={(event: any) => {
                  setQuery(event.target.innerHTML);
                  queryMovies(event.target.innerHTML);
                }}
              >
                {l}
              </span>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>

      {loaded ? (
        <div className="results__container mt-12">
          {result.length ? (
            result.map((r, i) => <MovieCard movie={r} key={i}></MovieCard>)
          ) : (
            <p className="text-white font-bold">
              Query did not return any results.
            </p>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default MovieSearch;
