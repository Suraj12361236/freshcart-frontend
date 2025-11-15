

import React from "react";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../images/slide-1.jpg"
import slide2 from "../images/slide-2.jpg"

const SliderBanner = () => {
  const slides = [
    {
      id: 1,
      tag: "Free Shipping - orders over $100",
      title: "Free Shipping on orders over",
      highlight: "$100",
      desc: "Free Shipping to First-Time Customers Only, After promotions and discounts are applied.",
      bgImage:
        slide1,
    },
    {
      id: 2,
      tag: "Big Summer Sale - Fresh Veggies",
      title: "Get Fresh Vegetables with",
      highlight: "Up to 50% OFF",
      desc: "Grab healthy deals before the season ends. Fresh, organic, and affordable!",
      bgImage:
        slide2,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="max-w-7xl mx-auto px-6 mt-10">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="relative flex items-center rounded-2xl overflow-hidden h-[420px] md:h-[460px]"
              style={{
                backgroundColor: "#f9f8f6",
                backgroundImage: `url(${slide.bgImage})`,
                backgroundPosition: "right center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              {/* Left Text Section */}
              <div className="w-full md:w-1/2 p-10 md:p-14 space-y-5 z-10">
                <span className="bg-yellow-400 text-gray-900 text-sm font-semibold px-4 py-1 rounded-full">
                  {slide.tag}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {slide.title}{" "}
                  <span className="text-green-600">{slide.highlight}</span>
                </h2>
                <p className="text-gray-500 text-base max-w-md">
                  {slide.desc}
                </p>
                <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-lg hover:bg-green-600 transition-all">
                  Shop Now <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderBanner;
