import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

import Swal from "sweetalert2";
import useUsers from "../../../../Hooks/useUsers";
import { useForm } from "react-hook-form";
// import { Form } from "react-router-dom";
import { Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
// import "./CheckoutForm.css";

const CheckoutForm = ({ cart, price, email }) => {
  console.log(email);
  console.log(cart);
  console.log(price);
  const [user] = useUsers();
  //   const { user } = UseAuth();

  console.log(user);
  const userInfo = user.filter((item) => item.email === email);
  console.log(userInfo);

  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionid, setTransactionid] = useState("");

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const onSubmit = async (data) => {
    console.log(data);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    console.log("card", card);

    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      console.log("error", error);
    } else {
      setCardError("");
      // console.log("PaymentMethod", paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log("Payment intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionid(paymentIntent.id);

      //save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: cart.length,
        cartItems: cart.map((item) => item._id),
        menuItems: cart.map((item) => item.menuItemId),
        status: "Service pending",
        itemName: cart.map((item) => item.name),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log("data", res.data);

        if (res.data?.result?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for payment",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };
  //
  //
  return (
    <div className="">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className=" flex column-gap-5  px-4 py-16"
      >
        <div className="flex-[2] bg-gray-100 rounded-lg">
          <div className=" px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <h1 className="text-center font-bold ">
                1. Cubtomer Information
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


              {/* <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div> */}
              {/* </Form> */}
            </div>
          </div>
        </div>
        <div className="flex-[4] bg-red-300  px-4 py-16">
          {/* <Form onSubmit={handleSubmit(onSubmit)} className=" w-3/4 m-8"> */}
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
            className="btn btn-success mt-5"
            type="submit"
            //  disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>

          {cardError && <p className="text-red-600">{cardError}</p>}
          {transactionid && (
            <p className="text-green-500">
              Transaction complete with transactionid: {transactionid}
            </p>
          )}
        </div>
      </Form>
    </div>
  );
};

export default CheckoutForm;
