import { useContext, useEffect, useState } from "react";
import { Card, Container, ListGroup, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import UseCart from "../../../Hooks/UseCart";

import { Form } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import {
  CarouselProvider,
  DotGroup,
  ImageWithZoom,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useWishList from "../../../Hooks/useWishList";
import { toast } from "react-toastify";
import { Controller } from "react-hook-form";
import MonitorDetails from "./productDetails/monitorDetails";
import MemoryDetails from "./productDetails/MemoryDetails";
import CpuDetails from "./productDetails/CpuDetails";
import CaseDetails from "./productDetails/CaseDetails";
import KeyboardDetails from "./productDetails/KeyboardDetails";
import MiceDetails from "./productDetails/MiceDetails";
import CaseCoolerDetails from "./productDetails/CaseCoolerDetails";
import CpuCoolerDetails from "./productDetails/CpuCoolerDetails";
import PsuDetails from "./productDetails/PsuDetails";
import GpuDetails from "./productDetails/GpuDetails";
import StorageDetails from "./productDetails/StorageDetails";
import MotherboardDetails from "./productDetails/MotherboardDetails";

const AvailableProduct = () => {
  const { user } = useContext(AuthContext);

  const [axiosSecure] = useAxiosSecure();
  const [cart, refetch] = UseCart();
  const [, wishListRefetch] = useWishList();
  const location = useLocation();
  const navigate = useNavigate();

  const { collectionName, model } = useParams();
  const [component, setComponent] = useState([]);

  const from = location.state?.from?.pathname;
  console.log(from);
  const cartLocation =
    from?.includes("cpus") ||
    from?.includes("motherboards") ||
    from?.includes("gpus") ||
    from?.includes("keyboards") ||
    from?.includes("mices") ||
    from?.includes("casecoolers") ||
    from?.includes("cpucoolers") ||
    from?.includes("storages") ||
    from?.includes("cases") ||
    from?.includes("memoryes") ||
    from?.includes("monitors") ||
    from?.includes("psus");
  console.log(component);
  useEffect(() => {
    fetch(`http://localhost:3000/cpu/${collectionName}/${model}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setComponent(data);
      });
  }, []);

  const pcbuilderCartGet = async (item) => {
    if (user && user.email) {
      const cartItem = {
        email: user?.email,
        cartItemId: item?._id,
        category: item?.category,
        model: item?.model,
        name: item?.name,
        img: item?.img,
        price: item?.price,
      };

      const res = await axiosSecure.post(`pcbuilderCart`, cartItem);
      const pcbuilderCart = res?.data;
      if (pcbuilderCart) {
        toast("new component added", { autoClose: 2000 });

        navigate("/pcbuild");
      }
    }
  };

  const handleCart = async (item) => {
    if (user && user.email) {
      const isItemInCart = cart.filter(
        (cartitem) => cartitem.name === item.name
      );

      let quantity;
      if (isItemInCart[0] && isItemInCart[0].quantity >= 1) {
        navigate("/dashboard/mycart");
        return;
      } else {
        quantity = 1;
      }
      const cartItem = {
        email: user?.email,
        cartItemId: item?._id,
        category: item?.category,
        model: item?.model,
        name: item?.name,
        img: item?.img,
        shoplogo: item?.shoplogo,
        shopName: item?.shopName,
        price: item?.price,
        category: item?.category,
        quantity: quantity,
      };

      const res = await axiosSecure.post("cart", cartItem);
      if (res.data?.insertedId) {
        refetch();
        toast("product added to the cart", { autoClose: 800 });
      }
    } else {
      Swal.fire({
        title: "Please login to add product",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            navigate("/login", { state: { from: location }, replace: true })
          );
        }
      });
    }
  };

  const handleWishList = async (item) => {
    const wishlistItem = {
      productId: item?._id,
      email: user?.email,
      productName: item?.name,
      productImg: item?.img,
      shoplogo: item?.shoplogo,
      category: item?.category,
      model: item?.model,
      price: item.price,
    };

    const res = await axiosSecure.post(`/wishlist`, wishlistItem);
    if (res.data?.insertedId) {
      wishListRefetch();
      toast("Added to the wishlist", { autoClose: 800 });
      // Swal.fire({
      //   position: "top-end",
      //   icon: "success",
      //   title: "Added to the wishlist",
      //   showConfirmButton: false,
      //   timer: 1500,
      // });
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <div className="flex column-gap-2">
          <div className="flex-[1] ">
            <Card className="bg-base-100 shadow-xl" style={{ width: "22rem" }}>
              <button
                className=""
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                <CarouselProvider
                  visibleSlides={1}
                  totalSlides={1}
                  naturalSlideWidth={1400}
                  naturalSlideHeight={1400}
                >
                  <Slider>
                    <Slide tag="a" index={2}>
                      <ImageWithZoom src={component[0]?.img} />
                    </Slide>
                  </Slider>

                  <DotGroup />
                </CarouselProvider>
              </button>
              {/* <h1 className="text-center text-fuchsia-700 font-medium">
                Roll over image to zoom in or click to open expanded view
              </h1> */}

              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>

                  <img src={component[0]?.img} alt="Expanded View" />
                </div>
              </dialog>
              <Card.Body>
                <Card.Title className="text-blue-700 ">
                  {component[0]?.name}
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="flex-[3]">
            <div>
              <table className="table ml-28 ">
                <thead>
                  <tr>
                    <th>Merchant</th>
                    <th>Name</th>
                    <th>Availability</th>
                    <th>
                      <div>Price</div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {component.map((item, index) => (
                    <tr key={item._id}>
                      <td>
                        <div className="avatar">
                          <div className="w-24 h-5 ml-2">
                            <img src={item.shoplogo} alt="Avatar" />
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="font-bold">{item.name}</div>
                      </td>
                      <td>In stock</td>

                      <td className="">{item.price}tk</td>

                      <td>
                        {cartLocation ? (
                          <button
                            onClick={() => pcbuilderCartGet(item)}
                            className="btn btn-sm btn-success"
                            style={{ textTransform: "capitalize" }}
                          >
                            Add
                          </button>
                        ) : (
                          <>
                            <buttonp
                              onClick={() => handleCart(item)}
                              className="btn btn-sm btn-success"
                              style={{ textTransform: "capitalize" }}
                            >
                              Add
                            </buttonp>
                            {user ? (
                              <button
                                onClick={() => handleWishList(item)}
                                className="btn ml-4 bg-[#7FA99B]"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  fill="#D71313"
                                  viewBox="0 0 24 24"
                                  stroke="#D71313"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                  />
                                </svg>
                                <span style={{ textTransform: "capitalize" }}>
                                  Add Wish List
                                </span>
                              </button>
                            ) : (
                              <Link
                                to="/login"
                                state={{ from: location }}
                                replace
                              >
                                <button
                                  className="btn btn ml-4 bg-[#7FA99B]"
                                  style={{ textTransform: "capitalize" }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="#D71313"
                                    viewBox="0 0 24 24"
                                    stroke="#D71313"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                  </svg>
                                  Login to save wish list
                                </button>
                              </Link>
                            )}
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="ml-28">
              <div className="max-w-screen-full mx-auto pt-10">
                <div className="flex gap-4 ml-2 mt-10">
                  <a
                    className="btn inline-block rounded border border-indigo-600 bg-[#ef4a23]  px-10 py-3 text-md font-medium text-white  focus:outline-none focus:ring active:text-indigo-500"
                    style={{ textTransform: "capitalize" }}
                    href="#Specification"
                  >
                    Specification
                  </a>

                  <a
                    className="btn inline-block rounded border border-indigo-600 px-10 py-3 text-md font-medium text-indigo-600 hover:bg-[#ef4a23] hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                    style={{ textTransform: "capitalize" }}
                    href="#Description"
                  >
                    Description
                  </a>
                </div>
                <h1
                  className="mt-5 ml-2 text-xl font-bold text-blue-800"
                  id="Specification"
                >
                  Specification
                </h1>

                {component[0]?.category === "cpu" && <CpuDetails />}
                {component[0]?.category === "monitor" && <MonitorDetails />}

                {component[0]?.category === "memory" && <MemoryDetails />}
                {component[0]?.category === "casing" && <CaseDetails />}
                {component[0]?.category === "keyboard" && <KeyboardDetails />}
                {component[0]?.category === "mice" && <MiceDetails />}
                {component[0]?.category === "cpuCooler" && <CpuCoolerDetails />}
                {component[0]?.category === "caseCooler" && (
                  <CaseCoolerDetails />
                )}
                {component[0]?.category === "psu" && <PsuDetails />}
                {component[0]?.category === "gpu" && <GpuDetails />}
                {component[0]?.category === "storage" && <StorageDetails />}
                {component[0]?.category === "motherboard" && (
                  <MotherboardDetails />
                )}

                <div className="max-w-screen-lg">
                  <h1
                    className="mt-5 ml-2 text-xl font-bold text-blue-800 "
                    id="Description"
                  >
                    Description
                  </h1>
                  <h1 className="mt-5 ml-2 text-xl font-semibold text-justify">
                    {/* {product[0]?.buildName} */}
                  </h1>
                  <p className="mt-3 mb-5 ml-2 text-md font-semibold text-justify">
                    {/* {product[0]?.details} */}
                    Designed for overclocking, the Athlon 3000G 3.5 GHz
                    Dual-Core AM4 Processor from AMD has a base clock speed of
                    3.5 GHz, two cores with four threads in an AM4 socket, 1MB
                    of L2 cache memory, and 4MB of L3 cache memory. Having two
                    cores allows the processor to run multiple programs
                    simultaneously without slowing down the system, while the
                    four threads allow a basic ordered sequence of instructions
                    to be passed through or processed by a single CPU core. This
                    processor also has a TDP of 35W. Graphically, the Athlon
                    3000G uses integrated AMD Radeon Vega 3 Graphics. It is also
                    unlocked, meaning it can be overclocked past its maximum
                    turbo frequency. However, this is not recommended, as it
                    will cause the processor to run much hotter. Also, the
                    warranty does not cover damage caused by overclocking, even
                    when overclocking is enabled via AMD hardware.(No Warranty
                    for Fan or Cooler)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default AvailableProduct;

// const addToDb = id =>{
//   let shoppingCart = {};

//   //get the shopping cart from local storage
//   const storedCart = localStorage.getItem('shopping-cart');
//   if(storedCart){
//       shoppingCart = JSON.parse(storedCart);
//   }

//   // add quantity
//   const quantity = shoppingCart[id];
//   if(quantity){
//       const newQuantity = quantity + 1;
//       shoppingCart[id] = newQuantity;
//   }
//   else{
//       shoppingCart[id] = 1;
//   }
//   localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
// }
