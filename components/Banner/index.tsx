import Image from 'next/image'
import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = {
  images: string[]
}

export const Banner = ({ images }: Props) => {
  const renderImage = (image: string, index: number) => {
    return (
      <SwiperSlide key={index} style={{ height: '190px', width: '100%' }}>
        <Image src={image} alt={image} fill={true} />
      </SwiperSlide>
    )
  }

  return (
    <Swiper
      centeredSlides={true}
      loop={true}
      slidesPerView={1}
      onSlideChange={() => undefined}
      onSwiper={swiper => undefined}
      pagination={{
        clickable: true
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      modules={[Autoplay, Pagination]}
      className="mx-6"
    >
      {images.map((image, i) => renderImage(image, i))}
    </Swiper>
  )
}
