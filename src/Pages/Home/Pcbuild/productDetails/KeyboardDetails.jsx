import UseProduct from "../../../../Hooks/UseProduct";

const KeyboardDetails = () => {
  const [product] = UseProduct();
  const keyboard = product.filter((item) => item.category === "keyboard");

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
            <td className="border p-4 w-1/4 font-semibold">Switch Type</td>
            <td className="border p-4 w-3/4 font-semibold">
              {keyboard[0]?.switchType}
            </td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Type</td>
            <td className="border p-4 w-3/4 font-semibold">
              {keyboard[0]?.type}
            </td>
          </tr>

          <tr>
            <td className="border p-4 w-1/4 font-semibold">Interface</td>
            <td className="border p-4 w-3/4 font-semibold">
              {keyboard[0]?.interface}
            </td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Model</td>
            <td className="border p-4 w-3/4 font-semibold">
              {keyboard[0]?.model}
            </td>
          </tr>
          <tr>
            <td className="border p-4 w-1/4 font-semibold">Warranty</td>
            <td className="border p-4 w-3/4 font-semibold">
              {keyboard[0]?.warranty}
            </td>
          </tr>

          <tr>
            <td className="border p-4 w-1/4 font-semibold">Brand</td>
            <td className="p-4 w-3/4 font-semibold font-semibold">
              {keyboard[0]?.Brand}
            </td>{" "}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default KeyboardDetails;
