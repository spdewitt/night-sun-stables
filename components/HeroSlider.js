"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSlider({ sliderData }) {
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

  // If there's no sliderData or no slides, render nothing
  if (!sliderData?.slides?.length) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {sliderData.slides.map((slide, i) => (
          <div key={i}>
            {slide.image?.asset?.url && (
              <Image
                src={slide.image.asset.url}
                alt={slide.altText || `Slide ${i + 1}`}
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                priority={i === 0}
              />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSlider;
