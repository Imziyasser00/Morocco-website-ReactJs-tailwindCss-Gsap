import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import gsap from "gsap";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";


const Slider = ({ images }) => {

  useEffect(()=>{
    const tl = new gsap.timeline();
    tl.fromTo('#slider',{
      y: -500,
      opacity: 0,
    },{
      y: 0,
      opacity: 1,
      duration: 1,
    })
    console.log(images)
  },[images])

  return (
    <div className="w-full h-full ">
      <div className="flex w-full h-full justify-center items-center">
        <div className="w-4/5 h-full justify-center items-center" id="slider">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            className=" h-4/6 relative mt-12"
          >
          {images && images.map((item)=>(
            <SwiperSlide>
            <img
              src={`/${item}`}
              className="w-full h-full object-cover"
              alt="image"
            />
          </SwiperSlide>
          ))}
            
            

            
            </Swiper>
            <div className="swiper-pagination w-full"></div>

        </div>
      </div>
    </div>
  );
};

export default Slider;
