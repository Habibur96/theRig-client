import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
const image_hosting_token = import.meta.env.VITE_Image_hosting_Token;
const CreateCpu = () => {
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
          const { name, price, Details, category } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            img: imgURL,
            category,
            Details,
          };

          console.log(newItem);
          axiosSecure.post("/cpu", newItem).then((data) => {
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
    <div className="max-w-screen-xl mx-auto mt-5 px-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SectionTitle
          subHeading="What's new"
          heading="Add an item"
        ></SectionTitle>
        <div className="w-full mb-4">
          <label className="label">
            <span className="label-text">Recipe name*</span>
          </label>
          <input
            type="text"
            placeholder="name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex my-4">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue="Pick One"
              className="select select-bordered"
              {...register("category", { required: true, maxLength: 120 })}
            >
              <option disabled>Category</option>
              <option>cpu</option>
            </select>
          </div>
          <div className=" w-full  ml-4">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true, maxLength: 80 })}
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
            {...register("Details", { required: true, maxLength: 80 })}
          ></textarea>
        </div>
        <div className="w-full my-4">
          <label className="label">
            <span className="label-text">Item image*</span>
          </label>
          <input
            {...register("img", { required: true, maxLength: 80 })}
            type="file"
            className="file-input file-input-bordered w-full  "
          />
        </div>
        <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default CreateCpu;
