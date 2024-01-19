import { useContext, useEffect, useState } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const AvailableProduct = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  //console.log({location})
  //console.log({ user });
  const { collectionName, name } = useParams();
  const [component, setComponent] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/cpu/${collectionName}/${name}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setComponent(data);
        // console.log(data);
      });
  }, []);

  const pcbuilderCartGet = (item) => {
    console.log({ item });
    if (user && user.email) {
      const cartItem = {
        email: user?.email,
cartItemId: item?._id,
        category: item?.category,
        name: item?.name,
       img: item?.img,
        price: item?.price,
      };
      console.log({ cartItem, item });
      // console.log({ _id });

      fetch("http://localhost:3000/pcbuilderCart", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => console.log(data))
        .catch((error) =>
          console.error("There was a problem with the fetch operation:", error)
        );
    }
  };

  return (
    <Container className="mt-5">
      {component.map((item) => (
        <Row key={item._id}>
          <Col lg={2}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title className="text-blue-700">{item.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>

              <ListGroup className="list-group-flush">
                {user ? (
                  <Link>+Save to wish list</Link>
                ) : (
                  <Link to="/login" state={{ from: location }} replace>
                    <ListGroup.Item className="text-center font-semibold text-green-700">
                      Login to save wish list
                    </ListGroup.Item>
                  </Link>
                )}
              </ListGroup>

              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={10}>
            <div>
              <table className="table ml-28 ">
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
                  <tr>
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
                        onClick={() => pcbuilderCartGet(item)}
                         to={`/pcbuild/${item._id}`}
                        className="btn btn-sm btn-success "
                      >
                        Add
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default AvailableProduct;
