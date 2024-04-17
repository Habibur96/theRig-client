import { Link, useLocation } from "react-router-dom";
import UseProduct from "../../../Hooks/UseProduct";
// import Pages from "./Pages";
import ScrollToTop from "react-scroll-to-top";

const Storage = () => {
  const [product] = UseProduct();

  const location = useLocation();
  const storage = product.filter((item) => item.category === "storage");
  console.log(storage);
  const Component = {
    Storage: "storage",
  };

  return (
    <div className="flex column-gap-5">
      <div className=" flex-[1]">{/* <GpuFilter></GpuFilter> */}</div>

      <div className="flex-[4] mr-5">
        <div className="overflow-x-auto ">
          <ScrollToTop
            smooth
            top="20"
            color="#464EAF"
            width="40"
            height="30"
            style={{ backgroundColor: "#FF8080" }}
          />
          <h3 className="text-2xl font-semibold">
            {storage.length} Compatible Products
          </h3>
          <table className="table ">
            {/* head */}

            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Interface</th>
                <th>Form Factor</th>
                <th>MTBF</th>
                <th>Capacity</th>
                <th>Warranty</th>

                <th>
                  <div className="pl-4">Price</div>
                </th>
              </tr>
            </thead>

            <tbody>
              {storage.map((item) => (
                <tr key={item._id}>
                  <td>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-success"
                      />
                    </label>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className=" w-12 h-12">
                          <img
                            src={item.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                      </div>
                    </div>
                  </td>

                  <td className=" text-start">{item.interface}</td>
                  <td className=" text-start">{item.formFactor}</td>
                  <td className=" text-start">{item.MTBF}</td>
                  <td className=" text-start">{item.capacity}</td>

                  <td className=" text-start">{item.warranty}</td>

                  <td className="text-center">{item.price}tk</td>
                  <td>
                    <Link
                      to={`/availableProduct/${Component.Storage}/${item.model}`}
                      state={{ from: location }}
                      replace
                      className="btn btn-sm btn-success "
                      style={{ textTransform: "capitalize" }}
                    >
                      Add
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <Pages></Pages> */}
      </div>
    </div>
  );
};

export default Storage;
