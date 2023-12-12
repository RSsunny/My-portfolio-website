// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SliderProject = ({ img1, img2, img3 }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper my-20 "
      >
        <SwiperSlide>
          <div className="w-full  h-[500px] px-5 rounded-2xl overflow-hidden">
            <img className="w-full h-full rounded-2xl  " src={img1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full  h-[500px] px-5 rounded-2xl overflow-hidden">
            <img className="w-full h-full rounded-2xl" src={img2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full  h-[500px] px-5 rounded-2xl overflow-hidden">
            <img className="w-full h-full rounded-2xl" src={img3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderProject;
