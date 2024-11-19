import React, { memo, useEffect } from "react";
import HomeCarousel from "./c-cpns/HomeCarousel";
import Elementor from "./c-cpns/Elementor";
import ServiceList from "./c-cpns/ServiceList";
import Process from "./c-cpns/Process";
import Comments from "./c-cpns/Comments";
import Price from "./c-cpns/Price";



const Home = memo(() => {

  return <div>
    <HomeCarousel />
    <Elementor />
    <Price />
    <ServiceList />

    <Comments />
    <div className="max-lg:h-[3vh] h-[10vh]"></div>

  </div>;
});

export default Home;
