import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import UseCart from "../../../../Hooks/UseCart";
import useUsers from "../../../../Hooks/useUsers";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import StarsIcon from "@mui/icons-material/Stars";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import PaymentsIcon from "@mui/icons-material/Payments";
import CreditCardIcon from "@mui/icons-material/CreditCard";
const CheckoutForm = ({ email }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [user] = useUsers();
  console.log(email);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionid, setTransactionid] = useState("");
  const [point, setPoint] = useState("");
  const [cart, refetch] = UseCart();
  // console.log("cart = ", cart);
  const navigate = useNavigate();

  const userInfo = user.filter((item) => item.email === email);

  const [shippingCost, setShippingCost] = useState(70);
  const [shippingPlace, setShippingPlace] = useState("Inside Dhaka City"); // Default shipping place

  const handleRadioClick = (cost, place) => {
    setShippingCost(cost);
    setShippingPlace(place);
  };

  // const { data: payments = [] } = useQuery({
  //   queryKey: ["payments", userInfo[0]?.email],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/payments/${userInfo[0]?.email}`);
  //     console.log(res.data);
  //     return res.data;
  //   },
  // });

  const productPrice = cart.reduce(
    (sum, item) => parseFloat(item.price) * item.quantity + sum,
    0
  );
  const totalPrice = productPrice + shippingCost;
  // console.log(userInfo[0]?.starpoints);

  let points, balancePoints, devidedPoints;

  //note: ae gular kaj asay starpoints ar joono..........
  // if (userInfo[0]?.starpoints > 0) {
  //   console.log(totalPrice);
  //   console.log(userInfo[0]?.starpoints);

  //   console.log(totalPrice);
  //   console.log(balancePoints);
  //   points = balancePoints;
  //   points = Math.round((totalPrice * 10) / 1000);
  //   console.log(points);

  //   if (points >= totalPrice) {
  //     devidedPoints = Math.round((points * 30) / 100);
  //     console.log(devidedPoints);
  //   } else {
  //     devidedPoints = Math.round((points * 70) / 100);
  //     console.log(devidedPoints);
  //   }
  //   console.log(points);

  //   const res = axiosSecure
  //     .patch(`/users/${userInfo[0]?._id}`, { points })
  //     .then((res) => {
  //       console.log("Star Points updated", res.data);
  //       if (res?.data?.modifiedCount > 0) {
  //         refetch();
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: "Starpoints added from again",
  //           showConfirmButton: false,
  //           timer: 2000,
  //         });
  //       }
  //     });
  // } else {
  //   console.log("No");

  //   if (totalPrice >= 1000) {
  //     console.log(totalPrice);

  //     points = Math.round((totalPrice * 10) / 1000);
  //     console.log(points);

  //     const res = axiosSecure
  //       .patch(`/users/${userInfo[0]?._id}`,  points )
  //       .then((res) => {
  //         console.log("Star Points updated", res.data);
  //         if (res?.data?.modifiedCount > 0) {
  //           refetch();
  //           Swal.fire({
  //             position: "top-end",
  //             icon: "success",
  //             title: "Starpoints added",
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //         }
  //       });

  //   }
  // }

  const handleStarPoints = () => {
    console.log(point);
    console.log(devidedPoints);
    if (point > devidedPoints) {
      Swal.fire({
        title: `You are not allowed to more than ${devidedPoints} points`,
        showClass: {
          popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
        },
      });
    } else {
      balancePoints = points - devidedPoints;
      console.log(balancePoints);

      const res = axiosSecure
        .patch(`/users/${userInfo[0]?._id}`, { balancePoints })
        .then((res) => {
          console.log("Star Points updated", res.data);
          if (res?.data?.modifiedCount > 0) {
            console.log(res.data);
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Starpoints added from handler",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
    }
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setPoint(event.target.value);
  };

  console.log(userInfo[0]?.starpoints);

  // if(totalPrice >= 1000){

  // }
  console.log(totalPrice);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const onSubmit = async (data) => {
    const address = data.address;

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");

      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: userInfo?.email || "example@example.com", // Use a default or placeholder email
              name: userInfo?.displayName || "Anonymous", // Use a default or placeholder name
            },
          },
        });

      if (confirmError) {
        console.log(confirmError);
      } else {
        if (paymentIntent.status === "succeeded") {
          setTransactionid(paymentIntent.id);

          const payment = {
            email,
            name: userInfo[0]?.name,
            phone: userInfo[0]?.phone,
            address,
            price: totalPrice,
            transactionId: paymentIntent.id,
            date: new Date().toLocaleString("en-US", {
              timeZone: "Asia/Dhaka",
            }),
            cartIds: cart.map((item) => item._id),
            menuItemIds: cart.map((item) => item.cartItemId),
            menuItemQuantity: cart.map((item) => item.quantity),
            quantity: cart.length,
            paymentStatus: "success",
            orderStatus: "pending",
            itemName: cart.map((item) => item.name || item.productName),
            itemPhoto: cart.map((item) => item.img || item.productImg),
            shoplogo: cart.map((item) => item.shoplogo),
          };

          const res = await axiosSecure.post("/payments", payment);
          // console.log("payment saved", res.data);
          refetch();

          if (res.data?.insertResult?.insertedId) {
            // toast('Pay The Payment Successfully !!!', { autoClose: 2000 })
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Thank you for payment",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(`/dashboard/paymentHistory/${email}`);
          }
        }
      }
    }
  };

  return (
    <div className="">
      {/* <div className="flex ml-16">
        <input
          onChange={handleChange}
          type="text"
          placeholder={`Points to use (Max ${devidedPoints})`}
          className="input input-bordered input-secondary md:w-40 lg:w-[400px] mr-4"
        />
        <button
          onClick={handleStarPoints}
          className="btn btn-secondary"
          style={{ textTransform: "capitalize" }}
        >
          Apply
        </button>
      </div> */}
      <Form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className=" flex column-gap-5  px-4 py-16"
      >
        <div className="flex-[2]  bg-[#]  rounded-lg">
          <div className=" px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <h1 className="text-center font-bold ">
                1. Customer Information
              </h1>
              <div className="mt-3">
                <Form.Group controlId="formBasicName" htmlFor="phone">
                  <Form.Label className="" htmlFor="name">
                    Name
                  </Form.Label>
                  <Form.Control
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    type=""
                    id="name"
                    value={userInfo[0]?.name}
                    {...register("name")}
                  />
                </Form.Group>
              </div>

              <div className="mt-3">
                <Form.Group controlId="formBasicName" htmlFor="phone">
                  <Form.Label className="" htmlFor="email">
                    Email
                  </Form.Label>
                  <Form.Control
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    type=""
                    id="email"
                    value={userInfo[0]?.email}
                    {...register("email")}
                  />
                </Form.Group>
              </div>

              {/*  */}
              <div className="mt-3">
                <Form.Group controlId="formBasicName" htmlFor="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    className="w-full rounded-lg border-gray-200 p-3 text-sm "
                    type=""
                    id="phone"
                    value={userInfo[0]?.phone}
                    {...register("phone")}
                  />
                </Form.Group>
              </div>

              <div className="mt-3">
                <Form.Group controlId="formBasicName">
                  <Form.Label>
                    Address{" "}
                    <span className="text-red-600 font-extrabold">*</span>
                  </Form.Label>

                  <Form.Control
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    type="text"
                    id="address"
                    {...register("address", { required: true })}
                    placeholder="Address"
                  />
                </Form.Group>
                {errors.address && (
                  <span className="text-red-600">Address is required</span>
                )}
              </div>

              <div className="mt-3">
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full textarea textarea-bordered rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                  {...register("message")}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[3] bg-[#] rounded-lg px-4 py-16">
          <div className="flex gap-20">
            <div>
              <h1 className="text-xl ml-4 font-monospace font-semibold">
                2.Shipping Method
              </h1>
              <div className="flex text-xl ml-4 mt-4 font-monospace font-semibold">
                <DirectionsBikeIcon />
                <div className="mb-2 ml-3">
                  <Form.Check
                    inline
                    name="group1"
                    type="radio"
                    id="inline-radio-1"
                    checked={shippingPlace === "Inside Dhaka City"} // checked based on shipping place
                    onClick={() => handleRadioClick(70, "Inside Dhaka City")} // Call handleRadioClick with shipping cost and place
                  />
                </div>
                <h1>Inside Dhaka City - 70</h1>
                <FaBangladeshiTakaSign />
              </div>
              {/* <div className="flex text-xl ml-4 mt-4 font-monospace font-semibold">
                <DirectionsBikeIcon />
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-2 ml-3">
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      checked
                    />
                  </div>
                ))}
                <h1>Inside Dhaka City - 70</h1>
                <FaBangladeshiTakaSign />
              </div> */}
              <div className="ml-4">
                <small>
                  Product & Location Dependent Shipping Cost (Our Agent <br />{" "}
                  Will Inform you After confirming Order)
                </small>
              </div>
              <div className="flex text-xl ml-4 mt-3 font-monospace font-semibold">
                <LocalShippingIcon />
                <div className="mb-2 ml-3">
                  <Form.Check
                    inline
                    name="group1"
                    type="radio"
                    id="inline-radio-2"
                    onClick={() => handleRadioClick(150, "Outside Dhaka")} // Call handleRadioClick with shipping cost and place
                  />
                </div>
                <h1> Outside of Dhaka - 150</h1>
                <FaBangladeshiTakaSign />
              </div>
              {/* <div className="flex text-xl ml-4 mt-3 font-monospace font-semibold">
                <LocalShippingIcon />
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-2 ml-3">
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      onClick={() => handleRadioClick(150, true)}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}
                <h1> Outside of Dhaka - 150</h1>
                <FaBangladeshiTakaSign />
              </div> */}
              <div className="ml-4">
                <small>
                  Product & Location Dependent Shipping Cost (Our Agent <br />{" "}
                  Will Inform you After confirming Order)
                </small>
              </div>
            </div>
            <div className="ml-14">
              <h1 className="text-xl font-monospace font-semibold">
                3.Payment Method
              </h1>
              <h1 className="flex  gap-2 mt-4 mb-2 text-lg font-monospace font-semibold">
                <PaymentsIcon />{" "}
                <input
                  type="radio"
                  name="radio-8"
                  className="radio radio-info radio-sm"
                />
                Cash On Delivery
              </h1>
              <h1 className="flex gap-2  mb-3 text-lg font-monospace font-semibold">
                <CreditCardIcon />{" "}
                <input
                  type="radio"
                  name="radio-8"
                  className="radio radio-info radio-sm "
                  checked
                />
                Pay with Credit Card/Debit Card
              </h1>
            </div>
          </div>
          {/* <h1 className="mb-4">Total Price : {totalPrice}</h1> */}

          {cart && cart.length > 0 && (
            <div className="ml-4">
              <h3 className="text-2xl font-monospace font-semibold mt-5 mb-4">
                4.Order Overview
              </h3>
              <table className="table w-full">
                {/* head */}
                <thead className="">
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>

                <tbody>
                  {cart.map((item, index) => (
                    <tr key={item._id}>
                      <td>
                        {item.name ? (
                          <span className="font-semibold">{item.name}</span>
                        ) : (
                          <span className="font-semibold">
                            {item.productName}
                          </span>
                        )}
                      </td>
                      <td>
                        <div className="flex gap-1 mr-5 font-semibold">
                          <h1 className="">{item.price}</h1>
                          <h1>X</h1>
                          <h1 className="">{item.quantity}</h1>
                        </div>
                      </td>
                      {/* Display the total for the current item */}
                      <td className="flex text-start font-semibold">
                        {parseFloat(item.price) * item.quantity} <FaBangladeshiTakaSign />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="ml-96 pl-64 mb-10">
                <tr>
                  <td colSpan="2"></td>
                  <td>
                    <div className="flex text-lg font-semibold">
                      Sub Total : {productPrice}
                      <FaBangladeshiTakaSign />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2"></td>
                  <td>
                    <div className="flex text-lg font-semibold">
                      {shippingPlace} : {shippingCost} <FaBangladeshiTakaSign />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2"></td>
                  <td>
                    <div className="flex text-lg font-semibold">
                      Total : {totalPrice} <FaBangladeshiTakaSign />
                    </div>
                  </td>
                </tr>
              </div>
            </div>
          )}
          {/* <h1>{points} </h1> */}
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            onChange={handleChange}
            className="btn btn-sm btn-primary my-4"
            style={{ textTransform: "capitalize" }}
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
          <p className="text-red-600">{error}</p>
          {transactionid && (
            <p className="text-green-600">
              Your transaction id: {transactionid}
            </p>
          )}

          {/* <p>
            Earn Star Points and use on your next order <StarsIcon />
            {userInfo[0]?.starpoints} Star Points
          </p> */}
        </div>
      </Form>
    </div>
  );
};

export default CheckoutForm;
