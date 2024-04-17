import UseProduct from "../../../../Hooks/UseProduct";

const CpuDetails = () => {
  const [product] = UseProduct();
  const cpu = product.filter((item) => item.category === "cpu");

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
            <td className="border p-4 w-1/4 font-semibold">
              Performance CoreCount
            </td>
            <td className="border p-4 w-3/4 font-semibold">
              {cpu[0]?.performanceCoreCount}
            </td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">
              performanceBoostClock
            </td>
            <td className="border p-4 w-3/4 font-semibold">
              {cpu[0]?.performanceBoostClock}
            </td>
          </tr>

          <tr>
            <td className="border p-4 w-1/4 font-semibold">TDP</td>
            <td className="border p-4 w-3/4 font-semibold">{cpu[0]?.TDP}</td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">
              Integrated Graphics
            </td>
            <td className="border p-4 w-3/4 font-semibold">
              {cpu[0]?.integratedGraphics}
            </td>
          </tr>

          <tr>
            <td className="border p-4 w-1/4 font-semibold">Warranty</td>
            <td className="p-4 w-3/4 font-semibold font-semibold">
              {cpu[0]?.warranty}
            </td>{" "}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CpuDetails;
