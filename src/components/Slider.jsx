import slider1 from "../assets/Image/slider-01.jpg";
import slider2 from "../assets/Image/slider-02.jpg";
import slider3 from "../assets/Image/slider-03.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
            clickable: true,
          }}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={slider1}
            alt="slider images"
            // style={{ width: "100%", height: "100vh" }}
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider2}
            alt="slider images"
            // style={{ width: "100%", height: "100vh" }}
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider3}
            alt="slider images"
            // style={{ width: "100%", height: "100vh" }}
            className="object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
