import UseProduct from "../../../Hooks/UseProduct";
import Pages from "../Pcbuild/Pages";
import { Link, useLocation } from "react-router-dom";
// import UseProduct from "../../../Hooks/useProduct";

// import { useState } from "react";
// import AvailableProduct from "./AvailableProduct";
// import { useContext } from "react";
// import { AuthContext } from "../../../Provider/AuthProvider";

const Cpu = () => {
  const [product] = UseProduct();

  const location = useLocation();

  // console.log(location)
  const cpu = product.filter((item) => item.category === "cpu");
  // console.log({cpu})
  // const { loading } = useContext(AuthContext);
  // if (loading) {
  //   return <progress className="progress w-56"></progress>;
  // }

  // console.log({ product });

  const Component = {
    CPU: "cpu",
  };

  return (
    <div className="flex column-gap-5">
      <div className=" flex-[1] bg-red-300 ">
        {/* <LeftNav></LeftNav> */}
        <h1 className="text-center">option</h1>
      </div>

      <div className="flex-[4] mr-5 ">
        <div className="overflow-x-auto ">
          <h3 className="text-2xl font-semibold">
            {cpu.length} Compatible Products
          </h3>
          <table className="table ">
            {/* head */}

            <thead>
              <tr>
                <th></th>
                <th>Name</th>

                <th>Core Count</th>

                <th>Performance Core Clock</th>
                <th>Performance Boost Clock</th>
                <th>TDP</th>
                <th>Integrated Graphics</th>

                <th>
                  <div className="pl-4">Warranty</div>
                </th>
                <th>
                  <div className="pl-4">Price</div>
                </th>
              </tr>
            </thead>

            <tbody>
              {cpu.map((item) => (
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
                        {/* <Link to="/login" state={{ from: location }} replace> */}
                        <Link
                          to={`/availableProduct/${Component.CPU}/${item.name}`}
                          state={{ from: location }}
                          replace
                        >
                          <div className="font-bold">{item.name}</div>
                        </Link>
                      </div>
                    </div>
                  </td>

                  <td className=" text-center">{item.coreCount}</td>
                  <td className=" text-center">{item.performanceCoreCount}</td>
                  <td className=" text-center">{item.performanceBoostClock}</td>
                  <td className=" text-center">{item.TDP}</td>
                  <td className=" text-center">{item.integratedGraphics}</td>
                  <td className=" text-center">{item.warranty}</td>

                  <td className="text-right">{item.price}tk</td>
                  <td>
                    <button className="btn btn-sm btn-success ">Add</button>
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

export default Cpu;
