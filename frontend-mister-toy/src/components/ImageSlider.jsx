/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiFillCaretLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="img div h-[490px] w-full">
      <div className="absolute top-1/2 transform -translate-y-1/2 right-[32px] text-stone-50 z-10 cursor-pointer ">
        ➡️
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-[32px] text-stone-50 z-10 cursor-pointer ">
        ⬅️ <AiFillCaretLeft />
      </div>
      <img
        className=" w-full h-full"
        src={slides[currentIndex].img}
        alt="logo"
      />
    </div>
  );
};

export default ImageSlider;
