import { Col, Container, Row } from "react-bootstrap";
import UseProduct from "../../../Hooks/UseProduct";
import { Link } from "react-router-dom";

const Cpu = () => {
  const { product } = UseProduct();
  // console.log({ product });
  return (
    <Container>
      <Row>
        <Col lg={2}>
          {/* <LeftNav></LeftNav> */}
          <h1>option</h1>
        </Col>

        <Col lg={10}>
          <div className="overflow-x-auto">
            <h3 className="text-2xl font-semibold">
              {product.length} Compatible Products
            </h3>
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
                {product.map((item) => (
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
                          <Link>
                            <div className="font-bold">{item.name}</div>
                          </Link>
                        </div>
                      </div>
                    </td>

                    <td className=" text-center">{item.coreCount}</td>
                    <td className=" text-center">
                      {item.performanceCoreCount}
                    </td>
                    <td className=" text-center">
                      {item.performanceBoostClock}
                    </td>
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
        </Col>
      </Row>
    </Container>
  );
};

export default Cpu;
