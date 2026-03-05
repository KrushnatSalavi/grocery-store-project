import React from 'react'
import { IoSearchOutline } from "react-icons/io5"

const Search = () => {
  return (
    <div className='search bg-[#E6E6E6] w-120 h-9 rounded-md px-4 relative flex border border-b-gray-400  hover:border-b-gray-500 '>
        <input type="text" className='w-full h-full outline-none border-0' placeholder='Search for product...'  />
        <button className='w-10 h-10 rounded-full absolute top-5px right-2 z-50 flex items-center 
        justify-center cursor-pointer hover:bg-gray-300'>
          <IoSearchOutline size={25}/>
        </button>
    </div>
  )
}

export default Search
