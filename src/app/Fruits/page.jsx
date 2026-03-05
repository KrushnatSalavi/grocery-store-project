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
                    <img src={"/Fruits1.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 29,
                          name: "100 Percent Apple Juice- 64 fl oz Bottel",
                          price: 25.99,
                          image: "/Fruits1.jpg",
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
                    <img src={"/Fruits2.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 30,
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
                    <img src={"/Fruits3.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 31,
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
                    <img src={"/Fruits4.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 32,
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
                    <img src={"/Fruits5.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 33,
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
                    <img src={"/Fruits6.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 34,
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
                    <img src={"/Fruits7.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 35,
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
                    <img src={"/Fruits8.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 36,
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
                    <img src={"/Fruits9.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 37,
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
                    <img src={"/Fruits10.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 38,
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
                    <img src={"/Fruits11.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 39,
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
                    <img src={"/Fruits12.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 40,
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
                    <img src={"/Fruits13.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 41,
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
                    <img src={"/Fruits14.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 42,
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
                    <img src={"/Fruits15.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 43,
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
                    <img src={"/Fruits16.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 44,
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
                    <img src={"/Fruits17.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 44,
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
                    <img src={"/Fruits18.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 45,
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
                    <img src={"/Fruits7.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 46,
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
                    <img src={"/Fruits14.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
                          id: 47,
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
                    <img src={"/Popular2.jpg"} alt='product img ' className='transition hover:scale-105 h-30 w-40'></img>
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
