import React, { memo, useEffect, useRef } from "react";
import ServiceItem from "../../../components/ServiceItem";
import useVisibility from "../../../hooks/useVisibility";
import { serviceList } from "../../../constants";
import { useDispatch } from "react-redux";
import { setServicePosition } from "../../../store/features/scrollPosition";
const ServiceList = memo(() => {
  const [isVisible, ref] = useVisibility(0.1); // 使用自定义 hook
  const dispatch = useDispatch();
  const serviceRef = useRef(null);
  useEffect(() => {
    if (serviceRef.current) {
      // 获取Price组件在页面中的位置
      const position = serviceRef.current.getBoundingClientRect().top + window.scrollY;
      // 将位置存储到Redux
      dispatch(setServicePosition(position));
    }
  }, [dispatch]);
  return (
    <div className="sm:flex sm:justify-start sm:items-center sm:flex-col  bg-themeColor"
      ref={serviceRef}>
      <div className="sm:font-bold sm:text-3xl sm:mt-40 w-[80vw] mx-auto max-lg:pt-10  font-bold text-2xl text-center max-lg:mt-6 text-white">
        Say Goodbye to Cleaning Worries!
        <div className="max-lg:mt-6">
          Relax, We’ll Handle the Rest.
        </div>
      </div>
      <div className="sm:w-[40vw] sm:my-5 my-10 w-[80vw] mx-auto mt-10 text-center
      max-lg:text-lg text-white">
        Experience the magic of a spotless home. Let our expert team handle the chores, so you can unwind and enjoy the things that truly matter to you!
      </div>

      <div className="sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-20 sm:mt-10 sm:mb-40
      flex flex-col gap-10 justify-center items-center
      " ref={ref}>
        {serviceList.map(({ animation, title, content, imgSrc }) => {
          return (
            <div key={title}
              className={`sm:opacity-0 ${isVisible ? animation : ''}
              mb-10
              `}>
              <ServiceItem title={title} content={content} imgSrc={imgSrc} />
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default ServiceList;
