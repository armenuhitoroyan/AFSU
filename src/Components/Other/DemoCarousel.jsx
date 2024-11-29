import React from "react";
import Slider from "react-slick";
import "../../style/Carousel.css"; // Optional custom styling
const first = `${process.env.PUBLIC_URL}/images/clients-img-1.png`;
const second = `${process.env.PUBLIC_URL}/images/clients-img-2.png`;
const third = `${process.env.PUBLIC_URL}/images/clients-img-3.png`;
const fourth = `${process.env.PUBLIC_URL}/images/clients-img-4.png`;
const fifth = `${process.env.PUBLIC_URL}/images/clients-img-5.png`;

const DemoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Միաժամանակ ցույց տրվում է 4 նկար
    slidesToScroll: 1, // Միանգամից առաջ է գնում 1 նկար
    autoplay: true, // Նկարները ինքնուրույն փոխելու համար
    autoplaySpeed: 2000, // Ժամանակը, որ անցնում է յուրաքանչյուր նկարին
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // 1024px-ից փոքր էկրանների համար՝ 3 նկար
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // 768px-ից փոքր էկրանների համար՝ 2 նկար
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // 480px-ից փոքր էկրանների համար՝ 1 նկար
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={first} alt="Slide 1" />
        </div>
        <div>
          <img src={second} alt="Slide 2" />
        </div>
        <div>
          <img src={third} alt="Slide 3" />
        </div>
        <div>
          <img src={fourth} alt="Slide 4" />
        </div>
        <div>
          <img src={fifth} alt="Slide 5" />
        </div>
       
      </Slider>
    </div>
  );
};

export default DemoCarousel;
