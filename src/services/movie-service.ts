import BaseService from '@/services/base-service';
import { Page } from '@/models/page.model';
import { Movie } from '@/models/movie';
import { AxiosResponse } from 'axios';

const MovieService = () => {
  const baseService = BaseService('movies');

  const getMovies = (
    movieName: string,
    page = 1
  ): Promise<AxiosResponse<Page<Movie>>> => {
    return baseService.get('', { params: { movieName, page } });
  };

  const getMovie = (imdbId: string): Promise<AxiosResponse<Movie>> => {
    return baseService.get(`/detail/${imdbId}`);
  };

  const getUpcomingMovies = () => {
    return baseService.get(`/upcoming`);
  };

  const getPopularMovies = () => {
    return baseService.get(`/popular`);
  };

  return {
    getMovies,
    getMovie,
    getUpcomingMovies,
    getPopularMovies,
  };
};

export default MovieService();
