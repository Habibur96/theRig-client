import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import UseCart from "../../../../Hooks/UseCart";
import useUsers from '../../../../Hooks/useUsers'


const CheckoutForm = ({email}) => {
  console.log(email);
  const [user] = useUsers();
  console.log(user);
  //   const { user } = UseAuth();

  const userInfo = user.filter((item) => item.email === email);
  console.log(userInfo);

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionid, setTransactionid] = useState("");
  const navigate = useNavigate();


  const [cart,refetch] = UseCart();
  const totalPrice = cart.reduce((sum, item) => sum + parseInt(item.price), 0);
  console.log({totalPrice})
  console.log(cart);

  useEffect(() => {
    if (totalPrice > 0) {
  const totalPrice = cart.reduce((sum, item) => sum + parseInt(item.price), 0);
      axiosSecure.post("/create-payment-intent", { price: totalPrice }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, totalPrice]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);

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
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      console.log("error", error);
    } else {
      setError("");
      console.log("PaymentMethod", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log("Payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionid(paymentIntent.id);

        //save payment information to the server
        const payment = {
          email: userInfo?.email,
          transactionId: paymentIntent.id,
          price: totalPrice,
          date: new Date(), //utc date convert....use moment js to convert
          quantity: cart.length,
          cartId: cart.map((item) => item._id),
          menuItemId: cart.map((item) => item.cartItemId),
          status: "pending",
          itemName: cart.map((item) => item.name),
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log("data", res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for payment",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/paymentHistory");
        }
      }
    }
  };

  return (
    <div className="">
      <div className="flex-[4] bg-red-300  px-4 py-16">
        {/* <Form onSubmit={handleSubmit(onSubmit)} className=" w-3/4 m-8"> */}
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
              {" "}
              Your transaction id: {transactionid}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;

// import { useEffect, useState } from "react";
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import { toast } from 'react-toastify';
// import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
// import UseAuth from "../../../../Hooks/UseAuth";

// const CheckOutForm = ({ price,cart }) => {
//   console.log({price, cart})
//   const { user } = UseAuth()
//   const stripe = useStripe()
//   const elements = useElements()
//   const [cardError, setCardError] = useState('')
// const [axiosSecure] = useAxiosSecure()
//   const [clientSecret, setClientSecret] = useState('')
//   const [processing, setProcessing] = useState(false)
//   const [transectionId, setTransectionId] = useState('')
//   useEffect(() => {
//     if (price > 0) {
//       axiosSecure.post('/create-payment-intent', { price })
//       .then(res => {
//         // console.log('paymentData', res.data.clientSecret);
//         setClientSecret(res.data.clientSecret)
//       })
//     }
//   }, [price, axiosSecure])

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     if (!stripe || !elements) {
//       return
//     }
//     const card = elements.getElement(CardElement)
//     if (card === null) {
//       return
//     }
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card
//     })
//     if (error) {
//       setCardError(error.message)
//       console.log(error, 'error');
//     }
//     else {
//       setCardError('')
//       // console.log('paymentMethod', paymentMethod);
//     }
//     setProcessing(true)
//     // console.log('card', card);
//     const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: card,
//         billing_details: {
//           name: user?.displayName || 'anonymous user',
//           email: user?.email || 'unknown'
//         }

//       }
//     })
//     if (confirmError) {
//       setCardError(confirmError)
//     }
//     // console.log('paymentIntent', paymentIntent);
//     setProcessing(false)
//     if (paymentIntent.status === 'succeeded') {
//       setTransectionId(paymentIntent.id)
//       // save payment information to the server
//       const payment = {
//         email: user?.email,
//         name: user?.displayName,
//         transectionId: paymentIntent.id,
//         price,
//         date: new Date(),
//         status:'service pending',
//         quantity: cart.length,
//         cartItems: cart.map(item => item._id),
//         menuItems:cart.map(item=>item.menuItemId),
//         itemsName:cart.map(item=>item.name)
//       }
//       axiosSecure.post('/payments',{payment})
//         .then(res => {
//           if (res.data.insertResult.insertedId) {
//             // console.log(res.data);
//             toast('Pay The Payment Successfully !!!',{autoClose:2000})
//           }
//       })
//     }
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: '16px',
//                 color: '#424770',
//                 '::placeholder': {
//                   color: '#aab7c4',
//                 },
//               },
//               invalid: {
//                 color: '#9e2146',
//               },
//             },
//           }}
//         />
//         <button type="submit" className="btn mt-5 px-10 text-3xl" disabled={!stripe || !clientSecret || processing}>
//           Pay
//         </button>
//       </form>
//       {cardError && <p className='text-2xl text-red-600'>{cardError}</p>}
//       {transectionId && <p className='text-2xl text-green-600'>Transection Complete with transectionId: {transectionId}</p>}
//     </div>
//   )
// }

// export default CheckOutForm
