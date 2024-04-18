import { Link, useLocation } from "react-router-dom";
import UseProduct from "../../../Hooks/UseProduct";
import Pages from "./Pages";
import ScrollToTop from "react-scroll-to-top";
import CaseCoolerFilter from "../Filter/CaseCoolerFilter";

const CaseCooler = () => {
  const [product] = UseProduct();

  const location = useLocation();
  const casingCooler = product.filter(
    (item) => item.category === "casingCooler"
  );
  const Component = {
    CasingCooler: "casingCooler",
  };

  return (
    <div className="flex column-gap-5">
      <div className=" flex-[1]">
        <CaseCoolerFilter></CaseCoolerFilter>
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
            {casingCooler.length} Compatible Products
          </h3>
          <table className="table ">
            {/* head */}

            <thead>
              <tr>
                <th></th>
                <th>Name</th>

                <th>Fan Speed</th>

                <th>Brand</th>
                <th>Model</th>
                <th>Noise</th>
                <th>Size</th>
                <th>Warranty</th>

                <th>
                  <div className="pl-4">Price</div>
                </th>
              </tr>
            </thead>

            <tbody>
              {casingCooler.map((item) => (
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

                  <td className=" text-center">{item.fanSpeed}</td>
                  <td className=" text-center">{item.model}</td>
                  <td className=" text-center">{item.noise}</td>

                  <td className=" text-center">{item.size}</td>
                  <td className=" text-center">{item.warranty}</td>

                  <td className="text-right">{item.price}tk</td>
                  <td>
                    <Link
                      to={`/availableProduct/${Component.CasingCooler}/${item.model}`}
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

export default CaseCooler;
