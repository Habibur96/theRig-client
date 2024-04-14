import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "react-bootstrap/Card";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React from "react";

const MonitorFilter = () => {
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
            className="mb-2 rounded-0 bg-[#DCDCDC]"
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
      {/* ======================Brand=================== */}
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#]">
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
                      Asus{" "}
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
                    <strong className="font-medium text-gray-900"> MSI </strong>
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
                    <strong className="font-medium text-gray-900"> HP </strong>
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
                    <strong className="font-medium text-gray-900">
                      XIAOMI
                    </strong>
                  </div>
                </label>
              </div>
            </fieldset>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* ================Screen Size ================= */}
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Screen Size</Typography>
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
                      21-22 inch
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
                      23-25 inch{" "}
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
                      26-30 inch{" "}
                    </strong>
                  </div>
                </label>
              </div>
            </fieldset>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* ================Resolution================= */}
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Resolution</Typography>
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
                    <strong className="font-medium text-gray-900"> HD </strong>
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
                    <strong className="font-medium text-gray-900"> FHD </strong>
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
                    <strong className="font-medium text-gray-900"> 2K </strong>
                  </div>
                </label>
              </div>
            </fieldset>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* ================Panel Type================= */}
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Panel Type</Typography>
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
                    <strong className="font-medium text-gray-900"> IPS </strong>
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
                    <strong className="font-medium text-gray-900"> VA </strong>
                  </div>
                </label>
              </div>
            </fieldset>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* ================Refresh Rate================= */}
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Refresh Rate</Typography>
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
                      UP to 75Hz{" "}
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
                      100Hz{" "}
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
                      165Hz{" "}
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
                      180Hz{" "}
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

export default MonitorFilter;
