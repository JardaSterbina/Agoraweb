
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import type { Review } from '../../types/Review'
//import sdsdsd from '/Vector.svg';

// @ts-ignore
import 'swiper/css'
// @ts-ignore
import 'swiper/css/pagination'

type ReviewsProps = {
  title: string;
  reviews: Review[];
}

export default function Reviews({ title, reviews }: ReviewsProps)
{
  return (
    <section>
      <h2>{title}</h2>
      <Swiper
          className='!pb-[2rem]'
          slidesPerView={3}
          spaceBetween={16}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 }
          }}
        >
          {reviews.map((review, index) => 
            <SwiperSlide key={index}>
              <ReviewCard {...review} />
            </SwiperSlide>
          )}
        </Swiper>      
    </section>
  )
}

function ReviewCard({ image, name, message }: Review)
{
  return (
    <div className="text-center bg-tertiary p-[1rem] rounded-lg">
      <div className='w-[100px] h-[100px] mx-auto rounded-full overflow-hidden'>
        <img className='h-[100%] object-cover' src={image} alt={name} />
      </div>
      <h3 className='font-bold my-[1em]'>{name}</h3>
      <p>{message}</p>
    </div>
  )
}