"use client"
import React, { use } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';

const CatSlider = () => {
    return (
        <div className='py-5'>
            <div className='container'>
                <Swiper
                    spaceBetween={15}
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
                        <Link href={"/Fruits"} className='group'>
                            <div className='bg-white p-3 w-full h-25 rounded-md shadow-md flex items-center'>
                                <img src={"/cat1.png"} alt='catagory' className='hover:scale-105' />
                            </div>
                            <h4 className='text-sm font-50% text-center m-3 text-gray-700 hover:text-primary'>
                                Fruits & Vegetables
                            </h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={"/Meats"} className='group'>
                            <div className='bg-white p-3 w-full h-25 rounded-md shadow-md flex items-center'>
                                <img src={"/cat2.png"} alt='catagory' className='hover:scale-105' />
                            </div>
                            <h4 className='text-sm font-50% text-center m-3 text-gray-700 hover:text-primary'>
                                Meats & Seafood
                            </h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={"/Breaksfast"} className='group'>
                            <div className='bg-white p-3 w-full h-25 rounded-md shadow-md flex items-center'>
                                <img src={"/cat3.png"} alt='catagory' className='hover:scale-105' />
                            </div>
                            <h4 className='text-sm font-50% text-center m-3 text-gray-700 hover:text-primary'>
                                Breaksfast & Dairy
                            </h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={"/Breads"} className='group'>
                            <div className='bg-white p-3 w-full h-25  rounded-md shadow-md flex items-center'>
                                <img src={"/cat4.png"} alt='catagory' className='hover:scale-105'></img>

                            </div>
                            <h4 className='text-sm font-50% text-center m-3 text-gray-700 hover:text-primary'>Breads & Bakery</h4>
                        </Link>
                    </SwiperSlide>



                    <SwiperSlide>
                        <Link href={"/"} className='group'>
                            <div className='bg-white p-3 w-full h-25 rounded-md shadow-md flex items-center'>
                                <img src={"/cat5.png"} alt='catagory' className='hover:scale-105'></img>

                            </div>
                            <h4 className='text-sm font-50% text-center m-3 text-gray-700 hover:text-primary'>Beverages</h4>
                        </Link>
                    </SwiperSlide>



                    <SwiperSlide>
                        <Link href={"/"} className='group'>
                            <div className='bg-white p-3 w-full  h-25 rounded-md shadow-md flex items-center'>
                                <img src={"/cat6.png"} alt='catagory' className='hover:scale-105'></img>

                            </div>
                            <h4 className='text-sm font-50% text-center m-3 text-gray-700 hover:text-primary'>Frozen Foods</h4>
                        </Link>
                    </SwiperSlide>



                    <SwiperSlide>
                        <Link href={"/"} className='group'>
                            <div className='bg-white p-3 w-full h-25 rounded-md shadow-md flex items-center'>
                                <img src={"/cat7.png"} alt='catagory' className='hover:scale-105'></img>

                            </div>
                            <h4 className='text-sm font-50% text-center m-3 text-gray-700 hover:text-primary'>Biscuits & Snacks</h4>
                        </Link>
                    </SwiperSlide>




                    <SwiperSlide>
                        <Link href={"/"} className='group'>
                            <div className='bg-white p-3 w-full h-25 rounded-md shadow-md flex items-center'>
                                <img src={"/cat8.png"} alt='catagory' className='hover:scale-105'></img>

                            </div>
                            <h4 className='text-sm font-50% text-center m-3 text-gray-700 hover:text-primary'>Kitchen</h4>
                        </Link>
                    </SwiperSlide>



                    <SwiperSlide>
                        <Link href={"/"} className='group'>
                            <div className='bg-white p-3 w-full h-25 rounded-md shadow-md flex items-center'>
                                <img src={"/cat9.png"} alt='catagory' className='hover:scale-105'></img>

                            </div>
                            <h4 className='text-sm font-50% text-center m-3 text-gray-700 hover:text-primary'>kids Store</h4>
                        </Link>
                    </SwiperSlide>



                    <SwiperSlide>
                        <Link href={"/"} className='group'>
                            <div className='bg-white p-3 w-full h-25 rounded-md shadow-md flex items-center'>
                                <img src={"/cat10.png"} alt='catagory' className='hover:scale-105'></img>

                            </div>
                            <h4 className='text-sm font-50% text-center m-3 text-gray-700 hover:text-primary'>Health Care</h4>
                        </Link>
                    </SwiperSlide>



                </Swiper>

            </div>

        </div>
    )
}

export default CatSlider
