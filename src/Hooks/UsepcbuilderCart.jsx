// import { useEffect, useState } from "react";
// import UseAuth from "./UseAuth";

// const UsepcbuilderCart = () => {
//   const [pcbuilderCart, setPcbuilderCart] = useState([]);
//   const { user } = UseAuth();
//   console.log({ user });
//   const userEmail = user?.email;
//   console.log(userEmail);
//   const pcbuilderDataGet = async () => {
//    const res = await fetch(`http://localhost:3000/pcbuilderCart?email=${user?.email}`, {
//       method: "GET",
//     });
//   };

  
  

//   return [pcbuilderCart];
// };

// export default UsepcbuilderCart;

// import { useEffect, useState } from "react";
// import UseAuth from "./UseAuth";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";

// const UsepcbuilderCart = () => {
//   const { user, loading } = UseAuth();
//   const [axiosSecure] = useAxiosSecure();
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const timer = setTimeout(async () => {
//       const res = await axiosSecure(`/pcbuilderCart?email=${user?.email}`);
//       console.log(res.data);
//       setData(res.data);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []); // Empty dependency array ensures the effect runs only once

//   const refetch = () => {}; // Placeholder for refetch function, since it's not needed here

//   return [data, refetch];
// };

// export default UsepcbuilderCart;
