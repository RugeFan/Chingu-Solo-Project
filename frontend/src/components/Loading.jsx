import React, { memo } from "react";

// 
const Loading = memo(() => {
  return <div className="flex justify-center items-center h-[100vh] bg-themeColor">
    <div className="flex flex-row gap-4 justify-center items-center w-full 
    animate__animated animate__bounce animate__infinite animate__fast ">
      {/* <img src={vacuum} className="sm:w-[10vw] sm:h-[10vh] w-[14vw] h-[14vh] mb-[15px] " alt="" /> */}
      <div className="sm:text-6xl sm:mb-[-9px] sm:ml-[-40px] text-5xl  text-white">Pureglim</div>
    </div>

  </div>;
});

export default Loading;
