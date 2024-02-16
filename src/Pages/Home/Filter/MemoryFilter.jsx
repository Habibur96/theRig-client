import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "react-bootstrap/Card";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React from "react";

const MemoryFilter = () => {
  function valuetext(value) {
    return `${value}°C`;
  }

  const minDistance = 10;
  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  return (
    <div>
      <>
        {[""].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "24rem" }}
            className="mb-2 rounded-0"
          >
            <Card.Header className="text-black ">Price Range</Card.Header>
            <Card.Body>
              <Card.Text>
                <Box sx={{ width: 250 }} className="ml-8">
                  <Slider
                    getAriaLabel={() => "Minimum distance"}
                    value={value1}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                  />
                </Box>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <fieldset>
              <legend className="sr-only">Checkboxes</legend>

              <div className="space-y-2 ">
                <label
                  htmlFor="Option1"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-2 rounded border-gray-300 checkbox checkbox-sm"
                      id="Option1"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">Team </strong>
                  </div>
                </label>

                <label
                  htmlFor="Option2"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-2 rounded border-gray-300 checkbox checkbox-sm"
                      id="Option1"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">
                      {" "}
                      Corsair{" "}
                    </strong>
                  </div>
                </label>

                <label
                  htmlFor="Option3"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-2 rounded border-gray-300 checkbox checkbox-sm"
                      id="Option1"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900"> PNY </strong>
                  </div>
                </label>
                <label
                  htmlFor="Option3"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-2 rounded border-gray-300 checkbox checkbox-sm"
                      id="Option1"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">Adata</strong>
                  </div>
                </label>
              </div>
            </fieldset>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* ================Capacity================= */}
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Capacity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <fieldset>
              <legend className="sr-only">Checkboxes</legend>

              <div className="space-y-2 ">
                <label
                  htmlFor="Option1"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-2 rounded border-gray-300 checkbox checkbox-sm"
                      id="Option1"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">4GB</strong>
                  </div>
                </label>

                <label
                  htmlFor="Option2"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-2 rounded border-gray-300 checkbox checkbox-sm"
                      id="Option1"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">4GB</strong>
                  </div>
                </label>
                <label
                  htmlFor="Option2"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-2 rounded border-gray-300 checkbox checkbox-sm"
                      id="Option1"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">16GB</strong>
                  </div>
                </label>
              </div>
            </fieldset>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* ================Memory Type ================= */}
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Memory Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <fieldset>
              <legend className="sr-only">Checkboxes</legend>

              <div className="space-y-2 ">
                <label
                  htmlFor="Option1"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-2 rounded border-gray-300 checkbox checkbox-sm"
                      id="Option1"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">
                      {" "}
                      DDR3{" "}
                    </strong>
                  </div>
                </label>

                <label
                  htmlFor="Option2"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-2 rounded border-gray-300 checkbox checkbox-sm"
                      id="Option1"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">
                      {" "}
                      DDR4{" "}
                    </strong>
                  </div>
                </label>
                <label
                  htmlFor="Option2"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-2 rounded border-gray-300 checkbox checkbox-sm"
                      id="Option1"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">
                      {" "}
                      DDR5{" "}
                    </strong>
                  </div>
                </label>
              </div>
            </fieldset>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* ================Bus Speed================= */}
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Bus Speed</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <fieldset>
              <legend className="sr-only">Checkboxes</legend>

              <div className="space-y-2 ">
                <label
                  htmlFor="Option1"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-2 rounded border-gray-300 checkbox checkbox-sm"
                      id="Option1"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">
                      {" "}
                      1600MHz{" "}
                    </strong>
                  </div>
                </label>

                <label
                  htmlFor="Option2"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-2 rounded border-gray-300 checkbox checkbox-sm"
                      id="Option1"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">
                      {" "}
                      2666MHz{" "}
                    </strong>
                  </div>
                </label>
                <label
                  htmlFor="Option2"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-2 rounded border-gray-300 checkbox checkbox-sm"
                      id="Option1"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">
                      {" "}
                      3200MHz{" "}
                    </strong>
                  </div>
                </label>
                <label
                  htmlFor="Option2"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-2 rounded border-gray-300 checkbox checkbox-sm"
                      id="Option1"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">
                      {" "}
                      3600MHz{" "}
                    </strong>
                  </div>
                </label>
                <label
                  htmlFor="Option2"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-2 rounded border-gray-300 checkbox checkbox-sm"
                      id="Option1"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">
                      {" "}
                      5200MHz{" "}
                    </strong>
                  </div>
                </label>
                <label
                  htmlFor="Option2"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-2 rounded border-gray-300 checkbox checkbox-sm"
                      id="Option1"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">
                      {" "}
                      7200MHz{" "}
                    </strong>
                  </div>
                </label>
              </div>
            </fieldset>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MemoryFilter;
