import React, { memo } from "react";
import { livingRoom } from "../../../assets/images";

import useVisibility from "../../../hooks/useVisibility";
import { useDispatch } from "react-redux";
import { showQuoteForm } from "../../../store/features/formVisible";

const HomeCarousel = memo(() => {
  const dispatch = useDispatch();
  const [isVisible, ref] = useVisibility(0.5);

  const handleQuoteButtonClick = () => {
    dispatch(showQuoteForm());
  };

  return (
    <div
      className="h-screen flex sm:items-center bg-cover max-lg:object-cover"
      style={{ backgroundImage: `url(${livingRoom})`, backgroundPosition: 'right 10% center' }}
    >
      <div
        className="h-[400px] flex flex-col items-start ml-[9vw] text-start"
        ref={ref}
      >
        <div
          className={`sm:text-7xl font-bold sm:ml-16 sm:mt-20 opacity-0 text-themeColor 
          max-lg:mt-[16vh] max-lg:ml-8
          ${isVisible ? "animate-slideIn1" : ""
            } text-5xl`}
        >
          The Cleaner You Can Trust
        </div>
        <div
          className={`sm:text-xl sm:ml-16 sm:mt-10 border-4 border-themeColor rounded-3xl opacity-0 text-themeColor px-2 py-1 cursor-pointer 
          max-lg:mt-4 max-lg:ml-8
          ${isVisible ? "animate-slideIn2" : ""
            } text-lg`}
          onClick={handleQuoteButtonClick}
        >
          Get Quote Now
        </div>
      </div>
    </div>
  );
});

export default HomeCarousel;
