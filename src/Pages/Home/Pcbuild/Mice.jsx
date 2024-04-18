import { Link, useLocation } from "react-router-dom";
import UseProduct from "../../../Hooks/UseProduct";
// import Pages from "./Pages";
import ScrollToTop from "react-scroll-to-top";
import MiceFilter from "../Filter/MiceFilter";

const Mice = () => {
  const [product] = UseProduct();

  const location = useLocation();
  const mice = product.filter((item) => item.category === "mice");
  const Component = {
    Mice: "mice",
  };

  return (
    <div className="flex column-gap-5">
      <div className=" flex-[1]">
        <MiceFilter></MiceFilter>
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
            {mice.length} Compatible Products
          </h3>
          <table className="table ">
            {/* head */}

            <thead>
              <tr>
                <th></th>
                <th>Name</th>

                <th>Interface</th>

                <th>Dpi</th>
                <th>Brand</th>
                <th>Model</th>

                <th>
                  <div className="pl-4">Price</div>
                </th>
              </tr>
            </thead>

            <tbody>
              {mice.map((item) => (
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

                  <td className=" text-center">{item.interface}</td>
                  <td className=" text-center">{item.dpi}</td>
                  <td className=" text-center">{item.Brand}</td>

                  <td className=" text-center">{item.model}</td>

                  <td className="text-right">{item.price}tk</td>
                  <td>
                    <Link
                      to={`/availableProduct/${Component.Mice}/${item.model}`}
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

export default Mice;
