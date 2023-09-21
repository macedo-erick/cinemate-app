import { blurUrl, fallBackImage as defaultFallBack } from '@/utils/util';
import Image from 'next/image';
import { useState } from 'react';

interface ImageProps {
  src: string;
  fallBackImage?: string;
}

const ImageWithFallback = ({ src, fallBackImage }: ImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <>
      <Image
        src={imgSrc}
        alt="thumbnail"
        width={1920}
        height={1080}
        quality={100}
        className="thumbnail rounded animate-pulse"
        placeholder="blur"
        blurDataURL={blurUrl}
        onLoadingComplete={(e) => e.classList.remove('animate-pulse')}
        onError={() => setImgSrc(fallBackImage ?? defaultFallBack)}
      />
    </>
  );
};

export default ImageWithFallback;
