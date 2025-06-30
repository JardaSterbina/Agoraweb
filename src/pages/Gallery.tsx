import PhotoSwipeGallery from '../components/PhotoSwipeGallery';
import { Helmet } from 'react-helmet-async';
import galery1 from '/img/galery1.webp';
import galery2 from '/img/galery2.webp';
import galery3 from '/img/galery3.webp';
import galery4 from '/img/galery4.webp';
import galery5 from '/img/galery5.webp';
import galery6 from '/img/galery6.webp';
import galery7 from '/img/galery7.webp';
import galery8 from '/img/galery8.webp';
import galery9 from '/img/galery9.webp';
import galery10 from '/img/galery10.webp';
import galeryurl1 from '/img/galeryurl1.png'
import galeryurl2 from '/img/galeryurl2.png';
import galeryurl3 from '/img/galeryurl3.png';
import galeryurl4 from '/img/galeryurl4.png';
import galeryurl5 from '/img/galeryurl5.png';
import galeryurl6 from '/img/galeryurl6.png';
import galeryurl7 from '/img/galeryurl7.png';
import galeryurl8 from '/img/galeryurl8.png';
import galeryurl9 from '/img/galeryurl9.png';
import galeryurl10 from '/img/galeryurl10.png';
export default function Gallery() {

  return (
    <>
      <Helmet>
        <title>Galerie | Ajurvédské centrum Agora</title>
        <meta name="description" content="Prohlédněte si fotogalerii našeho Ajurvédského centra Agora. Nahlédněte do našich prostor a seznamte se s prostředím, kde poskytujeme ajurvédské masáže a terapie." />
        <meta name="keywords" content="galerie, fotky, ajurvédské centrum, masážní salon, terapeutické místnosti, relaxační prostory" />
        <meta property="og:title" content="Galerie | Ajurvédské centrum Agora" />
        <meta property="og:description" content="Prohlédněte si fotogalerii našeho Ajurvédského centra Agora" />
        <meta property="og:type" content="website" />
      </Helmet>
      <section>
        <h1 className="underline-336 pb-4">Galerie</h1>
        <PhotoSwipeGallery
          galleryID="gallery"
          images={[
            {
              largeURL: galeryurl1,
              thumbnailURL: galery1,
              width: 320 * 2,
              height: 320 * 2,
              alt: "ajurvédské centrum Agora", 
            },
            {
              largeURL: galeryurl2,
              thumbnailURL: galery2,
              width: 320 * 2,
              height: 320 * 2,
              alt: "ajurvédské centrum Agora",
            },
            {
              largeURL: galeryurl3,
              thumbnailURL: galery3,
              width: 320 * 2,
              height: 320 * 2,
              alt: "ajurvédské centrum Agora",
            },
            {
              largeURL: galeryurl4,
              thumbnailURL: galery4,
              width: 320 * 2,
              height: 320 * 2,
              alt: "ajurvédské centrum Agora",
            },
            {
              largeURL: galeryurl5,
              thumbnailURL: galery5,
              width: 320 * 2,
              height: 320 * 2,
              alt: "ajurvédské centrum Agora",
            },
            {
              largeURL:galeryurl6,
              thumbnailURL: galery6,
              width: 320 * 2,
              height: 320 * 2,
              alt: "ajurvédské centrum Agora",
            },

            {
              largeURL: galeryurl7,
              thumbnailURL: galery7,
              width: 320 * 2,
              height: 320 * 2,
              alt: "ajurvédské centrum Agora",
            },
            {
              largeURL:galeryurl8,
              thumbnailURL: galery8,
              width: 320 * 2,
              height: 320 * 2,
              alt: "ajurvédské centrum Agora",
            },
            {
              largeURL: galeryurl9,
              thumbnailURL: galery9,
              width: 320 * 2,
              height: 320 * 2,
              alt: "ajurvédské centrum Agora",
            },
            {
              largeURL: galeryurl10,
              thumbnailURL: galery10,
              width: 320 * 2,
              height: 320 * 2,
              alt: "ajurvédské centrum Agora",
            },
          ]}
        />
      </section>
    </>
  )
}