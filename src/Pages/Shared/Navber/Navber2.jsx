import "./Navber2.css";
import { Link, useLocation } from "react-router-dom";
import mice from "../../../assets/image/mice.png";
import keyboard from "../../../assets/image/keyboard.png";
import headphone from "../../../assets/image/headphone.png";
import casingCooler from "../../../assets/image/casingCooler.png";
import Ups from "../../../assets/image/Ups.png";
import { Accordion, AccordionItem } from "react-bootstrap";
import AccordionButton from "react-bootstrap/AccordionButton";
import { useEffect, useRef, useState } from "react";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import ConstructionIcon from "@mui/icons-material/Construction";
import DevicesTwoToneIcon from "@mui/icons-material/DevicesTwoTone";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import MemorySharpIcon from "@mui/icons-material/MemorySharp";
import MemoryIcon from "@mui/icons-material/Memory";
import monitor from "../../../assets/image/monitor.png";
const Navber2 = () => {
  const [activeKey, setActiveKey] = useState(null);
  const accordionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target)
      ) {
        // Close the accordion when clicking outside
        setActiveKey(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleAccordionToggle = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  const handleLinkClick = () => {
    // Close the accordion when a link is clicked
    setActiveKey(null);
  };

  return (
    <div className="flex gap-10 text-gray-300 font-semibold bg-[#191b2a]">
     

      <Accordion
        activeKey={activeKey}
        onSelect={handleAccordionToggle}
        ref={accordionRef}
      >
        <AccordionItem eventKey="">
          <AccordionButton className="accordion-header text-xl font-semibold h-15 text-gray-300  gap-2">
            <MemoryIcon />
            Products
          </AccordionButton>
          <AccordionBody className="custom-dropdown-menu">
            <div className="browseProducts__wrapper ml-3 mr-5 text-center">
              <div>
                <ul className="browseProducts">
                  <li>
                    {" "}
                    <Link to="product/cpu" onClick={handleLinkClick}>
                      <img
                        className="shadow-lg rounded m-2 border-2 border-transparent hover:border-[#EDA920] hover:bg-[#EDA920]"
                        src="https://cdna.pcpartpicker.com/static/forever/img/nav-cpu-2023.png"
                        alt=""
                      />{" "}
                      Cpus{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link onClick={handleLinkClick}>
                      <img
                        className="shadow-lg rounded m-2 border-2 border-transparent hover:border-[#EDA920] hover:bg-[#EDA920]"
                        src="https://cdna.pcpartpicker.com/static/forever/img/nav-cpucooler-2023.png"
                        alt=""
                      />{" "}
                    </Link>{" "}
                    CPU Coolers
                  </li>
                  <li>
                    {" "}
                    <Link to="product/motherboard" onClick={handleLinkClick}>
                      <img
                        className="shadow-lg rounded m-2 border-2 border-transparent hover:border-[#EDA920] hover:bg-[#EDA920]"
                        src="https://cdna.pcpartpicker.com/static/forever/img/nav-motherboard-2023.png"
                        alt=""
                      />{" "}
                    </Link>{" "}
                    Motherboards
                  </li>
                  <li>
                    {" "}
                    <Link to="product/memory" onClick={handleLinkClick}>
                      <img
                        className="shadow-lg rounded m-2 border-2 border-transparent hover:border-[#EDA920] hover:bg-[#EDA920]"
                        src="https://cdna.pcpartpicker.com/static/forever/img/nav-memory-2023.png"
                        alt=""
                      />{" "}
                    </Link>{" "}
                    Memory
                  </li>
                  <li>
                    {" "}
                    <Link onClick={handleLinkClick}>
                      <img
                        className="shadow-lg rounded m-2 border-2 border-transparent hover:border-[#EDA920] hover:bg-[#EDA920]"
                        style={{ height: 200 }}
                        src={keyboard}
                        alt=""
                      />{" "}
                    </Link>{" "}
                    Keyboard
                  </li>
                  <li>
                    {" "}
                    <Link onClick={handleLinkClick}>
                      <img
                        className="shadow-lg rounded m-2 border-2 border-transparent hover:border-[#EDA920] hover:bg-[#EDA920]"
                        style={{ height: 200 }}
                        src={mice}
                        alt=""
                      />{" "}
                    </Link>{" "}
                    Mice
                  </li>
                  <li>
                    {" "}
                    <Link>
                      <img
                        className="shadow-lg rounded m-2 border-2 border-transparent hover:border-[#EDA920] hover:bg-[#EDA920]"
                        src="https://cdna.pcpartpicker.com/static/forever/img/nav-ssd-2023.png"
                        alt=""
                      />{" "}
                    </Link>{" "}
                    Storage
                  </li>
                  <li>
                    {" "}
                    <Link>
                      <img
                        className="shadow-lg rounded m-2 border-2 border-transparent hover:border-[#EDA920] hover:bg-[#EDA920]"
                        src="https://cdna.pcpartpicker.com/static/forever/img/nav-videocard-2023.png"
                        alt=""
                      />{" "}
                    </Link>{" "}
                    Video Card
                  </li>
                  <li>
                    {" "}
                    <Link onClick={handleLinkClick}>
                      <img
                        className="shadow-lg rounded m-2 border-2 border-transparent hover:border-[#EDA920] hover:bg-[#EDA920]"
                        src="https://cdna.pcpartpicker.com/static/forever/img/nav-powersupply-2023.png"
                        alt=""
                      />{" "}
                    </Link>{" "}
                    Power Supplies
                  </li>
                  <li>
                    {" "}
                    <Link>
                      <img
                        className="shadow-lg rounded m-2 border-2 border-transparent hover:border-[#EDA920] hover:bg-[#EDA920]"
                        src="https://cdna.pcpartpicker.com/static/forever/img/nav-case-2023.png"
                        alt=""
                      />{" "}
                    </Link>{" "}
                    Cases
                  </li>

                  <li>
                    {" "}
                    <Link>
                      <img
                        className="shadow-lg rounded m-2 border-2 border-transparent hover:border-[#EDA920] hover:bg-[#EDA920]"
                        style={{ height: 200 }}
                        src={casingCooler}
                        alt=""
                      />{" "}
                    </Link>{" "}
                    Case Cooler
                  </li>
                  <li>
                    {" "}
                    <Link to="product/monitor" onClick={handleLinkClick}>
                      <img
                        className="shadow-lg rounded m-2 border-2 border-transparent hover:border-[#EDA920] hover:bg-[#EDA920]"
                        style={{ height: 200 }}
                        src={monitor}
                        alt=""
                      />{" "}
                    </Link>{" "}
                    Monitor
                  </li>
                </ul>
              </div>
              <div>
                <ul className="">
                  {/*                     
                      <li>
                        <Link to="product/monitor" onClick={handleLinkClick}>
                          <img className="mb-5" style={{ height: 200 }} src={monitor} alt="" />{" "}
                      
                        </Link>
                      </li>

                      <ul className="flex">
                        <li>
                          <Link onClick={handleLinkClick}>
                            <img style={{ height: 152 }} src={mice} alt="" />{" "}
                            Mice
                          </Link>
                        </li>{" "}
                        <li>
                          <Link onClick={handleLinkClick}>
                            <img style={{ height: 152 }} src={mice} alt="" />{" "}
                            Mice
                          </Link>
                        </li>
                      </ul> */}

                  {/* <li className="mt-3 ml-5 mr-5 bg-green-500">
                        {" "}
                        <Link>
                          <ConstructionIcon />
                          Builder{" "}
                        </Link>{" "}
                      </li>{" "}
                      <li className="mt-3  bg-green-500">
                        <Link to="guides">
                          <DescriptionTwoToneIcon />
                          Guides{" "}
                        </Link>
                      </li> */}
                </ul>
              </div>
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
     
      {/* <Link to="pcbuild" className="ml-2 mt-3 flex gap-2">
        <ConstructionIcon />
        Builder
      </Link> */}
      <Link to="guides" className="mt-3 mr-10 flex gap-1">
        <DescriptionTwoToneIcon />
        Build Guides
      </Link>
      {/* <div className="border-l border-gray-300 h-15"></div> */}
    </div>
  );
};

export default Navber2;
{
  /* <li><DescriptionTwoToneIcon/>Guides</li>
        <li><DevicesTwoToneIcon/>Completed Builds</li>
        <li><MemorySharpIcon />Completed Builds</li> */
}
