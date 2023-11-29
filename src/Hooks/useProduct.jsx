import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UseProduct = () => {
  const { pcbuilderProductName, category } = useParams();
  console.log({ pcbuilderProductName, category });

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/${pcbuilderProductName}/${category}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, [pcbuilderProductName, category]);

  return { product };
};

export default UseProduct;
