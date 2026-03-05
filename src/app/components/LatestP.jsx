"use client";

import React from 'react'
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { useCart } from '../context/CartContext';



const LatestP = () => {

  const { addToCart } = useCart();

  return (
    <div className="container">
      <div className="flex items-center justify-between mb-5">

        <h2 className="text-2xl text-gray-800 font-semibold">
          Latest Products
        </h2>
        <Link href={"/products"} className="flex items-center gap-1 text-sm text-gray-700 font-semibold hover:text-primary"> View All <MdOutlineArrowRightAlt size={25} /></Link>

      </div>

      <div className='productSlider py-5'>
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/Latest1.jpg"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 1,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/Latest1.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/Latest2.jpg"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 2,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/Latest2.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>      </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/Latest3.jpg"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 3,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/Latest3.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>      </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/Latest4.jpg"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 4,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/Latest4.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/Latest5.jpg"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 5,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/Latest5.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>      </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/Latest.6.jpg"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 6,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/Latest.6.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>      </div>
            </div>
          </SwiperSlide>



          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/product1.png"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 7,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/Latest7.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>      </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
      {/* ............................................................................Fetured Products ......................................  */}


      <div className="flex items-center justify-between mb-5">

        <h2 className="text-2xl text-gray-800 font-semibold">
          Fetured Products
        </h2>
        <Link href={"/products"} className="flex items-center gap-1 text-sm text-gray-700 font-semibold hover:text-primary"> View All <MdOutlineArrowRightAlt size={25} /></Link>

      </div>

      <div className='productSlider py-5'>
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/Fetured1.jpg"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 8,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/Fetured1.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>      </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/Fetured2.jpg"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 9,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/Fetured2.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>      </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/Fetured3.jpg"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 10,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/Fetured3.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>      </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/Fetured4.jpg"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 11,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/Fetured4.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>      </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/Fetured5.jpg"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 12,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/Fetured5.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>      </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/Fetured6.jpg"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 13,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/Fetured6.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>      </div>
            </div>
          </SwiperSlide>



          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/product1.png"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 14,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/product1.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>      </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>


      {/* ............................................................................Breksfast and Dairy ......................................  */}


      <div className="flex items-center justify-between mb-5">

        <h2 className="text-2xl text-gray-800 font-semibold">
          Breksfast and Dairy
        </h2>
        <Link href={"/products"} className="flex items-center gap-1 text-sm text-gray-700 font-semibold hover:text-primary"> View All <MdOutlineArrowRightAlt size={25} /></Link>

      </div>

      <div className='productSlider py-5'>
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/Breksfast1.jpg"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 15,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/Breksfast1.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>      </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/Breksfast2.jpg"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 16,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/Breksfast2.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>      </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/Breksfast3.jpg"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 17,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/Breksfast3.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>      </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/Breksfast4.jpg"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 18,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/Breksfast4.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>      </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/Breksfast5.jpg"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 19,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/Breksfast5.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>      </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/Breksfast6.jpg"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 20,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/Breksfast6.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>      </div>
            </div>
          </SwiperSlide>



          <SwiperSlide className='py-3 px-2'>
            <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
              <Link href={"/"} className='img overflow-hidden flex p-4 '>
                <img src={"/product1.png"} alt='product img ' className='transition hover:scale-105 h-40 w-40'></img>
              </Link>
              <div className='info py-3 flex flex-col gap-1'>

                <span className='text-sm text-gray-700'>Bingo</span>
                <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                <Rating name="read-only" value={4} readOnly size='small' />


                <div className='flex items-center justify-between'>
                  <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                  <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                </div>

                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 21,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/product1.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>      </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>




    </div>



  )
}

export default LatestP
