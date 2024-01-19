import Pagination from "@mui/material/Pagination";
import Usepagination from "../../../Hooks/Usepagination";
import UseProduct from "../../../Hooks/useProduct";

const Pages = () => {
  // const {product} = UseProduct()
  const [product] = UseProduct()
  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex, //eslint-disable-line
    displayPage,
  ] = Usepagination(15, product.length);
  return (
    <div style={{ marginLeft: "20px" }}>
      {/* <h1>User Posts</h1> */}
      {(() => {
        const displayPosts = [];
        for (let i = startPageIndex; i <= endPageIndex; i++) {
          displayPosts.push(
            // <div key={product[i]}>
            //   {/* <h3>
            //     <span>{i + 1}</span> {product[i].title}{" "}
            //   </h3> */}
            //   {/* <p>{product[i].body}</p> */}
            // </div>
          );
        }
        return displayPosts;
      })()}
      <Pagination
        color="primary"
        count={totalPages}
        onChange={(event, value) => displayPage(value)}
      />
    </div>
  );
};

export default Pages;
