// Import Swiper React components
import { Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// @ts-expect-error until the import issue is resolved
import "swiper/css";
// @ts-expect-error until the import issue is resolved
import "swiper/css/pagination";

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={5}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {Children.map(children, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};
