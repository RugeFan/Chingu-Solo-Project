import React, { memo } from "react";

const PricingCheckListTitle = memo(({ title }) => {
  return <div>
    <div className="flex justify-between items-center max-lg:w-[90vw] w-[70vw] bg-themeColor text-white mx-auto gap-14 py-3 ">
      <div className="text-xl text-nowrap ml-3">{title}</div>
      <div className="text-xl sm:mr-[-200px]">General Cleaning</div>
      <div className="text-xl max-lg:mr-4 mr-40">Spring Cleaning</div>
    </div>
  </div>;
});

export default PricingCheckListTitle;
