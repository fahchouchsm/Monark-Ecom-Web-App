import { FC, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCarousel: FC = () => {
  // Example array of images - replace this with actual dynamic data if needed
  const images = ["/test/1.jpg", "/test/2.jpg", "/test/3.jpg", "/test/4.jpg"];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => setCurrentSlide(current),
  };

  return (
    <div className="relative block w-full overflow-hidden sm:hidden">
      {/* Slider Component */}
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i} className="w-full">
            <img
              src={src}
              alt={`Product image ${i + 1} showcasing our products`}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
      {/* Progress Indicator */}
      <div className="flex h-[3px]">
        {images.map((_, i) => (
          <div
            key={i}
            className={`${
              currentSlide === i ? "bg-neutral-800" : "bg-neutral-200"
            } flex-1`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
