import { useContext, useEffect, useState } from "react";
import { Card, Container, ListGroup, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import UseCart from "../../../Hooks/UseCart";

import {
  CarouselProvider,
  DotGroup,
  ImageWithZoom,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CartContext } from "../../../Provider/CartProvider";

const AvailableProduct = () => {
  const { user } = useContext(AuthContext);
  const { quantities, updateQuantity } = useContext(CartContext);
  const [, refetch] = UseCart();
  const location = useLocation();
  const navigate = useNavigate();

  const { collectionName, name } = useParams();
  const [component, setComponent] = useState([]);
  // console.log(component[0].img)
  console.log(component);
  const from = location.state?.from?.pathname;
  const cartLocation =
    from?.includes("cpus") ||
    from?.includes("motherboards") ||
    from?.includes("monitors") ||
    from?.includes("memoryes");

  useEffect(() => {
    fetch(`http://localhost:3000/cpu/${collectionName}/${name}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setComponent(data);
      });
  }, []);

  const pcbuilderCartGet = (item) => {
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

      fetch("http://localhost:3000/pcbuilderCart", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      });
    }
  };

  const handleCart = (item, index) => {
    updateQuantity(index, quantities[index] + 1);

    if (user && user.email) {
      const cartItem = {
        email: user?.email,
        cartItemId: item?._id,
        category: item?.category,
        model: item?.model,
        name: item?.name,
        img: item?.img,
        shoplogo:item?.shoplogo,
        price: item?.price,
      };

      fetch("http://localhost:3000/cart", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Product added to the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
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

  return (
    <Container className="mt-5  ">
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
              <h1 className="text-center text-fuchsia-700 font-medium">
                Roll over image to zoom in or click to open expanded view
              </h1>

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
              {cartLocation ? null : (
                <ListGroup className="list-group-flush">
                  {user ? (
                    <Link>+Save to wish list</Link>
                  ) : (
                    <Link to="/login" state={{ from: location }} replace>
                      <ListGroup.Item className="text-center font-semibold text-green-700">
                        Login to save wish list
                      </ListGroup.Item>
                    </Link>
                  )}
                </ListGroup>
              )}

              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="flex-[3]">
            <div>
              <table className="table ml-28 ">
                <thead>
                  <tr>
                    <th>Marchant</th>
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
                          <Link
                            onClick={() => pcbuilderCartGet(item)}
                            to={`/pcbuild/${item._id}`}
                            className="btn btn-sm btn-success "
                          >
                            Add
                          </Link>
                        ) : (
                          <button
                            onClick={() => handleCart(item, index)}
                            className="btn btn-sm btn-success "
                          >
                            Add
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
