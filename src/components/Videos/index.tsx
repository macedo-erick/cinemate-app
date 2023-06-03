import { useEffect, useState } from 'react';

import MovieService from '@/services/movie-service';
import { Video } from '@/models/video.model';

import { Swiper, SwiperSlide } from 'swiper/react';

import './style.scss';

import 'swiper/css';

import { PlayIcon } from '@heroicons/react/24/solid';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';

interface VideosProps {
  id: number;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  boxShadow: 24,
};

const Videos = ({ id }: VideosProps) => {
  const [videos, setVideos] = useState<Video[]>();
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    MovieService.getMovieVideos(id)
      .then((res) => setVideos(res.data))
      .finally(() => setLoaded(true));
  }, [id]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {loaded && videos?.length ? (
        <>
          <section>
            <h1 className="section__title">Videos</h1>

            <Swiper slidesPerView={4} spaceBetween={40} loop={true}>
              {videos?.map((v, i) => (
                <SwiperSlide key={i}>
                  <div className="grid">
                    <button
                      className="play__btn absolute justify-self-center w-20 place-self-center text-white bg-slate-800 p-5 rounded-full"
                      onClick={handleOpen}
                    >
                      <PlayIcon />
                    </button>
                    <img
                      src={v.thumbnail}
                      alt="thumbnail"
                      className="thumbnail rounded"
                    />

                    <Modal
                      disableAutoFocus
                      open={open}
                      onClose={handleClose}
                      className="video__player"
                      sx={{ 'background-color': 'rgba(0, 0, 0, 0.1)' }}
                    >
                      <Box sx={style}>
                        <iframe src={v.video} width={900} height={500}></iframe>
                      </Box>
                    </Modal>
                  </div>
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
