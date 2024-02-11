import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import UseCart from "../../../../Hooks/UseCart";
import useUsers from "../../../../Hooks/useUsers";

import Swal from "sweetalert2";

const CheckoutForm = ({ email }) => {
  const [user] = useUsers();
  const userInfo = user.filter((item) => item.email === email);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

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
              name: user?.displayName || "Anonymous", // Use a default or placeholder name
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

            price: totalPrice,
            transactionId: paymentIntent.id,
            date: new Date(),
            cartIds: cart.map((item) => item._id),
            menuItemIds: cart.map((item) => item.cartItemId),
            quantity: cart.length,
            status: "success",
            itemName: cart.map((item) => item.name),
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
      <div className="flex-[4] bg-red-300  px-4 py-16">
        <form onSubmit={handleSubmit}>
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
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
