
import UseProduct from "../../../../Hooks/UseProduct";

const GpuDetails = () => {
  const [product] = UseProduct();
  const gpu = product.filter((item) => item.category === "gpu");

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
            <td className="border p-4 w-1/4 font-semibold">Chipset</td>
            <td className="border p-4 w-3/4 font-semibold">{gpu[0]?.chipset}</td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Brand</td>
            <td className="border p-4 w-3/4 font-semibold">{gpu[0]?.Brand}</td>
          </tr>

          <tr>
            <td className="border p-4 w-1/4 font-semibold">Model</td>
            <td className="border p-4 w-3/4 font-semibold">{gpu[0]?.model}</td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Memory Type</td>
            <td className="border p-4 w-3/4 font-semibold">{gpu[0]?.Memorytype}</td>
          </tr>

          <tr>
            <td className="border p-4 w-1/4 font-semibold">Boost Clock</td>
            <td className="p-4 w-3/4 font-semibold font-semibold">{gpu[0]?.boostClock}</td>{" "}
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Recommended PSU</td>
            <td className="border p-4 w-3/4 font-semibold">{gpu[0]?.recommendedPSU}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GpuDetails;
