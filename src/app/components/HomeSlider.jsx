
"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const HomeSlider = () => {
    return (
        <div className='homeSlider'>
            <div className='container'>
                <Swiper
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }} className="mySwiper">
                    <SwiperSlide>
                        <div className='item'>
                            <Image src={"/slide1.png"} alt='slide1' width={1344} height={514} className='w-full'></Image>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <Image src={"/slide2.png"} alt='slide1' width={1344} height={514} className='w-full'></Image>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <Image src={"/slide3.png"} alt='slide1' width={1344} height={514} className='w-full'></Image>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <Image src={"/slide1.png"} alt='slide1' width={1344} height={514} className='w-full'></Image>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>

        </div>
    )
}

export default HomeSlider
