"use client";

import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductSlider from "./ProductSlider";

const PopularProducts = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="bg-white py-8">
      <div className="container">
        <div className="flex items-center justify-between mb-5">

          {/* LEFT */}
          <div className="w-[30%]">
            <h2 className="text-2xl text-gray-800 font-semibold">
              Popular Products
            </h2>
            <p className="text-sm text-gray-500">
              Do not miss the current offers
            </p>
          </div>

          {/* RIGHT */}
          <div className="w-[70%] flex items-center justify-end">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="popular product tabs"
            >
              <Tab label="All" />
              <Tab label="Fruits" />
              <Tab label="Vegetables" />
              <Tab label="Meat" />
              <Tab label="Dairy" />
              <Tab label="Bakery" />
              <Tab label="Seafood" />
            </Tabs>
          </div>

        </div>
      <ProductSlider/>
      
      </div>
    </section>
  );
};

export default PopularProducts;
