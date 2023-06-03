import MovieSearch from '@/components/MovieSearch';
import UpcomingMovies from '@/components/UpcomingMovies';
import PopularMovies from '@/components/PopularMovies';

const Home = () => {
  return (
    <>
      <MovieSearch></MovieSearch>
      <PopularMovies></PopularMovies>
      <UpcomingMovies></UpcomingMovies>
    </>
  );
};

export default Home;
