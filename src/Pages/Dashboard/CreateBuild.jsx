import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const image_hosting_token = import.meta.env.VITE_Image_hosting_Token;
const CreateBuild = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.img[0]);
    console.log(data);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgeResponse) => {
        if (imgeResponse.success) {
          const imgURL = imgeResponse.data.display_url;

          const {
            cpuName,
            cpuImg,
            cpuModel,
            cpuPrice,

            cpuCoolerName,
            cpuCoolerImg,
            cpuCoolerModel,
            cpuCoolerPrice,

            mbName,
            mbImg,
            mbModel,
            mbPrice,

            memoryName,
            memoryImg,
            memoryModel,
            memoryPrice,


            monitorName,
            monitorImg,
            monitorModel,
            monitorPrice,

            storageName,
            storageImg,
            storageModel,
            storagePrice,

            gpuName,
            gpuImg,
            gpuModel,
            gpuPrice,

            caseName,
            caseImg,
            caseModel,
            casePrice,

            psuName,
            psuImg,
            psuModel,
            psuPrice,

            buildName,
            details,
          } = data;

          const newItem = {
            cpuName,
            cpuImg,
            cpuModel,
            cpuPrice: parseInt(cpuPrice) || 0,

            cpuCoolerName,
            cpuCoolerImg,
            cpuCoolerModel,
            cpuCoolerPrice: parseInt(cpuCoolerPrice) || 0,

            mbName,
            mbImg,
            mbModel,
            mbPrice: parseInt(mbPrice) || 0,

            memoryName,
            memoryImg,
            memoryModel,
            memoryPrice: parseInt(memoryPrice) || 0,


            monitorName,
            monitorImg,
            monitorModel,
            monitorPrice: parseInt(monitorPrice) || 0,

            storageName,
            storageImg,
            storageModel,
            storagePrice: parseInt(storagePrice) || 0,

            gpuName,
            gpuImg,
            gpuModel,
            gpuPrice: parseInt(gpuPrice) || 0,

            caseName,
            caseImg,
            caseModel,
            casePrice: parseInt(casePrice) || 0,

            psuName,
            psuImg,
            psuModel,
            psuPrice: parseInt(psuPrice) || 0,

            img: imgURL,
            buildName,

            details,

            totalPrice:
              cpuPrice +
              cpuCoolerPrice +
              mbPrice +
              memoryPrice +
              storagePrice +
              gpuPrice +
              casePrice +
              psuPrice,
          };

          console.log(newItem.totalPrice);
          axiosSecure.post("/createBuild", newItem).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data?.insertedId) {
              // reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Menu item saved",
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              console.log("sorry");
            }
          });
        }
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto mt-5 px-10 bg-[#B8DFD8]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SectionTitle
          subHeading="What's new"
          heading="Create complete build"
        ></SectionTitle>

        <h3 className="italic text-center font-bold text-2xl text-blue-700">
          Cpu
        </h3>
        <div className="flex my-4">
          <div className="w-full mb-4">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              placeholder="name"
              {...register("cpuName", {
                // required: true,
                maxLength:  500,
              })}
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
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-50  ml-4">
            <label className="label">
              <span className="label-text">Model*</span>
            </label>
            <input
              type="text"
              placeholder="model"
              {...register("cpuModel", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-80  ml-4">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              placeholder="price"
              {...register("cpuPrice", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <h3 className="italic text-center font-bold text-2xl text-green-700">
          Cpu Cooler
        </h3>
        <div className="flex my-4">
          <div className="w-full mb-4">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              placeholder="name"
              {...register("cpuCoolerName", {
                // required: true,
                maxLength:  500,
              })}
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
              {...register("cpuCoolerImage", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-50  ml-4">
            <label className="label">
              <span className="label-text">Model*</span>
            </label>
            <input
              type="text"
              placeholder="model"
              {...register("cpuCoolerModel", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-80  ml-4">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              placeholder="price"
              {...register("cpuCoolerPrice", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <h3 className="italic text-center font-bold text-2xl text-fuchsia-700">
          Motherboard
        </h3>
        <div className="flex my-4">
          <div className="w-full mb-4">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              placeholder="name"
              {...register("mbName", {
                // required: true,
                maxLength:  500,
              })}
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
              {...register("mbImg", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-50  ml-4">
            <label className="label">
              <span className="label-text">Model*</span>
            </label>
            <input
              type="text"
              placeholder="model"
              {...register("mbModel", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-80  ml-4">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              placeholder="price"
              {...register("mbPrice", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <h3 className="italic text-center font-bold text-2xl text-pink-800">
          Memory
        </h3>
        <div className="flex my-4">
          <div className="w-full mb-4">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              placeholder="name"
              {...register("memoryName", {
                // required: true,
                maxLength:  500,
              })}
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
              {...register("memoryImg", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-50  ml-4">
            <label className="label">
              <span className="label-text">Model*</span>
            </label>
            <input
              type="text"
              placeholder="model"
              {...register("memoryModel", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-80  ml-4">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              placeholder="price"
              {...register("memoryPrice", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <h3 className="italic text-center font-bold text-2xl text-pink-800">
          Monitor
        </h3>
        <div className="flex my-4">
          <div className="w-full mb-4">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              placeholder="name"
              {...register("monitorName", {
                // required: true,
                maxLength:  500,
              })}
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
              {...register("monitorImg", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-50  ml-4">
            <label className="label">
              <span className="label-text">Model*</span>
            </label>
            <input
              type="text"
              placeholder="model"
              {...register("monitorModel", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-80  ml-4">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              placeholder="price"
              {...register("monitorPrice", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <h3 className="italic text-center font-bold text-2xl text-orange-700">
          Storage
        </h3>
        <div className="flex my-4">
          <div className="w-full mb-4">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              placeholder="name"
              {...register("storageName", {
                // required: true,
                maxLength:  500,
              })}
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
              {...register("storageImg", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-50  ml-4">
            <label className="label">
              <span className="label-text">Model*</span>
            </label>
            <input
              type="text"
              placeholder="model"
              {...register("storageModel", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-80  ml-4">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              placeholder="price"
              {...register("storagePrice", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <h3 className="italic text-center font-bold text-2xl text-blue-700">
          Gpu
        </h3>
        <div className="flex my-4">
          <div className="w-full mb-4">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              placeholder="name"
              {...register("gpuName", {
                // required: true,
                maxLength:  500,
              })}
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
              {...register("gpuImg", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-50  ml-4">
            <label className="label">
              <span className="label-text">Model*</span>
            </label>
            <input
              type="text"
              placeholder="model"
              {...register("gpuModel", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-80  ml-4">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              placeholder="price"
              {...register("gpuPrice", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <h3 className="italic text-center font-bold text-2xl text-teal-600">
          Case
        </h3>
        <div className="flex my-4">
          <div className="w-full mb-4">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              placeholder="name"
              {...register("caseName", {
                //  required: true,
                maxLength:  500,
              })}
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
              {...register("caseImg", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-50  ml-4">
            <label className="label">
              <span className="label-text">Model*</span>
            </label>
            <input
              type="text"
              placeholder="model"
              {...register("caseModel", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-80  ml-4">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              placeholder="price"
              {...register("casePrice", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <h3 className="italic text-center font-bold text-2xl text-lime-500">
          Power Supply
        </h3>
        <div className="flex my-4">
          <div className="w-full mb-4">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              placeholder="name"
              {...register("psuName", {
                // required: true,
                maxLength:  500,
              })}
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
              {...register("psuImg", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-50  ml-4">
            <label className="label">
              <span className="label-text">Model*</span>
            </label>
            <input
              type="text"
              placeholder="model"
              {...register("psuModel", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className=" w-80  ml-4">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              placeholder="price"
              {...register("psuPrice", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="flex my-4">
          <div className="w-75 mr-4">
            <label className="label">
              <span className="label-text">Build Image*</span>
            </label>

            <input
              {...register("img", {
                // required: true,
                maxLength:  500,
              })}
              type="file"
              className="file-input file-input-bordered w-full  "
            />
          </div>

          <div className="w-50 ">
            <label className="label">
              <span className="label-text">Build Name*</span>
            </label>
            <input
              type="text"
              placeholder="Build Name"
              {...register("buildName", {
                // required: true,
                maxLength:  500,
              })}
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className=" w-full">
          <label className="label">
            <span className="label-text">Build Details</span>
          </label>
          <textarea
            className="w-75 textarea textarea-bordered h-36"
            placeholder="Build Details"
            {...register("details", {
              // required: true,
              maxLength:  5000,
            })}
          ></textarea>
        </div>

        <button
          className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-3 mb-5"
          style={{ textTransform: "capitalize" }}
        >
          Create Build
        </button>
      </form>
    </div>
  );
};

export default CreateBuild;
