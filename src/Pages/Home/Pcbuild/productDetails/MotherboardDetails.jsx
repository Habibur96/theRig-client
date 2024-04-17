import UseProduct from "../../../../Hooks/UseProduct";

const MotherboardDetails = () => {
  const [product] = UseProduct();
  const motherboard = product.filter((item) => item.category === "motherboard");

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
            <td className="border p-4 w-1/4 font-semibold">Ram Type</td>
            <td className="border p-4 w-3/4 font-semibold">
              {motherboard[0]?.RamType}
            </td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Memory Slots</td>
            <td className="border p-4 w-3/4 font-semibold">
              {motherboard[0]?.memorySlots}
            </td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Form Factor</td>
            <td className="border p-4 w-3/4 font-semibold">
              {motherboard[0]?.formFactor}
            </td>
          </tr>

          <tr>
            <td className="border p-4 w-1/4 font-semibold">Brand</td>
            <td className="border p-4 w-3/4 font-semibold">
              {motherboard[0]?.Brand}
            </td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Model</td>
            <td className="border p-4 w-3/4 font-semibold">
              {motherboard[0]?.model}
            </td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Warranty</td>
            <td className="border p-4 w-3/4 font-semibold">
              {motherboard[0]?.warranty}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MotherboardDetails;
