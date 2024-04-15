import { useParams } from "react-router-dom";
import UseProduct from "../../../../Hooks/UseProduct";

const MonitorDetails = () => {
  const [product] = UseProduct();
  const monitor = product.filter((item) => item.category === "monitor");

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
            <td className="border p-4 w-1/4 font-semibold">Resolution</td>
            <td className="border p-4 w-3/4 font-semibold">{monitor[0]?.Resolution}</td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Refresh Rate</td>
            <td className="border p-4 w-3/4 font-semibold">{monitor[0]?.RefreshRate}</td>
          </tr>

          <tr>
            <td className="border p-4 w-1/4 font-semibold">Panel</td>
            <td className="border p-4 w-3/4 font-semibold">{monitor[0]?.Panel}</td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Model</td>
            <td className="border p-4 w-3/4 font-semibold">{monitor[0]?.model}</td>
          </tr>

          <tr>
            <td className="border p-4 w-1/4 font-semibold">Brand</td>
            <td className="p-4 w-3/4 font-semibold font-semibold">{monitor[0]?.Brand}</td>{" "}
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Screen Size</td>
            <td className="border p-4 w-3/4 font-semibold">{monitor[0]?.ScreenSize}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MonitorDetails;
