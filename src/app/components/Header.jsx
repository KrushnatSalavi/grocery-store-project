import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import Search from './Search'
// import { HiOutlineShoppingBag } from "react-icons/hi";
import Nav from './Nav';
// import { CgProfile } from 'react-icons/cg';

const Header = () => {
    return (
        <div className='headerWrapper sticky top-0 z-50 bg-white'>
            {/* <header className='py-3 border-b-2 border-b-gray-300'>
                <div className='container flex items-center justify-between m-auto p-3'>
                    <div className='logo -ml-30'>
                        <Link href={"/"}>
                            <Image src={"/logo.jpg"} width={230} height={61} alt='logo' />
                        </Link>
                    </div>

                    <Search />


                    <div className='flex items-center gap-5 -mr-30 '>
                        <div className='flex items-center gap-3'>
                            <Link href={"/login"} className='hover:text-primary'> Login</Link>
                            <span>|</span>
                            <Link href={"/register"} className='hover:text-primary'> Register </Link>

                        </div>


                        <div className='flex items-center gap-5'>
                            <Link href={"/profile"} className='relative flex'>
                              
                                <CgProfile size={30} />

                            </Link>



                            <div className='flex items-center gap-5'>
                                <Link href={"/cart"} className='relative flex'>
                                    <span className='bg-[#DC2626] w-5 h-5 text-white rounded-full flex items-center
                                justify-center absolute -top-1 -right-1 z-50'>3

                                    </span>
                                    <HiOutlineShoppingBag size={30} />

                                </Link>

                            </div>



                        </div>

                    </div>
                </div>
            </header> */}
            <Nav />

        </div>
    )
}

export default Header
