import  { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const [quantities, setQuantities] = useState([]);

  const updateQuantity = (index, newQuantity) => {
    // Ensure the new quantity is not less than 0
    newQuantity = Math.max(newQuantity, 0);

    // If the quantities array is not yet initialized for this index, initialize it
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
