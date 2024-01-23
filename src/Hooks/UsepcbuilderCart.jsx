import { useEffect, useState } from "react";
import UseAuth from "./UseAuth";

const UsepcbuilderCart = () => {
  const [pcbuilderCart, setPcbuilderCart] = useState([]);
  const {user} = UseAuth()
  
  useEffect(() => {
    fetch(`http://localhost:3000/pcbuilderCart?email=${user?.email}`, {
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
