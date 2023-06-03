import BaseService from '@/services/base-service';
import { Page } from '@/models/page.model';
import { Movie } from '@/models/movie';
import { AxiosResponse } from 'axios';
import { Video } from '@/models/video.model';
import { Review } from '@/models/review.model';

const MovieService = () => {
  const baseService = BaseService('movies');

  const getMovies = (
    query: string,
    page = 1
  ): Promise<AxiosResponse<Page<Movie>>> => {
    return baseService.get('', { params: { query, page } });
  };

  const getMovie = (id: number): Promise<AxiosResponse<Movie>> => {
    return baseService.get(`/${id}`);
  };

  const getRelatedMovies = (
    id: number
  ): Promise<AxiosResponse<Page<Movie>>> => {
    return baseService.get(`/${id}/related`);
  };

  const getMovieVideos = (id: number): Promise<AxiosResponse<Video[]>> => {
    return baseService.get(`/${id}/videos`);
  };

  const getMovieReviews = (id: number): Promise<AxiosResponse<Review[]>> => {
    return baseService.get(`/${id}/reviews`);
  };

  const getUpcomingMovies = (): Promise<AxiosResponse<Page<Movie>>> => {
    return baseService.get(`/upcoming`);
  };

  const getPopularMovies = (): Promise<AxiosResponse<Page<Movie>>> => {
    return baseService.get(`/popular`);
  };

  return {
    getMovies,
    getMovie,
    getMovieReviews,
    getRelatedMovies,
    getMovieVideos,
    getUpcomingMovies,
    getPopularMovies,
  };
};

export default MovieService();
