


import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CpuFilter = () => {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-red-400">
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
                      John Clapton{" "}
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
                      Peter Mayer{" "}
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
                    <strong className="font-medium text-gray-900">
                      {" "}
                      Eric King{" "}
                    </strong>
                  </div>
                </label>
              </div>
            </fieldset>
          </Typography>
        </AccordionDetails>
      </Accordion>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CpuFilter;

