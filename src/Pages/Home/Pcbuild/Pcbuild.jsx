import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import UseAuth from "../../../Hooks/UseAuth";
import axios from "axios";
import cpu from "../../../assets/icon/cpu.jpg";
import cpuCooler from "../../../assets/icon/cpuCooler.jpg";
import motherboard from "../../../assets/icon/motherboard.jpg";
import memory from "../../../assets/icon/Ram.jpg";
import storage from "../../../assets/icon/storage.jpg";
import gpu from "../../../assets/icon/gpu.jpg";
import psu from "../../../assets/icon/powerSupply.jpg";
import casing from "../../../assets/icon/cassing.jpg";
import monitor from "../../../assets/icon/monitor.jpg";
import casingCooler from "../../../assets/icon/casing-cooler.jpg";
import keyboard from "../../../assets/icon/keyboard.jpg";
import mouse from "../../../assets/icon/mouse.jpg";
import theRig from "../../../assets/logo/theRig.png";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import PrintIcon from "@mui/icons-material/Print";
import CameraIcon from "@mui/icons-material/Camera";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import html2canvas from "html2canvas";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useReactToPrint } from "react-to-print";
const Pcbuild = () => {
  const { user } = UseAuth();
  const userEmail = user?.email;
  const targetRef = useRef();
  const [axiosSecure] = useAxiosSecure();
  // console.log({ userEmail });
  const [savePc, setSavePc] = useState();
  console.log(savePc);
  const [selectedItems, setSelectedItems] = useState({
    cpu: {},
    motherboard: {},
    monitor: {},
    memory: {},
    gpu: {},
  });

  //Saved pc
  const handleSavedPc = () => {
    axiosSecure.post(`/savedPc}`, savePc, { email: userEmail }).then((data) => {
      console.log("after posting new menu item", data.data);
      if (data.data?.modifiedCount > 0) {
        refetch();
      }
    });
  };

  //Make pdf
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  //Take screenshoot
  const handleCapture = () => {
    const images = targetRef.current.querySelectorAll("img");
    const promises = Array.from(images).map(
      (image) =>
        new Promise((resolve) => {
          if (image.complete) {
            resolve(true);
          } else {
            image.addEventListener("load", () => resolve(true));
            image.addEventListener("error", () => resolve(false));
          }
        })
    );

    Promise.all(promises)
      .then((results) => {
        if (results.every((result) => result)) {
          html2canvas(targetRef.current).then(function (canvas) {
            // Get image type from canvas
            const imageType = canvas.toDataURL().split(";")[0].split(":")[1];
            // Replace image type in dataURL
            const dataURL = canvas
              .toDataURL()
              .replace(imageType, "image/octet-stream");

            // Create a link element to trigger download
            const a = document.createElement("a");
            a.href = dataURL;
            a.download = "screenshot." + imageType.split("/")[1]; // Use detected image type for filename extension
            a.click();
          });
        } else {
          console.error(
            "Some images failed to load. Cannot capture screenshot."
          );
        }
      })
      .catch((error) => {
        console.error("Error while capturing screenshot:", error);
      });
  };

  useEffect(() => {
    pcbuilderDataGet();
  }, [userEmail]);

  const pcbuilderDataGet = async () => {
    if (userEmail) {
      const url = `http://localhost:3000/pcbuilderCart/${userEmail}`;
      try {
        const response = await fetch(url);
        const pcbuilderCart = await response.json();
        const { result, pcbuilderId: pcbuilderIds } = pcbuilderCart;

        const pcbuilderCartItemIds = new Set(
          pcbuilderIds?.map((item) => item.cartItemId)
        );

        const data = result?.filter((item) =>
          pcbuilderCartItemIds.has(item.cartItemId)
        );
        setSavePc(data);

        console.log(data);
        const updatedSelectedItems = {
          cpu: {},
          motherboard: {},
          monitor: {},
          memory: {},
          gpu: {},
        };

        data?.forEach((item) => {
          switch (item.category) {
            case "cpu":
              updatedSelectedItems.cpu = item;
              break;
            case "motherboard":
              updatedSelectedItems.motherboard = item;
              break;
            case "monitor":
              updatedSelectedItems.monitor = item;
              break;
            case "memory":
              updatedSelectedItems.memory = item;
              break;
            default:
              break;
          }
        });

        setSelectedItems(updatedSelectedItems);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteSelectBuildProduct = async (cartItemId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/pcbuilderCart/${cartItemId}`
      );
      if (response.status === 200) {
        pcbuilderDataGet();
      }
    } catch (error) {
      // console.error(Request failed: ${error.message});
    }
  };

  const renderTableRow = (
    itemName,
    imgSrc,
    name,
    price,
    category,
    cartItemId = ""
  ) => {
    return (
      <tr>
        <td>
          <div className="flex items-center space-x-10 ml-32 ">
            <div className="avatar">
              <div className="h-14 w-14">
                <img src={imgSrc} alt={name} />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td></td>

        <th>
          {(price && category && (
            <div className="flex space-x-6 items-center">
              <div>{price} tk</div>
              <div className="ml-4">
                <button
                  onClick={() => deleteSelectBuildProduct(cartItemId)}
                  type="button"
                  className="btn btn-info text-blsck rounded mx-3 px-2 "
                  title="Remove"
                >
                  <ClearIcon></ClearIcon>
                </button>
                <Link to={`/${category}`}>
                  <AutorenewIcon></AutorenewIcon>
                </Link>
              </div>
            </div>
          )) || (
            <Link to={`/${category}`}>
              <button
                className="btn btn-outline btn-info font-semibold text-lg"
                style={{ textTransform: "capitalize" }}
              >
                Choose
              </button>
            </Link>
          )}
        </th>
      </tr>
    );
  };

  return (
    <div ref={componentRef}>
      <div ref={targetRef} className="max-w-screen-lg mx-auto mt-10">
        <div className="h-24 bg-[#C3C0F1] flex items-center  pl-28">
          <img
            className="h-full pr-24"
            src={theRig}
            style={{ height: 150 }}
            alt=""
          />
          <div className="flex gap-3 pl-72">
            <button className="flex flex-col items-center">
              <ShoppingCartCheckoutIcon style={{ fontSize: "1.95rem" }} />
              <span>Add to Cart</span>
            </button>
            <div className="border-l border-gray-800 h-10"></div>
            <button
              onClick={handleSavedPc}
              className="flex flex-col items-center"
            >
              <ImportantDevicesIcon style={{ fontSize: "1.95rem" }} />
              <span>Saved</span>
            </button>
            <div className="border-l border-gray-800 h-10"></div>
            <button
              onClick={handlePrint}
              className="flex flex-col items-center"
            >
              <PrintIcon style={{ fontSize: "1.95rem" }} />
              <span>Print</span>
            </button>
            <div className="border-l border-gray-800 h-10"></div>
            <button
              onClick={handleCapture}
              className="flex flex-col items-center"
            >
              <CameraIcon style={{ fontSize: "1.95rem" }} />
              <span>Screenshot</span>
            </button>
            <div className="border-l border-gray-800 h-10"></div>
          </div>
        </div>

        <table className="table border border-2  shadow-lg ">
          <tbody>
            <div className="mt-2 ml-28">
              <tr>
                <th>Core Components</th>
              </tr>
            </div>
            {renderTableRow(
              "Cpu",
              selectedItems?.cpu?.img || cpu,
              selectedItems?.cpu?.name || "Cpu",
              selectedItems?.cpu?.price || "",
              "cpus",
              selectedItems?.cpu?.cartItemId
            )}
            {renderTableRow("CPU Cooler", cpuCooler, "Cpu Cooler", 0, "")}
            {renderTableRow(
              "Motherboard",
              selectedItems?.motherboard?.img || motherboard,
              selectedItems?.motherboard?.name || "Motherboard",
              selectedItems?.motherboard?.price || "",
              "motherboards",
              selectedItems?.motherboard?.cartItemId
            )}
            {renderTableRow(
              "Memory",
              selectedItems?.memory?.img || memory,
              selectedItems?.memory?.name || "Ram",
              selectedItems?.memory?.price || "",
              "memoryes",
              selectedItems?.memory?.cartItemId
            )}
            {renderTableRow("Storage", storage, "Storage", 0, "")}
            {renderTableRow("Graphics Card", gpu, "Graphics Card", 0, "")}
            {renderTableRow("Power Supply", psu, "Power Supply", 0, "")}
            {renderTableRow("Casing", casing, "Casing", 0, "")}
            <div className="ml-28">
              <tr>
                <th>Peripherals & Others</th>
              </tr>
            </div>

            {renderTableRow(
              "Monitor",
              selectedItems?.monitor?.img || monitor,
              selectedItems?.monitor?.name || "Monitor",
              selectedItems?.monitor?.price || "",
              "monitors",
              selectedItems?.monitor?.cartItemId
            )}
            {renderTableRow(
              "Casing Cooler",
              casingCooler,
              "Casing Cooler",
              0,
              ""
            )}
            {renderTableRow("Keyboard", keyboard, "Keyboard", 0, "")}
            {renderTableRow("Mouse", mouse, "Mouse", 0, "")}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pcbuild;
