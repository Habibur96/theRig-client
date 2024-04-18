import { Link, useLocation } from "react-router-dom";
import UseProduct from "../../../Hooks/UseProduct";
// import Pages from "./Pages";
import ScrollToTop from "react-scroll-to-top";
import PsuFilter from "../Filter/PsuFilter";

const Psu = () => {
  const [product] = UseProduct();

  const location = useLocation();
  const psu = product.filter((item) => item.category === "psu");
  const Component = {
    Psu: "psu",
  };

  return (
    <div className="flex column-gap-5">
      <div className=" flex-[1]">
        <PsuFilter></PsuFilter>
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
            {psu.length} Compatible Products
          </h3>
          <table className="table ">
            {/* head */}

            <thead>
              <tr>
                <th></th>
                <th>Name</th>

                <th>Certification</th>

                <th>Brand</th>
                <th>Model</th>
                <th>Wattage</th>
                <th>Warranty</th>

                <th>
                  <div className="pl-4">Price</div>
                </th>
              </tr>
            </thead>

            <tbody>
              {psu.map((item) => (
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

                  <td className=" text-center">{item.Certification}</td>
                  <td className=" text-center">{item.Brand}</td>
                  <td className=" text-center">{item.Model}</td>

                  <td className=" text-center">{item.wattage}</td>
                  <td className=" text-center">{item.warranty}</td>

                  <td className="text-right">{item.price}tk</td>
                  <td>
                    <Link
                      to={`/availableProduct/${Component.Psu}/${item.model}`}
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

export default Psu;
