'use client';

import React, { useContext, useState } from 'react';

import MovieService from '@/services/movie-service';
import MovieCard from '@/components/MovieCard';

import { MagnifyingGlassIcon, PlayCircleIcon } from '@heroicons/react/24/solid';
import { LastQueriesContext } from '@/utils/context/LastQueriesContext';
import { PageContext } from '@/utils/context/PageContext';
import { QueryContext } from '@/utils/context/QueryContext';

const MovieSearch = () => {
  const [loading, setLoading] = useState(false);

  const { query, setQuery } = useContext(QueryContext);
  const { lastQueries, setLastQueries } = useContext(LastQueriesContext);
  const { page, setPage } = useContext(PageContext);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      queryMovies(query as string);
    }
  };

  const queryMovies = (query: string) => {
    if (query.trim().length) {
      setLoading(true);
      setLastQueries([...(lastQueries || []), query]);

      MovieService.getMovies(query)
        .then((res) => {
          setPage(res.data);

          document.getElementById('search-btn')?.focus();
        })
        .catch(() => setPage([]))
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <section className="mb-12">
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

          <button
            onClick={() => queryMovies(query as string)}
            id="search-btn"
            className="focus:outline-none"
          >
            <PlayCircleIcon
              className={`text-yellow-400 w-12 ${
                loading ? 'animate-spin' : ''
              } `}
            ></PlayCircleIcon>
          </button>
        </div>

        {lastQueries?.length ? (
          <ul className="flex flex-wrap w-120 gap-3">
            {Array.from(new Set(lastQueries)).map((l, i) => (
              <li
                className="text-yellow-500 text-sm text-center font-bold bg-slate-950 shadow-lg p-3 px-5 rounded-lg hover:cursor-pointer"
                key={i}
                onClick={(e) => {
                  setQuery(e.currentTarget.innerHTML);
                  queryMovies(e.currentTarget.innerHTML);
                }}
              >
                {l as string}
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </div>

      {page?.results.length ? (
        <ul className="results__container mt-12">
          {page.results.map((r, i) => (
            <MovieCard movie={r} key={i}></MovieCard>
          ))}
        </ul>
      ) : page?.results ? (
        <p className="text-white font-bold">
          Query did not return any results.
        </p>
      ) : (
        <></>
      )}
    </section>
  );
};

export default MovieSearch;
