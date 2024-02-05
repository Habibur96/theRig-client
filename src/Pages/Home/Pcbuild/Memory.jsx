import { Link, useLocation } from "react-router-dom";
import UseProduct from "../../../Hooks/UseProduct";
import Pages from "./Pages";


const Memory = () => {
    const [product] = UseProduct();

    const location = useLocation();
    const memory = product.filter((item) => item.category === "memory");
    const Component = {
        Memory: "memory",
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
              {memory.length} Compatible Products
            </h3>
            <table className="table ">
              {/* head */}
  
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
  
                  <th>Speed</th>
  
                  <th>Modules</th>
                  <th>CAS Latency</th>
                  <th>TDP</th>
                  
  
                 
                  <th>
                    <div className="pl-4">Price</div>
                  </th>
                </tr>
              </thead>
  
              <tbody>
                {memory.map((item) => (
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
                            to={`/availableProduct/${Component.Memory}/${item.name}`}
                            state={{ from: location }}
                            replace
                          >
                            <div className="font-bold">{item.name}</div>
                          </Link>
                        </div>
                      </div>
                    </td>
  
                    <td className=" text-center">{item.Speed}</td>
                    <td className=" text-center">{item.Memory}</td>
                    <td className=" text-center">{item.CASLatency}</td>
                  
                    <td className=" text-center">{item.TDP}</td>
  
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

export default Memory;