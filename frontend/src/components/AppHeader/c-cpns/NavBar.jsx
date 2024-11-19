import React, { memo, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { vacuum } from "../../../assets/images";
import { showQuoteForm } from "../../../store/features/formVisible";
import { hamburger } from "../../../assets/images";

const NavBar = memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showNavList, setshowNavList] = useState(false);
  const navListRef = useRef(null);
  const hamburgerRef = useRef(null); // 创建一个 ref
  const { pricePosition, servicePosition } = useSelector(state => ({
    pricePosition: state.scrollPosition.pricePosition,
    servicePosition: state.scrollPosition.servicePosition
  }), shallowEqual);

  const handleScrollToPosition = (position, showNavList = false) => {
    navigate("/home");
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
    setshowNavList(showNavList);
  };

  const handleQuoteButtonClick = () => {
    dispatch(showQuoteForm());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // 如果点击的区域不是 navList 或 hamburger，则关闭 navList
      if (
        navListRef.current &&
        !navListRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setshowNavList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navListRef, hamburgerRef]);

  return (
    <div>
      <div className="absolute bg-themeColor flex justify-between items-center text-white
      sm:h-16  
      sm:w-[100%]
      sm:text-xl 
      sm:opacity-100
      max-lg:fixed
      max-lg:z-10
      max-lg:w-[100%] ">
        <div onClick={() => setshowNavList(!showNavList)} ref={hamburgerRef}>
          <img src={hamburger} alt="" className="hidden max-lg:w-[30px] max-lg:h-[30px] max-lg:ml-4 max-lg:block" />
        </div>
        <Link to="/home" className="sm:ml-10 sm:w-1/10 flex justify-center items-center" onClick={() => { handleScrollToPosition(0) }}>
          <img src={vacuum} className="
        w-[35px] h-[35px] mr-1 mb-3
        max-lg:w-[40px] max-lg:h-[40px] max-lg:mb-4 max-lg:mt-2 max-lg:ml-6
        " alt="" />
          <div className=" text-3xl ">Pureglim</div>
        </Link>
        <div className="hidden sm:flex-grow sm:flex sm:justify-start sm:gap-12 sm:ml-28 " >
          <Link to="/home" className="sm:ml-4 text-md">HOME</Link>
          <Link to='/checklist' className="text-md">CLEANING CHECKLIST</Link>
          <Link to="/home" onClick={() => handleScrollToPosition(pricePosition)} className="text-md">PRICE LIST</Link>
          <Link to="/home" onClick={() => handleScrollToPosition(servicePosition)} className="text-md">SERVICE TYPE</Link>
          <div className="bg-themeColor text-white flex justify-start items-center pl-4 cursor-pointer"
            onClick={() => {
              setshowNavList(false);
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
              });
            }}
          >
            CONTACT US
          </div>
        </div>
        <div
          onClick={handleQuoteButtonClick}
          className="relative sm:mr-10 sm:w-1/10 sm:flex sm:justify-end sm:items-center sm:cursor-pointer max-lg:mr-2"
        >
          BOOK NOW
        </div>


      </div>
      <div ref={navListRef} className={`fixed top-16 w-full z-10 overflow-hidden transition-all duration-500 ease-in-out ${showNavList ? "animate-expand " : "animate-collapse"}`}>
        <Link to="/checklist" className="bg-themeColor w-full py-2 text-white flex justify-start items-center pl-4"
          onClick={() => {
            setshowNavList(false);
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}>
          Cleaning Checklist
        </Link>
        <div className="bg-themeColor w-full py-2 text-white flex justify-start items-center pl-4"
          onClick={() => {
            setshowNavList(false);
            handleScrollToPosition(pricePosition)
          }}
        >
          Price List
        </div>
        <div className="bg-themeColor w-full py-2 text-white flex justify-start items-center pl-4"
          onClick={() => {
            setshowNavList(false);
            handleScrollToPosition(servicePosition - 60)
          }}
        >
          Service Type
        </div>
        <div className="bg-themeColor w-full py-2 text-white flex justify-start items-center pl-4"
          onClick={() => {
            setshowNavList(false);
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth'
            });
          }}>
          Contact Us
        </div>
      </div>
    </div>
  );
});

export default NavBar;
