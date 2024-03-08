import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

const SlickSlider = () => {
  const CustomPrevArrow = (prop) => {
    const { onClick } = prop;
    return (
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-2 rounded-l-md"
        onClick={onClick}
      >
        <WestIcon />
      </button>
    );
  };
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-2 rounded-r-md"
        onClick={onClick}
      >
        <EastIcon />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="max-w-screen-xl mx-auto slider-container ">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div className="flex gap-100 mt-2">
              <h3>
                {" "}
                <img
                  className="pl-9 ml-16"
                  src="https://cdna.pcpartpicker.com/static/forever/images/product/f0e0e59d75066ec825667b71c31e3c83.256p.jpg"
                  alt=""
                  style={{ height: 150 }}
                />
              </h3>
              <h3>
                {" "}
                <img
                  className="ml-16"
                  src="https://cdna.pcpartpicker.com/static/forever/images/product/5b6a5e7f4cf456ccf6415235cf7adc99.256p.jpg"
                  alt=""
                  style={{ height: 150 }}
                />
              </h3>
              <h3>
                {" "}
                <img
                  className="ml-16"
                  src="https://cdna.pcpartpicker.com/static/forever/images/product/07c31fe938c6e8531c051bc527759992.256p.jpg"
                  alt=""
                  style={{ height: 150 }}
                />
              </h3>
              <h3>
                {" "}
                <img
                  className="ml-20"
                  src="https://cdna.pcpartpicker.com/static/forever/images/product/664aadb9f84d7293d083671b43c1f898.256p.jpg"
                  alt=""
                  style={{ height: 150 }}
                />
              </h3>
              <h3>
                {" "}
                <img
                  className="ml-36"
                  src="https://cdna.pcpartpicker.com/static/forever/images/product/664aadb9f84d7293d083671b43c1f898.256p.jpg"
                  alt=""
                  style={{ height: 150 }}
                />
              </h3>
            </div>
          </div>
          <div>
            <div className="flex">
              <h3>
                {" "}
                <img
                  className="pl-9 ml-16"
                  src="https://cdna.pcpartpicker.com/static/forever/images/product/3f73fdd7d802d6d3cf53790a39afe703.256p.jpg"
                  alt=""
                  style={{ height: 150 }}
                />
              </h3>
              <h3>
                {" "}
                <img
                  className="ml-16"
                  src="https://cdna.pcpartpicker.com/static/forever/images/product/6bd2cbaf780aea720a3b8a53d80ce635.256p.jpg"
                  alt=""
                  style={{ height: 150 }}
                />
              </h3>
              <h3>
                {" "}
                <img
                  className="ml-16"
                  src="https://m.media-amazon.com/images/I/51UGM2bzZ6L.jpg"
                  alt=""
                  style={{ height: 150 }}
                />
              </h3>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SlickSlider;
