import React, { memo, useEffect, useState, useRef } from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { hideAllForms } from "../store/features/formVisible";
import Lottie from 'lottie-react';
import thankYou from '../assets/animation/thankYou.json';

const ThankYou = memo(({ open }) => {
  const dispatch = useDispatch();
  const lottieRef = useRef(null); // 创建一个引用来访问 Lottie 实例

  useEffect(() => {
    if (open && lottieRef.current) {
      lottieRef.current.setSpeed(3);  // 设置播放速度为3倍
      lottieRef.current.goToAndPlay(0, true); // 从头开始播放动画
    }
  }, [open]);

  return (
    <Modal
      title=""
      open={open}
      onCancel={() => dispatch(hideAllForms())}
      footer={null}
      maskClosable={true}
      centered={true}
      className="p-0"
    >
      <div className="flex justify-center items-center">
        <Lottie
          lottieRef={lottieRef} // 使用引用访问 Lottie 实例
          animationData={thankYou}
          loop={false}
          autoplay={true}
          className="sm:w-[15vw] sm:h-[15vh] sm:mt-20 max-lg:w-[40vw] max-lg:h-[40vh] max-lg:mt-[-80px]"
        />
      </div>

      <div className="flex justify-center items-center text-4xl mt-4 animate__animated animate__fadeInUp  text-gray-600 happy-monkey-regular
      max-lg:text-2xl max-lg:mt-[-100px]
      ">
        Thanks For Your Order!
      </div>
      <div className="flex justify-center items-center mt-6 mb-16 text-xl animate__animated animate__fadeInUp animate__delay-1s text-gray-600 happy-monkey-regular max-lg:text-xl max-lg:text-center"
      >
        Our Cleaner Will Contact You Within 24 hours
      </div>
    </Modal>
  );
});

export default ThankYou;
