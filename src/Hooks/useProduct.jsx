import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Cpu from "../Pages/Home/Pcbuild/Cpu";

const UseProduct = () => {
  // const { pcbuilderProductName, category } = useParams();
  // console.log({ pcbuilderProductName, category });
  
  // const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // fetch(`http://localhost:3000/${pcbuilderProductName}/${category}`, {
    //   method: "GET",
    // })

    fetch(`http://localhost:3000/cpu`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProduct(data);
        // setData(data);
      });
  }, []);

  return [product]
//  (<>{data && data.length > 0 ? <Cpu data={data} /> : <p>Loading...</p>}</>)
};

export default UseProduct;