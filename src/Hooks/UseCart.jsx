// import { useEffect, useState } from "react";
import UseAuth from "./UseAuth";
import { useQuery } from "@tanstack/react-query";

const UseCart = () => {
  const { user, loading } = UseAuth();
  // const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3000/cart?email=${user?.email}`, {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("theRig-access-token")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCart(data);
  //     });
  // }, []);
  // return [cart];

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:3000/cart?email=${user?.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem(
              "theRig-access-token"
            )}`,
          },
        }
      );
      return res.json();
    },
  });
  return [cart, refetch];
};

export default UseCart;
