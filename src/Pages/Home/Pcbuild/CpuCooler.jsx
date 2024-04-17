import { Link, useLocation } from "react-router-dom";
import UseProduct from "../../../Hooks/UseProduct";
// import Pages from "./Pages";
import ScrollToTop from "react-scroll-to-top";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../Shared/LoadingSpinner";
// import MonitorFilter from "../Filter/MonitorFilter";

const CpuCooler = () => {
  const [product] = UseProduct();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const cpuCooler = product.filter((item) => item.category === "cpuCooler");
  const Component = {
    CpuCooler: "cpuCooler",
  };
  useEffect(() => {
    // Simulating loading completion after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Clean up timer on component unmount or when loading state changes
    return () => clearTimeout(timer);
  }, []); // Run effect only once on component mount
  return (
    <>
      {loading ? (
        <div className="justify-center items-center h-screen relative -top-40">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="flex column-gap-5">
          <div className=" flex-[1]">
            {/* <MonitorFilter></MonitorFilter> */}
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
                {cpuCooler.length} Compatible Products
              </h3>
              <table className="table ">
                {/* head */}

                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>

                    <th>Cooler Type</th>

                    <th>Socket</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>warranty</th>

                    <th>
                      <div className="pl-4">Price</div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {cpuCooler.map((item) => (
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

                      <td className=" text-center">{item.coolerType}</td>
                      <td className=" text-center">{item.socket}</td>
                      <td className=" text-center">{item.Brand}</td>

                      <td className=" text-center">{item.model}</td>

                      <td className="text-right">{item.warranty}</td>
                      <td className="text-right">{item.price}tk</td>
                      <td>
                        <Link
                          to={`/availableProduct/${Component.CpuCooler}/${item.model}`}
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
      )}
    </>
  );
};

export default CpuCooler;
