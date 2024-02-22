import UseProduct from "../../../Hooks/UseProduct";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const ManageProducts = () => {
  const [product] = UseProduct();
  console.log(product);
  return (
    <div className="border-gray-200 mt-2">
      <div className="overflow-x-auto ">
        <table className="min-w-full divide-gray-200 bg-white text-sm ">
            <thead className="h-28 bg-body-secondary">
                <h1>dfdfdfd</h1>
            </thead>
          <thead className="ltr:text-left rtl:text-right bg-[#65B741] h-14">
            <tr>
              <th className="pl-3 px-4">#</th>
              <th className="whitespace-nowrap px-2 py-2  text-gray-900">
                Product
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-gray-900r">
                Category
              </th>
              <th className="whitespace-nowrap px-2 py-2 text-gray-900 text-center">
                Brand
              </th>
              <th className="whitespace-nowrap px-2 py-2  text-gray-900 ">
                Qty
              </th>

              <th className="whitespace-nowrap px-2 py-2 text-gray-900">
                Price
              </th>
              <th className="whitespace-nowrap px-4 py-2  text-gray-900">
                Action
              </th>
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
                <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                  {item.Brand}
                </td>
                <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                  {/* {item.Qty} */}10
                </td>

                <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                  {item.price}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <div className="flex gap-2">
                    <ModeEditOutlinedIcon /> Edit
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
    </div>
  );
};

export default ManageProducts;
