import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import UseCart from "../../../../Hooks/UseCart";
import useUsers from "../../../../Hooks/useUsers";

import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";

const CheckoutForm = ({ email }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [user] = useUsers();
  const userInfo = user.filter((item) => item.email === email);
  console.log(userInfo[0]?.name)

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionid, setTransactionid] = useState("");
  const navigate = useNavigate();

  const [cart, refetch] = UseCart();
  const totalPrice = cart.reduce((sum, item) => sum + parseInt(item.price), 0);

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
              // email: user?.email || "anonymous",
              // name: user?.displayName || "anonymous",
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
            phone:userInfo[0]?.phone,
            address,
            price: totalPrice,
            transactionId: paymentIntent.id,
            date: new Date(),
            cartIds: cart.map((item) => item._id),
            menuItemIds: cart.map((item) => item.cartItemId),
            quantity: cart.length,
            paymentStatus: "success",
            orderStatus:"pending",
            itemName: cart.map((item) => item.name),
            itemPhoto: cart.map((item) => item.img),
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
      <Form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className=" flex column-gap-5  px-4 py-16"
      >
        <div className="flex-[2]  bg-[#AAE3E2]  rounded-lg">
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
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
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
                    Address <span className="font-extrabold">*</span>
                  </Form.Label>
                  <Form.Control
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    type="text"
                    id="address"
                    {...register("address", { required: true })}
                    placeholder="Address"
                  />
                </Form.Group>
              </div>

              <div className="mt-3">
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                  {...register("message")}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[2] bg-red-300 rounded-lg px-4 py-16">
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
            className="btn btn-sm btn-primary my-4"
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
        </div>
      </Form>
    </div>
  );
};

export default CheckoutForm;
