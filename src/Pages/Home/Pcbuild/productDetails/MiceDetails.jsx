
import UseProduct from "../../../../Hooks/UseProduct";

const MiceDetails = () => {
  const [product] = UseProduct();
  const mice = product.filter((item) => item.category === "mice");

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
            <td className="border p-4 w-3/4 font-semibold">{mice[0]?.interface}</td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Type</td>
            <td className="border p-4 w-3/4 font-semibold">{mice[0]?.type}</td>
          </tr>

          <tr>
            <td className="border p-4 w-1/4 font-semibold">Dpi</td>
            <td className="border p-4 w-3/4 font-semibold">{mice[0]?.dpi}</td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Model</td>
            <td className="border p-4 w-3/4 font-semibold">{mice[0]?.model}</td>
          </tr>

          <tr>
            <td className="border p-4 w-1/4 font-semibold">Brand</td>
            <td className="p-4 w-3/4 font-semibold font-semibold">{mice[0]?.Brand}</td>{" "}
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default MiceDetails;
