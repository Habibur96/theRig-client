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
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";

const Banner = () => {
  // const imageStyle = {
  //   maxWidth: "100%",
  //   maxHeight: "100%",

  // };

  return (
    <div className="">
  
      <div className="max-w-screen-xl mx-auto">
        <Carousel>
          <img src={banner1} alt="example-image-1" />
          <img src={banner2} alt="example-image-2" />
          <img src={banner3} alt="example-image-2" />
          <img src={banner4} alt="example-image-2" />
        </Carousel>
      </div>
      <Container>
        <div className=" d-flex mt-5">
          {/* <Button variant="Success">Leatest</Button> */}
          <Button variant="warning">Leatest</Button>{" "}
          <Marquee className="font-semibold text-fuchsia-900" speed={100}>
            I can be a React component, multiple React components, or just some
            text..... I can be a React component, multiple React components, or
            just some text.....
          </Marquee>
        </div>
        <div className="mt-5">
          <Marquee className="mr-2" speed={100}>
            <img className="mr-20" src={startech} alt="" />
            <img className="mr-20" src={Ultratech} alt="" />
            <img
              className="mr-20"
              style={{ height: 50 }}
              src={skyland}
              alt=""
            />
            <img className="mr-20" style={{ height: 30 }} src={Ryans} alt="" />
            <img
              className="mr-20"
              style={{ height: 30 }}
              src={Techland}
              alt=""
            />
          </Marquee>
        </div>
      </Container>

      <div className="bg-[#545578]">
        <div className="flex gap-45 align-items-center">
          <div className="ml-20">
            <h1 className="text-white font-bold text-5xl mb-4">Build Guides</h1>
            <p className="text-gray-300 mb-4">
              Building your own PC and need ideas on where to get started?
              Explore our build guides which cover systems for a variety of
              use-cases and budgets.
            </p>
            <Link to="guides">
         
              <button
                className="btn btn-wide bg-[#2c87c3] rounded-1 border-none text-white font-bold text-lg"
                style={{ textTransform: "capitalize" }}
              >
                <DescriptionTwoToneIcon /> View Build Guides
              </button>
            </Link>
          </div>

          <div className="flex gap-4 mt-5 mb-14 mr-40">
            <div className="card w-75 bg-base-100 shadow-xl pr-5 pl-5 pt-1">
              <figure>
                <img
                  src="https://m.media-amazon.com/images/I/91jHNGBFflL._AC_UY218_.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </div>
            <div className="card w-75 bg-base-100 shadow-xl pr-5 pl-5 pt-1">
              <figure>
                <img
                  src="https://m.media-amazon.com/images/I/91CddCccgeL._AC_UY218_.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </div>
            <div className="card w-75 bg-base-100 shadow-xl pr-5 pl-5 pt-1">
              <figure>
                <img
                  src="https://m.media-amazon.com/images/I/91kntxknL3L._AC_UY218_.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
