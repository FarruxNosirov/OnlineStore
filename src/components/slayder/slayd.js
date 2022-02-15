import "./slayd.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function Slayd() {
  return (
    <div className="swiper">
      <Swiper
        autoplay={true}
        slidesPerView={3}
        spaceBetween={20}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slayd_img">
            <img src="/SlaydImgs/Picture 1.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slayd_img">
            <img src="/SlaydImgs/Picture 2.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slayd_img">
            <img src="/SlaydImgs/Picture 3.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slayd_img">
            <img src="/SlaydImgs/Picture 4.jpg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
