import { MemoryOutlined } from "@mui/icons-material";
import UseProduct from "../../../../Hooks/UseProduct";

const MemoryDetails = () => {
  const [product] = UseProduct();
  const memory = product.filter((item) => item.category === "memory");
  return (
    <div>
      <div className="mt-4 bg-[#82d9eb] h-14 ">
        <h1 className="pt-2 pl-3 font-semibold text-xl">Key Features</h1>
      </div>
      <table className="border-1 shadow-lg w-full">
        <thead className="bg-[#00b16a]">
          <tr></tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Cas Latency</td>
            <td className="p-4 w-3/4 font-semibold">
              {memory[0].CASLatency}
            </td>{" "}
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">TDP</td>
            <td className="border p-4 w-3/4 font-semibold">{memory[0]?.TDP}</td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Memory Type</td>
            <td className="border p-4 w-3/4 font-semibold">
              {memory[0]?.Memorytype}
            </td>
          </tr>

          <tr>
            <td className="border p-4 w-1/4 font-semibold">Model</td>
            <td className="border p-4 w-3/4 font-semibold">
              {memory[0]?.model}
            </td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Memory</td>
            <td className="border p-4 w-3/4 font-semibold">
              {memory[0]?.Memory}
            </td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Speed</td>
            <td className="border p-4 w-3/4 font-semibold">
              {memory[0]?.Speed}
            </td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Brand</td>
            <td className="border p-4 w-3/4 font-semibold">
              {memory[0]?.Brand}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MemoryDetails;
