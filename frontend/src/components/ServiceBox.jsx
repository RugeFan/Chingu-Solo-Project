import React, { memo, useState, useCallback } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Popover } from "antd";

const ServiceBox = memo(({ service, selected, onClick }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = useCallback((event) => {
    event.stopPropagation();
    if (quantity < 5) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onClick(service, newQuantity);
    }
  }, [quantity, onClick, service]);

  const handleDecrease = useCallback((event) => {
    event.stopPropagation();
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onClick(service, newQuantity);
    } else {
      onClick(service, 0);  // 数量为1时点击减号会取消选择
    }
  }, [quantity, onClick, service]);

  const handleServiceClick = useCallback(() => {
    if (selected) {
      onClick(service, 0);  // 取消选择服务
    } else {
      onClick(service, quantity);  // 选中服务
    }
  }, [selected, quantity, onClick, service]);

  const popoverContentMap = {
    "Pet": (
      <div>
        <p>
          Clicking the pet icon lets our cleaners know about any pets in your home.
          Please note we don't clean pet body fluids, excretions, or litter boxes.
          Thank you for your understanding!
        </p>
      </div>
    ),
    "Carpet": (
      <div>
        <p>
          Carpet cleaning is priced based on demand:
        </p>
        <strong>$60 per room.</strong>
        <p>
          Pricing for living rooms and other areas is determined on a case-by-case basis.
        </p>
      </div>
    ),
    "Wall": (
      <div>
        <p>Wall cleaning is priced based on demand.</p>
        <strong>Around $50.</strong>
      </div>
    )
  };

  const popoverStyle = {
    width: '200px',
  };

  const renderContent = () => {
    if (popoverContentMap[service.name]) {
      return (
        <Popover
          content={popoverContentMap[service.name]}
          title={`Notice`}
          trigger="click"
          overlayStyle={popoverStyle}
        >
          <div className="w-full h-full flex justify-center items-center">
            <img src={service.imgSrc} alt={service.name} className="w-7 h-7 cursor-pointer" />
          </div>
        </Popover>
      );
    } else {
      return (
        <>
          {selected && (
            <>
              <div className="absolute top-[10%] left-[40%] text-white text-3xl">
                {quantity}
              </div>
              <div
                className="rounded-r-lg absolute right-[-1px] h-[103%] top-[-1px] w-[30%] flex items-center bg-[#BAC0C4]"
                onClick={handleIncrease}
              >
                <div>
                  <FaPlus className="ml-2" />
                </div>
              </div>
              <div
                className="rounded-l-lg absolute left-[-1px] h-[103%] top-[-1px] w-[30%] flex items-center bg-[#BAC0C4]"
                onClick={handleDecrease}
              >
                <div>
                  <FaMinus className="ml-1" />
                </div>
              </div>
            </>
          )}
          <img src={service.imgSrc} alt={service.name} className="w-7 h-7" />
        </>
      );
    }
  };

  return (
    <div>
      <div
        onClick={handleServiceClick}
        className={`border relative ${selected ? 'border-[#97A0A6]' : 'border-gray-300'} rounded-lg text-center cursor-pointer ${selected ? 'bg-[#97A0A6]' : 'bg-white'} w-24 h-12 flex flex-col justify-between`}
      >
        <div className="flex justify-center items-center select-none mt-[10%]">
          {renderContent()}
        </div>
      </div>
      <div className="select-none flex justify-center items-center">
        {service.name}
      </div>
    </div>
  );
});

export default ServiceBox;
