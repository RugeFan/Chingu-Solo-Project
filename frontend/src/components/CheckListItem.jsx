import React, { memo } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";

const CheckListItem = memo(({ name, general, spring }) => {
  return <div >
    <div className="flex justify-between items-center max-lg:w-[90vw] w-[70vw]  mx-auto relative border border-b-black border-l-0 border-r-0 ">
      <div className="flex-1">
        <div className="h-[16vh] flex justify-start items-center pl-2 ">
          <div className="text-xl mt-6 text-start" >{name}</div>
        </div>
      </div>
      {general ?
        <div className="flex-1 flex items-center justify-center ">
          <div className="">
            <IoIosCheckmarkCircle size={38} color="#6D8552" />
          </div>
        </div>
        :
        <div className="flex-1 flex flex-col justify-center items-center mt-6">
          <IoMdCloseCircle size={35} color="black" />
          <div className="text-center mt-2 text-lg">
            Upon Request
          </div>
        </div>
      }
      {spring ?
        <div className="flex-1 flex items-center justify-center ">
          <div className="pl-6">
            <IoIosCheckmarkCircle size={38} color="#6D8552" />
          </div>
        </div>
        :
        <div className="flex-1 flex flex-col justify-center items-center mt-6">
          <IoMdCloseCircle size={35} color="black" />
          <div className="text-center mt-2 text-lg">
            Upon Request
          </div>
        </div>}

    </div>
  </div>;
});

export default CheckListItem;
