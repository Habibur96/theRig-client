import { Link, useParams } from "react-router-dom";
import cpu from "../../../assets/icon/cpu.jpg";
import cpuCooler from "../../../assets/icon/cpuCooler.jpg";
import Motherboard from "../../../assets/icon/motherboard.jpg";
import ram from "../../../assets/icon/Ram.jpg";
import storage from "../../../assets/icon/storage.jpg";
import gpu from "../../../assets/icon/gpu.jpg";
import psu from "../../../assets/icon/powerSupply.jpg";
import casing from "../../../assets/icon/cassing.jpg";
import monitor from "../../../assets/icon/monitor.jpg";
import casingCooler from "../../../assets/icon/casing-cooler.jpg";
import keyboard from "../../../assets/icon/keyboard.jpg";
import mouse from "../../../assets/icon/mouse.jpg";
import antiVirus from "../../../assets/icon/anti-virus.jpg";
import headphone from "../../../assets/icon/headphone.jpg";
import ups from "../../../assets/icon/ups.jpg";
import ClearIcon from "@mui/icons-material/Clear";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { useEffect, useState } from "react";
import UsepcbuilderCart from "../../../Hooks/UsepcbuilderCart";

const Pcbuild = () => {
  const { _id } = useParams();

  const [pcbuilderCart] = UsepcbuilderCart();
  console.log(pcbuilderCart);
  const [replaceCpu, setReplaceCpu] = useState(false);
  const [replaceMotherboard, setReplaceMotherboard] = useState(false);
  const [replaceMonitor, setReplaceMonitor] = useState(false);
  const [replaceMemory, setReplaceMemory] = useState(false);

  const [selectCpu, setSelectCpu] = useState([]);
  const [selectMotherboard, setSelectMotherboard] = useState([]);
  const [selectMonitor, setSelectMonitor] = useState([]);
  const [selectMemory, setSelectMemory] = useState([]);
  console.log({ _id });

  useEffect(() => {
    const data = pcbuilderCart.filter((item) => item.cartItemId === _id);
    console.log(data);
    const mappeData = data.map((item) => {
      console.log({ item });
      if (item.category === "cpu") {
        console.log("cpu");
        setSelectCpu(item);
        setReplaceCpu(true);
      }

      if (item.category === "motherboard") {
        console.log(item.img);
        setSelectMotherboard(item);
        setReplaceMotherboard(true);
      }
      if (item.category === "monitor") {
        console.log(item.img);
        setSelectMonitor(item);
        setReplaceMonitor(true);
      }
      if (item.category === "memory") {
        console.log(item.img);
        setSelectMemory(item);
        setReplaceMemory(true);
      }
      return item;
    });

    // if (data.length > 0) {
    //   const firstItem = data[0];
    //   console.log({ firstItem });

    //   if (firstItem.category === "cpu") {
    //     console.log("cpu");
    //     setSelectCpu(data);
    //     setReplaceCpu(true);
    //   }

    //   if (firstItem.category === "motherboard") {
    //     console.log("motherboard");
    //     setSelectMotherboard(data);
    //     setReplaceMotherboard(true);
    //   }
    // }
  }, [_id, pcbuilderCart]);

  return (
    <div className="max-w-screen-xl mx-auto mt-20 pl-40">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            {/* <th>Name</th> */}
            {/* <th>Job</th> */}
          </tr>
         
          <tr>
            {/* <th>Core Components</th> */}
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {replaceCpu ? (
            <tr>
              <td>
                <div className="flex items-center space-x-10">
                  <div className="avatar">
                    <div className="w-12 h-12">
                      <img
                        src={selectCpu.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{selectCpu.name}</div>
                  </div>
                </div>
              </td>
              <td> </td>

              <th>
                <div className="flex space-x-6 items-center  ">
                  <div>{selectCpu.price} tk</div>
                  <div className="ml-4">
                    <button type="button" title="Remove">
                      <ClearIcon
                        // onClick={() => handleRemoveReplaceCpu(selectCpu._id)}
                        className="mr-4"
                      ></ClearIcon>
                    </button>

                    <Link to="/cpus">
                      <AutorenewIcon></AutorenewIcon>
                    </Link>

                    {/* <button ></button> */}
                  </div>
                </div>
              </th>
            </tr>
          ) : (
            <tr>
              <td>
                <div className="flex items-center space-x-10">
                  <div className="avatar">
                    <div className="w-12 h-12">
                      <img src={cpu} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">CPU</div>
                  </div>
                </div>
              </td>
              <td></td>
              {/* {show ? <span>Hide Password</span> : <span>Show Password</span>} */}

              <th>
                {/* /routeName/$apiName/$productCategory */}
                <Link to="/cpus">
                  <button className=" btn btn-outline btn-info font-semibold text-lg" style={{textTransform:"capitalize"}}>Choose</button>
                </Link>
              </th>
            </tr>
          )}

          {/* row 2 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img src={cpuCooler} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="text-sm  font-bold">CPU cooler</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info font-semibold text-lg" style={{textTransform:"capitalize"}}>Choose</button>
              </Link>
            </th>
          </tr>
          {/* row 3 */}
          {replaceMotherboard ? (
            <tr>
              <td>
                <div className="flex items-center space-x-10">
                  <div className="avatar">
                    <div className=" w-12 h-12">
                      <img
                        src={selectMotherboard.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold">
                      {selectMotherboard.name}
                    </div>
                  </div>
                </div>
              </td>
              <td></td>
              <th>
                <div className="flex space-x-6 items-center  ">
                  <div>{selectMotherboard.price} tk</div>
                  <div className="ml-4">
                    <button type="button" title="Remove">
                      <ClearIcon
                        // onClick={handleRemoveReplaceMotherboard}
                        className="mr-4"
                      ></ClearIcon>
                    </button>

                    {/* path: "cpu/:pcbuilderProductName/:category", */}
                    <Link to="/motherboards">
                      <AutorenewIcon></AutorenewIcon>
                    </Link>

                    {/* <button ></button> */}
                  </div>
                </div>
              </th>
            </tr>
          ) : (
            <tr>
              <td>
                <div className="flex items-center space-x-10">
                  <div className="avatar">
                    <div className=" w-12 h-12">
                      <img
                        src={Motherboard}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold">Motherboard</div>
                  </div>
                </div>
              </td>
              <td></td>
              <th>
                {/* /routeName/$apiName/$productCategory */}
                <Link to="/motherboards">
                  <button className=" btn btn-outline btn-info font-semibold text-lg"style={{textTransform:"capitalize"}}>Choose</button>
                </Link>
              </th>
            </tr>
          )}
          {/* row 4 */}
          {replaceMemory ? (
            <tr>
              <td>
                <div className="flex items-center space-x-10">
                  <div className="avatar">
                    <div className=" w-12 h-12">
                      <img
                        src={selectMemory.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold">{selectMemory.name}</div>
                  </div>
                </div>
              </td>
              <td></td>
              <th>
                <div className="flex space-x-6 items-center  ">
                  <div>{selectMemory.price} tk</div>
                  <div className="ml-4">
                    <button type="button" title="Remove">
                      <ClearIcon
                        // onClick={handleRemoveReplaceMotherboard}
                        className="mr-4"
                      ></ClearIcon>
                    </button>

                    {/* path: "cpu/:pcbuilderProductName/:category", */}
                    <Link to="/memoryes">
                      <AutorenewIcon></AutorenewIcon>
                    </Link>

                    {/* <button ></button> */}
                  </div>
                </div>
              </th>
            </tr>
          ) : (
            <tr>
              <td>
                <div className="flex items-center space-x-10">
                  <div className="avatar">
                    <div className=" w-12 h-12">
                      <img src={ram} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">RAM</div>
                  </div>
                </div>
              </td>
              <td></td>

              <th>
                <Link to="/memoryes">
                  <button className=" btn btn-outline btn-info font-semibold text-lg"style={{textTransform:"capitalize"}}>Choose</button>
                </Link>
              </th>
            </tr>
          )}
          {/* row 5 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img src={storage} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">Storage</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info font-semibold text-lg"style={{textTransform:"capitalize"}}>Choose</button>
              </Link>
            </th>
          </tr>
          {/* row 6 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img src={gpu} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">Graphics Card</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info font-semibold text-lg"style={{textTransform:"capitalize"}}>Choose</button>
              </Link>
            </th>
          </tr>
          {/* row 7 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img src={psu} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold font-semibold text-lg"style={{textTransform:"capitalize"}}>Power Supply</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info font-semibold text-lg"style={{textTransform:"capitalize"}}>Choose</button>
              </Link>
            </th>
          </tr>
          {/* row 8 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={casing} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">Casing</div>
                </div>
              </div>
            </td>

            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info font-semibold text-lg"style={{textTransform:"capitalize"}}>Choose</button>
              </Link>
            </th>
          </tr>

          <tr>
            <th>
              <div className="">Peripherals & Others</div>
            </th>
          </tr>

          {/* row 9*/}
          {replaceMonitor ? (
            <tr>
              <td>
                <div className="flex items-center space-x-10">
                  <div className="avatar">
                    <div className=" w-12 h-12">
                      <img
                        src={selectMonitor.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold">
                      {selectMonitor.name}
                    </div>
                  </div>
                </div>
              </td>
              <td></td>
              <th>
                <div className="flex space-x-6 items-center  ">
                  <div>{selectMonitor.price} tk</div>
                  <div className="ml-4">
                    <button type="button" title="Remove">
                      <ClearIcon
                        // onClick={handleRemoveReplaceMotherboard}
                        className="mr-4"
                      ></ClearIcon>
                    </button>

                    {/* path: "cpu/:pcbuilderProductName/:category", */}
                    <Link to="/monitors">
                      <AutorenewIcon></AutorenewIcon>
                    </Link>

                    {/* <button ></button> */}
                  </div>
                </div>
              </th>
            </tr>
          ) : (
            <tr>
              <td>
                <div className="flex items-center space-x-10">
                  <div className="avatar">
                    <div className="w-12 h-12">
                      <img src={monitor} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold">Monitor</div>
                  </div>
                </div>
              </td>
              <td></td>

              <th>
                <Link to="/monitors">
                  <button className=" btn btn-outline btn-info font-semibold text-lg"style={{textTransform:"capitalize"}}>Choose</button>
                </Link>
              </th>
            </tr>
          )}

          {/* row 10 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img
                      src={casingCooler}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">Casing Cooler</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info font-semibold text-lg"style={{textTransform:"capitalize"}}>Choose</button>
              </Link>
            </th>
          </tr>
          {/* row 11 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img src={keyboard} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold font-semibold text-lg"style={{textTransform:"capitalize"}}>Keyboard</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info font-semibold text-lg"style={{textTransform:"capitalize"}}>Choose</button>
              </Link>
            </th>
          </tr>
          {/* row 11 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img src={mouse} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">Mouse</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info font-semibold text-lg"style={{textTransform:"capitalize"}}>Choose</button>
              </Link>
            </th>
          </tr>

          {/* row 12 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img src={headphone} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">Headphone</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info font-semibold text-lg"style={{textTransform:"capitalize"}}>Choose</button>
              </Link>
            </th>
          </tr>
          {/* row 14 */}
          <tr>
            <td>
              <div className="flex items-center space-x-10">
                <div className="avatar">
                  <div className=" w-12 h-12">
                    <img src={ups} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">UPS</div>
                </div>
              </div>
            </td>
            <td></td>

            <th>
              <Link>
                <button className=" btn btn-outline btn-info font-semibold text-lg" style={{textTransform:"capitalize"}}>Choose</button>
              </Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Pcbuild;
