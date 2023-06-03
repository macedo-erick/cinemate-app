import { useEffect, useState } from 'react';

import MovieService from '@/services/movie-service';
import { Video as VideoModel } from '@/models/video.model';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Video from '@/components/Video/Video';

interface VideosProps {
  id: number;
}

const Videos = ({ id }: VideosProps) => {
  const [videos, setVideos] = useState<VideoModel[]>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    MovieService.getMovieVideos(id)
      .then((res) => setVideos(res.data))
      .finally(() => setLoaded(true));
  }, [id]);

  return (
    <>
      {loaded && videos?.length ? (
        <>
          <section className="mb-12">
            <h1 className="section__title">Videos</h1>

            <Swiper slidesPerView={4} spaceBetween={40} loop={true}>
              {videos?.map((v, i) => (
                <SwiperSlide key={i}>
                  <Video video={v}></Video>
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

export default Videos;
