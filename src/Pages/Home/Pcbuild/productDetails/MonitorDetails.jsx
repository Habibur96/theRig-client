import { useParams } from "react-router-dom";

const MonitorDetails = () => {
  return (
    <div>
      <div className="mt-4 bg-[#82d9eb] h-14 ">
        <h1 className="pt-2 pl-3 font-semibold text-xl">Display Features</h1>
      </div>
      <table className="border-1  shadow-lg w-full">
        <thead className="bg-[#00b16a]">
          <tr>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-4 w-1/4">Brand</td>
            <td className="p-4 w-3/4">dynamic value</td>{" "}
            {/* Adjusted width of the second column */}
          </tr>
          <tr>
            <td className="border p-4 w-1/4">Model</td>
            <td className="border p-4 w-3/4">dynamic value</td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4">Panel</td>
            <td className="border p-4 w-3/4">dynamic value</td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4">Screen Size</td>
            <td className="border p-4 w-3/4">dynamic value</td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4">Resolution</td>
            <td className="border p-4 w-3/4">dynamic value</td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4">Refresh Rate</td>
            <td className="border p-4 w-3/4">dynamic value</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MonitorDetails;
