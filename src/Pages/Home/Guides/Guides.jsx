import useCompleteBuild from "../../../Hooks/useCompleteBuild";

import Card from "react-bootstrap/Card";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { useState } from "react";
import { Link } from "react-router-dom";

const Guides = () => {
  const [buildProducts] = useCompleteBuild();
  const [isHovered, setIsHovered] = useState(null);
  console.log(buildProducts);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };
  const totalPrice =
    buildProducts[0]?.cpuPrice +
    buildProducts[0]?.storagePrice +
    buildProducts[0]?.memoryPrice +
    buildProducts[0]?.gpuPrice +
    buildProducts[0]?.casePrice +
    buildProducts[0]?.psuPrice;

  console.log(totalPrice);
  console.log(buildProducts[0]?.totalPrice);
  const sum = buildProducts[0]?.totalPrice;
  console.log(parseFloat(sum));
  console.log(buildProducts.length);
  return (
    <div className="bg-[#f4f4f3]">
      <h1 className="text-[#ffffff] text-3xl text-center font-bold bg-[#545578] h-28 pt-4">
        Build Guides
      </h1>
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-4 gap-x-28 gap-y-8 mt-10 ">
        {buildProducts.map((item, index) => (
          <div
            key={item._id}
            item={item}
            className="card w-80 rounded-1 "
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <figure className="bg-slate-800 relative">
              <img
                className="transition-transform duration-300 transform hover:scale-150"
                src={item.img}
                alt=""
              />
              {isHovered === index && (
                <div className="absolute top-0 right-0 flex flex-col items-end gap-3 px-2 pt-4 transition-all duration-500 ease">
                  {/* Your icon elements, you can replace the icons with whatever you prefer */}
                  <span className="text-white cursor-pointer border-black bg-[#527853]  border rounded-5 p-1">
                    <VisibilityTwoToneIcon />
                  </span>
                  <span className="text-white cursor-pointer border-black rounded-5 bg-[#B31312] p-1">
                    <FavoriteTwoToneIcon />
                  </span>
                  <span className="text-white cursor-pointer border-black border rounded-5 p-1 bg-[#6420AA]">
                    <ShoppingCartTwoToneIcon />
                  </span>
                </div>
              )}
            </figure>
            {/* <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
              {item?.totalPrice} tk
            </p> */}
            <div className="card-body flex flex-col items-center">
              <Link to={`/guideDetails/${item._id}`}>
                <h4 className="card-title text-lg text-blue-600 italic">
                  {item.buildName}
                </h4>
              </Link>
              {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            </div>
            <Card.Footer>
              <small className="text-muted"> {item?.totalPrice} tk</small>
            </Card.Footer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guides;
