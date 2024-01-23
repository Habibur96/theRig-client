import { useEffect, useState } from "react";
import UseAuth from "./UseAuth";

const UseCart = () => {

  const {user} = UseAuth()
  const [cart, setCart] = useState([]);

  useEffect(() => {
    
    fetch(`http://localhost:3000/cart?email=${user?.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
      });
  }, []);
  return [cart];
};

export default UseCart;
