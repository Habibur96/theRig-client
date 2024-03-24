import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useCompleteBuild from "../../../Hooks/useCompleteBuild";

const EditReadyBuild = () => {
  const { id } = useParams();
  const [buildProducts, combuildRefetch] = useCompleteBuild();
  console.log(buildProducts);
  console.log(id);
  const [axiosSecure] = useAxiosSecure();
  const image_hosting_token = import.meta.env.VITE_Image_hosting_Token;
  const { register, handleSubmit, reset } = useForm();

  const build = buildProducts.filter((item) => item._id === id);
  console.log(build);

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

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
     totalPrice,
     img,
    details,
  } = build[0] || {};
 
console.log(build[0]?.img)
  const onSubmit = (data) => {
    const formData = new FormData();
    if (data.img) {
      formData.append("image", data.img[0]);
    }
    const totalPrice =
      (parseInt(data?.cpuPrice) || 0) +
      (parseInt(data?.cpuCoolerPrice) || 0) +
      (parseInt(data?.mbPrice) || 0) +
      (parseInt(data?.memoryPrice) || 0) +
      (parseInt(data?.monitorPrice) || 0) +
      (parseInt(data?.storagePrice) || 0) +
      (parseInt(data?.gpuPrice) || 0) +
      (parseInt(data?.casePrice) || 0) +
      (parseInt(data?.psuPrice) || 0);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgeResponse) => {
        // let imgURL = null;
        if (imgeResponse.success) {
        const  imgURL = imgeResponse.data.display_url;
        }

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
          buildQty
          
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
          buildQty: parseInt(buildQty),
          totalPrice: totalPrice,
          details,
        };

        console.log(newItem);
        axiosSecure.put(`/createBuild/${id}`, newItem).then((data) => {
          console.log("after posting new menu item", data.data);
          if (data.data?.modifiedCount > 0) {
            combuildRefetch();
            //   reset();

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Edit done",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            console.log("sorry");
          }
        });
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto mt-5 px-10 bg-[#DCDCDC]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SectionTitle heading="Edit complete build"></SectionTitle>

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
              defaultValue={cpuName}
              {...register("cpuName", {
                // required: true,
                maxLength: 500,
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
              defaultValue={cpuImg}
              {...register("cpuImg", {
                // required: true,
                maxLength: 500,
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
              defaultValue={cpuModel}
              {...register("cpuModel", {
                // required: true,
                maxLength: 500,
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
              defaultValue={cpuPrice}
              {...register("cpuPrice", {
                // required: true,
                maxLength: 500,
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
              defaultValue={cpuCoolerName}
              {...register("cpuCoolerName", {
                // required: true,
                maxLength: 500,
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
              defaultValue={cpuCoolerImg}
              {...register("cpuCoolerImg", {
                // required: true,
                maxLength: 500,
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
              defaultValue={cpuCoolerModel}
              {...register("cpuCoolerModel", {
                // required: true,
                maxLength: 500,
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
              defaultValue={cpuCoolerPrice}
              {...register("cpuCoolerPrice", {
                // required: true,
                maxLength: 500,
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
              defaultValue={mbName}
              {...register("mbName", {
                // required: true,
                maxLength: 500,
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
              defaultValue={mbImg}
              {...register("mbImg", {
                // required: true,
                maxLength: 500,
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
              defaultValue={mbModel}
              {...register("mbModel", {
                // required: true,
                maxLength: 500,
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
              defaultValue={mbPrice}
              {...register("mbPrice", {
                // required: true,
                maxLength: 500,
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
              defaultValue={memoryName}
              {...register("memoryName", {
                // required: true,
                maxLength: 500,
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
              defaultValue={memoryImg}
              {...register("memoryImg", {
                // required: true,
                maxLength: 500,
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
              defaultValue={memoryModel}
              {...register("memoryModel", {
                // required: true,
                maxLength: 500,
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
              defaultValue={memoryPrice}
              {...register("memoryPrice", {
                // required: true,
                maxLength: 500,
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
              defaultValue={monitorName}
              {...register("monitorName", {
                // required: true,
                maxLength: 500,
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
              defaultValue={monitorImg}
              {...register("monitorImg", {
                // required: true,
                maxLength: 500,
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
              defaultValue={monitorModel}
              {...register("monitorModel", {
                // required: true,
                maxLength: 500,
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
              defaultValue={monitorPrice}
              {...register("monitorPrice", {
                // required: true,
                maxLength: 500,
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
              defaultValue={storageName}
              {...register("storageName", {
                // required: true,
                maxLength: 500,
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
              defaultValue={storageImg}
              {...register("storageImg", {
                // required: true,
                maxLength: 500,
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
              defaultValue={storageModel}
              {...register("storageModel", {
                // required: true,
                maxLength: 500,
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
              defaultValue={storagePrice}
              {...register("storagePrice", {
                // required: true,
                maxLength: 500,
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
              defaultValue={gpuName}
              {...register("gpuName", {
                // required: true,
                maxLength: 500,
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
              defaultValue={gpuImg}
              {...register("gpuImg", {
                // required: true,
                maxLength: 500,
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
              defaultValue={gpuModel}
              {...register("gpuModel", {
                // required: true,
                maxLength: 500,
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
              defaultValue={gpuPrice}
              {...register("gpuPrice", {
                // required: true,
                maxLength: 500,
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
              defaultValue={caseName}
              {...register("caseName", {
                //  required: true,
                maxLength: 500,
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
              defaultValue={caseImg}
              {...register("caseImg", {
                // required: true,
                maxLength: 500,
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
              defaultValue={caseModel}
              {...register("caseModel", {
                // required: true,
                maxLength: 500,
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
              defaultValue={casePrice}
              {...register("casePrice", {
                // required: true,
                maxLength: 500,
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
              defaultValue={psuName}
              {...register("psuName", {
                // required: true,
                maxLength: 500,
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
              defaultValue={psuImg}
              {...register("psuImg", {
                // required: true,
                maxLength: 500,
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
              defaultValue={psuModel}
              {...register("psuModel", {
                // required: true,
                maxLength: 500,
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
              defaultValue={psuPrice}
              {...register("psuPrice", {
                // required: true,
                maxLength: 500,
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
            //  defaultValue={img}
              {...register("img", {
                // required: true,
                maxLength: 500,
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
              defaultValue={buildName}
              {...register("buildName", {
                // required: true,
                maxLength: 500,
              })}
              className="input input-bordered w-full "
            />
          </div>
        </div>
        {/* <div className=" w-80  ml-4">
          <label className="label">
            <span className="label-text">Qty*</span>
          </label>
          <input
            type="number"
            placeholder="qty"
            defaultValue={buildQty}
            {...register("buildQty", {
              // required: true,
              maxLength: 500,
            })}
            className="input input-bordered w-full "
          />
        </div> */}

        <div className=" w-full">
          <label className="label">
            <span className="label-text">Build Details</span>
          </label>
          <textarea
            className="w-75 textarea textarea-bordered h-36"
            placeholder="Build Details"
            defaultValue={details}
            {...register("details", {
              // required: true,F
              maxLength: 5000,
            })}
          ></textarea>
        </div>

        <button
          className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-3 mb-5"
          style={{ textTransform: "capitalize" }}
        >
          Edit Build
        </button>
      </form>
    </div>
  );
};

export default EditReadyBuild;
