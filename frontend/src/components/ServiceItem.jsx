import React, { memo } from "react";
import useVisibility from "../hooks/useVisibility";

const ServiceItem = memo(({ title, content, imgSrc }) => {
  const [isVisible, ref] = useVisibility(0.3);

  return <div ref={ref} className={`sm:w-[20vw] bg-white sm:h-[50vh] rounded-xl w-[80vw] pb-10 max-lg:opacity-0
  ${isVisible ? "max-lg:animate-slideIn1" : ""}
  `}>
    <div className="flex justify-center items-center sm:w-[7vw] sm:h-[15vh] mx-auto w-[33vw] ">
      <img className="mt-10 bg-themeColor rounded-full p-3 h-[120px] w-[120px]" src={imgSrc} alt={title} />
    </div>
    <div className="flex justify-center mt-10 font-bold  text-center text-xl">{title}</div>
    <div className="flex justify-center items-center mx-10 mt-10 text-center ">{content}</div>
  </div>;
});

export default ServiceItem;
