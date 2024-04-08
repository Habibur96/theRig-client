import { useLocation, useNavigate, useParams } from "react-router-dom";
import useCompleteBuild from "../../../Hooks/useCompleteBuild";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Controller, useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useReview from "../../../Hooks/useReview";
import UseAuth from "../../../Hooks/UseAuth";
import UseCart from "../../../Hooks/UseCart";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ScrollToTop from "react-scroll-to-top";

const GuidesDetails = () => {
  const { buildName } = useParams();
  console.log(buildName);
  const { user } = UseAuth();
  const [cart, refetch] = UseCart();
  const location = useLocation();
  const navigate = useNavigate();
  const [review, reviewRefetch] = useReview();
  const [axiosSecure] = useAxiosSecure();
  const [buildProducts, combuildRefetch] = useCompleteBuild();
  // const [] = 
  console.log(buildProducts);
  const product = buildProducts.filter((item) => item.buildName === buildName);
  
  const currentBuildReview = review.filter(
    (item) => item.buildName === buildName
  );

  // const totalPrice =
  //   product[0]?.cpuPrice +
  //   product[0]?.cpuCoolerPrice +
  //   product[0]?.mbPrice +
  //   product[0]?.memoryPrice +
  //   product[0]?.monitorPrice +
  //   product[0]?.storagePrice +
  //   product[0]?.gpuPrice +
  //   product[0]?.casePrice +
  //   product[0]?.psuPrice;

  // console.log(totalPrice);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      rating: 0,
    },
  });

  const handleCart = async (buildName) => {
    if (user && user.email) {
      const isItemInCart = cart.filter(
        (cartitem) => cartitem.productName === buildName
      );

      let quantity;
      if (isItemInCart[0] && isItemInCart[0].quantity >= 1) {
        navigate("/dashboard/mycart");
        return;
      } else {
        quantity = 1;
      }
      const cartItem = {
        email: user?.email,
        cartItemId: product[0]?._id,
        productName: product[0]?.buildName,
        productImg: product[0]?.img,
        price: product[0]?.totalPrice,
        shopName:product[0]?.shopName,
        quantity: quantity,
      };

      const res = await axiosSecure.post("cart", cartItem);
      console.log(res.data);
      if (res.data?.insertedId) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product added to the cart",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        title: "Please login to add product",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location }, replace: true });
        }
      });
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    const review = {
      buildName: buildName,
      name: data.name,
      rating: data.rating,
      message: data.message,
      date: new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }),
    };
    alert(JSON.stringify(data, undefined, 2));
    reset();

    const res = await axiosSecure.post("/review", review);
    console.log(res.data);

    if (res.data?.insertedId) {
      reviewRefetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Review added",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const CustomPrevArrow = (prop) => {
    const { onClick } = prop;
    return (
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white px-2 mx-10  py-2 rounded-l-md"
        onClick={onClick}
      >
        <KeyboardDoubleArrowLeftIcon />
      </button>
    );
  };
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white px-2 px-2 mx-3 py-2 rounded-r-md"
        onClick={onClick}
      >
        <KeyboardDoubleArrowRightIcon />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div>
      <div className="bg-[#ffffff]">
        <div className="text-center font-bold bg-[#545578] h-40 mb-4">
          <h3 className="text-[#bfbfbf] text-lg pt-4">GUIDE</h3>
          <div className="">
            <p className="text-[#ffffff] text-2xl mt-3">
              {product[0]?.buildName}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto slider-container">
        <ScrollToTop
          smooth
          top="20"
          color="#00b16a"
          width="40"
          height="30"
          style={{ backgroundColor: "#545578" }}
        />
        <Slider {...settings}>
          <div className="">
            <div className="flex flex justify-center mt-4">
              <img
                className="pl-9"
                src={product[0]?.cpuImg}
                alt=""
                style={{ height: 150 }}
              />

              <img
                className="ml-16"
                src={product[0]?.cpuCoolerImg}
                alt=""
                style={{ height: 150 }}
              />

              <img
                className="ml-16"
                src={product[0]?.mbImg}
                alt=""
                style={{ height: 150 }}
              />

              <img
                className="ml-16"
                src={product[0]?.memoryImg}
                alt=""
                style={{ height: 150 }}
              />

              <img
                className="ml-20"
                src={product[0]?.monitorImg}
                alt=""
                style={{ height: 150 }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <img
                src={product[0]?.storageImg}
                alt=""
                style={{ height: 150 }}
              />

              <img
                className="pl-9 ml-16"
                src={product[0]?.gpuImg}
                alt=""
                style={{ height: 150 }}
              />

              <img
                className="ml-16"
                src={product[0]?.caseImg}
                alt=""
                style={{ height: 150 }}
              />

              <img
                className="ml-16"
                src={product[0]?.psuImg}
                alt=""
                style={{ height: 150 }}
              />
            </div>
          </div>
        </Slider>
      </div>
      <div className="bg-[#f4f4f3]">
        <div className="max-w-screen-xl mx-auto mt-12 pt-10">
          <div className="flex gap-2 ml-2 mt-10">
            <a
              className="btn inline-block rounded border border-indigo-600 bg-[#ef4a23]  px-10 py-3 text-md font-medium text-white  focus:outline-none focus:ring active:text-indigo-500"
              style={{ textTransform: "capitalize" }}
              href="#Specification"
            >
              Specification
            </a>

            <a
              className="btn inline-block rounded border border-indigo-600 px-10 py-3 text-md font-medium text-indigo-600 hover:bg-[#ef4a23] hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
              style={{ textTransform: "capitalize" }}
              href="#Description"
            >
              Description
            </a>
            <a
              className="btn inline-block rounded border border-indigo-600 px-10 py-3 text-md font-medium text-indigo-600 hover:bg-[#ef4a23] hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
              style={{ textTransform: "capitalize" }}
              href="#Question"
            >
              Questions
            </a>
            <a
              className="btn inline-block rounded border border-indigo-600 px-10 py-3 text-md font-medium text-indigo-600 hover:bg-[#ef4a23] hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
              style={{ textTransform: "capitalize" }}
              href="#Reviews"
            >
              Reviews ({currentBuildReview?.length || 0})
            </a>
          </div>
          <h1
            className="mt-5 ml-2 text-xl font-bold text-blue-800"
            id="Specification"
          >
            Specification
          </h1>
          <table className="min-w-full divide-gray-200 bg-white text-sm font-medium ml-2 mt-4">
            <thead className="ltr:text-left rtl:text-right bg-[#00b16a] h-12">
              <tr>
                <th className="whitespace-nowrap px-8 py-2 font-medium text-gray-900">
                  Image
                </th>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  Product Name
                </th>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  Model
                </th>

                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  Price
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-300">
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  <img
                    src={product[0]?.cpuImg}
                    alt="Product Image"
                    className="h-18 w-16"
                  />
                </td>

                <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  {product[0]?.cpuName}
                </td>
                <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  {product[0]?.cpuModel}
                </td>

                <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                  {product[0]?.cpuPrice}
                </td>
              </tr>

              {/* =========================== */}
              {product[0]?.cpuCoolerName ? (
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    <img
                      src={product[0]?.cpuCoolerImg}
                      alt="Product Image"
                      className="h-18 w-16"
                    />
                  </td>

                  <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                    {product[0]?.cpuCoolerName}
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                    {product[0]?.cpuCoolerModel}
                  </td>

                  <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                    {product[0]?.cpuCoolerPrice}
                  </td>
                </tr>
              ) : null}

              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  <img
                    src={product[0]?.mbImg}
                    alt="Product Image"
                    className="h-18 w-16"
                  />
                </td>

                <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  {product[0]?.mbName}
                </td>
                <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  {product[0]?.mbModel}
                </td>

                <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                  {product[0]?.mbPrice}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  <img
                    src={product[0]?.memoryImg}
                    alt="Product Image"
                    className="h-18 w-16"
                  />
                </td>

                <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  {product[0]?.memoryName}
                </td>
                <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  {product[0]?.memoryModel}
                </td>

                <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                  {product[0]?.memoryPrice}
                </td>
              </tr>

              {product[0]?.monitorName ? (
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    <img
                      src={product[0]?.monitorImg}
                      alt="Product Image"
                      className="h-18 w-16"
                    />
                  </td>

                  <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                    {product[0]?.monitorName}
                  </td>

                  <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                    {product[0]?.monitorModel}
                  </td>

                  <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                    {product[0]?.monitorPrice}
                  </td>
                </tr>
              ) : null}

              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  <img
                    src={product[0]?.storageImg}
                    alt="Product Image"
                    className="h-18 w-16"
                  />
                </td>

                <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  {product[0]?.storageName}
                </td>
                <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  {product[0]?.storageModel}
                </td>

                <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                  {product[0]?.storagePrice}
                </td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  <img
                    src={product[0]?.gpuImg}
                    alt="Product Image"
                    className="h-18 w-16"
                  />
                </td>

                <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  {product[0]?.gpuName}
                </td>
                <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  {product[0]?.gpuModel}
                </td>

                <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                  {product[0]?.gpuPrice}
                </td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  <img
                    src={product[0]?.caseImg}
                    alt="Product Image"
                    className="h-18 w-16"
                  />
                </td>

                <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  {product[0]?.caseName}
                </td>
                <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  {product[0]?.caseModel}
                </td>

                <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                  {product[0]?.casePrice}
                </td>
              </tr>

              {product[0]?.psuName ? (
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    <img
                      src={product[0]?.psuImg}
                      alt="Product Image"
                      className="h-18 w-16"
                    />
                  </td>

                  <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                    {product[0]?.psuName}
                  </td>

                  <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                    {product[0]?.psuModel}
                  </td>

                  <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                    {product[0]?.psuPrice}
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
          <h1 className="text-end mr-2 mt-3 font-bold text-lg">
            Total : {product[0]?.totalPrice}tk
          </h1>

          <div className="flex gap-3">
            <button
              onClick={() => handleCart(product[0]?.buildName)}
              type="submit"
              className="btn btn-md btn btn-outline bg-[#00b16a] border-b-4 mt-3 mb-5"
              style={{ textTransform: "capitalize" }}
            >
              <ShoppingCartTwoToneIcon /> Add to cart
            </button>
            {/* <button
              onClick={handleCart}
              type="submit"
              className="btn btn-md btn btn-outline bg-[#00b16a] border-b-4 mt-3 mb-5"
              style={{ textTransform: "capitalize" }}
            >
          Save PC
            </button> */}
          </div>

          <div className="max-w-screen-lg" id="Description">
            <h1 className="mt-5 ml-2 text-xl font-bold text-blue-800">
              Description
            </h1>
            <h1 className="mt-5 ml-2 text-xl font-bold">
              {product[0]?.buildName}
            </h1>
            <p className="mt-3 ml-2 text-md font-semibold text-justify">
              {product[0]?.details}
            </p>
          </div>

          <h1
            className="mt-5 ml-2 text-xl font-bold text-blue-800"
            id="Reviews"
          >
            Customer Reviews
          </h1>
          {currentBuildReview.map((comment) => (
            <div key={comment._id} className="ml-2 mt-4 bg-white p-3">
              <h1 className="text-xl font-semibold mb-2">{comment?.message}</h1>

              <h1 className="flex gap-2 ">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={comment?.rating}
                  readOnly
                />

                <p>{comment.name}</p>
                <p>{comment.date}</p>
              </h1>
            </div>
          ))}

          <h1 className="mt-5 ml-2 text-xl font-bold text-blue-800">
            Your Review
          </h1>
          <Form
            className="max-w-screen-sm ml-2 mt-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>
                Name <span className="text-red-600 font-extrabold">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="Name"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </Form.Group>

            <div className="mt-3">
              <label className="sr-only" htmlFor="message">
                Message
              </label>

              <textarea
                className="w-full textarea textarea-bordered rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Review"
                rows="8"
                id="message"
                {...register("message", { required: true })}
              ></textarea>

              {errors.message && (
                <span className="text-red-600 mt-2">Message is required</span>
              )}
            </div>

            <div>
              <div id="rating_label" className="mt-2 ml-1">
                Rating <span className="text-red-600 font-extrabold">*</span>
              </div>
              <Controller
                control={control}
                name="rating"
                rules={{
                  validate: (rating) => rating > 0,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={value}
                    isRequired
                    onChange={onChange}
                    visibleLabelId="rating_label"
                    onBlur={onBlur}
                  />
                )}
              />
              {errors.rating && (
                <div className="text-red-600">Rating is required</div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-md btn btn-outline bg-slate-100 border-b-4 mt-3 mb-5"
              style={{ textTransform: "capitalize" }}
            >
              Submit review
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default GuidesDetails;
