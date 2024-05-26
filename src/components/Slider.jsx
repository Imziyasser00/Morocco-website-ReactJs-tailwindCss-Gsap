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
    const imgs = new gsap.timeline();
    const tl = new gsap.timeline();
    tl.fromTo('#slider',{
      y: -500,
      opacity: 0,
    },{
      y: 0,
      opacity: 1,
      duration: 1,
    })
    imgs.fromTo(".img",{
      x:200,
      opacity:0,
      
    },{
      x:0,
      opacity:1,
      duration:1.2,
      ease: "power3.inOut",
      stagger: 0.5,
    })
    console.log(images)
  },[images])

  return (
    <div className="w-full h-full overflow-y-scroll lg:overflow-hidden lg:mt-0">
      <div className="flex w-full h-full justify-center items-center lg:block hidden">
        <div className="w-full h-full justify-center items-center" id="slider">
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
            className=" h-4/5 w-full relative mt-12 mx-auto"
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
      <div className="flex flex-col lg:hidden gap-5 justify-center items-center z-50 overflow-y-scroll mt-24 md:mb-56">
      {images && images.map((item,index)=>(
        <img   src={`/${item}`}
        alt={index}
        className="w-[90%] img"
        />
  ))}
      </div>

    </div>
  );
};

export default Slider;
