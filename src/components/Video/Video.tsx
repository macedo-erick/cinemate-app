import { Video } from '@/models/video.model';
import { PlayIcon } from '@heroicons/react/24/solid';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { useState } from 'react';

import './style.scss';
import Image from 'next/image';

interface VideoProps {
  video: Video;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  boxShadow: 24,
};

const Video = ({ video: v }: VideoProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="grid">
        <button
          className="play__btn absolute justify-self-center w-20 place-self-center text-white bg-slate-800 p-5 rounded-full"
          onClick={handleOpen}
        >
          <PlayIcon />
        </button>

        <Image
          src={v.thumbnail}
          alt="thumbnail"
          className="thumbnail rounded"
          width={1920}
          height={1080}
          quality={100}
        />

        {open ? (
          <Modal disableAutoFocus open={open} onClose={handleClose}>
            <Box sx={style}>
              <iframe src={v.video} width={900} height={500}></iframe>
            </Box>
          </Modal>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Video;
