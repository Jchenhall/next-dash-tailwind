"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
export const ImageSlider = () => {
  const { items } = require("../../../public/Japan.json");

  const [currentIndex, setCurrentIndex] = useState((items.id = 0));

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (itemIndex: number) => {
    setCurrentIndex(itemIndex);
  };

  return (
    <div className="lg:w-[900px] w-full sm:w-[600px] h-[500px]  md:w-[700px] md:h-[600px] lg:h-[800px]  m-auto py-12 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${items[currentIndex].url})` }}
        className={` w-full h-full rounded-2xl bg-center bg-cover duration-500 `}
      >
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        <div className="hidden group-hover:block absolute  top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
        {items.map((item: { id: number }, itemIndex: number) => (
          <div
            key={itemIndex}
            onClick={() => {
              goToSlide(itemIndex);
            }}
            className={`text-2xl cursor-pointer ${
              currentIndex === itemIndex ? "text-orange-500" : "text-slate-600"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};
