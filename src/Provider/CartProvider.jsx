import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const [quantities, setQuantities] = useState([]);

  // Load data from cookies on component mount
  useEffect(() => {
    const cartsCookie = Cookies.get("carts");
    const quantitiesCookie = Cookies.get("quantities");

    if (cartsCookie && quantitiesCookie) {
        const savedCarts = JSON.parse(decodeURIComponent(cartsCookie));
        const savedQuantities = JSON.parse(decodeURIComponent(quantitiesCookie));
        setCarts(savedCarts);
        setQuantities(savedQuantities);
    }
}, []);

  const updateQuantity = (index, newQuantity) => {
    // Ensure the new quantity is not less than 0
    newQuantity = Math.max(newQuantity, 0);

    const newQuantities = [...quantities];
    if (newQuantities[index] === undefined) {
      newQuantities[index] = 1; // or any default value you want
    }

    newQuantities[index] = newQuantity;
    setQuantities(newQuantities);

    const newCarts = [...carts];
    newCarts[index] = {
      ...newCarts[index],
      quantity: newQuantity,
    };
    setCarts(newCarts);

    // Save updated data to cookies
    Cookies.set("carts", encodeURIComponent(JSON.stringify(newCarts)), { expires: 7 });
    Cookies.set("quantities", encodeURIComponent(JSON.stringify(newQuantities)), { expires: 7 });
  };

  const valueInfo = {
    carts,
    setCarts,
    quantities,
    updateQuantity,
  };

  return (
    <CartContext.Provider value={valueInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;



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