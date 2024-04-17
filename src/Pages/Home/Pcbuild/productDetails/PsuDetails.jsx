import UseProduct from "../../../../Hooks/UseProduct";

const PsuDetails = () => {
  const [product] = UseProduct();
  const psu = product.filter((item) => item.category === "psu");

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
            <td className="border p-4 w-1/4 font-semibold">Brand</td>
            <td className="border p-4 w-3/4 font-semibold">{psu[0]?.Brand}</td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Model</td>
            <td className="border p-4 w-3/4 font-semibold">{psu[0]?.model}</td>
          </tr>

          <tr>
            <td className="border p-4 w-1/4 font-semibold">Certification</td>
            <td className="border p-4 w-3/4 font-semibold">
              {psu[0]?.Certification}
            </td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Warranty</td>
            <td className="border p-4 w-3/4 font-semibold">
              {psu[0]?.warranty}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PsuDetails;
