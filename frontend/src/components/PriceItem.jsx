import React, { memo, useState, useEffect } from "react";
import { tick } from "../assets/images";
import { useDispatch } from "react-redux";
import { showQuoteForm } from "../store/features/formVisible";
import useVisibility from "../hooks/useVisibility";

const PriceItem = memo(({ title, price, content, imgUrl, type }) => {
  const dispatch = useDispatch();
  const [isVisible, ref] = useVisibility(0.1);
  const [hover, setHover] = useState(false);

  const handleQuoteButtonClick = () => {
    dispatch(showQuoteForm());
  };


  return (
    <div
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`sm:w-[20vw] sm:h-[66vh] relative rounded-2xl border border-gray-300 sm:shadow-md sm:transition-transform sm:duration-200 sm:ease-out ${hover ? 'sm:animate-hoverShadow' : 'sm:animate-unhoverShadow'}
      
      max-lg:w-[80vw] max-lg:h-[620px] max-lg:mx-auto max-lg:mb-32 max-lg:opacity-0
      ${isVisible ? 'max-lg:animate-slideIn1' : ''}
      `}
    >
      <div className="flex justify-center absolute top-[-19px] left-[15%] bg-themeColor rounded-2xl w-[15vw] font-bold p-2 text-white
      max-lg:w-[60vw] max-lg:mx-auto max-lg:text-xl
      ">
        {title}
      </div>
      <div className="flex justify-center mt-8 max-lg:text-2xl max-lg:mt-10 max-lg:mb-4">FROM:</div>
      <div className="flex justify-center text-4xl font-bold mt-1 
      max-lg:text-5xl
      ">{price}</div>
      <div className="h-[20vh] w-full mt-5 mb-8 overflow-hidden">
        <img
          src={imgUrl}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="mt-10">
        {content.map((item, index) => (
          <div key={index} className="flex justify-start items-center pl-[10%] mt-6">
            <img src={tick} alt="" className="w-[30px] h-[30px] mr-5 " /> {item}
          </div>
        ))}
      </div>
      <div className="flex justify-center sm:absolute sm:bottom-6 sm:w-[10vw] sm:left-[25%] rounded-xl bg-themeColor  py-1 cursor-pointer
      max-lg:w-[50vw] max-lg:mx-auto  max-lg:bold-font max-lg:text-xl
      max-lg:absolute max-lg:left-[20%] max-lg:bottom-6 text-white
      " onClick={handleQuoteButtonClick}>
        Clean Home
      </div>
    </div>
  );
});

export default PriceItem;
