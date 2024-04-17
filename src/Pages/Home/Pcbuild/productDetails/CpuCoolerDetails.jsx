
import UseProduct from "../../../../Hooks/UseProduct";

const CpuCoolerDetails = () => {
  const [product] = UseProduct();
  const cpuCooler = product.filter((item) => item.category === "cpuCooler");

  return (
    <div>
      <div className="mt-4 bg-[#82d9eb] h-14 ">
        <h1 className="pt-2 pl-3 font-semibold text-xl">Display Features</h1>
      </div>
      <table className="border-1  shadow-lg w-full">
        <thead className="bg-[#00b16a]">
          <tr></tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">FanSpeed</td>
            <td className="border p-4 w-3/4 font-semibold">{cpuCooler[0]?.fanSpeed}</td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Socket</td>
            <td className="border p-4 w-3/4 font-semibold">{cpuCooler[0]?.socket}</td>
          </tr>

          <tr>
            <td className="border p-4 w-1/4 font-semibold">Cooler Type</td>
            <td className="border p-4 w-3/4 font-semibold">{cpuCooler[0]?.coolerType}</td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Model</td>
            <td className="border p-4 w-3/4 font-semibold">{cpuCooler[0]?.model}</td>
          </tr>

          <tr>
            <td className="border p-4 w-1/4 font-semibold">Brand</td>
            <td className="p-4 w-3/4 font-semibold font-semibold">{cpuCooler[0]?.Brand}</td>{" "}
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Warranty</td>
            <td className="border p-4 w-3/4 font-semibold">{cpuCooler[0]?.warranty}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CpuCoolerDetails;
