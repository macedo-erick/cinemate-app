'use client';

import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import './style.scss';

import MovieService from '@/services/movie-service';
import MovieCard from '@/components/MovieCard';
import Pagination from '@mui/material/Pagination';

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
            <SearchIcon className="text-slate-400"></SearchIcon>
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
            className="w-16 bg-yellow-400 rounded-lg"
            onClick={() => queryMovies(query)}
          >
            <PlayArrowIcon className="text-4xl"></PlayArrowIcon>
          </button>
        </div>

        {lastQueries.length ? (
          <div className="last__queries__container flex flex-wrap gap-3">
            {Array.from(new Set(lastQueries)).map((l, i) => (
              <span
                className="text-yellow-500 text-sm text-center font-bold bg-slate-950 shadow-lg p-3 px-5 rounded-lg hover:cursor-pointer"
                key={i}
                onClick={(event: any) => queryMovies(event.target.innerHTML)}
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
        <>
          <div className="results__container mt-12">
            {result.length ? (
              result.map((r, i) => <MovieCard movie={r} key={i}></MovieCard>)
            ) : (
              <p className="text-white font-bold">
                Query did not return any results.
              </p>
            )}
          </div>
          {result.length ? (
            <div className="pagination__container mt-12 flex justify-center">
              <Pagination count={20}></Pagination>
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default MovieSearch;
