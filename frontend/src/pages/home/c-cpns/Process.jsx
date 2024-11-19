import React, { memo } from "react";

const Process = memo(() => {
  return <div>
    <div className="flex justify-center items-center flex-col mt-20">
      <div className="font-bold text-3xl max-lg:w-[80vw] max-lg:mx-auto max-lg:text-center max-lg:mb-5">
        Our Secret Process
        For A Healthier Cleaner Home!
      </div>

      <div className="w-[40vw] my-5 max-lg:w-[80vw] max-lg:text-center max-lg:mb-20">
        Discover the transformative touch of our professional cleaning team. Let us take care of daily chores, giving you the freedom to relax and focus on what brings you joy!
      </div>
    </div>
  </div>;
});

export default Process;
