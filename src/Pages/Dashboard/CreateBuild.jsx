import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
const image_hosting_token = import.meta.env.VITE_Image_hosting_Token;
const CreateBuild = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.img[0]);
    console.log(data);
    const image = data.img[0].name;
    // console.log(img)
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgeResponse) => {
        if (imgeResponse.success) {
          const imgURL = imgeResponse.data.display_url;

          const {
            name,
            price,
            details,
            category,
            coreCount,
            performanceCoreCount,
            performanceBoostClock,
            TDP,
            integratedGraphics,
            warranty,
            type,
            shoplogo,
            model,
            couponsCode,
            couponsDiscount,
            startDate,
            endDate,
          } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            img: imgURL,
            category,
            details,
            coreCount,
            performanceCoreCount,
            performanceBoostClock,
            TDP,
            integratedGraphics,
            warranty,
            type,
            shoplogo,
            model,
            couponsCode,
            couponsDiscount,
            startDate,
            endDate,
          };

          console.log(newItem);
          axiosSecure.post("/createBuild", newItem).then((data) => {
            console.log("after posting new menu item", data.data);
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
        }
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto mt-5 px-10 bg-body-secondary">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SectionTitle subHeading="What's new" heading="Add cpu"></SectionTitle>

        <div className="flex my-4 bg-green-300">
          <h3>Cpu</h3>
          <div className="w-full mb-4">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              placeholder="name"
              {...register("cpuName", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-full  ml-4">
            <label className="label">
              <span className="label-text">Image*</span>
            </label>
            <input
              type="text"
              placeholder="image"
              {...register("cpuImg", {
                required: true,
                maxLength: 120,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-full  ml-4">
            <label className="label">
              <span className="label-text">Model*</span>
            </label>
            <input
              type="text"
              placeholder="model"
              {...register("cpuModel", {
                required: true,
                maxLength: 80,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-full  ml-4">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              placeholder="price"
              {...register("cpuPrice", {
                required: true,
                maxLength: 80,
              })}
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="flex my-4">
          <h3>Cpu Cooler</h3>

          <div className=" w-full  ml-4">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              placeholder="name"
              {...register("cpuCooler", { required: true, maxLength: 20 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-full  ml-4">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true, maxLength: 20 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-full  ml-4">
            <label className="label">
              <span className="label-text">Integrated Graphics*</span>
            </label>
            <input
              type="text"
              placeholder="Integrated Graphics"
              {...register("integratedGraphics", {
                required: true,
                maxLength: 30,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-full  ml-4">
            <label className="label">
              <span className="label-text">Warranty*</span>
            </label>
            <input
              type="text"
              placeholder="Warranty"
              {...register("warranty", {
                required: true,
                maxLength: 8,
              })}
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="flex">
          <div className=" w-full">
            <label className="label">
              <span className="label-text">TDP*</span>
            </label>
            <input
              type="text"
              placeholder="TDP"
              {...register("TDP", {
                required: true,
                maxLength: 10,
              })}
              className="input input-bordered w-full"
            />
          </div>

          <div className="w-full">
            <label className="label">
              <span className="label-text ml-2.5">Type*</span>
            </label>
            <select
              defaultValue="Pick One"
              className="select select-bordered w-50 ml-3"
              {...register("type", { required: true, maxLength: 120 })}
            >
              <option disabled>Type</option>
              <option>intel</option>
              <option>Amd</option>
            </select>
          </div>

          <div className=" w-full  ml-4">
            <label className="label">
              <span className="label-text">Model*</span>
            </label>
            <input
              type="text"
              placeholder="Model"
              {...register("model", {
                required: true,
                maxLength: 15,
              })}
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="flex">
          <div className="w-full my-4">
            <label className="label">
              <span className="label-text">Product Image*</span>
            </label>

            <input
              {...register("img", { required: true, maxLength: 80 })}
              type="file"
              className="file-input file-input-bordered w-full  "
            />
          </div>

          <div className=" w-75  ml-4 mt-4">
            <label className="label">
              <span className="label-text">ShopLogo*</span>
            </label>
            <input
              type="text"
              placeholder="ShopLogo"
              {...register("shoplogo", {
                required: true,
                maxLength: 405,
              })}
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="flex">
          <div className=" w-full ml-4">
            <label className="label">
              <span className="label-text">Coupons Code</span>
            </label>
            <input
              type="text"
              placeholder="Coupons Code"
              {...register("couponsCode", {
                required: true,
                maxLength: 15,
              })}
              className="input input-bordered w-full "
            />
          </div>

          <div className=" w-full  ml-4">
            <label className="label">
              <span className="label-text">Discount</span>
            </label>
            <input
              type="text"
              placeholder="Discount"
              {...register("couponsDiscount", {
                required: true,
                maxLength: 15,
              })}
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control mr-3 ml-4">
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

        <div className=" w-full">
          <label className="label">
            <span className="label-text">Product Details*</span>
          </label>
          <textarea
            className="w-75 textarea textarea-bordered h-36"
            placeholder="Product Details"
            {...register("details", {
              // required: true,
              maxLength: 600,
            })}
          ></textarea>
        </div>

        <button className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-3 mb-5">
          Add Item
        </button>

        {/* <input className="btn btn-sm mt-4" type="submit" value="Add Item" /> */}
      </form>
    </div>
  );
};

export default CreateBuild;
