"use client"

import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Button } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Rating from "@mui/material/Rating";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import { useCart } from '../context/CartContext';




const FruitesPage = () => {

  const { addToCart } = useCart();


  const [sortBy] = useState("Name, A to Z")
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <div className='container flex gap-4 '>
      <div className='sidebarWrapper w-[18%]'>
        <Sidebar />
      </div>

      <div className='rightContent w-[82%] pl-5'>
        <div className='top-strip w-full bg-[#f1f1f1] p-2 rounded-md h-10 flex items-center justify-between px-4'>
          <span className='text-sm text-gray-500 font-semibold'>There are 25 products.</span>

          <div className='flex items-center gap-3'>
            <span className='text-sm text-gray-500 font-semibold'>Sort By</span>
            <div className='relative'>
              <Button className='!bg-white !capitalize !text-gray-800 !py-1 !px-4' onClick={handleClick}>{sortBy}</Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  list: {
                    'aria-labelledby': 'basic-button',
                  },
                }}
              >
                <MenuItem onClick={handleClose}>Name, A to Z</MenuItem>
                <MenuItem onClick={handleClose}>Name, Z to A</MenuItem>
                <MenuItem onClick={handleClose}>Low to High </MenuItem>
                <MenuItem onClick={handleClose}>High to Low</MenuItem>
              </Menu>
            </div>
          </div>

        </div>

        <div className='justify-center'>
          <div className='productSlider py-1'>
            <Swiper
              slidesPerView={6}
              spaceBetween={10}

              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Breads1.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 88,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Breads1.jpg",
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
                    <img src={"/Breads2.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 89,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Breads2.jpg",
                          brand: "Bingo",
                          qty: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>                                          </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Breads3.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 90,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Breads3.jpg",
                          brand: "Bingo",
                          qty: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>                                          </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Breads4.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 92,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Breads4.jpg",
                          brand: "Bingo",
                          qty: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>                                         </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Breads5.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 93,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Breads5.jpg",
                          brand: "Bingo",
                          qty: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>                                         </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Breads6.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 94,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Breads6.jpg",
                          brand: "Bingo",
                          qty: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>                                         </div>
                </div>
              </SwiperSlide>



              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Breads7.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 95,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Fruits7.jpg",
                          brand: "Bingo",
                          qty: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>                                         </div>
                </div>
              </SwiperSlide>

            </Swiper>


            <Swiper
              slidesPerView={6}
              spaceBetween={10}

              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Breads8.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 96,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Fruits8.jpg",
                          brand: "Bingo",
                          qty: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>                                         </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Breads9.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 97,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Breads9.jpg",
                          brand: "Bingo",
                          qty: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>                                         </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Breads10.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 98,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Breads10.jpg",
                          brand: "Bingo",
                          qty: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>                                         </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Breads11.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 99,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Breads11.jpg",
                          brand: "Bingo",
                          qty: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>                                         </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Breads12.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 100,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Breads12.jpg",
                          brand: "Bingo",
                          qty: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>                                         </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Breads13.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 111,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Breads13.jpg",
                          brand: "Bingo",
                          qty: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>                                         </div>
                </div>
              </SwiperSlide>



              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Breads14.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 112,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Breads14.jpg",
                          brand: "Bingo",
                          qty: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>                                         </div>
                </div>
              </SwiperSlide>

            </Swiper>


            <Swiper
              slidesPerView={6}
              spaceBetween={10}

              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Breads15.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 113,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Breads15.jpg",
                          brand: "Bingo",
                          qty: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>                                         </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Breads16.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 114,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Breads16.jpg",
                          brand: "Bingo",
                          qty: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>                                         </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Breads7.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 115,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Breads17.jpg",
                          brand: "Bingo",
                          qty: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>                                         </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Breads14.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 116,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Breads18.jpg",
                          brand: "Bingo",
                          qty: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>                                         </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Breads19.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 117,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Breads7.jpg",
                          brand: "Bingo",
                          qty: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>                                         </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Breads18.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 118,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Breads14.jpg",
                          brand: "Bingo",
                          qty: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>                                         </div>
                </div>
              </SwiperSlide>



              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Breads18.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
                  </Link>
                  <div className='info py-3 flex flex-col gap-1'>

                    <span className='text-sm text-gray-700'>Bingo</span>
                    <Link href={"/"} className='text-sm text-gray-800 from-neutral-300 hover:text-primary'>100 Percent Apple Juice- 64 fl oz Bottel</Link>
                    <Rating name="read-only" value={4} readOnly size='small' />


                    <div className='flex items-center justify-between'>
                      <span className='text-[#CB0000] text-lg font-semibold'>$25.99</span>
                      <span className='text-[#A4A4A4A4] text-lg font-semibold line-through'>$38.10</span>
                    </div>

                    <Button className='btn-border-g'>Add to Cart</Button>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>

        </div>

        <div className='flex justify-center'> <Pagination count={10} showFirstButton showLastButton /></div>
      </div>

    </div>

  )
}

export default FruitesPage
