import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AvailableProduct = () => {
  const { collectionName, name } = useParams();
  const [component, setComponent] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/cpu/${collectionName}/${name}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setComponent(data);
        console.log(data);
      });
  }, []);


 

  return (
    <div>
      <table className="table">
        {/* head */}

        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            {/* <th>Core Count</th>
                  <th>Performance Core Clock</th>
                  <th>Performance Boost Clock</th>
                  <th>TDP</th>
                  <th>Integrated Graphics</th> */}
            {/* <th>
                    <div className="pl-4">Warranty</div>
                  </th> */}

            <th>
              <div className="pl-4">Price</div>
            </th>
          </tr>
        </thead>

        <tbody>
          {component.map((item) => (
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
                      <img src={item.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <td>
                      <div className="font-bold">{item.name}</div>
                    </td>
                  </div>
                </div>
              </td>

              {/* <td className=" text-center">{item.coreCount}</td>
                    <td className=" text-center">
                      {item.performanceCoreCount}
                    </td> */}
              {/* <td className=" text-center">
                      {item.performanceBoostClock}
                    </td> */}
              {/* <td className=" text-center">{item.TDP}</td>
                    <td className=" text-center">{item.integratedGraphics}</td>
                    <td className=" text-center">{item.warranty}</td> */}

              <td className="text-right">{item.price}tk</td>
              <td>
                {/* <button  className="btn btn-sm btn-success ">Add</button> */}

                <Link
                  to={`/replaceProduct/${item._id}`}
                  className="btn btn-sm btn-success "
                >
                  Add
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AvailableProduct;
