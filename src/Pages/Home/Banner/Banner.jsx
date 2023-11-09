import React from "react";
import banner1 from "../../../assets/home/banner1.jpg";
import banner2 from "../../../assets/home/banner2.jpg";
import banner3 from "../../../assets/home/banner3.jpg";
import banner4 from "../../../assets/home/banner4.jpg";
import startech from "../../../assets/logo/startech.png";
import Ultratech from "../../../assets/logo/Ultratech.png";
import Techland from "../../../assets/logo/Techland.png";
import Ryans from "../../../assets/logo/Ryans.png";
import skyland from "../../../assets/logo/skyland.png";

import { Carousel } from "react-responsive-3d-carousel";

import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
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
      <Container>
        <div className="d-flex mt-5">
          {/* <Button variant="Success">Leatest</Button> */}
          <Button variant="warning">Leatest</Button>{' '}
          <Marquee className="font-semibold text-fuchsia-900" speed={100}>
            I can be a React component, multiple React components, or just some
            text..... I can be a React component, multiple React components, or
            just some text.....
          </Marquee>
         
        </div>
        <div className="mt-5">
     
          
          <Marquee className="mr-2" speed={100}>
           <img  className="mr-20" src={startech} alt="" /> 
           <img  className="mr-20" src={Ultratech} alt="" />
           <img  className="mr-20" style={{height: 50}} src={skyland} alt="" />
           <img  className="mr-20" style={{height: 30}} src={Ryans} alt="" />
           <img  className="mr-20" style={{height: 30}} src={Techland} alt="" />
          </Marquee>
       
         
        </div>
      </Container>
    </div>
  );
};

export default Banner;
