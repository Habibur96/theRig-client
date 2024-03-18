import React, { useState } from "react";
import { Button } from "react-bootstrap";

import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const AddCoupon = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [axiosSecure] = useAxiosSecure();
  const [couponCode, setCouponCode] = useState("");

  const generateCoupon = () => {
    // Generate a random alphanumeric coupon code
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 8;
    let newCouponCode = "";
    for (let i = 0; i < length; i++) {
      newCouponCode += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    // Set the generated coupon code
    setCouponCode(newCouponCode);
  };
  const onSubmit = (data) => {
    console.log(data);

    const saveCoupon = {
      couponCode: data.couponCode,
      numberOfUse: data.numberOfUse,
      percentage: data.percentage,
      category: data.category,
      startDate: data.startDate,
      endDate: data.endDate,
    };

    axiosSecure.post("/coupon", saveCoupon).then((data) => {
      console.log("after posting new menu item", data.data);
      if (data.data?.insertedId) {
        reset();
        setCouponCode("");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Coupon created",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        console.log("sorry");
      }
    });
  };
  return (
    <div className="bg-[#f4f4f3]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 max-w-screen-md pt-20 ml-28 ">
          <div className="divider text-lg font-semibold pb-5">
            Create New Coupon
          </div>

          <div className="flex gap-4">
            <input
              className="form-control"
              size="lg"
              type="text"
              placeholder="Coupon Code"
              value={couponCode}
              readOnly
              {...register("couponCode", { required: true })}
            />
            <Button
              variant="info"
              size="lg"
              style={{ textTransform: "capitalize" }}
              onClick={generateCoupon}
            >
              Generate Code
            </Button>
          </div>
          <input
            className="form-control"
            size="lg"
            type="text"
            {...register("percentage", { required: true })}
            placeholder="Percentage"
          />
          <div className="flex gap-4">
            <input
              className="form-control"
              size="lg"
              type="number"
              {...register("numberOfUse", { required: true })}
              placeholder="Number of use"
            />
            <select
              className="select select-bordered w-full max-w-xs"
              {...register("category", { required: true })}
            >
              <option>Cpu</option>
              <option>MotherBoard</option>
              <option>Cpu Cooler</option>
              <option>Ups</option>
              <option>Power Supply</option>
              <option>Mice</option>
              <option>Keyboard</option>
              <option>Storage</option>
              <option>Memory</option>
              <option>Gpu</option>
              <option>Case</option>
              <option>Ups</option>
              <option>Headphone</option>
              <option>Casing Cooler</option>
              <option>Complete Build</option>
            </select>
          </div>
          <div className="flex gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Start Date</span>
              </label>
              <input
                type="date"
                name="date"
                {...register("startDate", {
                  maxLength: 20,
                })}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">End Date</span>
              </label>
              <input
                type="date"
                name="date"
                {...register("endDate", {
                  maxLength: 20,
                })}
                className="input input-bordered"
              />
            </div>
          </div>
        <button
          type="submit"
          size="lg"
          className="btn btn-md btn font-semibold text-lg bg-[#7371fc] border-b-4 mt-4 mb-96 "
          style={{ textTransform: "capitalize" }}
        >
          Create Coupon
        </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoupon;
