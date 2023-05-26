import BaseService from '@/services/base-service';

const MovieService = () => {
  const baseService = BaseService('movies').instance;

  const getMovies = (movieName: string, page = 1) => {
    return baseService.get('', { params: { movieName, page } });
  };

  const getMovie = (omdbId: string) => {
    return baseService.get('', { params: { omdbId } });
  };

  return {
    getMovies,
    getMovie,
  };
};

export default MovieService;
