import { useEffect, useState } from "react";

const UsepcbuilderCart = () => {
  const [pcbuilderCart, setPcbuilderCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pcbuilderCart", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPcbuilderCart(data);
      });
  }, []);
  return [pcbuilderCart];
};

export default UsepcbuilderCart;
