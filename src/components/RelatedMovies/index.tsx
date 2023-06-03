import { useEffect, useState } from 'react';
import { Page } from '@/models/page.model';
import { Movie } from '@/models/movie';
import MovieService from '@/services/movie-service';
import MovieCard from '@/components/MovieCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface RelatedMoviesProps {
  id: number;
}

const RelatedMovies = ({ id }: RelatedMoviesProps) => {
  const [related, setRelated] = useState<Page<Movie>>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    MovieService.getRelatedMovies(id)
      .then((res) => setRelated(res.data))
      .finally(() => setLoaded(true));
  }, [id]);

  return (
    <>
      {loaded && related?.results.length ? (
        <>
          <section className="mb-12">
            <h1 className="section__title">Related</h1>

            <Swiper slidesPerView={5} spaceBetween={20} loop={true}>
              {related?.results.map((m, i) => (
                <SwiperSlide key={i}>
                  <MovieCard movie={m} animate={false}></MovieCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default RelatedMovies;
