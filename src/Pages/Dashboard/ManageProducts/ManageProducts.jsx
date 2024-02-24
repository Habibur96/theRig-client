import UseProduct from "../../../Hooks/UseProduct";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Height } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Form } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import ManageSearchProducts from "./ManageSearchProducts";
const ManageProducts = () => {
  const [product] = UseProduct();
  const [axiosSecure] = useAxiosSecure();
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [asc, setAsc] = useState(true);
  const [services, setServices] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  console.log(product);
  useEffect(() => {
    axiosSecure
      .get(`/cpu/search/?search=${search}&sort=${asc ? "asc" : "dsc"}`)

      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, [asc, search]);
  console.log(services.name);
  const handleSearch = () => {
    console.log(searchRef.current.value);
    setSearch(searchRef.current.value);
    // Clear the search bar.
    setSearchTerm("");
  };

  const handleKeyPress = (e) => {
    // Check if the Enter key is pressed.
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const onSubmit = (data, e) => {
    console.log("noyon");
    e.preventDefault();
    console.log("noyon");
    console.log(data);
    console.log(_id);
    const { price, couponsCode, couponsDiscount, startDate, endDate } = data;
    const newItem = {
      price: parseFloat(price),
      couponsCode,
      couponsDiscount,
      startDate,
      endDate,
    };

    console.log(newItem);
    axiosSecure.put("/cpu", newItem).then((data) => {
      console.log("after updating", data.data);
      if (data.data?.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Menu item saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="overflow-x-auto">
      <div className="flex">
        <div className="flex mx-auto input-group mt-5 mb-5 ">
          <input
            ref={searchRef}
            type="text"
            placeholder="Search…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            className="input input-primary text-black w-32 md:w-50 lg:w-[500px] ml-28"
          />

          <button onClick={handleSearch} className="btn btn-square btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <button className="btn btn-primary m-5" onClick={() => setAsc(!asc)}>
          {asc ? "Price high to low" : "Price low to high"}
        </button>
      </div>
      <div className="">
        console.log(service)
        <ManageSearchProducts
          // key={service._id}
          service={services}
        ></ManageSearchProducts>
      </div>

      <table className="table">
        {/* head */}

        <thead className="ltr:text-left rtl:text-right bg-[#65B741] h-14">
          <tr>
            <th className="pl-3 px-4">#</th>
            <th className="whitespace-nowrap px-2 py-2  text-gray-900">
              Product
            </th>
            <th className=" px-1 py-2 text-gray-900r">Category</th>
            <th className=" px-4 py-2 text-gray-900 text-center">Brand</th>
            <th className=" px-4 py-2  text-gray-900 ">Qty</th>
            <th className=" px-4 py-2 text-gray-900">Price</th>
            <th className=" px-4 py-2  text-gray-900">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-300">
          {product.map((item, index) => (
            <tr className="" key={item._id}>
              <th className="pl-3 px-4">{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar w-12 h-12 mt-2 mb-2">
                    <img src={item.img} alt="Avatar Tailwind CSS Component" />
                  </div>
                  <div className="">{item.name}</div>
                </div>
              </td>
              <td className="whitespace-nowrap px-10 py-2 text-gray-700">
                {item.category}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.Brand}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {/* {item.Qty} */}10
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.price}
              </td>
              <td className="whitespace-nowrap px-4 py-2 ">
                <div className="flex gap-2">
                  <button
                    variant="primary"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    <ModeEditOutlinedIcon /> Edit
                  </button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box ">
                      <Form
                        onSubmit={(e) => handleSubmit(onSubmit, e)}
                        method="dialog"
                      >
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                        <div className="flex">
                          <Form.Group className="w-full">
                            <Form.Label className="label">
                              <span className="label-text">Coupon Code</span>
                            </Form.Label>
                            <input
                              type="text"
                              placeholder="Coupon Code"
                              className="input input-bordered w-full "
                              {...register("couponsCode")}
                            />
                          </Form.Group>
                          <Form.Group className=" w-full  ml-4 mr-4">
                            <Form.Label className="label">
                              <span className="label-text">Discount</span>
                            </Form.Label>
                            <input
                              type="text"
                              placeholder="Discount"
                              className="input input-bordered w-full "
                              {...register("couponsDiscount")}
                            />
                          </Form.Group>
                          <Form.Group className="w-full">
                            <Form.Label className="label">
                              <span className="label-text">Price</span>
                            </Form.Label>
                            <input
                              type="number"
                              placeholder="Price"
                              className="input input-bordered w-full "
                              {...register("price")}
                            />
                          </Form.Group>
                        </div>
                        <div className="flex">
                          <Form.Group className=" mr-3 ml-4">
                            <Form.Label className="label">
                              <span className="label-text">Start Date</span>
                            </Form.Label>
                            <input
                              type="date"
                              name="date"
                              className="input input-bordered"
                              {...register("startDate")}
                            />
                          </Form.Group>
                          <Form.Group className="">
                            <Form.Label className="label">
                              <span className="label-text">End Date</span>
                            </Form.Label>
                            <input
                              type="date"
                              name="date"
                              className="input input-bordered"
                              {...register("endDate")}
                            />
                          </Form.Group>
                        </div>
                        <button
                          // onClick={() => onSubmit(item._id)}
                          className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-3 mb-5"
                        >
                          Update Now
                        </button>
                      </Form>
                    </div>
                  </dialog>

                  <button onClick={() => handleDelete(order._id)}>
                    <DeleteForeverIcon />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    // <div className="border-gray-200 mt-2">
    //   <div className="overflow-x-auto ">
    //     <table className="min-w-full divide-gray-200 bg-white text-sm ">
    //         <thead className="h-28 bg-body-secondary">
    //             <h1>dfdfdfd</h1>
    //         </thead>
    //       <thead className="ltr:text-left rtl:text-right bg-[#65B741] h-14">
    //         <tr>
    //           <th className="pl-3 px-4">#</th>
    //           <th className="whitespace-nowrap px-2 py-2  text-gray-900">
    //             Product
    //           </th>
    //           <th className="whitespace-nowrap px-4 py-2 text-gray-900r">
    //             Category
    //           </th>
    //           <th className="whitespace-nowrap px-2 py-2 text-gray-900 text-center">
    //             Brand
    //           </th>
    //           <th className="whitespace-nowrap px-2 py-2  text-gray-900 ">
    //             Qty
    //           </th>

    //           <th className="whitespace-nowrap px-2 py-2 text-gray-900">
    //             Price
    //           </th>
    //           <th className="whitespace-nowrap px-4 py-2  text-gray-900">
    //             Action
    //           </th>
    //         </tr>
    //       </thead>

    //       <tbody className="divide-y divide-gray-300">
    //         {product.map((item, index) => (
    //           <tr className="" key={item._id}>
    //             <th className="pl-3 px-4">{index + 1}</th>
    //             <td>
    //               <div className="flex items-center space-x-3">
    //                 <div className="avatar w-12 h-12 mt-2 mb-2">
    //                   <img src={item.img} alt="Avatar Tailwind CSS Component" />
    //                 </div>

    //                 <div className="">{item.name}</div>
    //               </div>
    //             </td>

    //             <td className="whitespace-nowrap px-10 py-2 text-gray-700">
    //               {item.category}
    //             </td>
    //             <td className="whitespace-nowrap px-2 py-2 text-gray-700">
    //               {item.Brand}
    //             </td>
    //             <td className="whitespace-nowrap px-2 py-2 text-gray-700">
    //               {/* {item.Qty} */}10
    //             </td>

    //             <td className="whitespace-nowrap px-2 py-2 text-gray-700">
    //               {item.price}
    //             </td>
    //             <td className="whitespace-nowrap px-4 py-2 text-gray-700">
    //               <div className="flex gap-2">
    //                 <ModeEditOutlinedIcon /> Edit
    //                 <button onClick={() => handleDelete(order._id)}>
    //                   <DeleteForeverIcon />
    //                 </button>
    //               </div>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
};

export default ManageProducts;
