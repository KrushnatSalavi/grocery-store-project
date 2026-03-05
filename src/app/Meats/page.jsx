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
                    <img src={"/Meats1.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 48,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Meats1.jpg",
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
                    <img src={"/Meats2.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 49,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Fruits2.jpg",
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
                    <img src={"/Meats3.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 50,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Fruits3.jpg",
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
                    <img src={"/Meats4.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 52,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Fruits4.jpg",
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
                    <img src={"/Meats5.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 53,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Fruits6.jpg",
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
                    <img src={"/Meats6.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 54,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Fruits6.jpg",
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
                    <img src={"/Meats7.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 55,
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
                    <img src={"/Meats8.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 56,
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
                    <img src={"/Meats9.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 57,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Fruits9.jpg",
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
                    <img src={"/Meats10.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 58,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Fruits10.jpg",
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
                    <img src={"/Meats11.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 59,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Fruits11.jpg",
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
                    <img src={"/Meats12.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 60,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Fruits12.jpg",
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
                    <img src={"/Meats13.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 61,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Fruits13.jpg",
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
                    <img src={"/Meats14.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 62,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Fruits14.jpg",
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
                    <img src={"/Meats15.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 63,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Fruits15.jpg",
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
                    <img src={"/Meats16.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 64,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Fruits16.jpg",
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
                    <img src={"/Meats7.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 64,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Fruits17.jpg",
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
                    <img src={"/Meats14.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 65,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Fruits18.jpg",
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
                    <img src={"/Meats19.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 66,
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

              <SwiperSlide className='py-3 px-2'>
                <div className='Productitem shadow-md max-w-full bg-white rounded-md'>
                  <Link href={"/"} className='img overflow-hidden flex p-4 '>
                    <img src={"/Meats18.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 67,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Fruits14.jpg",
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
                    <img src={"/Meats18.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
