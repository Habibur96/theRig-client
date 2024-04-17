
import UseProduct from "../../../../Hooks/UseProduct";

const StorageDetails = () => {
  const [product] = UseProduct();
  const storage = product.filter((item) => item.category === "storage");

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
            <td className="border p-4 w-1/4 font-semibold">Interface</td>
            <td className="border p-4 w-3/4 font-semibold">{storage[0]?.interface}</td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">formFactor</td>
            <td className="border p-4 w-3/4 font-semibold">{storage[0]?.formFactor}</td>
          </tr>

          
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Model</td>
            <td className="border p-4 w-3/4 font-semibold">{storage[0]?.model}</td>
          </tr>

          <tr>
            <td className="border p-4 w-1/4 font-semibold">Brand</td>
            <td className="p-4 w-3/4 font-semibold font-semibold">{storage[0]?.Brand}</td>{" "}
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Warranty</td>
            <td className="border p-4 w-3/4 font-semibold">{storage[0]?.warranty}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StorageDetails;
