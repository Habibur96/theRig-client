// import { loadStripe } from "@stripe/stripe-js";


// import { Helmet } from "react-helmet";

import { useParams } from "react-router-dom";
import UseCart from "../../../Hooks/UseCart";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";



 const stripePromise = loadStripe(import.meta.env.VITE_payment_getway_pk);
const Payment = () => {
  const [cart] = UseCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  // const price = total.toFixed(2)
  const { email } = useParams();
 
  return (
    <div className="">
      {/* <Helmet>
        <title>TheRig | Payment</title>
      </Helmet> */}
     
      <h1 className="text-3xl">payment here..............</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={total} email={email}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
