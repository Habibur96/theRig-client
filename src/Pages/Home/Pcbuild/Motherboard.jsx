import { Link, useLocation } from "react-router-dom";
import UseProduct from "../../../Hooks/UseProduct";
import MotherboardFilter from "../Filter/MotherboardFilter";

const Motherboard = () => {
  const [product] = UseProduct();
 const location = useLocation()
  const Motherboard = product.filter((item) => item.category === "motherboard");
  console.log(Motherboard)
  const Component = {
    motherboard: "motherboard",
  };

  return (
    <div className="flex column-gap-5">
      <div className="flex-[1] ">
       <MotherboardFilter></MotherboardFilter>
      </div>

      <div className="flex-[4] mr-5 ">
        <div className="overflow-x-auto ">
          <h3 className="text-2xl font-semibold">
            {Motherboard.length} Compatible Products
          </h3>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Socket/CPU</th>

                <th>Form Factor</th>

                <th>Memory Max</th>
                <th>Memory Slots</th>
                <th>TDP</th>

                <th>Warranty</th>

                <th>
                  <div className="pl-3">Price</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {Motherboard.map((item) => (
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

                  <td className=" text-center">{item.socket}</td>
                  <td className=" text-center">{item.formFactor}</td>
                  <td className=" text-center">{item.memoryMax}</td>
                  <td className=" text-center">{item.memorySlots}</td>
                  <td className=" text-center">{item.TDP}</td>
                  <td className=" text-center">{item.warranty}</td>

                  <td className="text-right">{item.price}tk</td>
                  <td>
                    <Link
                     to={`/availableProduct/${Component.motherboard}/${item.model} ` }
                     state={{ from: location }} replace
                    className="btn btn-sm btn-success "style={{textTransform:"capitalize"}}>Add</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Motherboard;
