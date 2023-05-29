'use client';

import React, { useState } from 'react';

import MovieService from '@/services/movie-service';
import MovieCard from '@/components/MovieCard';

import { MagnifyingGlassIcon, PlayCircleIcon } from '@heroicons/react/24/solid';

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
    <section>
      <div className="grid gap-3 items-center justify-center">
        <div className="flex gap-4">
          <div className="flex items-center w-120 p-5 rounded-lg bg-slate-950">
            <MagnifyingGlassIcon className="text-slate-400 w-5"></MagnifyingGlassIcon>
            <input
              type="text"
              className="px-3 text-white font-bold bg-slate-950 focus:outline-none"
              placeholder="Find a movie..."
              value={query}
              onKeyDown={handleKeyDown}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <button onClick={() => queryMovies(query)}>
            <PlayCircleIcon className="text-yellow-400 w-12"></PlayCircleIcon>
          </button>
        </div>

        {lastQueries.length ? (
          <ul className="flex flex-wrap w-120 gap-3">
            {Array.from(new Set(lastQueries)).map((l, i) => (
              <li
                className="text-yellow-500 text-sm text-center font-bold bg-slate-950 shadow-lg p-3 px-5 rounded-lg hover:cursor-pointer"
                key={i}
                onClick={(event: any) => {
                  setQuery(event.target.innerHTML);
                  queryMovies(event.target.innerHTML);
                }}
              >
                {l}
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </div>

      {loaded ? (
        <ul className="results__container mt-12">
          {result.length ? (
            result.map((r, i) => <MovieCard movie={r} key={i}></MovieCard>)
          ) : (
            <p className="text-white font-bold">
              Query did not return any results.
            </p>
          )}
        </ul>
      ) : (
        <></>
      )}
    </section>
  );
};

export default MovieSearch;
