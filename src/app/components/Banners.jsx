"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import Link from 'next/link'

const Banners = () => {
  return (
    <section className='py-3 sm:py-5 bg-white pt-0'>
      <div className='container mx-auto px-3 sm:px-4'>

        <Swiper
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          className="mySwiper"
        >

          <SwiperSlide>
            <Link
              href={"/"}
              className='item block rounded-lg overflow-hidden'
            >
              <img
                src={"/banner1.jpg"}
                alt='banner'
                className='w-full h-auto object-cover transition duration-300 hover:scale-105 rounded-md'
              />
            </Link>
          </SwiperSlide>


          <SwiperSlide>
            <Link
              href={"/"}
              className='item block rounded-lg overflow-hidden'
            >
              <img
                src={"/banner2.jpg"}
                alt='banner'
                className='w-full h-auto object-cover transition duration-300 hover:scale-105 rounded-md'
              />
            </Link>
          </SwiperSlide>


          <SwiperSlide>
            <Link
              href={"/"}
              className='item block rounded-lg overflow-hidden'
            >
              <img
                src={"/banner3.jpg"}
                alt='banner'
                className='w-full h-auto object-cover transition duration-300 hover:scale-105 rounded-md'
              />
            </Link>
          </SwiperSlide>

        </Swiper>

      </div>
    </section>
  )
}

export default Banners