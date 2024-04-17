import UseProduct from "../../../../Hooks/UseProduct";

const CaseDetails = () => {
  const [product] = UseProduct();
  const casing = product.filter((item) => item.category === "casing");

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
            <td className="border p-4 w-1/4 font-semibold">Motherboard Type</td>
            <td className="border p-4 w-3/4 font-semibold">MicroATX</td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Psu</td>
            <td className="border p-4 w-3/4 font-semibold">ATX</td>
          </tr>

          <tr>
            <td className="border p-4 w-1/4 font-semibold">Color</td>
            <td className="border p-4 w-3/4 font-semibold">White</td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Model</td>
            <td className="border p-4 w-3/4 font-semibold">
              {casing[0]?.model}
            </td>
          </tr>

          <tr>
            <td className="border p-4 w-1/4 font-semibold">Brand</td>
            <td className="p-4 w-3/4 font-semibold font-semibold">
              {casing[0]?.Brand}
            </td>{" "}
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Warranty</td>
            <td className="border p-4 w-3/4 font-semibold">
              {casing[0]?.warranty}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CaseDetails;
