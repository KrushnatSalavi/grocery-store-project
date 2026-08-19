"use client"
import React, { use } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';

const CatSlider = () => {
    return (
        <div className='py-3 sm:py-5'>
            <div className='container mx-auto px-3 sm:px-4'>
                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        480: {
                            slidesPerView: 3,
                        },
                        640: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 6,
                        },
                        1024: {
                            slidesPerView: 8,
                        },
                        1280: {
                            slidesPerView: 10,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Link href={"/category/69b25a4fd586e1fab8094b10"} className='group'>
                            <div className='bg-white p-2 sm:p-3 w-full h-20 sm:h-24 md:h-25 rounded-md shadow-md flex items-center justify-center overflow-hidden'>
                                <img src={"/cat1.png"} alt='catagory' className='max-w-full max-h-full object-contain transition-transform duration-200 group-hover:scale-105' />
                            </div>
                            <h4 className='text-xs sm:text-sm font-50% text-center mt-2 sm:m-3 text-gray-700 group-hover:text-primary leading-tight'>
                                Fruits & Vegetables
                            </h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={"/category/69b25a62d586e1fab8094b15"} className='group'>
                            <div className='bg-white p-2 sm:p-3 w-full h-20 sm:h-24 md:h-25 rounded-md shadow-md flex items-center justify-center overflow-hidden'>
                                <img src={"/cat2.png"} alt='catagory' className='max-w-full max-h-full object-contain transition-transform duration-200 group-hover:scale-105' />
                            </div>
                            <h4 className='text-xs sm:text-sm font-50% text-center mt-2 sm:m-3 text-gray-700 group-hover:text-primary leading-tight'>
                                Meats & Seafood
                            </h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={"/Breaksfast"} className='group'>
                            <div className='bg-white p-2 sm:p-3 w-full h-20 sm:h-24 md:h-25 rounded-md shadow-md flex items-center justify-center overflow-hidden'>
                                <img src={"/cat3.png"} alt='catagory' className='max-w-full max-h-full object-contain transition-transform duration-200 group-hover:scale-105' />
                            </div>
                            <h4 className='text-xs sm:text-sm font-50% text-center mt-2 sm:m-3 text-gray-700 group-hover:text-primary leading-tight'>
                                Breaksfast & Dairy
                            </h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={"/category/69b25a71d586e1fab8094b1a"} className='group'>
                            <div className='bg-white p-2 sm:p-3 w-full h-20 sm:h-24 md:h-25 rounded-md shadow-md flex items-center justify-center overflow-hidden'>
                                <img src={"/cat4.png"} alt='catagory' className='max-w-full max-h-full object-contain transition-transform duration-200 group-hover:scale-105' />
                            </div>
                            <h4 className='text-xs sm:text-sm font-50% text-center mt-2 sm:m-3 text-gray-700 group-hover:text-primary leading-tight'>
                                Breads & Bakery
                            </h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={"/category/69cfc6135e4ae03c072c2a55"} className='group'>
                            <div className='bg-white p-2 sm:p-3 w-full h-20 sm:h-24 md:h-25 rounded-md shadow-md flex items-center justify-center overflow-hidden'>
                                <img src={"/cat5.png"} alt='catagory' className='max-w-full max-h-full object-contain transition-transform duration-200 group-hover:scale-105' />
                            </div>
                            <h4 className='text-xs sm:text-sm font-50% text-center mt-2 sm:m-3 text-gray-700 group-hover:text-primary leading-tight'>
                                Beverages
                            </h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={"/"} className='group'>
                            <div className='bg-white p-2 sm:p-3 w-full h-20 sm:h-24 md:h-25 rounded-md shadow-md flex items-center justify-center overflow-hidden'>
                                <img src={"/cat6.png"} alt='catagory' className='max-w-full max-h-full object-contain transition-transform duration-200 group-hover:scale-105' />
                            </div>
                            <h4 className='text-xs sm:text-sm font-50% text-center mt-2 sm:m-3 text-gray-700 group-hover:text-primary leading-tight'>
                                Frozen Foods
                            </h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={"/category/69b25a22d586e1fab8094b09"} className='group'>
                            <div className='bg-white p-2 sm:p-3 w-full h-20 sm:h-24 md:h-25 rounded-md shadow-md flex items-center justify-center overflow-hidden'>
                                <img src={"/cat7.png"} alt='catagory' className='max-w-full max-h-full object-contain transition-transform duration-200 group-hover:scale-105' />
                            </div>
                            <h4 className='text-xs sm:text-sm font-50% text-center mt-2 sm:m-3 text-gray-700 group-hover:text-primary leading-tight'>
                                Biscuits & Snacks
                            </h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={"/category/69b25a75d586e1fab8094b1f"} className='group'>
                            <div className='bg-white p-2 sm:p-3 w-full h-20 sm:h-24 md:h-25 rounded-md shadow-md flex items-center justify-center overflow-hidden'>
                                <img src={"/cat8.png"} alt='catagory' className='max-w-full max-h-full object-contain transition-transform duration-200 group-hover:scale-105' />
                            </div>
                            <h4 className='text-xs sm:text-sm font-50% text-center mt-2 sm:m-3 text-gray-700 group-hover:text-primary leading-tight'>
                                Kitchen
                            </h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={"/"} className='group'>
                            <div className='bg-white p-2 sm:p-3 w-full h-20 sm:h-24 md:h-25 rounded-md shadow-md flex items-center justify-center overflow-hidden'>
                                <img src={"/cat9.png"} alt='catagory' className='max-w-full max-h-full object-contain transition-transform duration-200 group-hover:scale-105' />
                            </div>
                            <h4 className='text-xs sm:text-sm font-50% text-center mt-2 sm:m-3 text-gray-700 group-hover:text-primary leading-tight'>
                                kids Store
                            </h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={"/"} className='group'>
                            <div className='bg-white p-2 sm:p-3 w-full h-20 sm:h-24 md:h-25 rounded-md shadow-md flex items-center justify-center overflow-hidden'>
                                <img src={"/cat10.png"} alt='catagory' className='max-w-full max-h-full object-contain transition-transform duration-200 group-hover:scale-105' />
                            </div>
                            <h4 className='text-xs sm:text-sm font-50% text-center mt-2 sm:m-3 text-gray-700 group-hover:text-primary leading-tight'>
                                Health Care
                            </h4>
                        </Link>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default CatSlider