import React, { memo, useEffect, useRef } from "react";
import PriceItem from "../../../components/PriceItem";
import { priceList } from "../../../constants";
import { useDispatch } from "react-redux";
import { setPricePosition } from "../../../store/features/scrollPosition";

const Price = memo(() => {
  const dispatch = useDispatch();
  const priceRef = useRef(null);

  useEffect(() => {
    if (priceRef.current) {
      // 获取Price组件在页面中的位置
      const position = priceRef.current.getBoundingClientRect().top + window.scrollY;
      // 将位置存储到Redux
      dispatch(setPricePosition(position - 300));
    }
  }, [dispatch]);

  return (
    <div ref={priceRef} className="sm:flex sm:justify-center sm:items-center sm:gap-20 sm:mb-40">
      {priceList.map(({ title, price, content, imgUrl, type }) => (
        <div key={title}>
          <PriceItem title={title} price={price} content={content} type={type} imgUrl={imgUrl} />
        </div>
      ))}
    </div>
  );
});

export default Price;
