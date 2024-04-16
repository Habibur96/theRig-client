import { Link, useLocation } from "react-router-dom";
import UseProduct from "../../../Hooks/UseProduct";
import Pages from "./Pages";
import ScrollToTop from "react-scroll-to-top";
import MonitorFilter from "../Filter/MonitorFilter";
import GpuFilter from "../Filter/GpuFilter";

const Gpu = () => {
  const [product] = UseProduct();

  const location = useLocation();
  const gpu = product.filter((item) => item.category === "gpu");
  const Component = {
    Gpu: "gpu",
  };

  return (
    <div className="flex column-gap-5">
      <div className=" flex-[1]">
        <GpuFilter></GpuFilter>
      </div>

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
            {gpu.length} Compatible Products
          </h3>
          <table className="table ">
            {/* head */}

            <thead>
              <tr>
                <th></th>
                <th>Name</th>

                <th>Boost Clock</th>

                <th>Recommended PSU</th>
                <th>Chipset</th>
                <th>Memory</th>
                <th>Memorytype</th>
                <th>Warranty</th>

                <th>
                  <div className="pl-4">Price</div>
                </th>
              </tr>
            </thead>

            <tbody>
              {gpu.map((item) => (
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

                  <td className=" text-center">{item.boostClock}</td>
                  <td className=" text-center">{item.recommendedPSU}</td>
                  <td className=" text-center">{item.chipset}</td>
                  <td className=" text-center">{item.Memory}</td>

                  <td className=" text-center">{item.Memorytype}</td>
                  <td className=" text-center">{item.warranty}</td>

                  <td className="text-right">{item.price}tk</td>
                  <td>
                    <Link
                      to={`/availableProduct/${Component.Gpu}/${item.model}`}
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

        <Pages></Pages>
      </div>
    </div>
  );
};

export default Gpu;
