"use client";

import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { TbCreditCardPay } from "react-icons/tb";
import { BsGiftFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import Link from 'next/link';
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { Button } from '@mui/material';
import { SlSocialInstagram } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className='bg-[#fafafa] py-6 sm:py-8 mt-5'>

            {/* TOP FEATURES */}
            <div className='container mx-auto px-3 sm:px-5'>
                <div className="flex items-center justify-center gap-4 sm:gap-5 lg:gap-2 py-3 sm:py-8 pb-8 px-1">

                    <div className="col flex items-center justify-center flex-col group w-full sm:w-[30%] md:w-[18%] lg:w-[15%] text-center">
                        <LiaShippingFastSolid className="text-[35px] sm:text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />

                        <h3 className="text-sm sm:text-[16px] font-600 mt-3">
                            Free Shipping
                        </h3>

                        <p className="text-[11px] sm:text-[12px] font-500">
                            For all Orders Over $100
                        </p>
                    </div>


                    <div className="col flex items-center justify-center flex-col group w-full sm:w-[30%] md:w-[18%] lg:w-[15%] text-center">

                        <PiKeyReturnLight className="text-[35px] sm:text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />

                        <h3 className="text-sm sm:text-[16px] mt-3">
                            30 Days Returns
                        </h3>

                        <p className="text-[11px] sm:text-[12px] font-45">
                            For an Exchange Product
                        </p>

                    </div>


                    <div className="col flex items-center justify-center flex-col group w-full sm:w-[30%] md:w-[18%] lg:w-[15%] text-center">

                        <TbCreditCardPay className="text-[35px] sm:text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />

                        <h3 className="text-sm sm:text-[16px] mt-3">
                            Secured Payment
                        </h3>

                        <p className="text-[11px] sm:text-[12px] font-45">
                            Payment Cards accpected
                        </p>

                    </div>


                    <div className="col flex items-center justify-center flex-col group w-full sm:w-[30%] md:w-[18%] lg:w-[15%] text-center">

                        <BsGiftFill className="text-[35px] sm:text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />

                        <h3 className="text-sm sm:text-[16px] mt-3">
                            Special Gifts
                        </h3>

                        <p className="text-[11px] sm:text-[12px] font-45">
                            Out First Gift Order
                        </p>

                    </div>


                    <div className="col flex items-center justify-center flex-col group w-full sm:w-[30%] md:w-[18%] lg:w-[15%] text-center">

                        <BiSupport className="text-[35px] sm:text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />

                        <h3 className="text-sm sm:text-[16px] mt-3">
                            Support 24/7
                        </h3>

                        <p className="text-[11px] sm:text-[12px] font-45">
                            Contact us Anytime
                        </p>

                    </div>

                </div>
            </div>


            <hr />


            {/* MAIN FOOTER */}
            <div className='container mx-auto px-5 sm:px-6 lg:px-10 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between gap-10 md:gap-8 py-8 sm:py-10'>

                {/* CONTACT */}
                <div className='col1 w-full md:w-[45%] lg:w-[25%] flex flex-col gap-4 lg:pl-5'>

                    <h3 className='text-lg font-semibold text-gray-600'>
                        Contact Us
                    </h3>

                    <p className='text-sm font-medium text-gray-500'>
                        BroBazar - Msga Super Store
                        <br />
                        507-Union Trade Center France
                    </p>

                    <br />

                    <Link
                        href={"mailto:someone@example.com"}
                        className='text-gray-500 font-semibold text-sm hover:text-primary'
                    >
                        someone@xample.com
                    </Link>

                    <span className='text-xl font-bold text-primary'>
                        (+91) 8459506455
                    </span>

                    <div className='flex items-center gap-3'>

                        <HiOutlineChatBubbleLeftRight
                            size={35}
                            className='text-primary shrink-0'
                        />

                        <span className='text-sm sm:text-base font-semibold text-gray-500'>
                            Online Chat
                            <br />
                            Get Expert Help
                        </span>

                    </div>
                </div>


                {/* PRODUCTS */}
                <div className='col2 w-full sm:w-[45%] md:w-[25%] lg:w-[20%] flex justify-start'>

                    <div className='box'>

                        <h3 className='text-lg font-semibold text-gray-600'>
                            Products
                        </h3>

                        <ul className='list mt-5'>

                            <li className='list-none text-sm w-full mb-2'>
                                <Link href={"/"} className='text-sm text-gray-500 font-semibold hover:text-primary'>
                                    Price Drop
                                </Link>
                            </li>

                            <li className='list-none text-sm w-full mb-2'>
                                <Link href={"/"} className='text-sm text-gray-500 font-semibold hover:text-primary'>
                                    New Products
                                </Link>
                            </li>

                            <li className='list-none text-sm w-full mb-2'>
                                <Link href={"/"} className='text-sm text-gray-500 font-semibold hover:text-primary'>
                                    Best sales
                                </Link>
                            </li>

                            <li className='list-none text-sm w-full mb-2'>
                                <Link href={"/"} className='text-sm text-gray-500 font-semibold hover:text-primary'>
                                    Contact us
                                </Link>
                            </li>

                            <li className='list-none text-sm w-full mb-2'>
                                <Link href={"/"} className='text-sm text-gray-500 font-semibold hover:text-primary'>
                                    sitemap
                                </Link>
                            </li>

                            <li className='list-none text-sm w-full mb-2'>
                                <Link href={"/"} className='text-sm text-gray-500 font-semibold hover:text-primary'>
                                    Stores
                                </Link>
                            </li>

                        </ul>

                    </div>
                </div>


                {/* COMPANY */}
                <div className='col3 w-full sm:w-[45%] md:w-[25%] lg:w-[20%] flex justify-start'>

                    <div className='box'>

                        <h3 className='text-lg font-semibold text-gray-600'>
                            Our company
                        </h3>

                        <ul className='list mt-5'>

                            <li className='list-none text-sm w-full mb-2'>
                                <Link href={"/"} className='text-sm text-gray-500 font-semibold hover:text-primary'>
                                    Delivery
                                </Link>
                            </li>

                            <li className='list-none text-sm w-full mb-2'>
                                <Link href={"/"} className='text-sm text-gray-500 font-semibold hover:text-primary'>
                                    Legal Notice
                                </Link>
                            </li>

                            <li className='list-none text-sm w-full mb-2'>
                                <Link href={"/"} className='text-sm text-gray-500 font-semibold hover:text-primary'>
                                    Terms and Condition
                                </Link>
                            </li>

                            <li className='list-none text-sm w-full mb-2'>
                                <Link href={"/"} className='text-sm text-gray-500 font-semibold hover:text-primary'>
                                    About us
                                </Link>
                            </li>

                            <li className='list-none text-sm w-full mb-2'>
                                <Link href={"/"} className='text-sm text-gray-500 font-semibold hover:text-primary'>
                                    Secure Payment
                                </Link>
                            </li>

                            <li className='list-none text-sm w-full mb-2'>
                                <Link href={"/"} className='text-sm text-gray-500 font-semibold hover:text-primary'>
                                    Login
                                </Link>
                            </li>

                        </ul>

                    </div>
                </div>


                {/* NEWSLETTER */}
                <div className='col4 w-full md:w-[45%] lg:w-[35%] lg:pr-5'>

                    <h3 className='text-lg font-semibold text-gray-600'>
                        Subscribe to newsletter
                    </h3>

                    <p className='text-sm mt-3 text-gray-500'>
                        Subscribe to our latest newsletter to get news
                        <br className='hidden sm:block' />
                        about special discount
                    </p>

                    <form className='flex flex-col gap-4'>

                        <input
                            type='text'
                            className='w-full h-10 bg-white mt-5 border border-[rgba(0,0,0,0.2)] outline-none rounded-md px-4 sm:px-6'
                            placeholder='Your email address'
                        />

                        <div className='btn'>
                            <Button className='btn-g'>
                                Subsribe
                            </Button>
                        </div>

                    </form>

                </div>

            </div>


            <hr />


            {/* BOTTOM STRIP */}
            <div className='bottomStrip pt-5 px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-5'>

                {/* SOCIAL ICONS */}
                <div className='flex gap-3'>

                    <Link href={"/"} className='hover:text-primary'>
                        <SlSocialInstagram size={25} />
                    </Link>

                    <Link href={"/"} className='hover:text-primary'>
                        <AiOutlineYoutube size={25} />
                    </Link>

                    <Link href={"/"} className='hover:text-primary'>
                        <CiFacebook size={25} />
                    </Link>

                    <Link href={"/"} className='hover:text-primary'>
                        <FaPinterestP size={25} />
                    </Link>

                </div>


                {/* COPYRIGHT */}
                <div className='flex items-center text-gray-500 hover:text-primary text-sm'>
                    <p>
                        @2024-Grocery WebSite
                    </p>
                </div>


                {/* PAYMENT METHODS */}
                <div className='flex items-center justify-center gap-1 flex-wrap'>

                    <img
                        src={"/carte_bleue.png"}
                        alt='image'
                        className='h-6 sm:h-auto object-contain'
                    />

                    <img
                        src={"/visa.png"}
                        alt='image'
                        className='h-6 sm:h-auto object-contain'
                    />

                    <img
                        src={"/master_card.png"}
                        alt='image'
                        className='h-6 sm:h-auto object-contain'
                    />

                    <img
                        src={"/american_express.png"}
                        alt='image'
                        className='h-6 sm:h-auto object-contain'
                    />

                    <img
                        src={"/paypal.png"}
                        alt='image'
                        className='h-6 sm:h-auto object-contain'
                    />

                </div>

            </div>

        </footer>
    )
}

export default Footer