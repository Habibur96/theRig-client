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
import { FeaturedProducts } from "./FeaturedProducts";
import TechTrends from "./TechTrends";

const Banner = () => {
  // const imageStyle = {
  //   maxWidth: "100%",
  //   maxHeight: "100%",

  // };

  return (
    <div className=" bg-[#f4f4f3]">
      <div className="max-w-screen-2xl mx-auto">
        <Carousel>
          <img src={banner1} alt="example-image-1" />
          <img src={banner2} alt="example-image-2" />
          <img src={banner3} alt="example-image-2" />
          <img src={banner4} alt="example-image-2" />
        </Carousel>
      </div>
      <Container>
        <div className=" d-flex mt-16 ">
          {/* <Button variant="Success">Leatest</Button> */}
          <Button variant="warning">Leatest</Button>{" "}
          <Marquee className="font-bold  text-fuchsia-900" speed={100}>
            From searching and comparing prices of all over Bangladesh, to the
            product shipped to your doorstep. The RIG is here to provide you
            with all you need.
          </Marquee>
        </div>
        <div className="mt-24 mb-20">
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
                <h2 className="card-title">Ready Build</h2>
                <p className="font-semibold">
                  PC-V C3101i Intel Core i3 10105, 8GB RAM, 250GB SSD Desktop PC
                </p>
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
                <h2 className="card-title">Ready Build</h2>
                <p className="font-semibold">
                  Ryans PC-G C31012G, Intel Core i3 10105 8GB RAM, 250GB SATAIII
                  SSD Gaming Desktop PC{" "}
                </p>
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
                <h2 className="card-title">Ready Build</h2>
                <p className="font-semibold">
                  PC-G C3101G Intel Core i3 10100F 8GB DDR4, 250GB SSD Heavy
                  Gaming PC
                </p>
              </div>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 mb-20">
        <h1 className="text-center font-semibold text-3xl">
          Featured Products
        </h1>
        <h1 className="text-center font-semibold text-xl">
          Check & Get Your Desired Product!
        </h1>
      </div>

      <div className="flex column-gap-5 bg-[#e5e7eb] pt-5 pb-5">
        <div className="flex-[2] ml-12">
          <div className="grid gap-5">
            <FeaturedProducts></FeaturedProducts>
            <TechTrends></TechTrends>
          </div>
        </div>
        <div className="flex-[5]">
          <div className="grid  gap-y-10">
            <div className="flex gap-4">
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://asset.msi.com/resize/image/global/product/product_16420615993ba39b48719ae53c6866a4c70b126afb.png62405b38c58fe0f07fcef2367d8a9ba1/400.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">MSI MYSTIC LIGHT</h2>
                  <p>
                    With built-in onboard memory, the user can customize and
                    store up to 3 profiles, including Settings, RGB Effects,
                    Macro Keys, while switching profiles via MSI Center.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://asset.msi.com/resize/image/global/product/product_16944174092196ebb00c5e2e81420ed9ba9f4dccc7.png62405b38c58fe0f07fcef2367d8a9ba1/400.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">6+N KEY ROLLOVER</h2>
                  <p>
                    No more signal conflicts or missed key presses in any
                    circumstances, VIGOR GK50 LOW PROFILE TKL can automatically
                    detect the pressed number and immediately switch to 6 key or
                    N key rollover, allowing you to fight on without the fear of
                    missing or having unexpected key presses.?
                  </p>
                  <div className="flex card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://asset.msi.com/resize/image/global/product/product_16415411303a4f3ad1ddc39e1b18dd3904a62e4767.png62405b38c58fe0f07fcef2367d8a9ba1/400.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">ONBOARD PROFILES</h2>
                  <p>
                    No more signal conflicts or missed key presses in any
                    circumstances, VIGOR GK50 LOW PROFILE TKL can automatically
                    detect the pressed number and immediately switch to 6 key or
                    N key rollover, allowing you to fight on without the fear of
                    missing or having unexpected key presses.?
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/graphics-card/msi/geforce-rtx-4090-suprim-x-24g/geforce-rtx-4090-suprim-x-24g-01-228x228.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    GeForce RTX™ 4080 SUPER 16G SUPRIM X
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur aliquam fugiat nulla a molestias sed ullam illo
                    dignissimos atque iste. Pariatur quibusdam consequuntur
                    minima, reprehenderit iusto assumenda cum? Eos, accusamus?
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/mag241c/mag241c-228x228.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">MEG 342C QD-OLED</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Porro consequuntur rem amet voluptatem eveniet numquam
                    temporibus eum maiores praesentium? Ad fugiat sed nisi aut
                    laudantium est praesentium facilis, aspernatur perferendis.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/casing/deepcool/cc560-wh/cc560-wh-01-228x228.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">MPG SEKIRA 100R | Gaming Case</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dicta, esse quae. Hic ipsum nam, nesciunt blanditiis maxime
                    deleniti? Molestiae vel est fuga. Aspernatur cumque nulla
                    modi id quis vero atque!
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://www.ryans.com/storage/products/small/ryans-pc-g-r777x12g-amd-ryzen-7-16gb-ddr5-gaming-11667302790.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Aegis R 13NUD-460US Gaming Desktop
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum inventore ipsum voluptate ad minima consequatur
                    aliquid illo, repellendus quaerat, hic accusantium, autem
                    sunt praesentium? Id sequi quis nostrum possimus vitae.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://www.ryans.com/storage/products/small/ryans-pc-e-c5114i-intel-core-i5-10400-8gb-ddr4-11696252498.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    AEGIS Z 7NUE-676US Gaming Desktop
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo quas temporibus maiores dignissimos debitis libero
                    quisquam! Error minus facilis, esse expedita, harum tempora
                    exercitationem ipsam unde similique cum quos necessitatibus?
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://www.ryans.com/storage/products/small/ryans-pc-v-c3101i-intel-core-i3-10105-8gb-ram-11704003693.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">MSI Powered PRE BUILT</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit velit aliquid, nisi expedita rerum laborum
                    voluptatibus dolor quaerat dicta eligendi iste consequuntur
                    a modi qui, non excepturi cum? Harum, reprehenderit!
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
