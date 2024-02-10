import "./Navber2.css";
import { Link, useLocation } from "react-router-dom";
import mice from "../../../assets/image/mice.png";
import keyboard from "../../../assets/image/keyboard.png";
import headphone from "../../../assets/image/headphone.png";
import casingCooler from "../../../assets/image/casingCooler.png";
import monitor from "../../../assets/image/monitor.png";
import Ups from "../../../assets/image/Ups.png";
import { Accordion, AccordionItem } from "react-bootstrap";
import AccordionButton from "react-bootstrap/AccordionButton";
import { useEffect, useRef, useState } from "react";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import ConstructionIcon from "@mui/icons-material/Construction";
import DevicesTwoToneIcon from "@mui/icons-material/DevicesTwoTone";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import MemorySharpIcon from "@mui/icons-material/MemorySharp";
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
    <div>
      <ul className="nav__categories info">
        {/* <li>
          <Link><ConstructionIcon/>Builder</Link>
          
        </li> */}
        <li>
          <Accordion
            activeKey={activeKey}
            onSelect={handleAccordionToggle}
            ref={accordionRef}
          >
            <AccordionItem eventKey="1">
              <AccordionButton className="accordion-header">
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
                            src="https://cdna.pcpartpicker.com/static/forever/img/nav-cpucooler-2023.png"
                            alt=""
                          />{" "}
                        </Link>{" "}
                        CPU Coolers
                      </li>
                      <li>
                        {" "}
                        <Link
                          to="product/motherboard"
                          onClick={handleLinkClick}
                        >
                          <img
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
                            src="https://cdna.pcpartpicker.com/static/forever/img/nav-ssd-2023.png"
                            alt=""
                          />{" "}
                        </Link>{" "}
                        Storage
                      </li>
                      <li>
                        {" "}
                        <Link onClick={handleLinkClick}>
                          <img
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
                            src="https://cdna.pcpartpicker.com/static/forever/img/nav-case-2023.png"
                            alt=""
                          />{" "}
                        </Link>{" "}
                        Cases
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="Peripherals text-center;">
                      {/* <li>Peripherals</li> */}
                      <li>
                        <Link to="product/monitor" onClick={handleLinkClick}>
                          <img style={{ height: 190 }} src={monitor} alt="" />{" "}
                          Monitor
                        </Link>
                      </li>
                      <li>
                        <Link onClick={handleLinkClick}>
                          <img
                            style={{ height: 180 }}
                            src={casingCooler}
                            alt=""
                          />{" "}
                          Casing Cooler
                        </Link>
                      </li>
                      <li>
                        <Link onClick={handleLinkClick}>
                          <img style={{ height: 250 }} src={keyboard} alt="" />{" "}
                          Keyboard
                        </Link>
                      </li>
                      <li>
                        <Link onClick={handleLinkClick}>
                          <img style={{ height: 190 }} src={mice} alt="" /> Mice
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <img style={{ height: 200 }} src={headphone} alt="" />{" "}
                          Headphone
                        </Link>
                      </li>
                      <li>
                        <Link onClick={handleLinkClick}>
                          <img style={{ height: 140 }} src={Ups} alt="" /> UPS
                        </Link>
                      </li>
                      <li className="mt-3 ml-5 mr-5 bg-green-500">
                        {" "}
                        <Link>
                          <ConstructionIcon />
                          Builder{" "}
                        </Link>{" "}
                      </li>{" "}
                      <li className="mt-3  bg-green-500">
                        <DescriptionTwoToneIcon />
                        Guides{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </li>

        {/* <li><DescriptionTwoToneIcon/>Guides</li>
        <li><DevicesTwoToneIcon/>Completed Builds</li>
        <li><MemorySharpIcon />Completed Builds</li> */}
      </ul>
    </div>
  );
};

export default Navber2;
