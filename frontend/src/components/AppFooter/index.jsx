import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
const AppFooter = () => {
  return (
    <footer className="bg-themeColor text-white py-3 ">
      <div className="container max-lg:mx-auto flex flex-col md:flex-row items-center max-lg:justify-between">
        <div className="flex justify-center items-center text-3xl max-lg:mb-4
        sm:w-[30vw] 
        ">
          Contact Us
        </div>
        <div className="max-lg:flex max-lg:flex-col w-full sm:flex sm:flex-row justify-between">
          <div className='flex flex-col justify-between items-center max-lg:w-full sm:flex sm:flex-row sm:w-full sm:justify-evenly'>
            <div className=" flex justify-center items-center ">
              <div className='sm:mb-1'>
                <FaPhoneAlt className='' size={16} />
              </div>
              <div className='ml-2 text-xl select-text'> 0449 963 099</div>
            </div>
            <div className=" flex justify-center items-center">
              <div className='sm:mb-1'>
                <MdOutlineMailOutline size={22} />
              </div>
              <div className='ml-2 text-xl select-text'>PureglimSydney@gmail.com</div>
            </div>
          </div>
          <div className="text-center max-lg:mt-4 sm:w-[20vw] sm:flex sm:justify-end sm:items-center ">
            <p>&copy; {new Date().getFullYear()} Pureglim</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
