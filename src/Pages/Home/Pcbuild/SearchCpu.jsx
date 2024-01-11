import { Link } from "react-router-dom";

const SearchCpu = ({ searchedProduct }) => {
    const arrayOfObjects = searchedProduct ? [searchedProduct] : [];

  return (
   
<div>
<table className="table">
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
    {arrayOfObjects.map((product, index) => (
      <tr key={index}>
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
                <img src={product.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <Link
                to=""
              >
                <div className="font-bold">{product.name}</div>
              </Link>
            </div>
          </div>
        </td>

        <td className=" text-center">{product.coreCount}</td>
        <td className=" text-center">{product.performanceCoreCount}</td>
        <td className=" text-center">{product.performanceBoostClock}</td>
        <td className=" text-center">{product.TDP}</td>
        <td className=" text-center">{product.integratedGraphics}</td>
        <td className=" text-center">{product.warranty}</td>

        <td className="text-right">{product.price}tk</td>
        <td>
          <button className="btn btn-sm btn-success ">Add</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
</div>
  );
};

export default SearchCpu;