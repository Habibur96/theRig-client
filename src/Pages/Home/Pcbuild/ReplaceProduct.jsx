// import { Form, Link, useLoaderData, useParams } from "react-router-dom";
// import cpu from "../../../assets/icon/cpu.jpg";
// import cpuCooler from "../../../assets/icon/cpuCooler.jpg";
// import motherboard from "../../../assets/icon/motherboard.jpg";
// import ram from "../../../assets/icon/Ram.jpg";
// import storage from "../../../assets/icon/storage.jpg";
// import gpu from "../../../assets/icon/gpu.jpg";
// import psu from "../../../assets/icon/powerSupply.jpg";
// import casing from "../../../assets/icon/cassing.jpg";
// import monitor from "../../../assets/icon/monitor.jpg";
// import casingCooler from "../../../assets/icon/casing-cooler.jpg";
// import keyboard from "../../../assets/icon/keyboard.jpg";
// import mouse from "../../../assets/icon/mouse.jpg";
// import antiVirus from "../../../assets/icon/anti-virus.jpg";
// import headphone from "../../../assets/icon/headphone.jpg";
// import ups from "../../../assets/icon/ups.jpg";
// import { useEffect, useState } from "react";
// import ClearIcon from "@mui/icons-material/Clear";
// import AutorenewIcon from "@mui/icons-material/Autorenew";
// import { Button } from "react-bootstrap";
// import UseProduct from "../../../Hooks/UseProduct";

// const ReplaceProduct = () => {
//   const data = useLoaderData();
// console.log({data})
//   // const products = {
//   //   CPU: "cpu",
//   //   motherboard: "motherboard",
//   // };
//   const [product] = UseProduct();
//   const { _id } = useParams();
//   //console.log({ _id });

//   // const [removedIds, setRemovedIds] = useState([]);
//   const [replaceCpu, setReplaceCpu] = useState(false);
//   const [replaceMotherboard, setReplaceMotherboard] = useState(false);
//   // console.log({ replace });

//   const [selectCpu, setselectCpu] = useState([]);
//   const [selectMotherboard, setselectMotherboard] = useState([]);

//   // const navigate = useNavigate();

//   useEffect(() => {
//     pcbuilderCartGet();
//   }, [_id]);

//   const pcbuilderCartGet = () => {
//     console.log({ _id });

  

//     fetch("http://localhost:3000/pcbuilderCart", {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => console.log(data))
//       .catch((error) =>
//         console.error("There was a problem with the fetch operation:", error)
//       );
//   };
//   // if(removedIds.includes(_id)) return;
//   //   fetch(`http://localhost:3000/${products.CPU}/replace/${_id}`, {
//   //     method: "GET",
//   //   })
//   //     // fetch(`http://localhost:3000/pcbuilderCart/${_id}`, {
//   //     //   method: "GET",
//   //     // })
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       pcbuilderCartGet();

//   //       if (data.category === "cpu") {
//   //         // Do something when the category exists
//   //         setselectCpu(data);

//   //         setReplaceCpu(true);
//   //         console.log({ _id: data._id });

//   //         console.log(`Category exists: ${data._id}`);
//   //       }
//   //       if (data.category === "motherboard") {
//   //         // Do something when the category exists
//   //         setselectMotherboard(data);
//   //         setReplaceMotherboard(true);
//   //         console.log("motherboard");
//   //         console.log(`Category exists: ${data.category}`);
//   //       }
//   //     });
//   // };

//   // const pcbuilderCartGet = () => {
//   // useEffect(() => {
//   //   fetch(`http://localhost:3000/pcbuilderCart/${_id}`, {
//   //     method: "GET",
//   //   })
//   //     .then((res) => res.json())

//   //     .then((data) => {
//   //       console.log({ data });
//   //       if (data.category === "cpu") {
//   //         // Do something when the category exists
//   //         setselectCpu(data);

//   //         setReplaceCpu(true);
//   //         console.log({ _id: data._id });
//   //         console.log(`Category exists: ${data._id}`);
//   //       }
//   //       if (data.category === "motherboard") {
//   //         // Do something when the category exists
//   //         setselectMotherboard(data);
//   //         setReplaceMotherboard(true);
//   //         console.log("motherboard");
//   //         console.log(`Category exists: ${data.category}`);
//   //       }
//   //     });
//   // }, []);

//   const handleRemoveReplaceCpu = (_id) => {
//     console.log(_id);

//     // setselectCpu(null);
//     // navigate("/pcbuild");

//     fetch(`http://localhost:3000/pcbuilderCart/${_id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data.deletedCount);
//         if (data.deletedCount > 0) {
//           console.log("deleted", data.deletedCount);
//           setReplaceCpu(false);
//         }
//       });
//   };
//   const handleRemoveReplaceMotherboard = () => {
//     //setReplaceMotherboard(false);
//     // setselectCpu(null);
//     //navigate("/pcbuild");
//     // setRemovedIds(prevIds => [...prevIds, _id]);
//   };

//   console.log({ replaceCpu });
//   console.log({ replaceMotherboard });
//   console.log({ selectCpu });
//   console.log({ selectMotherboard });

//   const handleSubmit = (data) => {
//     console.log({ data });
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <div className="max-w-screen-xl mx-auto mt-20 pl-40">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>
//                 <Button variant="info" type="submit" value="" size="">
//                   Add to cart
//                 </Button>
//               </th>
//             </tr>
//             <tr>
//               <th>dfsafdfadsf</th>
//               <th>dfsafdfadsf</th>
//               <th>dfsafdfadsf</th>
//             </tr>
//             <tr>
//               <th>Core Components</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* row 1 */}
//             {replaceCpu ? (
//               <tr>
//                 <td>
//                   <div className="flex items-center space-x-10">
//                     <div className="avatar">
//                       <div className="w-12 h-12">
//                         <img
//                           src={selectCpu.img}
//                           alt="Avatar Tailwind CSS Component"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <div className="font-bold">{selectCpu.name}</div>
//                     </div>
//                   </div>
//                 </td>
//                 <td> </td>

//                 <th>
//                   <div className="flex space-x-6 items-center  ">
//                     <div>{selectCpu.price} tk</div>
//                     <div className="ml-4">
//                       <button type="button" title="Remove">
//                         <ClearIcon
//                           onClick={() => handleRemoveReplaceCpu(selectCpu._id)}
//                           className="mr-4"
//                         ></ClearIcon>
//                       </button>

//                       <Link to="/cpu">
//                         <AutorenewIcon></AutorenewIcon>
//                       </Link>

//                       {/* <button ></button> */}
//                     </div>
//                   </div>
//                 </th>
//               </tr>
//             ) : (
//               <tr>
//                 <td>
//                   <div className="flex items-center space-x-10">
//                     <div className="avatar">
//                       <div className="w-12 h-12">
//                         <img src={cpu} alt="Avatar Tailwind CSS Component" />
//                       </div>
//                     </div>
//                     <div>
//                       <div className="font-bold">CPU</div>
//                     </div>
//                   </div>
//                 </td>
//                 <td></td>
//                 {/* {show ? <span>Hide Password</span> : <span>Show Password</span>} */}

//                 <th>
//                   {/* /routeName/$apiName/$productCategory */}
//                   <Link to="/cpu">
//                     <button className=" btn btn-outline btn-info">
//                       Choose
//                     </button>
//                   </Link>
//                 </th>
//               </tr>
//             )}

//             {/* row 2 */}
//             <tr>
//               <td>
//                 <div className="flex items-center space-x-10">
//                   <div className="avatar">
//                     <div className=" w-12 h-12">
//                       <img
//                         src={cpuCooler}
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-sm  font-bold">CPU cooler</div>
//                   </div>
//                 </div>
//               </td>
//               <td></td>

//               <th>
//                 <Link>
//                   <button className=" btn btn-outline btn-info">Choose</button>
//                 </Link>
//               </th>
//             </tr>
//             {/* row 3 */}
//             {replaceMotherboard ? (
//               <tr>
//                 <td>
//                   <div className="flex items-center space-x-10">
//                     <div className="avatar">
//                       <div className=" w-12 h-12">
//                         <img
//                           src={selectMotherboard.img}
//                           alt="Avatar Tailwind CSS Component"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <div className="text-sm font-bold">
//                         {selectMotherboard.name}
//                       </div>
//                     </div>
//                   </div>
//                 </td>
//                 <td></td>
//                 <th>
//                   <div className="flex space-x-6 items-center  ">
//                     <div>{selectMotherboard.price} tk</div>
//                     <div className="ml-4">
//                       <button type="button" title="Remove">
//                         <ClearIcon
//                           onClick={handleRemoveReplaceMotherboard}
//                           className="mr-4"
//                         ></ClearIcon>
//                       </button>

//                       {/* path: "cpu/:pcbuilderProductName/:category", */}
//                       <Link to="/motherboard">
//                         <AutorenewIcon></AutorenewIcon>
//                       </Link>

//                       {/* <button ></button> */}
//                     </div>
//                   </div>
//                 </th>
//               </tr>
//             ) : (
//               <tr>
//                 <td>
//                   <div className="flex items-center space-x-10">
//                     <div className="avatar">
//                       <div className=" w-12 h-12">
//                         <img
//                           src={motherboard}
//                           alt="Avatar Tailwind CSS Component"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <div className="text-sm font-bold">Motherboard</div>
//                     </div>
//                   </div>
//                 </td>
//                 <td></td>
//                 <th>
//                   {/* /routeName/$apiName/$productCategory */}
//                   <Link to="/motherboard">
//                     <button className=" btn btn-outline btn-info">
//                       Choose
//                     </button>
//                   </Link>
//                 </th>
//               </tr>
//             )}
//             {/* row 4 */}
//             <tr>
//               <td>
//                 <div className="flex items-center space-x-10">
//                   <div className="avatar">
//                     <div className=" w-12 h-12">
//                       <img src={ram} alt="Avatar Tailwind CSS Component" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">RAM</div>
//                   </div>
//                 </div>
//               </td>
//               <td></td>

//               <th>
//                 <Link>
//                   <button className=" btn btn-outline btn-info">Choose</button>
//                 </Link>
//               </th>
//             </tr>
//             {/* row 5 */}
//             <tr>
//               <td>
//                 <div className="flex items-center space-x-10">
//                   <div className="avatar">
//                     <div className=" w-12 h-12">
//                       <img src={storage} alt="Avatar Tailwind CSS Component" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-sm font-bold">Storage</div>
//                   </div>
//                 </div>
//               </td>
//               <td></td>

//               <th>
//                 <Link>
//                   <button className=" btn btn-outline btn-info">Choose</button>
//                 </Link>
//               </th>
//             </tr>
//             {/* row 6 */}
//             <tr>
//               <td>
//                 <div className="flex items-center space-x-10">
//                   <div className="avatar">
//                     <div className=" w-12 h-12">
//                       <img src={gpu} alt="Avatar Tailwind CSS Component" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-sm font-bold">Graphics Card</div>
//                   </div>
//                 </div>
//               </td>
//               <td></td>

//               <th>
//                 <Link>
//                   <button className=" btn btn-outline btn-info">Choose</button>
//                 </Link>
//               </th>
//             </tr>
//             {/* row 7 */}
//             <tr>
//               <td>
//                 <div className="flex items-center space-x-10">
//                   <div className="avatar">
//                     <div className=" w-12 h-12">
//                       <img src={psu} alt="Avatar Tailwind CSS Component" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-sm font-bold">Power Supply</div>
//                   </div>
//                 </div>
//               </td>
//               <td></td>

//               <th>
//                 <Link>
//                   <button className=" btn btn-outline btn-info">Choose</button>
//                 </Link>
//               </th>
//             </tr>
//             {/* row 8 */}
//             <tr>
//               <td>
//                 <div className="flex items-center space-x-10">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <img src={casing} alt="Avatar Tailwind CSS Component" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-sm font-bold">Casing</div>
//                   </div>
//                 </div>
//               </td>

//               <td></td>

//               <th>
//                 <Link>
//                   <button className=" btn btn-outline btn-info">Choose</button>
//                 </Link>
//               </th>
//             </tr>

//             <tr>
//               <th>
//                 <div className="">Peripherals & Others</div>
//               </th>
//             </tr>

//             {/* row 9*/}
//             <tr>
//               <td>
//                 <div className="flex items-center space-x-10">
//                   <div className="avatar">
//                     <div className="w-12 h-12">
//                       <img src={monitor} alt="Avatar Tailwind CSS Component" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-sm font-bold">Monitor</div>
//                   </div>
//                 </div>
//               </td>
//               <td></td>

//               <th>
//                 <Link>
//                   <button className=" btn btn-outline btn-info">Choose</button>
//                 </Link>
//               </th>
//             </tr>

//             {/* row 10 */}
//             <tr>
//               <td>
//                 <div className="flex items-center space-x-10">
//                   <div className="avatar">
//                     <div className=" w-12 h-12">
//                       <img
//                         src={casingCooler}
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-sm font-bold">Casing Cooler</div>
//                   </div>
//                 </div>
//               </td>
//               <td></td>

//               <th>
//                 <Link>
//                   <button className=" btn btn-outline btn-info">Choose</button>
//                 </Link>
//               </th>
//             </tr>
//             {/* row 11 */}
//             <tr>
//               <td>
//                 <div className="flex items-center space-x-10">
//                   <div className="avatar">
//                     <div className=" w-12 h-12">
//                       <img src={keyboard} alt="Avatar Tailwind CSS Component" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-sm font-bold">Keyboard</div>
//                   </div>
//                 </div>
//               </td>
//               <td></td>

//               <th>
//                 <Link>
//                   <button className=" btn btn-outline btn-info">Choose</button>
//                 </Link>
//               </th>
//             </tr>
//             {/* row 11 */}
//             <tr>
//               <td>
//                 <div className="flex items-center space-x-10">
//                   <div className="avatar">
//                     <div className=" w-12 h-12">
//                       <img src={mouse} alt="Avatar Tailwind CSS Component" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-sm font-bold">Mouse</div>
//                   </div>
//                 </div>
//               </td>
//               <td></td>

//               <th>
//                 <Link>
//                   <button className=" btn btn-outline btn-info">Choose</button>
//                 </Link>
//               </th>
//             </tr>
//             {/* row 12 */}
//             <tr>
//               <td>
//                 <div className="flex items-center space-x-10">
//                   <div className="avatar">
//                     <div className=" w-12 h-12">
//                       <img
//                         src={antiVirus}
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-sm font-bold">Anti Virus</div>
//                   </div>
//                 </div>
//               </td>
//               <td></td>

//               <th>
//                 <Link>
//                   <button className=" btn btn-outline btn-info">Choose</button>
//                 </Link>
//               </th>
//             </tr>
//             {/* row 13 */}
//             <tr>
//               <td>
//                 <div className="flex items-center space-x-10">
//                   <div className="avatar">
//                     <div className=" w-12 h-12">
//                       <img
//                         src={headphone}
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-sm font-bold">Headphone</div>
//                   </div>
//                 </div>
//               </td>
//               <td></td>

//               <th>
//                 <Link>
//                   <button className=" btn btn-outline btn-info">Choose</button>
//                 </Link>
//               </th>
//             </tr>
//             {/* row 14 */}
//             <tr>
//               <td>
//                 <div className="flex items-center space-x-10">
//                   <div className="avatar">
//                     <div className=" w-12 h-12">
//                       <img src={ups} alt="Avatar Tailwind CSS Component" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">UPS</div>
//                   </div>
//                 </div>
//               </td>
//               <td></td>

//               <th>
//                 <Link>
//                   <button className=" btn btn-outline btn-info">Choose</button>
//                 </Link>
//               </th>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </Form>
//   );
// };

// export default ReplaceProduct;
