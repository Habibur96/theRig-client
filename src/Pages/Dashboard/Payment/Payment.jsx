// import { loadStripe } from "@stripe/stripe-js";

// import { Helmet } from "react-helmet";

import { useParams } from "react-router-dom";

import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import UseCart from "../../../Hooks/UseCart";

const stripePromise = loadStripe(import.meta.env.VITE_payment_getway_pk);
const Payment = () => {
 
  
   const { email } = useParams();

  return (
    <div className="">
      {/* <Helmet>
        <title>TheRig | Payment</title>
      </Helmet> */}

      <h1 className="text-3xl">payment here..............</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm  email={email}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;


// import { loadStripe } from '@stripe/stripe-js'
// import { Elements } from '@stripe/react-stripe-js'

// import CheckOutForm from './CheckoutForm/CheckoutForm'
// import UseCart from '../../../Hooks/UseCart'

// const Payment = () => {
//   //todo provide publishable key
//   const stripePromise = loadStripe(import.meta.env.VITE_payment_getway_pk)
//   const [cart] = UseCart()
//   const totalAmount = cart.reduce((sum, item) => sum + parseInt(item.price), 0)
//   console.log({totalAmount})
//   const price=parseFloat(totalAmount.toFixed(2))
//   console.log({price})
//   return (
//     <div>
//       <Elements stripe={stripePromise}>
//       <CheckOutForm cart={cart} price={price}></CheckOutForm>
//       </Elements>
//     </div>
//   )
// }

// export default Payment