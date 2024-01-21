import { useEffect, useState } from "react";


const UseCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/cart", {
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