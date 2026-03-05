"use client"

import { Button } from '@mui/material';
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Collapse } from 'react-collapse';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Sidebar = () => {

  const [isOpeneCatFilter, setIsOpeneCatFilter] = useState(true);
  const [isOpeneRatingFilter, setIsOpeneRatingFilter] = useState(true);
  const [price, setPrice] = useState(0, 30000)

  return (
    <aside className='sticky top-40 flex flex-col gap-5'>
      <div className=' box '>
        <div className='flex items-center justify-between mb-2'>
          <h3 className='text-lg font-semibold text-gray-700'>Shop by Category </h3>
          <Button className="!min-w-[30px] !w-[30px] !h-[30px] !rounded-full" onClick={() => setIsOpeneCatFilter(!isOpeneCatFilter)}>
            <IoIosArrowDown size={25} />
          </Button>

        </div>

        <Collapse isOpened={isOpeneCatFilter}>

          <div className='scroll overflow-scroll max-h-74'>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Fruite & Vegetables" />
              <FormControlLabel control={<Checkbox />} label="Meats & Seafood" />
              <FormControlLabel control={<Checkbox />} label="Brekfast & Dairy" />
              <FormControlLabel control={<Checkbox />} label="Breads & Bakery" />
              <FormControlLabel control={<Checkbox />} label="Breverages" />
              <FormControlLabel control={<Checkbox />} label="Frozen Food" />
              <FormControlLabel control={<Checkbox />} label="Biscuits & Snacks" />

            </FormGroup>
          </div>

        </Collapse>
      </div>

      <div className=' box mt-5 '>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-semibold text-gray-700'>Filter by Price </h3>
        </div>



        <RangeSlider
          value={price}
          onInput={setPrice}
          min={0}
          max={30000}
          step={5}
        />

        <div className='flex items-center justify-between mt-4'>
          <span className='text-gray-700 text-sm'>${price[0]}</span>
          <span className='text-gray-700 text-sm'>${price[1]}</span>
        </div>

      </div>

      <div className=' box '>
        <div className='flex items-center justify-between mb-2'>
          <h3 className='text-lg font-semibold text-gray-700'>Filter by Category </h3>
          <Button className="!min-w-[30px] !w-[30px] !h-[30px] !rounded-full" onClick={() => setIsOpeneRatingFilter(!isOpeneRatingFilter)}>
            <IoIosArrowDown size={25} />
          </Button>

        </div>

        <Collapse isOpened={isOpeneRatingFilter}>

          <div className='scroll  max-h-74'>
            <div className=' flex flex-col items-center '>
              <div className='item flex items-center w-full'>
                <Checkbox {...label} />
                <Rating name="read-only" value={5} readOnly size='small'/>
              </div>
              <div className='item flex items-center w-full'>
                <Checkbox {...label} />
                <Rating name="read-only" value={4} readOnly size='small'/>
              </div>
              <div className='item flex items-center w-full'>
                <Checkbox {...label} />
                <Rating name="read-only" value={3} readOnly size='small'/>
              </div>
              <div className='item flex items-center w-full'>
                <Checkbox {...label} />
                <Rating name="read-only" value={2} readOnly size='small'/>
              </div>
              <div className='item flex items-center w-full'>
                <Checkbox {...label} />
                <Rating name="read-only" value={1} readOnly size='small'/>
              </div>
              
            </div>
          </div>

        </Collapse>
      </div>

    </aside>
  )
}

export default Sidebar
