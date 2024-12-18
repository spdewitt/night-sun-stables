"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import homeImage1 from "../public/img/homeImage1.webp";
import homeImage2 from "../public/img/homeImage2.webp";
import homeImage3 from "../public/img/homeImage3.webp";

function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        <div>
          <Image
            src={homeImage1}
            alt="Slide 1"
            className="h-auto w-full object-cover"
            priority
          />
        </div>
        <div>
          <Image
            src={homeImage2}
            alt="Slide 2"
            className="h-auto w-full object-cover"
          />
        </div>
        <div>
          <Image
            src={homeImage3}
            alt="Slide 3"
            className="h-auto w-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}

export default HeroSlider;
