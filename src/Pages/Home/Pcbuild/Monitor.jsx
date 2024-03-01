import { Link, useLocation } from "react-router-dom";
import UseProduct from "../../../Hooks/UseProduct";
import Pages from "./Pages";
import ScrollToTop from "react-scroll-to-top";
import MonitorFilter from "../Filter/MonitorFilter";

const Monitor = () => {
  const [product] = UseProduct();

  const location = useLocation();
  const monitor = product.filter((item) => item.category === "monitor");
  const Component = {
    Monitor: "monitor",
  };

  return (
    <div className="flex column-gap-5">
      <div className=" flex-[1]">
        <MonitorFilter></MonitorFilter>
      </div>

      <div className="flex-[4] mr-5 ">
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
            {monitor.length} Compatible Products
          </h3>
          <table className="table ">
            {/* head */}

            <thead>
              <tr>
                <th></th>
                <th>Name</th>

                <th>Screen Size</th>

                <th>Resolution</th>
                <th>Refresh Rate</th>
                <th>Panel Type</th>

                <th>
                  <div className="pl-4">Price</div>
                </th>
              </tr>
            </thead>

            <tbody>
              {monitor.map((item) => (
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
                          to={`/availableProduct/${Component.Monitor}/${item.name}`}
                          state={{ from: location }}
                          replace
                        >
                          <div className="font-bold">{item.name}</div>
                        </Link>
                      </div>
                    </div>
                  </td>

                  <td className=" text-center">{item.ScreenSize}</td>
                  <td className=" text-center">{item.Resolution}</td>
                  <td className=" text-center">{item.RefreshRate}</td>

                  <td className=" text-center">{item.Panel}</td>

                  <td className="text-right">{item.price}tk</td>
                  <td>
                    <button className="btn btn-sm btn-success " style={{textTransform:"capitalize"}}>Add</button>
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

export default Monitor;
