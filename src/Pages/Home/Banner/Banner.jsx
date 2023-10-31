import React from "react";
import banner1 from "../../../assets/home/banner1.jpg";
import banner2 from "../../../assets/home/banner2.jpg";
import banner3 from "../../../assets/home/banner3.jpg";
import banner4 from "../../../assets/home/banner4.jpg";

import { Carousel } from "react-responsive-3d-carousel";

const Banner = () => {
  // const imageStyle = {
  //   maxWidth: "100%",
  //   maxHeight: "100%",

  // };

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* <Flicking circular={true} plugins={plugins}>
        <div className="card-panel">
          <img src={banner1} alt="" style={imageStyle} />
        </div>
        <div className="card-panel">
          <img src={banner2} alt="" style={imageStyle} />
        </div>
        <div className="card-panel">
          <img src={banner3} alt="" style={imageStyle} />
        </div>
      </Flicking> */}

      <Carousel>
        <img src={banner1} alt="example-image-1" />
        <img src={banner2} alt="example-image-2" />
        <img src={banner3} alt="example-image-2" />
        <img src={banner4} alt="example-image-2" />
      </Carousel>
    </div>
  );
};

export default Banner;
