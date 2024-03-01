import useWishList from "../../Hooks/useWishList";

const WishList = () => {
  const [wishList, refetch] = useWishList();
  console.log(wishList);
  return (
    <div>
      <h1>Hi Wish</h1>
    </div>
  );
};

export default WishList;
