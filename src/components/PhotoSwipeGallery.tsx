import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import GalleryImage from '../types/GalleryImage';

interface SimpleGalleryProps {
  galleryID: string;
  images: GalleryImage[];
}

export default function PhotoSwipeGallery ({galleryID, images}: SimpleGalleryProps) {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => lightbox.destroy();
  }, [galleryID, images]);

  return (
    <div id={galleryID} className='flex gap-[1rem] flex-wrap gallery'>
      {images.map((image, index) => (
        <a
          className='basis-[250px] grow'
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image.thumbnailURL} alt="" />
        </a>
      ))}
    </div>
  );
};